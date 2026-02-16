/* app.js — 已優化防錯版本 */
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

// 修正 Google Maps 連結產生器
function gmapPlaceUrl(q) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
}

function renderTabs() {
  const wrap = $("#dayTabs");
  if (!wrap) return;
  wrap.innerHTML = "";
  DATA.days.forEach((d, idx) => {
    const b = document.createElement("button");
    b.className = "tab" + (idx === state.dayIndex ? " active" : "");
    b.textContent = d.label;
    b.onclick = () => {
      state.dayIndex = idx;
      renderTabs();
      renderTimeline();
    };
    wrap.appendChild(b);
  });
}

function renderTimeline() {
  const d = DATA.days[state.dayIndex];
  const wrap = $("#timeline");
  if (!wrap) return;
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

    const titleBtn = document.createElement("button");
    titleBtn.className = "titleBtn";
    titleBtn.textContent = it.title || "（未命名）";
    
    // 點擊標題彈窗邏輯
    titleBtn.onclick = () => {
      const m = it.modal || {}; // 防止 modal 為 undefined
      const desc = m.desc || "";
      const bullets = m.bullets || [];
      const nearby = m.nearby || [];

      const html = `
        ${desc ? `<p>${desc}</p>` : ""}
        ${bullets.length ? `<ul>${bullets.map(x => `<li>${x}</li>`).join("")}</ul>` : ""}
        ${nearby.length ? `<p style="color:gray; font-size:0.9em;">附近順手點：</p><ul>${nearby.map(x => `<li>${x}</li>`).join("")}</ul>` : ""}
        ${it.mapQuery ? `<p><a style="color:#2196F3; text-decoration:none;" target="_blank" rel="noopener" href="${gmapPlaceUrl(it.mapQuery)}">📍 在地圖上查看：${it.mapQuery}</a></p>` : ""}
      `;
      openModal(it.title, html);
    };

    titleLine.appendChild(titleBtn);
    top.appendChild(time);
    top.appendChild(titleLine);
    card.appendChild(top);

    // 標籤渲染
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

    // 連結渲染
    if (it.links && it.links.length) {
      const linksWrap = document.createElement("div");
      linksWrap.className = "links";
      it.links.forEach((lk) => {
        const a = document.createElement("a");
        a.className = "link";
        a.href = lk.href;
        a.target = "_blank";
        a.rel = "noopener";
        a.textContent = lk.label;
        linksWrap.appendChild(a);
      });
      card.appendChild(linksWrap);
    }

    wrap.appendChild(card);
  });
}

// ... 天氣 loadWeather 函數保持不變 ...

function bindUI() {
  $("#btnToggleCompact").onclick = () => {
    state.compact = !state.compact;
    $("#btnToggleCompact").textContent = `卡片密度：${state.compact ? "精簡" : "一般"}`;
    renderTimeline();
  };

  $("#btnOverviewMap").href = DATA.meta.overviewMapUrl || "#";

  $("#btnTips").onclick = () => {
    const html = `<ul><li><b>早晚偏涼</b>，尤其去海邊請注意防風。</li><li>白天建議<b>洋蔥式穿法</b>。</li></ul>`;
    openModal("旅行備忘", html);
  };

  $("#btnFood").onclick = () => {
    if (!DATA.food) return;
    const z = DATA.food.zones || [];
    const zoneHtml = z.map(zone => {
      const items = zone.items.map(it => `
        <div style="margin-bottom:10px;">
          <a target="_blank" href="${gmapPlaceUrl(it.query)}">${it.name}</a>
          <span style="font-size:0.8em; color:gray;">(${it.note || ""})</span>
        </div>
      `).join("");
      return `<p><b>${zone.name}</b></p>${items}`;
    }).join("");

    const beef = (DATA.food.beefSoup || []).map(it => 
      `<li>${it.name} - ${it.note || ""}</li>`
    ).join("");

    openModal("美食清單", `${zoneHtml}<hr><p>牛肉湯推薦：</p><ul>${beef}</ul>`);
  };

  $("#modalClose").onclick = closeModal;
  $("#modalBackdrop").onclick = closeModal;
}

function init() {
  if (!DATA) return;
  $("#tripTitle").textContent = DATA.meta.title;
  $("#tripSubtitle").textContent = DATA.meta.subtitle;
  $("#datePill").textContent = DATA.meta.datePill;

  renderTabs();
  renderTimeline();
  bindUI();
}

init();
