/* data.js
 * 2/18–2/21 台南同遊版（可直接貼進你的互動式行程網頁）
 * 特色：主線清楚＋備選彈性（適合做「可展開」區塊）
 */

window.TRIP = {
  meta: {
    title: "台南同遊行程（2/18–2/21）",
    subtitle: "同遊版｜主線清楚、備選可展開｜開車為主",
    version: "v1.0",
    notes: [
      "2/18 為初二：09:00 台北集合出發，假設不塞車，午餐在台南市區。",
      "行程以『不趕、不硬塞點』為原則；備選景點用「選 1–2 個即可」。",
      "2/21 同遊收尾：早午餐後直接送朋友去高鐵台南站（10:57 班次）。"
    ]
  },

  days: [
    // -------------------------
    // 2/18（初二）
    // -------------------------
    {
      id: "D1",
      date: "2026-02-18",
      title: "台北 → 台南｜午餐＋文學館＋下午散步備選",
      themeTags: ["移動日", "老城散步", "室內為主"],
      timeline: [
        {
          time: "09:00",
          title: "台北集合出發（國道三號南下）",
          detail:
            "今日假設路況不塞車；中午抵台南市區用餐後直接接下午行程。",
          tags: ["集合", "開車"]
        },
        {
          time: "12:30–14:00",
          title: "台南市區午餐（不寫休息站）",
          detail:
            "原則：吃完順路接文學館，不跑太遠；當天看人潮與停車狀況臨場決定。",
          tags: ["午餐", "彈性"]
        },
        {
          time: "14:00–15:30",
          title: "國立臺灣文學館（抓重點，不求全看）",
          detail:
            "台南城市脈絡入門點。建議選一個主題展＋常設重點即可，保留體力給接下來停車/入住。",
          tags: ["室內", "重點參觀"],
          links: [
            {
              label: "Google Maps 導航",
              url: "https://www.google.com/maps/search/?api=1&query=國立臺灣文學館"
            }
          ]
        },
        {
          time: "15:30–16:00",
          title: "前往住宿／搶車位／放行李",
          detail:
            "今日的關鍵是停車與入住順利；此段優先權高於加景點。",
          tags: ["入住", "停車優先"]
        },
        {
          time: "16:00–18:00",
          title: "下午散步備選（選 1–2 個即可）",
          detail:
            "這段建議做成可展開：看精神/停車/天氣決定，不強迫全走。",
          tags: ["備選", "可展開", "彈性"],
          options: [
            {
              title: "臺南美術館1館（外觀散步即可）",
              why: "文學館附近，外觀與街廓尺度很值得看；不進館也成立。",
              see: ["建築立面與細節", "舊城公共建築尺度", "傍晚光線拍照友善"],
              stay: "10–20 分鐘",
              links: [
                {
                  label: "Google Maps",
                  url: "https://www.google.com/maps/search/?api=1&query=臺南美術館1館"
                }
              ]
            },
            {
              title: "司法博物館（外觀／周邊路過）",
              why: "日治時期司法建築，路過看外觀就很有感。",
              see: ["建築量體與軸線", "舊城街道與治理空間關係"],
              stay: "10–15 分鐘",
              links: [
                {
                  label: "Google Maps",
                  url: "https://www.google.com/maps/search/?api=1&query=司法博物館 台南"
                }
              ]
            },
            {
              title: "藍晒圖文創園區（輕鬆走走）",
              why: "老屋群改造的文創聚落，氛圍輕鬆，不用腦力。",
              see: ["散步拍照", "小店逛逛", "找飲料/咖啡坐一下"],
              stay: "30–60 分鐘",
              links: [
                {
                  label: "Google Maps",
                  url: "https://www.google.com/maps/search/?api=1&query=藍晒圖文創園區"
                }
              ]
            }
          ]
        },
        {
          time: "晚上",
          title: "晚餐＋自由散步（不硬排）",
          detail:
            "晚間保留彈性：吃飯後可回住宿休息；若精神與天氣允許，可評估 YouBike 短距離移動。",
          tags: ["晚餐", "彈性", "YouBike可評估"],
          options: [
            {
              title: "神農街（夜間散步氛圍）",
              why: "巷弄型夜間散步很舒服，不必逛很久。",
              see: ["老街氛圍", "小店與光線", "拍照／走走即可"],
              stay: "30–60 分鐘",
              links: [
                {
                  label: "Google Maps",
                  url: "https://www.google.com/maps/search/?api=1&query=神農街 台南"
                }
              ]
            }
          ]
        }
      ]
    },

    // -------------------------
    // 2/19（初三）
    // -------------------------
    {
      id: "D2",
      date: "2026-02-19",
      title: "花園水道博物館主日｜下午可選水交社（看體力）",
      themeTags: ["郊外", "工程地景", "慢走"],
      timeline: [
        {
          time: "上午",
          title: "山上花園水道博物館（主行程）",
          detail:
            "今日只排一個大點：公共工程×建築×園區綠地。重點是慢慢走，不必每一館都看完。",
          tags: ["主行程", "慢走"],
          links: [
            {
              label: "Google Maps 導航",
              url: "https://www.google.com/maps/search/?api=1&query=山上花園水道博物館"
            }
          ]
        },
        {
          time: "午餐",
          title: "午餐（園區附近或回市區）",
          detail:
            "看當天人潮與大家狀態：可就近簡單吃，或回市區再吃。",
          tags: ["午餐", "彈性"]
        },
        {
          time: "下午（可選）",
          title: "水交社文化園區（走走型備選）",
          detail:
            "值不值得：值得『走走』，不是重度看展。把它當散步點比較不會失望。",
          tags: ["備選", "散步", "看體力"],
          links: [
            {
              label: "Google Maps",
              url: "https://www.google.com/maps/search/?api=1&query=水交社文化園區"
            }
          ],
          tips: [
            "室內展館可能有午休或提早關閉；戶外園區較不受影響。",
            "若下午想休息，就直接回住宿／自由活動。"
          ]
        },
        {
          time: "晚上",
          title: "自由晚餐／散步",
          detail:
            "不加硬點，讓大家把體力留給 2/20（四草＋漁光島）。",
          tags: ["自由", "保留體力"]
        }
      ]
    },

    // -------------------------
    // 2/20（初四）
    // -------------------------
    {
      id: "D3",
      date: "2026-02-20",
      title: "四草綠色隧道主日｜台江/安平順走｜漁光島夕陽｜安平晚餐（非海鮮）",
      themeTags: ["水域地景", "濕地", "看夕陽", "不趕行程"],
      timeline: [
        {
          time: "上午（必走）",
          title: "四草綠色隧道（坐船）",
          detail:
            "今天唯一需要配合時間的行程：紅樹林水道與綠色隧道景觀。建議早一點到，光線好、也較不悶。",
          tags: ["必走", "船班", "自然地景"],
          links: [
            {
              label: "Google Maps 導航",
              url: "https://www.google.com/maps/search/?api=1&query=四草綠色隧道"
            }
          ],
          tips: ["含排隊＋搭船，抓約 1.5–2 小時。"]
        },
        {
          time: "上午後段～中午（擇一）",
          title: "同區順走（選 1 個即可）",
          detail:
            "四草結束後，看時間與精神狀況，選 1 個順走點，不全塞。",
          tags: ["擇一", "彈性"],
          options: [
            {
              title: "台江國家公園遊客中心（補背景、輕鬆看）",
              stay: "30–60 分鐘",
              links: [
                {
                  label: "Google Maps",
                  url: "https://www.google.com/maps/search/?api=1&query=台江國家公園遊客中心"
                }
              ],
              see: ["台江濕地/潟湖背景", "室內＋戶外都可", "壓力低"]
            },
            {
              title: "億載金城（戶外好走）",
              stay: "45–60 分鐘",
              links: [
                {
                  label: "Google Maps",
                  url: "https://www.google.com/maps/search/?api=1&query=億載金城"
                }
              ],
              see: ["清代砲台與護城河", "城防與海岸線關係", "走起來舒服"]
            },
            {
              title: "安平古堡（地標型、可只走外圍）",
              stay: "40–60 分鐘",
              links: [
                {
                  label: "Google Maps",
                  url: "https://www.google.com/maps/search/?api=1&query=安平古堡"
                }
              ],
              see: ["早期港口城市的防禦脈絡", "外圍散步也成立"]
            }
          ]
        },
        {
          time: "中午",
          title: "安平區午餐（簡單即可）",
          detail:
            "原則：不要排隊排太久、吃完不昏。店家不綁死，當天看人潮決定。",
          tags: ["午餐", "彈性"]
        },
        {
          time: "下午",
          title: "港邊／運河散步放空（不排硬行程）",
          detail:
            "讓上午的濕地/船行節奏沉澱：看水、坐著聊天、慢慢走。",
          tags: ["散步", "放空", "不趕場"]
        },
        {
          time: "16:00 左右（天氣好）",
          title: "漁光島看夕陽",
          detail:
            "天氣好就去走走看夕陽；若風大或下雨，直接略過回安平用餐即可。",
          tags: ["夕陽", "看天氣"],
          links: [
            {
              label: "Google Maps",
              url: "https://www.google.com/maps/search/?api=1&query=漁光島"
            }
          ],
          tips: ["停留 45–90 分鐘，視日落時間與大家狀態調整。"]
        },
        {
          time: "晚上",
          title: "安平附近晚餐（在地取向、CP值、非海鮮專門）",
          detail:
            "你朋友不吃海鮮：這裡挑『不靠海鮮也能吃得很好』的店型，適合多人一起吃。",
          tags: ["晚餐", "在地取向", "非海鮮"],
          options: [
            {
              title: "文章牛肉湯（安平一帶）",
              note: "牛肉湯＋熱食很適合收尾，不吃海鮮完全OK。",
              links: [
                {
                  label: "Google Maps",
                  url: "https://www.google.com/maps/search/?api=1&query=文章牛肉湯 安平"
                }
              ]
            },
            {
              title: "阿財牛肉湯（在地老店取向）",
              note: "價格實在、路線偏在地；可作文章牛肉湯的替代選項。",
              links: [
                {
                  label: "Google Maps",
                  url: "https://www.google.com/maps/search/?api=1&query=阿財牛肉湯 台南"
                }
              ]
            },
            {
              title: "再發號肉粽（台南老店）",
              note: "肉粽＋湯類，適合不想吃太油太重口味的晚餐。",
              links: [
                {
                  label: "Google Maps",
                  url: "https://www.google.com/maps/search/?api=1&query=再發號肉粽 台南"
                }
              ]
            },
            {
              title: "周氏（安平本店）— 不吃海鮮也有肉類/主食選擇",
              note: "名氣大但穩定；若同行有人想嘗台南代表性小吃，可點非海鮮品項。",
              links: [
                {
                  label: "Google Maps",
                  url: "https://www.google.com/maps/search/?api=1&query=周氏蝦捲 安平本店"
                }
              ]
            }
          ],
          tips: [
            "過年人潮：若熱門店排隊太久，直接改吃下一個選項，不硬等。",
            "晚餐目標是『吃得舒服』，不要為了名店把體力耗光。"
          ]
        }
      ]
    },

    // -------------------------
    // 2/21（初五）— 同遊收尾（資訊清楚版）
    // -------------------------
    {
      id: "D4",
      date: "2026-02-21",
      title: "同遊收尾｜早午餐 → 送朋友到高鐵台南站（10:57）",
      themeTags: ["收尾日", "資訊清楚", "不加景點"],
      timeline: [
        {
          time: "上午",
          title: "睡到自然醒／收行李（不排景點）",
          detail:
            "今天不加任何新景點：目標是好好吃一餐、聊完就送站。",
          tags: ["收尾", "不趕"]
        },
        {
          time: "早午餐（擇一）",
          title: "早午餐選擇（請依時間與人潮決定）",
          detail:
            "原則：可坐可聊、吃完不趕行程。餐廳營業時間寫清楚如下。",
          tags: ["餐廳", "擇一"],
          options: [
            {
              title: "小北家灶咖 ZAOKA（首選）",
              hours: "09:00–16:30",
              note:
                "真正早午餐、鹹食為主；適合 09:30–10:30 用餐，聊天不被時間追著跑。",
              links: [
                {
                  label: "Google Maps",
                  url: "https://www.google.com/maps/search/?api=1&query=小北家灶咖 ZAOKA 台南"
                }
              ]
            },
            {
              title: "緩慢文旅・好好 Good Days（備選：早餐型）",
              hours: "07:30–11:30",
              note:
                "偏早餐（非完整早午餐），環境舒服節奏慢；適合想早一點吃、早一點出發的情境。",
              links: [
                {
                  label: "Google Maps",
                  url: "https://www.google.com/maps/search/?api=1&query=緩慢文旅 台南 好好 Good Days"
                }
              ]
            }
          ]
        },
        {
          time: "高鐵回程（朋友）",
          title: "送朋友到高鐵台南站（務必預留時間）",
          detail:
            "朋友搭乘高鐵回台北：班次時間 10:57。建議最晚 10:30 抵達高鐵台南站（取票/進站/月台預留）。",
          tags: ["高鐵", "時間固定", "重要"],
          travel: {
            mode: "HSR",
            departStation: "高鐵台南站",
            arriveStation: "台北",
            departTime: "10:57",
            arriveBy: "10:30"
          },
          links: [
            {
              label: "Google Maps：高鐵台南站",
              url: "https://www.google.com/maps/search/?api=1&query=高鐵台南站"
            }
          ]
        },
        {
          time: "同遊結束",
          title: "同遊行程結束（不再排其他點）",
          detail:
            "吃完早午餐後直接送站，行程在此自然收尾；不再安排繞路景點。",
          tags: ["結束"]
        }
      ]
    }
  ]
};
