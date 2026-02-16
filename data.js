/* data.js — 旅行資料檔 (已對齊 app.js 邏輯) */

window.TRIP_DATA = {
  meta: {
    title: "2026春節台南行",
    subtitle: "去台南走走",
    datePill: "2/18–2/21・台南同遊", // 對應 app.js 的 #datePill
    overviewMapUrl: "https://www.google.com/maps", // 總覽地圖連結
    chips: ["開車為主", "可選備案", "放鬆"]
  },

  days: [
    {
      label: "2/18（初二）",
      timeline: [
        {
          time: "8:30",
          title: "恩蘭家集合出發",
          tags: ["集合", "交通"],
          modal: {
            desc: "國道三號南下。",
            bullets: ["假設路況不塞車；午餐直接到台南市區吃。", "保留彈性：路上若延誤，下午景點就用「擇一」策略。"],
          }
        },
        {
          time: "12:30",
          title: "台南市區午餐",
          tags: ["午餐", "彈性"],
          modal: {
            desc: "到市區後再看大家想吃哪一種。",
                   }
        },
        {
          time: "12:00",
          title: "午餐：國華街美食",
          hint: "必吃金得春捲、富盛號碗粿",
          tags: ["美食", "排隊名店"],
          desc: "人潮眾多，建議分頭排隊。<br>推薦：<br>1. 富盛號碗粿<br>2. 金得春捲<br>3. 阿松割包",
          mapUrl: "https://goo.gl/maps/example2",
          links: [{ label: "富盛號介紹", href: "https://www.google.com" }]
        },
        {
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
