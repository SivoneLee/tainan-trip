(function () {
  const TRIP_DATA = window.TRIP_DATA; // 唯一資料來源
  const $ = (sel) => document.querySelector(sel);

  if (!TRIP_DATA) {
    alert("data.js 沒載入成功：找不到 window.TRIP_DATA");
    return;
  }

  const state = {
    dayIndex: 0,
    compact: false,
    foodTab: 0,
  };

  // ---------- Modal ----------
  function openModal(title, html) {
    $("#modalTitle").textContent = title || "內容";
    $("#modalBody").innerHTML = html || "";
    $("#modal").classList.remove("hidden");
    $("#modal").setAttribute("aria-hidden", "false");
  }
  function closeModal() {
    $("#modal").classList.add("hidden");
    $("#modal").setAttribute("aria-hidden", "true");
  }
  $("#modalClose").addEventListener("click", closeModal);
  $("#modal").addEventListener("click", (e) => {
    if (e.target && e.target.dataset && e.target.dataset.close) closeModal();
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  // ---------- Header ----------
  document.title = TRIP_DATA.meta?.title || "旅行行程";
  $("#tripTitle").textContent = TRIP_DATA.meta?.title || "旅行行程";
  $("#tripSubtitle").textContent = TRIP_DATA.meta?.subtitle || "";
  $("#heroBadge").textContent = TRIP_DATA.meta?.badge || "旅行";

  // Chips
  const chipRow = $("#chipRow");
  chipRow.innerHTML = "";
  (TRIP_DATA.meta?.chips || []).forEach((c) => {
    const el = document.createElement("div");
    el.className = "chip";
    el.textContent = c;
    chipRow.appendChild(el);
  });

  // ---------- Buttons ----------
  $("#btnOpenNotes").addEventListener("click", () => {
    const notes = (TRIP_DATA.notes || [])
      .map((t) => `<li>${escapeHtml(t)}</li>`)
      .join("");
    openModal("旅行備忘", `<ul>${notes}</ul>`);
  });

  $("#btnOpenOverviewMap").addEventListener("click", () => {
    const url = TRIP_DATA.meta?.overviewMapUrl;
    if (url) window.open(url, "_blank");
    else openModal("總覽地圖", "尚未設定 overviewMapUrl");
  });

  $("#btnToggleCompact").addEventListener("click", () => {
    state.compact = !state.compact;
    $("#btnToggleCompact").textContent = state.compact ? "卡片密度：緊密" : "卡片密度：一般";
    renderTimeline();
    renderFood();
  });

  // ---------- Day Tabs ----------
  function renderDayTabs() {
    const tabs = $("#dayTabs");
    tabs.innerHTML = "";
    (TRIP_DATA.days || []).forEach((d, idx) => {
      const b = document.createElement("button");
      b.className = "tab" + (idx === state.dayIndex ? " active" : "");
      b.textContent = d.label || d.date || `Day ${idx + 1}`;
      b.addEventListener("click", () => {
        state.dayIndex = idx;
        renderDayTabs();
        renderTimeline();
      });
      tabs.appendChild(b);
    });
  }

  // ---------- Timeline ----------
  function renderTimeline() {
    const day = (TRIP_DATA.days || [])[state.dayIndex];
    const list = $("#timelineList");
    list.innerHTML = "";
    if (!day) return;

    (day.timeline || []).forEach((it) => {
      const card = document.createElement("div");
      card.className = "card" + (state.compact ? " compact" : "");

      const top = document.createElement("div");
      top.className = "card__top";

      const t = document.createElement("div");
      t.className = "time";
      t.textContent = it.time || "";

      const titleBox = document.createElement("div");
      titleBox.style.flex = "1";

      const h = document.createElement("div");
      h.className = "card__title";
      h.textContent = it.title || "(未命名)";

      // 點標題：跳出介紹（避免字太滿）
      h.addEventListener("click", () => {
        const desc = (it.descHtml || it.desc || "").trim();
        const extra = (it.moreHtml || "").trim();
        const links = (it.links || [])
          .map((l) => `<div>🔗 <a target="_blank" rel="noopener" href="${l.url}">${escapeHtml(l.text || l.url)}</a></div>`)
          .join("");
        openModal(
          it.title || "內容",
          `
            ${desc ? `<div>${desc}</div>` : `<div style="color:#777">這個點目前沒有補充說明。</div>`}
            ${extra ? `<hr style="border:none;border-top:1px solid rgba(0,0,0,.08);margin:12px 0" />${extra}` : ""}
            ${links ? `<hr style="border:none;border-top:1px solid rgba(0,0,0,.08);margin:12px 0" />${links}` : ""}
          `
        );
      });

      const meta = document.createElement("div");
      meta.className = "card__meta";
      meta.textContent = it.hint || it.detail || "";

      titleBox.appendChild(h);
      if (!state.compact && meta.textContent) titleBox.appendChild(meta);

      top.appendChild(t);
      top.appendChild(titleBox);
      card.appendChild(top);

      // tags
      if (it.tags && it.tags.length) {
        const tags = document.createElement("div");
        tags.className = "card__tags";
        it.tags.forEach((x) => {
          const tag = document.createElement("div");
          tag.className = "tag";
          tag.textContent = x;
          tags.appendChild(tag);
        });
        card.appendChild(tags);
      }

      // actions
      const acts = document.createElement("div");
      acts.className = "card__actions";

      if (it.mapUrl) {
        const b = document.createElement("button");
        b.className = "btnMini";
        b.textContent = "地圖";
        b.addEventListener("click", () => window.open(it.mapUrl, "_blank"));
        acts.appendChild(b);
      }

      if (it.quickNote) {
        const b = document.createElement("button");
        b.className = "btnMini";
        b.textContent = "小抄";
        b.addEventListener("click", () => openModal(it.title || "小抄", `<div>${escapeHtml(it.quickNote)}</div>`));
        acts.appendChild(b);
      }

      if (acts.children.length) card.appendChild(acts);
      list.appendChild(card);
    });
  }

  // ---------- Food Tabs ----------
  function renderFoodTabs() {
    const tabs = $("#foodTabs");
    tabs.innerHTML = "";
    (TRIP_DATA.foodSections || []).forEach((sec, idx) => {
      const b = document.createElement("button");
      b.className = "tab" + (idx === state.foodTab ? " active" : "");
      b.textContent = sec.label || `美食 ${idx + 1}`;
      b.addEventListener("click", () => {
        state.foodTab = idx;
        renderFoodTabs();
        renderFood();
      });
      tabs.appendChild(b);
    });
  }

  function renderFood() {
    const sec = (TRIP_DATA.foodSections || [])[state.foodTab];
    const box = $("#foodList");
    box.innerHTML = "";
    if (!sec) return;

    (sec.items || []).forEach((it) => {
      const card = document.createElement("div");
      card.className = "card" + (state.compact ? " compact" : "");

      const top = document.createElement("div");
      top.className = "card__top";

      const left = document.createElement("div");
      left.style.flex = "1";

      const title = document.createElement("div");
      title.className = "card__title";
      title.textContent = it.name;

      title.addEventListener("click", () => {
        const lines = [];
        if (it.area) lines.push(`📍 ${escapeHtml(it.area)}`);
        if (it.openHours) lines.push(`🕒 ${escapeHtml(it.openHours)}（以店家公告為準）`);
        if (it.nonSeafoodFriendly) lines.push(`✅ 朋友不吃海鮮也有得吃`);
        if (it.note) lines.push(`<div style="margin-top:10px">${escapeHtml(it.note)}</div>`);
        const links = (it.links || [])
          .map((l) => `🔗 <a target="_blank" rel="noopener" href="${l.url}">${escapeHtml(l.text || l.url)}</a>`)
          .join("<br/>");

        openModal(
          it.name,
          `
            ${lines.map((x) => `<div>${x}</div>`).join("")}
            ${links ? `<hr style="border:none;border-top:1px solid rgba(0,0,0,.08);margin:12px 0" />${links}` : ""}
          `
        );
      });

      const meta = document.createElement("div");
      meta.className = "card__meta";
      meta.textContent = it.short || "";

      left.appendChild(title);
      if (!state.compact && meta.textContent) left.appendChild(meta);

      top.appendChild(left);
      card.appendChild(top);

      if (it.tags && it.tags.length) {
        const tags = document.createElement("div");
        tags.className = "card__tags";
        it.tags.forEach((x) => {
          const tag = document.createElement("div");
          tag.className = "tag";
          tag.textContent = x;
          tags.appendChild(tag);
        });
        card.appendChild(tags);
      }

      const acts = document.createElement("div");
      acts.className = "card__actions";

      if (it.mapUrl) {
        const b = document.createElement("button");
        b.className = "btnMini";
        b.textContent = "地圖";
        b.addEventListener("click", () => window.open(it.mapUrl, "_blank"));
        acts.appendChild(b);
      }

      if (acts.children.length) card.appendChild(acts);
      box.appendChild(card);
    });
  }

  // ---------- Weather ----------
  async function loadWeather() {
    // 台南市區
    const lat = 22.9997, lon = 120.2270;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m,precipitation&timezone=Asia%2FTaipei`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      const c = data.current;
      const temp = Math.round(c.temperature_2m);
      const wind = Math.round(c.wind_speed_10m);
      const rain = c.precipitation;
      $("#weatherNow").textContent = `${temp}°C｜風 ${wind} km/h｜降雨 ${rain} mm`;
      $("#weatherHint").textContent = TRIP_DATA.meta?.weatherHint || "";
    } catch (e) {
      $("#weatherNow").textContent = "天氣載入失敗（可能網路/瀏覽器阻擋）";
      $("#weatherHint").textContent = "";
    }
  }

  // ---------- Utils ----------
  function escapeHtml(s) {
    return String(s || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  // ---------- init ----------
  renderDayTabs();
  renderTimeline();
  renderFoodTabs();
  renderFood();
  loadWeather();
})();
