window.TRIP_DATA = {
  meta: {
    badge: "2/18–2/21・台南同遊",
    title: "台南：老城散步＋水道博物館＋四草綠隧",
    subtitle: "朋友同遊版｜行程可彈性調整｜點「景點/店名」看介紹（不會滿版字）",
    chips: ["開車為主", "可選備案", "不硬塞景點", "美食已顧到不吃海鮮朋友"],
    // 你也可以換成你自己的 My Maps 連結
    overviewMapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%8F%B0%E5%8D%97%E4%B8%AD%E8%A5%BF%E5%8D%80",
    weatherHint: "提醒：早晚偏涼，海邊風大。中午偏熱，建議洋蔥式穿法＋外層防風。",
  },

  notes: [
    "穿著：早晚偏涼、海邊風大 → 薄長袖/罩衫＋防風外套（洋蔥式）。",
    "鞋子：多步行路段建議好走的鞋（國華街、海安路、運河/港邊）。",
    "海邊：漁光島夕陽看風勢；風大時帽子/圍巾會很有感。",
    "飲食：朋友不吃海鮮（非過敏）→ 店家有海鮮OK，但一定要有非海鮮主餐。",
  ],

  days: [
    {
      id: "D1",
      label: "2/18（初二）",
      timeline: [
        {
          time: "09:00",
          title: "台北集合出發（國道三號南下）",
          hint: "假設路況不塞車；午餐直接到台南市區吃。",
          tags: ["集合", "開車"],
          descHtml: `
            <div>今天主軸：先把車停穩＋吃午餐＋下午走室內/半室內，避免第一天太硬。</div>
            <div style="margin-top:8px;color:#666">你想賭初二不會太塞車OK，但保留彈性：路上若延誤，下午景點就用「擇一」策略。</div>
          `,
        },
        {
          time: "12:30",
          title: "台南市區午餐（彈性擇一：牛肉湯 / 沙茶爐 / 小吃）",
          hint: "到市區後再看大家想吃哪一種；避免休息站。",
          tags: ["午餐", "彈性"],
          descHtml: `
            <div>你們如果想第一餐就很台南：牛肉湯最方便；如果想坐下好好聊天：沙茶爐/台菜類更舒服。</div>
            <div style="margin-top:8px">👉 美食清單已放在下方「美食區」，可以直接點店名看介紹＋按地圖導航。</div>
          `,
        },
        {
          time: "14:00",
          title: "台南文學館（抓 14:30 前結束）",
          hint: "目標：14:30 前離開，回住宿點搶車位。",
          tags: ["室內", "展覽"],
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%9C%8B%E7%AB%8B%E8%87%BA%E7%81%A3%E6%96%87%E5%AD%B8%E9%A4%A8",
          descHtml: `
            <div><b>看點</b>：建築本體（原日治時期臺南州廳）＋展覽敘事。</div>
            <div style="margin-top:8px;color:#666">如果大家精神還不錯：可在周邊散步 10–15 分鐘，但重點還是「先搶車位」。</div>
          `,
        },
        {
          time: "15:00",
          title: "回住宿點 Check-in / 停車（先把車放好）",
          hint: "先穩住車位和行李，等一切就緒再出去走。",
          tags: ["住宿", "停車"],
          descHtml: `<div>第一天最重要的是把「停車/行李」這個不確定因素先排除，後面行程才會順。</div>`,
        },
        {
          time: "16:30",
          title: "藍晒圖文創園區（下午移入：避免晚上沒體力）",
          hint: "拍照＋走走即可；晚上若有餘裕再看要不要 YouBike 移動。",
          tags: ["散步", "拍照"],
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E8%97%8D%E6%99%92%E5%9C%96%E6%96%87%E5%89%B5%E5%9C%92%E5%8D%80",
          descHtml: `
            <div><b>看點</b>：藍色視覺主題＋文創小店，行走負擔小。</div>
            <div style="margin-top:8px;color:#666">你原本想放晚上也可以，但考量體力，下午塞這個最剛好。</div>
          `,
        },
        {
          time: "18:00",
          title: "晚餐：中西區/神農街周邊（看大家當天狀態擇一）",
          hint: "若大家還有力氣，可飯後散步到神農街/海安路；不然就直接回去休息。",
          tags: ["晚餐", "散步"],
          descHtml: `
            <div>神農街/海安路一帶很適合「吃完走走」收尾，不需要把景點塞滿。</div>
            <div style="margin-top:8px">👉 店家建議也放在「美食區」裡（含不吃海鮮朋友可吃）。</div>
          `,
        },
      ],
    },

    {
      id: "D2",
      label: "2/19（初三）",
      timeline: [
        {
          time: "10:00",
          title: "台南山上花園水道博物館（上午主行程）",
          hint: "逛園區＋展館；午餐再回市區。",
          tags: ["室外＋室內", "建築", "水文化"],
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%8F%B0%E5%8D%97%E5%B1%B1%E4%B8%8A%E8%8A%B1%E5%9C%92%E6%B0%B4%E9%81%93%E5%8D%9A%E7%89%A9%E9%A4%A8",
          descHtml: `
            <div><b>看點</b>：水道/淨水系統的歷史脈絡＋園區景觀散步，對你這種城鄉/空間視角很友善。</div>
            <div style="margin-top:8px;color:#666">如果人多：就以「展館重點＋戶外散步」收斂，不用把每棟都硬看完。</div>
          `,
        },
        {
          time: "14:30",
          title: "水交社文化園區（可選：下午擇一加進來）",
          hint: "你問值不值得：它比較像「舒服散步＋看宿舍群」的點。",
          tags: ["可選", "散步", "歷史空間"],
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E6%B0%B4%E4%BA%A4%E7%A4%BE%E6%96%87%E5%8C%96%E5%9C%92%E5%8D%80",
          descHtml: `
            <div><b>我對「值不值得」的判斷（偏務實）</b>：如果你們下午想找一個不費力、能走走看老宿舍群與展間的地方，它很合適。</div>
            <div style="margin-top:8px"><b>你關心的「初三有沒有開、到幾點」</b>：這種資訊會變動（尤其連假），建議你用 Google 地圖以當天公告為準。</div>
          `,
        },
        {
          time: "晚餐",
          title: "回市區吃＋散步（國華街/海安路擇一主軸）",
          hint: "國華街/正興街：小吃密集；海安路：夜晚散步更舒服。",
          tags: ["小吃", "散步"],
          descHtml: `
            <div><b>國華街（需要多一點介紹）</b>：一條線串很多小吃，但也最容易「被人潮消耗」。建議：先挑 2–3 家必吃，剩下當備案。</div>
            <div style="margin-top:8px"><b>海安路（藝術街/夜晚氛圍）</b>：適合吃完飯慢慢走，公共藝術/店家比較分散，不會像國華街那麼擠。</div>
            <div style="margin-top:8px;color:#666">你如果願意，我可以把「國華街必吃 2–3 家＋備案」用很短的方式補進美食區。</div>
          `,
        },
      ],
    },

    {
      id: "D3",
      label: "2/20（安平＋台江＋夕陽）",
      timeline: [
        {
          time: "上午",
          title: "四草綠色隧道（主行程）",
          hint: "上午最適合；人多就提早到現場排隊。",
          tags: ["自然", "船班", "拍照"],
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%9B%9B%E8%8D%89%E7%B6%A0%E8%89%B2%E9%9A%A7%E9%81%93",
          descHtml: `
            <div><b>看點</b>：紅樹林水道與樹蔭光影，很吃天氣與人潮管理。</div>
            <div style="margin-top:8px;color:#666">你們這天的節奏很正確：上午自然點、下午放空、傍晚夕陽收尾。</div>
          `,
        },
        {
          time: "中午前後",
          title: "台江濕地公園 / 億載金城 / 安平古堡（擇一或擇二）",
          hint: "不要三個都硬塞：看體力＆天氣挑 1–2 個就好。",
          tags: ["擇一", "散步"],
          descHtml: `
            <div><b>選擇建議（很務實）</b>：</div>
            <ul>
              <li><b>台江濕地公園</b>：偏空間與自然觀察，走起來舒服。</li>
              <li><b>億載金城</b>：城牆＋水域的環形散步，時間可控。</li>
              <li><b>安平古堡</b>：觀光指標點，若同伴沒來過可以收進來。</li>
            </ul>
          `,
          links: [
            { text: "台江濕地公園（地圖）", url: "https://www.google.com/maps/search/?api=1&query=%E5%8F%B0%E6%B1%9F%E6%BF%95%E5%9C%B0%E5%85%AC%E5%9C%92" },
            { text: "億載金城（地圖）", url: "https://www.google.com/maps/search/?api=1&query=%E5%84%84%E8%BC%89%E9%87%91%E5%9F%8E" },
            { text: "安平古堡（地圖）", url: "https://www.google.com/maps/search/?api=1&query=%E5%AE%89%E5%B9%B3%E5%8F%A4%E5%A0%A1" },
          ],
        },
        {
          time: "下午",
          title: "港邊/運河走走（不排硬景點）",
          hint: "今天午後主打留白：喝咖啡、走走、拍照都可以。",
          tags: ["留白", "散步"],
          descHtml: `<div>你這個安排很棒：下午不硬塞，晚上才有力氣吃飯＋散步。</div>`,
        },
        {
          time: "16:00",
          title: "漁光島看夕陽（天氣好就去）",
          hint: "風大很有感：外層防風/帽子注意。",
          tags: ["夕陽", "海邊", "防風"],
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E6%BC%81%E5%85%89%E5%B3%B6",
          descHtml: `
            <div><b>看點</b>：夕陽＋沙灘＋防風林，天氣好很漂亮。</div>
            <div style="margin-top:8px;color:#666">如果風太大或下雨：就改成安平運河周邊散步收尾。</div>
          `,
        },
        {
          time: "晚上",
          title: "安平附近晚餐（在地/CP 值取向；非海鮮朋友可吃）",
          hint: "我已把店家直接放進下方美食區：安平/漁光島區。",
          tags: ["晚餐", "安平"],
          descHtml: `<div>👉 往下滑到「美食區 → 安平/漁光島」直接挑一間按地圖去吃。</div>`,
        },
      ],
    },

    {
      id: "D4",
      label: "2/21（收尾＋送高鐵）",
      timeline: [
        {
          time: "早上",
          title: "早午餐（收尾用）→ 送朋友去高鐵台南站",
          hint: "你之前說要寫清楚高鐵班次與時間：我這裡先留欄位，你把實際班次填進去就好。",
          tags: ["收尾", "早午餐", "高鐵"],
          descHtml: `
            <div><b>高鐵資訊（請填你們實際班次）</b></div>
            <ul>
              <li>朋友班次：＿＿＿＿＿＿（車次）</li>
              <li>出發時間：＿＿＿＿＿＿</li>
              <li>建議抵達車站時間：出發前 30–40 分鐘</li>
            </ul>
            <div style="margin-top:8px">👉 早午餐推薦已放在「美食區 → 中西區」裡（挑「早上就開」的類型）。</div>
          `,
        },
      ],
    },
  ],

  // -----------------------------
  // 美食區：中西區 / 安平&漁光 / 牛肉湯
  // （原則：朋友不吃海鮮也有得吃）
  // -----------------------------
  foodSections: [
    {
      id: "F1",
      label: "中西區",
      items: [
        {
          name: "小豪洲沙茶爐（中西區）",
          area: "中西區（沙茶爐/火鍋）",
          short: "坐下來聊天舒服；牛/豬/丸餃類選擇多，非海鮮也能吃。",
          openHours: "依店家公告（建議 Google 地圖確認）",
          nonSeafoodFriendly: true,
          tags: ["沙茶爐", "適合多人", "非海鮮OK"],
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%B0%8F%E8%B1%AA%E6%B4%B2%E6%B2%99%E8%8C%B6%E7%88%90%20%E5%8F%B0%E5%8D%97",
          note: "如果你們第一天想『好好坐著吃』，這種店最不耗心力。",
        },
        {
          name: "度小月（擔仔麵/台菜）",
          area: "中西區（觀光友善、選擇多）",
          short: "口味穩、菜色多；可避開海鮮點肉/麵/小菜。",
          openHours: "依店家公告（建議 Google 地圖確認）",
          nonSeafoodFriendly: true,
          tags: ["台菜", "選擇多", "非海鮮OK"],
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%BA%A6%E5%B0%8F%E6%9C%88%20%E5%8F%B0%E5%8D%97%20%E4%B8%AD%E8%A5%BF%E5%8D%80",
        },
        {
          name: "阿明豬心冬粉（可點非海鮮）",
          area: "中西區（小吃）",
          short: "豬心/豬肝/冬粉類為主；不吃海鮮完全沒問題。",
          openHours: "依店家公告（常見為晚間/宵夜時段）",
          nonSeafoodFriendly: true,
          tags: ["小吃", "內臟系", "非海鮮OK"],
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E9%98%BF%E6%98%8E%E8%B1%AC%E5%BF%83%E5%86%AC%E7%B2%89%20%E5%8F%B0%E5%8D%97",
        },
        {
          name: "同記安平豆花（甜點收尾也可）",
          area: "中西區/安平皆有（以你們動線挑）",
          short: "甜點收尾很安全；全員友善。",
          openHours: "依店家公告",
          nonSeafoodFriendly: true,
          tags: ["甜點", "收尾", "全員友善"],
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%90%8C%E8%A8%98%E5%AE%89%E5%B9%B3%E8%B1%86%E8%8A%B1%20%E5%8F%B0%E5%8D%97",
        },
      ],
    },

    {
      id: "F2",
      label: "安平/漁光島",
      items: [
        {
          name: "安平109雞肉飯",
          area: "安平（雞肉飯/小吃）",
          short: "朋友不吃海鮮也完全OK；簡單、效率高。",
          // 這種時間會變動，我不硬寫死；你若要我明天幫你逐間核對，我可以再用 web 查一次
          openHours: "常見 09:30–19:00（以店家公告為準）",
          nonSeafoodFriendly: true,
          tags: ["雞肉飯", "在地取向", "非海鮮OK"],
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%AE%89%E5%B9%B3109%E9%9B%9E%E8%82%89%E9%A3%AF",
          links: [
            { text: "（參考）社群貼文提到的營業資訊", url: "https://www.facebook.com/groups/iamintainan/posts/2133413423832557/" }
          ],
          note: "這家很適合你們 2/20 晚上安平收尾：快、穩、大家都能吃。",
        },
        {
          name: "阿財牛肉湯（安平）",
          area: "安平（牛肉湯）",
          short: "牛肉湯派可以衝；也可點牛肉燥/飯類（依現場菜單）。",
          openHours: "常見中午開賣（以店家公告為準）",
          nonSeafoodFriendly: true,
          tags: ["牛肉湯", "安平", "非海鮮OK"],
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E9%98%BF%E8%B2%A1%E7%89%9B%E8%82%89%E6%B9%AF%20%E5%AE%89%E5%B9%B3",
          links: [
            { text: "（參考）文章提到表定 12:00 開始、但可能提早", url: "https://nigi33.tw/ah-cai-beef-soup/" }
          ],
        },
        {
          name: "安平老街小吃策略（避免被人潮耗掉）",
          area: "安平老街",
          short: "不是指定店：是一個『吃法』。先挑 1–2 家＋剩下當備案。",
          openHours: "依各店公告",
          nonSeafoodFriendly: true,
          tags: ["策略", "不硬塞", "保留彈性"],
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%AE%89%E5%B9%B3%E8%80%81%E8%A1%97",
          note: "建議：先吃『主食（雞肉飯/牛肉湯/麵）』再用甜點收尾，不要一路排隊排到沒力氣去看夕陽。",
        },
      ],
    },

    {
      id: "F3",
      label: "牛肉湯系列",
      items: [
        {
          name: "文章牛肉湯（東寧旗艦店）",
          area: "東區（但可當『牛肉湯代表』）",
          short: "營業時間長，對行程彈性很好；非海鮮完全OK。",
          openHours: "常見 11:30–02:00（以店家公告為準）",
          nonSeafoodFriendly: true,
          tags: ["牛肉湯", "時間彈性", "非海鮮OK"],
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E6%96%87%E7%AB%A0%E7%89%9B%E8%82%89%E6%B9%AF%20%E6%9D%B1%E5%AF%A7",
          links: [
            { text: "（參考）整理文提到的時段", url: "https://bunnyann.tw/article2022/" }
          ],
        },
        {
          name: "六千牛肉湯（名店之一）",
          area: "中西區附近（以實際分店為準）",
          short: "牛肉湯名店派會很愛；不吃海鮮完全OK。",
          openHours: "依店家公告（連假建議 Google 地圖確認）",
          nonSeafoodFriendly: true,
          tags: ["牛肉湯", "名店", "非海鮮OK"],
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%85%AD%E5%8D%83%E7%89%9B%E8%82%89%E6%B9%AF%20%E5%8F%B0%E5%8D%97",
        },
        {
          name: "（備案）牛肉湯用法：先湯後飯",
          area: "通用小抄",
          short: "如果同行有人第一次吃：可以照這個節奏點，不容易踩雷。",
          openHours: "—",
          nonSeafoodFriendly: true,
          tags: ["小抄", "點法"],
          mapUrl: "",
          note: "點法建議：牛肉湯 + 白飯/肉燥飯（看店家）+ 2 道小菜（青菜/豆腐類）→ 不會吃太膩，也不怕有人不敢吃太生。",
        },
      ],
    },
  ],
};
