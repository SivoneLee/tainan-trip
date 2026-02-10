const TRIP_DATA = TRIP_DATA || window.TRIP;
const $ = (sel) => document.querySelector(sel);

const state = {
  dayIndex: 0,
  compact: false
};

function toneClass(tone){
  if (tone === "good") return "good";
  if (tone === "warn") return "warn";
  if (tone === "bad") return "bad";
  return "";
}

function renderChips(){
  const row = $("#chipRow");
  row.innerHTML = "";
  TRIP_DATA.chips.forEach(c => {
    const el = document.createElement("div");
    el.className = "chip";
    el.textContent = c;
    row.appendChild(el);
  });
}

function renderTabs(){
  const tabs = $("#dayTabs");
  tabs.innerHTML = "";
  TRIP_DATA.days.forEach((d, idx) => {
    const b = document.createElement("button");
    b.className = "tab" + (idx === state.dayIndex ? " active" : "");
    b.textContent = d.label;
    b.addEventListener("click", () => {
      state.dayIndex = idx;
      renderTabs();
      renderTimeline();
    });
    tabs.appendChild(b);
  });
}

function linkButton(label, url){
  const a = document.createElement("a");
  a.className = "aBtn";
  a.textContent = label;
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  return a;
}

function renderTimeline(){
  const day = TRIP_DATA.days[state.dayIndex];
  $("#dayTitle").textContent = day.title;

  const list = $("#timelineList");
  list.innerHTML = "";

  day.items.forEach(item => {
    const card = document.createElement("div");
    card.className = "card" + (state.compact ? " compact" : "");

    const time = document.createElement("div");
    time.className = "time";
    time.innerHTML = `
      <div class="t">${item.time}</div>
      <div class="dur">${item.duration || ""}</div>
    `;

    const content = document.createElement("div");
    content.className = "content";

    const title = document.createElement("div");
    title.className = "title";
    title.textContent = item.title;

    const meta = document.createElement("div");
    meta.className = "meta";
    const placeLine = [item.place, item.address].filter(Boolean).join("｜");
    meta.textContent = placeLine;

    const tags = document.createElement("div");
    tags.className = "tags";
    (item.tags || []).forEach(tg => {
      const t = document.createElement("div");
      t.className = `tag ${toneClass(tg.tone)}`;
      t.textContent = tg.t;
      tags.appendChild(t);
    });

    const actions = document.createElement("div");
    actions.className = "actions";
    (item.links || []).forEach(l => actions.appendChild(linkButton(l.label, l.url)));

    if (item.note){
      const note = document.createElement("div");
      note.className = "meta";
      note.style.marginTop = "10px";
      note.textContent = `備註：${item.note}`;
      content.appendChild(title);
      content.appendChild(meta);
      content.appendChild(tags);
      if ((item.links || []).length) content.appendChild(actions);
      content.appendChild(note);
    } else {
      content.appendChild(title);
      content.appendChild(meta);
      content.appendChild(tags);
      if ((item.links || []).length) content.appendChild(actions);
    }

    card.appendChild(time);
    card.appendChild(content);
    list.appendChild(card);
  });
}

function showModal(title, html){
  $("#modalTitle").textContent = title;
  $("#modalBody").innerHTML = html;
  $("#modal").classList.remove("hidden");
}

function closeModal(){
  $("#modal").classList.add("hidden");
}

function bindUI(){
  $("#btnOpenMap").addEventListener("click", () => {
    window.open(TRIP_DATA.overviewMapUrl, "_blank", "noopener,noreferrer");
  });

  $("#btnNotes").addEventListener("click", () => {
    const li = TRIP_DATA.notes.map(n => `<li>${escapeHtml(n)}</li>`).join("");
    showModal("旅行備忘", `<ul>${li}</ul>`);
  });

  $("#modalClose").addEventListener("click", closeModal);
  $("#modal").querySelector(".modal__backdrop").addEventListener("click", closeModal);

  $("#btnToggleCompact").addEventListener("click", () => {
    state.compact = !state.compact;
    $("#btnToggleCompact").textContent = `卡片密度：${state.compact ? "緊湊" : "一般"}`;
    renderTimeline();
  });

  $("#btnShare").addEventListener("click", async () => {
    try{
      await navigator.clipboard.writeText(location.href);
      showModal("已複製連結", "<p>連結已複製到剪貼簿，可以貼給朋友。</p>");
    }catch{
      showModal("分享", "<p>你的瀏覽器不支援自動複製。你可以手動複製網址列連結。</p>");
    }
  });
}

function escapeHtml(str){
  return str.replace(/[&<>"']/g, (m) => ({
    "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"
  }[m]));
}

// --- Weather (Open-Meteo) ---
async function loadWeather(){
  // 台南市區座標（大約值）
  const lat = 22.9997, lon = 120.2270;

  // 只做「目前/近一天」即時資訊（遠期日期到出發前再看更準）
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,precipitation,weather_code,wind_speed_10m&hourly=temperature_2m,precipitation_probability&timezone=Asia%2FTaipei`;

  try{
    const res = await fetch(url);
    const data = await res.json();

    const c = data.current;
    const temp = Math.round(c.temperature_2m);
    const wind = Math.round(c.wind_speed_10m);
    const rain = c.precipitation;

    $("#weatherNow").textContent = `${temp}°C｜風 ${wind} km/h｜降雨 ${rain} mm（即時）`;
    $("#weatherHint").textContent = "提醒：出發日期較遠，預報會在接近出發時更準。";
  }catch(e){
    $("#weatherNow").textContent = "天氣載入失敗（可能被網路或瀏覽器阻擋）";
    $("#weatherHint").textContent = "";
  }
}

function init(){
  // 兼容：data.js 可能是 window.TRIP 或 TRIP_DATA
$("#tripTitle").textContent = (TRIP_DATA.meta?.title || TRIP_DATA.title || "");
$("#tripSubtitle").textContent = (TRIP_DATA.meta?.subtitle || TRIP_DATA.subtitle || "");
  
  //renderChips();
  renderTabs();
  renderTimeline();
  bindUI();
  loadWeather();
}

init();
renderTimeline();
