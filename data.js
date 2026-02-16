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
    // -----------------------------
    // 中西區：牛肉湯＋主食友善
    // -----------------------------
    {
      id: "F_BEEF_CW",
      label: "中西區｜牛肉湯",
      items: [
        {
          name: "六千牛肉湯",
          area: "中西區（牛肉湯名店）",
          short: "名店派會喜歡；非海鮮主食 OK。",
          openHours: "以 Google 地圖當日公告為準（連假常有變動）",
          nonSeafoodFriendly: true,
          tags: ["牛肉湯", "名店", "非海鮮OK"],
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%85%AD%E5%8D%83%E7%89%9B%E8%82%89%E6%B9%AF%20%E5%8F%B0%E5%8D%97",
          note: "如果人潮太誇張：就直接改去「文章/友愛」這種營業時間較彈性的備案。",
        },
        {
          name: "石精臼牛肉湯",
          area: "中西區（偏早晨系）",
          short: "偏早晨/早午餐牛肉湯；非海鮮 OK。",
          openHours: "以 Google 地圖公告為準（早晨型店家變動更大）",
          nonSeafoodFriendly: true,
          tags: ["牛肉湯", "早晨系", "非海鮮OK"],
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E7%9F%B3%E7%B2%BE%E8%87%BC%E7%89%9B%E8%82%89%E6%B9%AF%20%E5%8F%B0%E5%8D%97",
          note: "很適合當作『早上收尾一餐』，但不要硬塞進晚餐。",
        },
        {
          name: "友愛牛肉湯",
          area: "中西區（牛肉湯備案很穩）",
          short: "行程彈性友善；非海鮮主食 OK。",
          openHours: "以 Google 地圖公告為準",
          nonSeafoodFriendly: true,
          tags: ["牛肉湯", "備案穩", "非海鮮OK"],
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%8F%8B%E6%84%9B%E7%89%9B%E8%82%89%E6%B9%AF%20%E5%8F%B0%E5%8D%97",
          note: "你們如果不想排隊排到失智，這種『穩定型』比名店更適合朋友同遊。",
        },
        {
          name: "文章牛肉湯（東寧旗艦店）",
          area: "偏市區（你們開車可達）",
          short: "營業時間常較長，對行程很友善；非海鮮 OK。",
          openHours: "以 Google 地圖公告為準",
          nonSeafoodFriendly: true,
          tags: ["牛肉湯", "時間彈性", "非海鮮OK"],
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E6%96%87%E7%AB%A0%E7%89%9B%E8%82%89%E6%B9%AF%20%E6%9D%B1%E5%AF%A7%20%E5%8F%B0%E5%8D%97",
          note: "你之前行程要彈性、不要被營業時間綁架，文章這種就很適合當『救援點』。",
        },
      ],
    },

    // -----------------------------
    // 安平：牛肉湯＋附近吃法
    // -----------------------------
    {
      id: "F_BEEF_AP",
      label: "安平｜牛肉湯",
      items: [
        {
          name: "阿財牛肉湯（安平）",
          area: "安平（牛肉湯）",
          short: "安平區好用的牛肉湯選擇；非海鮮 OK。",
          openHours: "以 Google 地圖公告為準",
          nonSeafoodFriendly: true,
          tags: ["牛肉湯", "安平", "非海鮮OK"],
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E9%98%BF%E8%B2%A1%E7%89%9B%E8%82%89%E6%B9%AF%20%E5%AE%89%E5%B9%B3%20%E5%8F%B0%E5%8D%97",
          note: "適合你們 2/20 安平＋夕陽那天，直接在安平就地解決晚餐。",
        },
        {
          name: "（安平備案）牛肉湯搜尋：安平 牛肉湯",
          area: "安平",
          short: "如果名店休息/排爆：直接用這個搜尋挑最近、評價穩的。",
          openHours: "—",
          nonSeafoodFriendly: true,
          tags: ["備案", "不硬塞"],
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%AE%89%E5%B9%B3%20%E7%89%9B%E8%82%89%E6%B9%AF",
          note: "你現在最需要的是『不要再被不確定性搞』，備案比名店更重要。",
        },
      ],
    },

    // -----------------------------
    // 國華街 / 正興街：小吃密集（非海鮮主食 OK）
    // -----------------------------
    {
      id: "F_GH",
      label: "國華街/正興街",
      items: [
        {
          name: "阿松割包",
          area: "國華街周邊",
          short: "肉類主食，朋友不吃海鮮完全 OK；效率高。",
          openHours: "以 Google 地圖公告為準",
          nonSeafoodFriendly: true,
          tags: ["主食", "排隊名物", "非海鮮OK"],
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E9%98%BF%E6%9D%BE%E5%89%B2%E5%8C%85%20%E5%8F%B0%E5%8D%97",
          note: "國華街吃法：先抓一個『主食』，剩下用甜點收尾，才不會一路排到沒力氣。",
        },
        {
          name: "富盛號碗粿",
          area: "國華街/永樂市場附近",
          short: "碗粿＋湯類，非海鮮主食 OK。",
          openHours: "以 Google 地圖公告為準",
          nonSeafoodFriendly: true,
          tags: ["小吃", "主食", "非海鮮OK"],
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%AF%8C%E7%9B%9B%E8%99%9F%E7%A2%97%E7%B2%BF%20%E5%8F%B0%E5%8D%97",
        },
        {
          name: "金得春捲（可請店家不加海鮮配料）",
          area: "國華街周邊",
          short: "春捲可客製；提醒『不要加海鮮/蝦』就能照顧朋友。",
          openHours: "以 Google 地圖公告為準",
          nonSeafoodFriendly: true,
          tags: ["小吃", "可客製", "非海鮮OK"],
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E9%87%91%E5%BE%97%E6%98%A5%E6%8D%B2%20%E5%8F%B0%E5%8D%97",
          note: "因為各家配料會不同，你們點餐時直接說『不要海鮮/不要蝦』最保險。",
        },
        {
          name: "修安扁擔豆花（甜點收尾）",
          area: "國華街周邊",
          short: "甜點收尾安全牌，全員友善。",
          openHours: "以 Google 地圖公告為準",
          nonSeafoodFriendly: true,
          tags: ["甜點", "收尾", "全員友善"],
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E4%BF%AE%E5%AE%89%E6%89%81%E6%93%94%E8%B1%86%E8%8A%B1%20%E5%8F%B0%E5%8D%97",
        },
        {
          name: "蜷尾家（冰品/甜點，依分店）",
          area: "中西區（散步路線可碰到）",
          short: "甜點很適合你們『不想再做決策』時直接收尾。",
          openHours: "以 Google 地圖公告為準",
          nonSeafoodFriendly: true,
          tags: ["甜點", "散步收尾"],
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E8%9C%B7%E5%B0%BE%E5%AE%B6%20%E5%8F%B0%E5%8D%97",
        },
      ],
    },

    // -----------------------------
    // 海安路 / 神農街（藝術街氛圍）：以「坐下吃＋散步」為主
    // -----------------------------
    {
      id: "F_HA",
      label: "海安路/神農街（藝術街）",
      items: [
        {
          name: "小豪洲沙茶爐（海安路散步線可搭）",
          area: "中西區（適合坐下來聊天）",
          short: "牛/豬/丸餃類選擇多，非海鮮主食很完整。",
          openHours: "以 Google 地圖公告為準",
          nonSeafoodFriendly: true,
          tags: ["坐著吃", "適合多人", "非海鮮OK"],
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%B0%8F%E8%B1%AA%E6%B4%B2%E6%B2%99%E8%8C%B6%E7%88%90%20%E5%8F%B0%E5%8D%97",
        },
        {
          name: "阿明豬心冬粉（宵夜型）",
          area: "海安路/中西區（宵夜動線好接）",
          short: "豬心/豬肝/冬粉類為主，完全非海鮮。",
          openHours: "以 Google 地圖公告為準",
          nonSeafoodFriendly: true,
          tags: ["宵夜", "內臟系", "非海鮮OK"],
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E9%98%BF%E6%98%8E%E8%B1%AC%E5%BF%83%E5%86%AC%E7%B2%89%20%E5%8F%B0%E5%8D%97",
        },
        {
          name: "同記安平豆花（神農街/海安路散步後收尾）",
          area: "中西區/安平皆可（看你們當下位置）",
          short: "甜點收尾安全牌，全員友善。",
          openHours: "以 Google 地圖公告為準",
          nonSeafoodFriendly: true,
          tags: ["甜點", "收尾"],
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%90%8C%E8%A8%98%E5%AE%89%E5%B9%B3%E8%B1%86%E8%8A%B1%20%E5%8F%B0%E5%8D%97",
        },
        {
          name: "海安路散步吃法（低耗能版本）",
          area: "海安路＋神農街",
          short: "不是指定店，是『動線』：先吃主食→走路看裝置藝術→甜點收尾。",
          openHours: "—",
          nonSeafoodFriendly: true,
          tags: ["策略", "低耗能", "不硬塞"],
          mapUrl: "https://www.google.com/maps/search/?api=1&query=%E6%B5%B7%E5%AE%89%E8%B7%AF%20%E8%97%9D%E8%A1%93%E8%A1%97%20%E5%8F%B0%E5%8D%97",
          note: "你朋友同遊要舒服：不要用『每家都要吃』的國華街模式；海安路更適合『吃一間坐下來的＋散步』。",
        },
      ],
    },
  ],

