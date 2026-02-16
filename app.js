const DATA = window.TRIP_DATA;

const $ = (sel) => document.querySelector(sel);

const state = {
  dayIndex: 0,
  compact: false,
};

function openModal(title, html) {
  $("#modalTitle").textContent = title || "";
  $("#modalBody").innerHTML = html || "";
  $("#modal").classList.remove("hidden");
}

function closeModal() {
  $("#modal").classList.add("hidden");
}

function gmapPlaceUrl(q) {
  const u = new URL("https://www.google.com/maps/search/");
  u.searchParams.set("api", "1");
  u.searchParams.set("query", q);
  return u.toString();
}

function renderTabs() {
  const wrap = $("#dayTabs");
  wrap.innerHTML = "";
  DATA.days.forEach((d, idx) => {
    const b = document.createElement("button");
    b.className = "tab" + (idx === state.dayIndex ? " active" : "");
    b.textContent = d.label;
    b.onclick = () => {
      state.dayIndex = idx;
      renderTabs();
      renderTimeline();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    wrap.appendChild(b);
  });
}

function renderTimeline() {
  const d = DATA.days[state.dayIndex];
  const wrap = $("#timeline");
  wrap.innerHTML = "";

  d.timeline.forEach((it) => {
    const card = document.createElement("div");
    card.className = "item" + (state.compact ? " compact" : "");

    const top = document.createElement("div");
    top.className = "itemTop";

    const time = document.createElement("div");
    time.className = "time";
    time.textContent = it.time || "";

    const titleLine = document.createElement("div");
    titleLine.className = "titleLine";

    // 標題做成可點擊：跳出詳細介紹
    const titleBtn = document.createElement("button");
    titleBtn.className = "titleBtn";
    titleBtn.textContent = it.title || "（未命名）";
    titleBtn.onclick = () => {
      const desc = (it.modal && it.modal.desc) ? it.modal.desc : (it.detail || "");
      const bullets = (it.modal && it.modal.bullets) ? it.modal.bullets : [];
      const nearby = (it.modal && it.modal.nearby) ? it.modal.nearby : [];

      const html = `
        ${desc ? `<p>${desc}</p>` : ""}
        ${bullets.length ? `<ul>${bullets.map(x => `<li>${x}</li>`).join("")}</ul>` : ""}
        ${nearby.length ? `<p class="muted">附近順手點（選 1–2 個就好）：</p><ul>${nearby.map(x => `<li>${x}</li>`).join("")}</ul>` : ""}
        ${it.mapQuery ? `<p><a class="link" target="_blank" rel="noopener" href="${gmapPlaceUrl(it.mapQuery)}">📍 Google Maps 搜尋：${it.mapQuery}</a></p>` : ""}
      `;
      openModal(it.title, html);
    };

    titleLine.appendChild(titleBtn);

    top.appendChild(time);
    top.appendChild(titleLine);
    card.appendChild(top);

    if (it.tags && it.tags.length) {
      const badges = document.createElement("div");
      badges.className = "badges";
      it.tags.forEach((t) => {
        const s = document.createElement("span");
        s.className = "badge" + (t.includes("備選") ? " alt" : "");
        s.textContent = t;
        badges.appendChild(s);
      });
      card.appendChild(badges);
    }

    if (it.links && it.links.length) {
      const links = document.createElement("div");
      links.className = "links";
      it.links.forEach((lk) => {
        const a = document.createElement("a");
        a.className = "link";
        a.href = lk.href;
        a.target = "_blank";
        a.rel = "noopener";
        a.textContent = lk.label;
        links.appendChild(a);
      });
      card.appendChild(links);
    }

    wrap.appendChild(card);
  });
}

async function loadWeather() {
  // 台南市區座標（大概值）
  const lat = 22.9997, lon = 120.2270;
  const url =
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
    `&current=temperature_2m,precipitation,wind_speed_10m&timezone=Asia%2FTaipei`;

  try {
    const res = await fetch(url);
    const json = await res.json();
    const c = json.current;
    const temp = Math.round(c.temperature_2m);
    const wind = Math.round(c.wind_speed_10m);
    const rain = c.precipitation;

    $("#weatherNow").textContent = `${temp}°C｜風 ${wind} km/h｜降雨 ${rain}`;
    $("#weatherHint").textContent = "提醒：日期還有距離，天氣以接近出發日為準。";
  } catch (e) {
    $("#weatherNow").textContent = "天氣載入失敗（可能被網路或瀏覽器阻擋）";
    $("#weatherHint").textContent = "";
  }
}

function bindUI() {
  $("#btnToggleCompact").onclick = () => {
    state.compact = !state.compact;
    $("#btnToggleCompact").textContent = `卡片密度：${state.compact ? "精簡" : "一般"}`;
    renderTimeline();
  };

  $("#btnOverviewMap").href = DATA.meta.overviewMapUrl || "https://www.google.com/maps";

  $("#btnTips").onclick = () => {
    const html = `
      <p class="muted">穿著＆體感</p>
      <ul>
        <li><b>早晚偏涼</b>，尤其去海邊（安平/漁光島）請注意<b>防風</b>。</li>
        <li>白天中午～下午可能偏熱：建議<b>洋蔥式穿法</b>（薄外套/風衣好用）。</li>
      </ul>
      <p class="muted">行程策略</p>
      <ul>
        <li>原則：不趕、不硬塞。備選點「選 1–2 個」就好。</li>
        <li>點景點名稱可看詳細介紹；累了就直接跳下一個。</li>
      </ul>
    `;
    openModal("旅行備忘", html);
  };

  $("#btnFood").onclick = () => {
    const z = DATA.food.zones;
    const zoneHtml = z.map(zone => {
      const items = zone.items.map(it => {
        const tags = (it.tags || []).map(t => `<span class="badge">${t}</span>`).join("");
        return `
          <div class="item">
            <div class="itemTop">
              <div class="time">🍴</div>
              <div class="titleLine">
                <a class="link" target="_blank" rel="noopener" href="${gmapPlaceUrl(it.query)}">${it.name}</a>
              </div>
            </div>
            ${it.note ? `<p class="muted">${it.note}</p>` : ""}
            ${tags ? `<div class="badges">${tags}</div>` : ""}
          </div>
        `;
      }).join("");

      return `<p class="muted">${zone.name}</p>${items}`;
    }).join("");

    const beef = DATA.food.beefSoup.map(it =>
      `<li><a target="_blank" rel="noopener" href="${gmapPlaceUrl(it.query)}">${it.name}</a> — ${it.note || ""}</li>`
    ).join("");

    const html = `
      <p class="muted">原則：朋友不吃海鮮，所以我挑「就算有海鮮，也一定有非海鮮餐點」的店。</p>
      ${zoneHtml}
      <p class="muted">牛肉湯店（可任選 1–2 家，越早越不排隊）</p>
      <ul>${beef}</ul>
      <p>
        <a class="link" target="_blank" rel="noopener" href="${DATA.food.beefSoupMapUrl}">🗺️ 一鍵打開「牛肉湯」Google Maps 清單</a>
      </p>
    `;
    openModal("美食清單", html);
  };

  $("#modalClose").onclick = closeModal;
  $("#modalBackdrop").onclick = closeModal;

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

function init() {
  $("#tripTitle").textContent = DATA.meta.title;
  $("#tripSubtitle").textContent = DATA.meta.subtitle;
  $("#datePill").textContent = DATA.meta.datePill;

  renderTabs();
  renderTimeline();
  bindUI();
  loadWeather();
}

init();
