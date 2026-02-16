/* data.js — 旅行資料檔 */

window.TRIP_DATA = {
  // 1. 網頁標題與基本資訊
  meta: {
    badge: "2024",           // 左上角的小標籤
    title: "台南三天兩夜",    // 主標題
    subtitle: "美食古蹟慢活之旅", // 副標題
    chips: ["美食", "攝影", "放鬆"], // 標籤
    weatherHint: "南部天氣較熱，建議攜帶防曬用品與薄外套。" // 天氣區塊的提示
  },

  // 2. 注意事項清單
  notes: [
    "記得攜帶身分證與健保卡",
    "租機車需要駕照",
    "部分老店只收現金，請準備零錢",
    "行動電源要充飽"
  ],

  // 3. 每日行程 (Days)
  days: [
    {
      label: "Day 1", // 分頁按鈕顯示的文字
      timeline: [
        {
          time: "10:00",
          title: "抵達台南火車站",
          hint: "前往後站租車",
          tags: ["交通"],
          // 點擊後彈出視窗的詳細內容 (desc)
          desc: "出火車站後往後站方向走，那邊有很多租車行，記得先檢查車況並拍照。", 
          mapUrl: "https://goo.gl/maps/example1" // Google Maps 連結
        },
        {
          time: "12:00",
          title: "午餐：國華街美食",
          hint: "必吃金得春捲、富盛號碗粿",
          tags: ["美食", "排隊名店"],
          desc: "人潮眾多，建議分頭排隊。<br>推薦：<br>1. 富盛號碗粿<br>2. 金得春捲<br>3. 阿松割包",
          mapUrl: "https://goo.gl/maps/example2",
          // 額外的連結按鈕
          links: [
            { text: "富盛號介紹", url: "https://www.google.com" }
          ]
        },
        {
          time: "15:00",
          title: "飯店 Check-in",
          hint: "友愛街旅館",
          tags: ["住宿"],
          desc: "先去放行李，稍微休息一下。",
          mapUrl: ""
        }
      ]
    },
    {
      label: "Day 2",
      timeline: [
        {
          time: "09:00",
          title: "安平樹屋",
          hint: "網美拍照景點",
          tags: ["景點", "拍照"],
          desc: "門票 50 元，可以逛很久。",
          mapUrl: "https://goo.gl/maps/example3"
        },
        {
          time: "12:00",
          title: "午餐：文章牛肉湯",
          hint: "人很多要排隊",
          tags: ["美食"],
          desc: "台南必吃牛肉湯，湯頭鮮甜。",
          mapUrl: ""
        }
      ]
    }
  ],

  // 4. 美食口袋名單 (Food Sections)
  foodSections: [
    {
      id: "snack",
      label: "必吃小吃",
      items: [
        {
          name: "六千牛肉湯",
          area: "中西區",
          short: "超人氣排隊店",
          openHours: "05:00 - 11:00",
          note: "要很早起去拿號碼牌",
          tags: ["牛肉湯", "早餐"],
          mapUrl: "https://goo.gl/maps/example4"
        },
        {
          name: "依蕾特布丁",
          area: "安平區",
          short: "伴手禮首選",
          openHours: "10:00 - 20:00",
          tags: ["甜點"],
          mapUrl: ""
        }
      ]
    },
    {
      id: "drink",
      label: "飲料/甜點",
      items: [
        {
          name: "双生綠豆沙牛奶",
          area: "中西區",
          short: "口感綿密",
          openHours: "11:00 - 18:00",
          note: "週一公休",
          tags: ["飲料"],
          mapUrl: ""
        }
      ]
    }
  ]
};
