const DATA = window.TRIP_DATA;
const $ = (sel) => document.querySelector(sel);

const state = {
  dayIndex: 0,
  compact: false,
};

// 1. 彈窗控制邏輯
function openModal(title, html) {
  const modalTitle = $("#modalTitle");
  const modalBody = $("#modalBody");
  const modal = $("#modal");
  
  if (modalTitle) modalTitle.textContent = title || "";
  if (modalBody) modalBody.innerHTML = html || "";
  if (modal) modal.classList.remove("hidden");
}

function closeModal() {
  const modal = $("#modal");
  if (modal) modal.classList.add("hidden");
}

// 2. 渲染分頁按鈕 (Day 1, Day 2...)
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
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    wrap.appendChild(b);
  });
}

// 3. 渲染行程表
function renderTimeline() {
  const d = DATA.days[state.dayIndex];
  const wrap = $("#timeline");
  if (!wrap) return;
  wrap.innerHTML = "";

  d.timeline.forEach((it, itemIdx) => {
    const card = document.createElement("div");
    card.className = "item" + (state.compact ? " compact" : "");

    // 建立標籤 HTML
    const tagsHtml = (it.tags || []).map(t => 
      `<span class="badge ${t.includes('備選') || t.includes('擇一') ? 'alt' : ''}">${t}</span>`
    ).join('');

    // 建立外部連結 HTML
    const linksHtml = (it.links || []).map(lk => 
      `<a class="link" href="${lk.href}" target="_blank">🔗 ${lk.label}</a>`
    ).join('');

    card.innerHTML = `
      <div class="itemTop">
        <div class="time">${it.time}</div>
        <div class="titleLine">
          <button class="titleBtn" onclick="showItemDetail(${state.dayIndex}, ${itemIdx})">${it.title}</button>
          ${it.hint ? `<div style="font-size:13px; color:var(--muted); font-weight:normal; margin-top:2px;">${it.hint}</div>` : ""}
        </div>
      </div>
      <div class="badges">${tagsHtml}</div>
      ${linksHtml ? `<div class="links">${linksHtml}</div>` : ""}
    `;
    wrap.appendChild(card);
  });
}

// 4. 行程詳細說明彈窗 (對應 data.js 的 desc)
window.showItemDetail = (dIdx, iIdx) => {
  const item = DATA.days[dIdx].timeline[iIdx];
  if (!item) return;
  
  const content = `
    <div style="line-height:1.7;">
      <p>${item.desc || "目前沒有詳細說明。"}</p>
      ${item.mapUrl ? `
        <div style="margin-top:20px;">
          <a class="btn primary small" href="${item.mapUrl}" target="_blank" style="display:inline-flex; text-decoration:none; color:white;">
            📍 在 Google Maps 查看位置
          </a>
        </div>
      ` : ""}
    </div>
  `;
  openModal(item.title, content);
};

// 5. 綁定按鈕事件
function bindUI() {
  // 切換精簡模式
  const btnToggle = $("#btnToggleCompact");
  if (btnToggle) {
    btnToggle.onclick = () => {
      state.compact = !state.compact;
      btnToggle.textContent = `卡片密度：${state.compact ? "精簡" : "一般"}`;
      renderTimeline();
    };
  }

  // 總覽地圖
  const btnMap = $("#btnOverviewMap");
  if (btnMap) btnMap.href = DATA.meta.overviewMapUrl;

  // 旅行備忘按鈕 (抓取 DATA.notes)
  const btnTips = $("#btnTips");
  if (btnTips) {
    btnTips.onclick = () => {
      const list = DATA.notes.map(n => `<li style="margin-bottom:10px;">${n}</li>`).join("");
      openModal("旅行備忘", `<ul style="padding-left:20px;">${list}</ul>`);
    };
  }

  // 美食清單按鈕 (精準對應 DATA.foodSections)
  const btnFood = $("#btnFood");
  if (btnFood) {
    btnFood.onclick = () => {
      const sectionsHtml = DATA.foodSections.map(sec => {
        const itemsHtml = sec.items.map(it => `
          <div style="margin-bottom:16px; border-bottom:1px solid var(--line); padding-bottom:12px;">
            <div style="display:flex; justify-content:space-between; align-items:flex-start;">
              <strong style="font-size:16px; color:var(--ink);">${it.name}</strong>
              <span style="font-size:12px; background:var(--bg); padding:2px 6px; border-radius:4px;">${it.area}</span>
            </div>
            <div style="font-size:14px; color:var(--muted); margin:4px 0;">${it.note}</div>
            ${it.mapUrl ? `<a href="${it.mapUrl}" target="_blank" style="font-size:13px; color:var(--accent); text-decoration:none; font-weight:bold;">📍 導航至此處</a>` : ""}
          </div>
        `).join("");
        return `<h3 style="color:var(--accent); border-left:4px solid var(--accent); padding-left:10px; margin:24px 0 16px;">${sec.label}</h3>${itemsHtml}`;
      }).join("");
      
      openModal("台南美食口袋名單", sectionsHtml);
    };
  }

  // 關閉彈窗
  $("#modalClose").onclick = closeModal;
  $("#modalBackdrop").onclick = closeModal;
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
}

// 6. 載入天氣 (Open-Meteo API)
async function loadWeather() {
  const lat = 22.9997, lon = 120.2270; // 台南
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,precipitation&timezone=Asia%2FTaipei`;
  
  try {
    const res = await fetch(url);
    const json = await res.json();
    const temp = Math.round(json.current.temperature_2m);
    const rain = json.current.precipitation;
    $("#weatherNow").textContent = `${temp}°C ｜ 降雨機率比：${rain}mm`;
    $("#weatherHint").textContent = DATA.meta.weatherHint;
  } catch (e) {
    $("#weatherNow").textContent = "台南市區";
    $("#weatherHint").textContent = DATA.meta.weatherHint;
  }
}

// 啟動
function init() {
  if (!DATA) return;
  $("#tripTitle").textContent = DATA.meta.title;
  $("#tripSubtitle").textContent = DATA.meta.subtitle;
  $("#datePill").textContent = DATA.meta.datePill;

  renderTabs();
  renderTimeline();
  bindUI();
  loadWeather();
}

init();
