window.TRIP_DATA = {
  title: "台南：老城散步＋花園水道＋四草綠隧（同遊）",
  subtitle: "2/18–2/21｜提供給朋友的互動行程頁",
  chips: ["自駕", "文青散步", "博物館可深看", "糖友友善：少量甜點"],
  // Google Maps 總覽（你之後可換成自訂清單/我的地圖）
  overviewMapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%8F%B0%E5%8D%97%20%E6%96%87%E5%AD%B8%E9%A4%A8%20%E5%9B%9B%E8%8D%89%20%E7%B6%A0%E8%89%B2%E9%9A%A7%E9%81%93%20%E8%8A%B1%E5%9C%92%E6%B0%B4%E9%81%93%E5%8D%9A%E7%89%A9%E9%A4%A8",
  notes: [
    "同遊版原則：不要行軍。一天抓 2–3 個主點＋一個自由散步區。",
    "甜點策略：只挑『大家大推』的店嚐一小份；其餘以無糖茶/黑咖啡/鹹點為主。",
    "開車：市區移動盡量停一次用走的；熱門景點留 20–30 分鐘停車緩衝。"
  ],
  days: [
    {
      id: "d1",
      label: "D1 2/18（三）",
      title: "抵達台南｜文學館＋孔廟/府中街＋神農街夜散步",
      items: [
        {
          time: "下午",
          duration: "彈性",
          title: "抵達台南・入住/放行李",
          place: "住宿",
          address: "",
          tags: [{t:"彈性", tone:"warn"}],
          links: []
        },
        {
          time: "15:00",
          duration: "1.5–2 hr",
          title: "國立台灣文學館",
          place: "台南市中西區中正路1號",
          address: "台南市中西區中正路1號",
          tags: [{t:"室內", tone:"good"}, {t:"可深看", tone:"good"}],
          links: [
            {label:"導航", url:"https://www.google.com/maps/search/?api=1&query=%E5%9C%8B%E7%AB%8B%E5%8F%B0%E7%81%A3%E6%96%87%E5%AD%B8%E9%A4%A8"}
          ],
          note: "朋友若體力一般：抓重點展區＋一個小展就好，不必全部看完。"
        },
        {
          time: "17:30",
          duration: "45–75 min",
          title: "孔廟／府中街散步（可選）",
          place: "台南孔廟＆府中街",
          address: "",
          tags: [{t:"步行", tone:"warn"}, {t:"拍照", tone:"good"}],
          links: [
            {label:"導航", url:"https://www.google.com/maps/search/?api=1&query=%E5%8F%B0%E5%8D%97%E5%AD%94%E5%BB%9F%20%E5%BA%9C%E4%B8%AD%E8%A1%97"}
          ]
        },
        {
          time: "晚上",
          duration: "彈性",
          title: "神農街＋海安路（夜間氣氛）",
          place: "神農街／海安路",
          address: "",
          tags: [{t:"文青巷弄", tone:"good"}, {t:"夜散步", tone:"good"}],
          links: [
            {label:"導航", url:"https://www.google.com/maps/search/?api=1&query=%E7%A5%9E%E8%BE%B2%E8%A1%97%20%E6%B5%B7%E5%AE%89%E8%B7%AF"}
          ],
          note: "甜點想嚐一口可以，但先吃正餐，甜點當共享小份。"
        }
      ]
    },

    {
      id: "d2",
      label: "D2 2/19（四）",
      title: "山上花園水道博物館（主行程）＋回市區自由",
      items: [
        {
          time: "10:00",
          duration: "2.5–3.5 hr",
          title: "山上花園水道博物館",
          place: "台南市山上區山上里山上16號",
          address: "台南市山上區山上里山上16號",
          tags: [{t:"戶外/室內", tone:"good"}, {t:"走路量中", tone:"warn"}],
          links: [
            {label:"導航", url:"https://www.google.com/maps/search/?api=1&query=%E5%B1%B1%E4%B8%8A%E8%8A%B1%E5%9C%92%E6%B0%B4%E9%81%93%E5%8D%9A%E7%89%A9%E9%A4%A8"}
          ],
          note: "這個點很值得慢慢看：先走主園區→再視體力補展館。"
        },
        {
          time: "13:30",
          duration: "45–60 min",
          title: "午餐（山上/新化一帶）",
          place: "沿途找簡單好停車的店",
          address: "",
          tags: [{t:"補能量", tone:"good"}],
          links: []
        },
        {
          time: "下午",
          duration: "彈性",
          title: "回市區：咖啡/小店/休息（三選一）",
          place: "中西區/中正路周邊",
          address: "",
          tags: [{t:"彈性", tone:"warn"}],
          links: []
        }
      ]
    },

    {
      id: "d3",
      label: "D3 2/20（五）",
      title: "四草綠色隧道＋安平/台江＋漁光島夕陽",
      items: [
        {
          time: "09:30",
          duration: "2–3 hr",
          title: "四草綠色隧道（含排隊緩衝）",
          place: "四草大眾廟附近",
          address: "",
          tags: [{t:"搭船", tone:"good"}, {t:"需排隊", tone:"warn"}],
          links: [
            {label:"導航", url:"https://www.google.com/maps/search/?api=1&query=%E5%9B%9B%E8%8D%89%20%E7%B6%A0%E8%89%B2%E9%9A%A7%E9%81%93"}
          ],
          note: "建議早一點到；船班與排隊狀況看當天。"
        },
        {
          time: "12:30",
          duration: "1 hr",
          title: "午餐（安平/四草一帶）",
          place: "以好停車、上菜快為優先",
          tags: [{t:"補能量", tone:"good"}],
          links: []
        },
        {
          time: "14:00",
          duration: "1.5–2 hr",
          title: "台江遊客中心 或 安平樹屋（擇一）",
          place: "台江/安平",
          tags: [{t:"二擇一", tone:"warn"}, {t:"走路量中", tone:"warn"}],
          links: [
            {label:"導航（台江遊客中心）", url:"https://www.google.com/maps/search/?api=1&query=%E5%8F%B0%E6%B1%9F%E5%9C%8B%E5%AE%B6%E5%85%AC%E5%9C%92%E7%AE%A1%E7%90%86%E8%99%95%E9%81%8A%E5%AE%A2%E4%B8%AD%E5%BF%83"},
            {label:"導航（安平樹屋）", url:"https://www.google.com/maps/search/?api=1&query=%E5%AE%89%E5%B9%B3%E6%A8%B9%E5%B1%8B"}
          ],
          note: "當天如果風很大或太熱，選室內/半室內的那個。"
        },
        {
          time: "17:00",
          duration: "60–90 min",
          title: "漁光島：夕陽散步",
          place: "漁光島",
          tags: [{t:"夕陽", tone:"good"}, {t:"步行", tone:"warn"}],
          links: [
            {label:"導航", url:"https://www.google.com/maps/search/?api=1&query=%E6%BC%81%E5%85%89%E5%B3%B6"}
          ]
        }
      ]
    },

    {
      id: "d4",
      label: "D4 2/21（六）",
      title: "同遊半天＋送站（10:57 高鐵）",
      items: [
        {
          time: "07:45",
          duration: "60–75 min",
          title: "早午餐（市區、好停車）",
          place: "中西區/中正路附近",
          tags: [{t:"同遊收尾", tone:"good"}],
          links: []
        },
        {
          time: "09:20",
          duration: "50–70 min",
          title: "開車送朋友到高鐵台南站（沙崙）",
          place: "高鐵台南站",
          tags: [{t:"車程", tone:"warn"}],
          links: [
            {label:"導航", url:"https://www.google.com/maps/search/?api=1&query=%E9%AB%98%E9%90%B5%E5%8F%B0%E5%8D%97%E7%AB%99"}
          ],
          note: "保守抓停車＋走到月台的緩衝。"
        },
        {
          time: "10:57",
          duration: "固定",
          title: "朋友高鐵：台南 → 台北（到 12:44）",
          place: "車次 1310（停靠站）",
          tags: [{t:"固定", tone:"good"}],
          links: []
        }
      ]
    }
  ]
};