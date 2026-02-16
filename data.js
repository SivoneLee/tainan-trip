/* data.js — 旅行資料檔 (已對齊 app.js 邏輯) */

window.TRIP_DATA = {
  meta: {
    title: "台南三天兩夜",
    subtitle: "美食古蹟慢活之旅",
    datePill: "2/18–2/21・台南同遊", // 對應 app.js 的 #datePill
    overviewMapUrl: "https://www.google.com/maps", // 總覽地圖連結
    chips: ["美食", "攝影", "放鬆"]
  },

  days: [
    {
      label: "Day 1",
      timeline: [
        {
          time: "10:00",
          title: "抵達台南火車站",
          tags: ["交通"],
          mapQuery: "台南火車站", // 對應 gmapPlaceUrl
          modal: {
            desc: "出火車站後往後站方向走，那邊有很多租車行，記得先檢查車況並拍照。",
            bullets: ["確認租車合約", "檢查煞車與胎壓"],
            nearby: ["大遠百", "成大校區"]
          }
        },
        {
          time: "12:00",
          title: "午餐：國華街美食",
          tags: ["美食", "排隊名店"],
          mapQuery: "台南國華街",
          modal: {
            desc: "人潮眾多，建議分頭排隊。<br>推薦：富盛號碗粿、金得春捲。",
            bullets: ["必吃：碗粿", "必吃：春捲"],
            nearby: ["神農街", "海安路"]
          },
          links: [
            { label: "富盛號介紹", href: "https://www.google.com" } // 對應 app.js 的 lk.label / lk.href
          ]
        }
      ]
    },
    {
      label: "Day 2",
      timeline: [
        {
          time: "09:00",
          title: "安平樹屋",
          tags: ["景點", "拍照"],
          mapQuery: "安平樹屋",
          modal: {
            desc: "門票 50 元，可以逛很久。",
            bullets: ["適合拍網美照", "旁邊有德記洋行"]
          }
        }
      ]
    }
  ],

  // 修正重點：配合 app.js 的 bindUI 裡的 #btnFood 邏輯
  food: {
    zones: [
      {
        name: "中西區美食",
        items: [
          { name: "双生綠豆沙", query: "双生綠豆沙牛奶", note: "週一公休", tags: ["飲料"] }
        ]
      }
    ],
    beefSoup: [
      { name: "六千牛肉湯", query: "六千牛肉湯", note: "05:00 開賣，需提早排隊" },
      { name: "文章牛肉湯", query: "文章牛肉湯", note: "人很多，但翻桌快" }
    ],
    beefSoupMapUrl: "https://www.google.com/maps/search/台南牛肉湯"
  }
};
