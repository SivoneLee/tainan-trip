/* app.js — full replace version
   Compatible with window.TRIP_DATA = { meta, notes, days, foodSections }
*/

(() => {
  "use strict";

  // -----------------------------
  // Data source (support both)
  // -----------------------------
  const TRIP_DATA = window.TRIP_DATA || window.TRIP || null;

  // -----------------------------
  // Helpers
  // -----------------------------
  const $ = (sel) => document.querySelector(sel);
  const esc = (s) =>
    String(s ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");

  const joinTags = (arr) =>
    Array.isArray(arr) ? arr.filter(Boolean) : [];

  function getDetailHtml(item) {
    if (!item) return "";
    return item.detailHtml || item.descHtml || item.desc || "";
  }

  function getMapUrl(item) {
    return item?.mapUrl || item?.map || "";
  }

  function getLinksHtml(item) {
    const links = Array.isArray(item?.links) ? item.links : [];
    const mapUrl = getMapUrl(item);

    const linkBtns = links
      .filter((l) => l?.url && l?.text)
      .map(
        (l) =>
          `<a class="linkBtn" href="${l.url}" target="_blank" rel="noopener">${esc(
            l.text
          )}</a>`
      )
      .join("");

    const mapBtn = mapUrl
      ? `<a class="linkBtn primary" href="${mapUrl}" target="_blank" rel="noopener">開啟 Google Maps</a>`
      : "";

    if (!linkBtns && !mapBtn) return "";
    return `<div class="linkRow">${mapBtn}${linkBtns}</div>`;
  }

  // -----------------------------
  // Inject minimal CSS (so you don't need to touch style.css)
  // -----------------------------
  function injectBaseStyles() {
    if ($("#__appjs_styles")) return;
    const style = document.createElement("style");
    style.id = "__appjs_styles";
    style.textContent = `
      /* modal */
      #modal{position:fixed;inset:0;display:none;align-items:center;justify-content:center;padding:16px;z-index:9999;}
      #modal.open{display:flex;}
      #modal .modal_backdrop{position:absolute;inset:0;background:rgba(0,0,0,.35);}
      #modal .modal_card{position:relative;max-width:720px;width:100%;max-height:82vh;overflow:auto;border-radius:16px;background:#fff;box-shadow:0 10px 30px rgba(0,0,0,.18);}
      #modal .modal_head{display:flex;gap:12px;align-items:center;justify-content:space-between;padding:14px 14px 10px;border-bottom:1px solid rgba(0,0,0,.08);}
      #modal .modal_title{font-size:16px;font-weight:700;color:#222;line-height:1.3;}
      #modal .iconBtn{border:none;background:rgba(0,0,0,.04);border-radius:12px;padding:10px 12px;font-size:18px;line-height:1;cursor:pointer;}
      #modal .modal_body{padding:14px;color:#222;font-size:15px;line-height:1.65;}
      #modal .modal_body ul{padding-left:20px;}
      .linkRow{display:flex;flex-wrap:wrap;gap:10px;margin-top:12px;}
      .linkBtn{display:inline-flex;align-items:center;gap:6px;border:1px solid rgba(0,0,0,.12);padding:10px 12px;border-radius:12px;text-decoration:none;color:#222;background:#fff;}
      .linkBtn.primary{border-color:rgba(0,0,0,.0);background:rgba(33,150,243,.12);}
      /* food section */
      #foodSections{margin:18px 0 0;}
      .foodSection{margin:12px 0 16px;padding:12px;border-radius:16px;background:rgba(0,0,0,.03);}
      .foodSectionTitle{font-weight:800;margin-bottom:10px;color:#222;}
      .foodList{display:flex;flex-direction:column;gap:10px;}
      .foodItemBtn{width:100%;text-align:left;border:1px solid rgba(0,0,0,.10);background:#fff;border-radius:14px;padding:12px 12px;cursor:pointer;}
      .foodName{font-weight:800;color:#222;margin-bottom:4px;}
      .foodMeta{font-size:13px;color:rgba(0,0,0,.65);}
      .muted{color:rgba(0,0,0,.6);}
      .emptyBox{padding:10px 12px;border:1px dashed rgba(0,0,0,.18);border-radius:14px;color:rgba(0,0,0,.6);}
      .chip{display:inline-flex;align-items:center;gap:6px;border-radius:999px;padding:6px 10px;border:1px solid rgba(0,0,0,.10);background:#fff;font-size:12px;color:#333;margin-right:8px;margin-bottom:8px;}
      .card{border:1px solid rgba(0,0,0,.10);background:#fff;border-radius:18px;padding:12px 12px;margin:10px 0;cursor:pointer;}
      .cardTop{display:flex;align-items:flex-start;gap:12px;}
      .timePill{min-width:64px;font-weight:900;color:#8a3b4a;}
      .titleText{font-weight:900;color:#222;line-height:1.35;}
      .hintText{margin-top:6px;color:rgba(0,0,0,.60);font-size:13px;line-height:1.4;}
      .tagRow{margin-top:10px;display:flex;flex-wrap:wrap;gap:8px;}
      .tag{font-size:12px;padding:5px 10px;border-radius:999px;background:rgba(0,0,0,.05);color:rgba(0,0,0,.75);}
      .tabBtn{border:1px solid rgba(0,0,0,.12);background:#fff;border-radius:999px;padding:8px 12px;cursor:pointer;margin-right:8px;margin-bottom:8px;}
      .tabBtn.active{background:rgba(0,0,0,.06);font-weight:800;}
    `;
    document.head.appendChild(style);
  }

  // -----------------------------
  // Ensure Modal exists (auto-create if missing)
  // -----------------------------
  function ensureModal() {
    if ($("#modal") && $("#modalTitle") && $("#modalBody")) return;

    const modal = document.createElement("div");
    modal.id = "modal";
    modal.innerHTML = `
      <div class="modal_backdrop"></div>
      <div class="modal_card">
        <div class="modal_head">
          <div id="modalTitle" class="modal_title"></div>
          <button id="modalClose" class="iconBtn" type="button">×</button>
        </div>
        <div id="modalBody" class="modal_body"></div>
      </div>
    `;
    document.body.appendChild(modal);

    const closeBtn = $("#modalClose");
    if (closeBtn) closeBtn.addEventListener("click", () => modal.classList.remove("open"));
    modal.addEventListener("click", (e) => {
      if (e.target === modal || e.target.classList.contains("modal_backdrop")) {
        modal.classList.remove("open");
      }
    });
  }

  function openModal(title, html) {
    const modal = $("#modal");
    const titleEl = $("#modalTitle");
    const bodyEl = $("#modalBody");
    if (!modal || !titleEl || !bodyEl) return;

    titleEl.textContent = title || "";
    bodyEl.innerHTML = html || `<div class="muted">（沒有內容）</div>`;
    modal.classList.add("open");
  }

  // -----------------------------
  // State
  // -----------------------------
  const state = {
    dayIndex: 0,
  };

  // -----------------------------
  // Render meta (title/subtitle/chips)
  // -----------------------------
  function renderMeta() {
    const meta = TRIP_DATA?.meta || {};
    const badge = meta.badge ? String(meta.badge) : "";
    const title = meta.title ? String(meta.title) : "";
    const subtitle = meta.subtitle ? String(meta.subtitle) : "";

    const badgeEl = $("#tripBadge");
    const titleEl = $("#tripTitle");
    const subEl = $("#tripSubtitle");

    if (badgeEl) badgeEl.textContent = badge;
    if (titleEl) titleEl.textContent = title;
    if (subEl) subEl.textContent = subtitle;

    // chips
    const chipRow = $("#chipRow");
    if (chipRow) {
      const chips = joinTags(meta.chips);
      chipRow.innerHTML = chips.map((c) => `<span class="chip">${esc(c)}</span>`).join("");
    }
  }

  // -----------------------------
  // Render notes
  // -----------------------------
  function renderNotes() {
    const list = $("#notesList");
    const notes = Array.isArray(TRIP_DATA?.notes) ? TRIP_DATA.notes : [];
    if (!list) return;

    if (!notes.length) {
      list.innerHTML = "";
      return;
    }

    list.innerHTML = notes.map((n) => `<li>${esc(n)}</li>`).join("");
  }

  // -----------------------------
  // Render day tabs
  // -----------------------------
  function renderTabs() {
    const tabsHost = $("#dayTabs");
    const days = Array.isArray(TRIP_DATA?.days) ? TRIP_DATA.days : [];
    if (!tabsHost) return;

    tabsHost.innerHTML = "";
    days.forEach((d, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "tabBtn" + (idx === state.dayIndex ? " active" : "");
      btn.textContent = d?.label || d?.id || `Day ${idx + 1}`;
      btn.addEventListener("click", () => {
        state.dayIndex = idx;
        renderTabs();
        renderTimeline();
      });
      tabsHost.appendChild(btn);
    });
  }

  // -----------------------------
  // Render timeline list
  // -----------------------------
  function renderTimeline() {
    const host = $("#timelineList") || $("#timeline") || $("#itinerary");
    const days = Array.isArray(TRIP_DATA?.days) ? TRIP_DATA.days : [];
    if (!host) return;

    const day = days[state.dayIndex];
    const timeline = Array.isArray(day?.timeline) ? day.timeline : [];

    if (!timeline.length) {
      host.innerHTML = `<div class="emptyBox">（這天還沒有行程）</div>`;
      return;
    }

    host.innerHTML = timeline
      .map((it, idx) => {
        const time = esc(it?.time || "");
        const title = esc(it?.title || "");
        const hint = it?.hint ? esc(it.hint) : "";
        const tags = joinTags(it?.tags);

        return `
          <div class="card js-open-detail" data-day="${state.dayIndex}" data-idx="${idx}">
            <div class="cardTop">
              <div class="timePill">${time}</div>
              <div style="flex:1;min-width:0;">
                <div class="titleText">${title}</div>
                ${hint ? `<div class="hintText">${hint}</div>` : ""}
                ${
                  tags.length
                    ? `<div class="tagRow">${tags
                        .map((t) => `<span class="tag">${esc(t)}</span>`)
                        .join("")}</div>`
                    : ""
                }
              </div>
            </div>
          </div>
        `;
      })
      .join("");
  }

  // -----------------------------
  // Weather (optional; keep your existing behavior if elements exist)
  // -----------------------------
  async function loadWeather() {
    // Optional: only if these fields exist
    const nowEl = $("#weatherNow");
    const hintEl = $("#weatherHint");
    if (!nowEl || !hintEl) return;

    // Keep your hint text from data if exists
    const meta = TRIP_DATA?.meta || {};
    if (meta.weatherHint) hintEl.textContent = String(meta.weatherHint);

    // If you don't want weather API, stop here:
    // return;

    // Simple Open-Meteo current weather (Tainan City)
    const lat = 22.9997,
      lon = 120.2270;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m,precipitation&timezone=Asia%2FTaipei`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      const c = data.current;
      const temp = Math.round(c.temperature_2m);
      const wind = Math.round(c.wind_speed_10m);
      const rain = c.precipitation;

      nowEl.textContent = `${temp}°C｜風 ${wind} km/h｜降雨 ${rain} mm`;
    } catch (e) {
      nowEl.textContent = "天氣載入失敗（可能被網路或瀏覽器阻擋）";
    }
  }

  // -----------------------------
  // Food sections (auto-create container if missing)
  // -----------------------------
  function renderFoodSections() {
    const sections = Array.isArray(TRIP_DATA?.foodSections) ? TRIP_DATA.foodSections : [];
    if (!sections.length) return;

    let host = $("#foodSections");
    if (!host) {
      // Insert after itinerary if possible, else at end
      const anchor = $("#itinerary") || $("#timelineList") || document.body;
      host = document.createElement("section");
      host.id = "foodSections";
      anchor.insertAdjacentElement("afterend", host);
    }

    host.innerHTML = `
      <h2 style="margin:16px 0 10px;">美食</h2>
      ${sections
        .map((sec) => {
          const items = Array.isArray(sec?.items) ? sec.items : [];
          return `
            <div class="foodSection">
              <div class="foodSectionTitle">${esc(sec?.label || "")}</div>
              <div class="foodList">
                ${
                  items.length
                    ? items
                        .map(
                          (it, i) => `
                          <button class="foodItemBtn" type="button"
                            data-food-sec="${esc(sec.id)}"
                            data-food-idx="${i}">
                            <div class="foodName">${esc(it?.name || "")}</div>
                            <div class="foodMeta">${esc(it?.area || "")}${
                              it?.short ? "｜" + esc(it.short) : ""
                            }</div>
                          </button>
                        `
                        )
                        .join("")
                    : `<div class="emptyBox">（此區暫無店家）</div>`
                }
              </div>
            </div>
          `;
        })
        .join("")}
    `;
  }

  // -----------------------------
  // Global click handlers (stable for iOS)
  // -----------------------------
  function bindGlobalClicks() {
    document.addEventListener("click", (e) => {
      // timeline detail
      const card = e.target.closest(".js-open-detail");
      if (card) {
        const dayIdx = Number(card.dataset.day);
        const itemIdx = Number(card.dataset.idx);

        const day = TRIP_DATA?.days?.[dayIdx];
        const item = day?.timeline?.[itemIdx];

        const detail = getDetailHtml(item);
        const links = getLinksHtml(item);

        const html = `
          ${detail || `<div class="muted">（沒有內容）</div>`}
          ${links}
        `;

        openModal(item?.title || "內容", html);
        return;
      }

      // food detail
      const btn = e.target.closest(".foodItemBtn");
      if (btn) {
        const secId = btn.dataset.foodSec;
        const idx = Number(btn.dataset.foodIdx);
        const sec = (TRIP_DATA?.foodSections || []).find((s) => String(s.id) === String(secId));
        const it = sec?.items?.[idx];

        const html = `
          ${it?.area ? `<div class="muted" style="margin-bottom:6px;">${esc(it.area)}</div>` : ""}
          ${it?.short ? `<div style="margin-bottom:10px;">${esc(it.short)}</div>` : ""}
          ${it?.openHours ? `<div class="muted" style="margin-bottom:10px;">營業：${esc(it.openHours)}</div>` : ""}
          ${it?.note ? `<div class="muted" style="margin-bottom:10px;">${esc(it.note)}</div>` : ""}
          ${it?.tags?.length ? `<div class="tagRow">${joinTags(it.tags).map(t => `<span class="tag">${esc(t)}</span>`).join("")}</div>` : ""}
          ${it?.mapUrl ? `<div style="margin-top:12px;">${getLinksHtml({ mapUrl: it.mapUrl })}</div>` : ""}
        `;

        openModal(it?.name || "店家", html);
      }
    });
  }

  // -----------------------------
  // Boot
  // -----------------------------
  function boot() {
    injectBaseStyles();
    ensureModal();

    // If no data, show a clear error in modal
    if (!TRIP_DATA) {
      openModal("資料未載入", `<div class="muted">找不到 window.TRIP_DATA（或 window.TRIP）。請確認 data.js 有被正確載入，且在 app.js 之前。</div>`);
      return;
    }

    renderMeta();
    renderNotes();
    renderTabs();
    renderTimeline();
    renderFoodSections();
    bindGlobalClicks();
    loadWeather();
  }

  if (document.readyState === "loading") {
    window.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
