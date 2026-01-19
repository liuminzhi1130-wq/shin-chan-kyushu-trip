// 根據 PDF 文件整理的行程資料
const itineraryData = [
    {
        day: 1,
        date: "1/29 (Thu)",
        title: "福岡：城市脈動與明太子",
        quote: "肚子餓了... 吃法國麵包吧！",
        activities: [
            { type: "play", time: "12:00", text: "抵達福岡機場 (CI138)" },
            { type: "eat", time: "下午", text: "Full Full 明太子法國麵包 (必吃!)" },
            { type: "play", time: "傍晚", text: "川端通商店街散策" },
            { type: "eat", time: "晚餐", text: "藥院燒肉 (已預約)" },
            { type: "stay", time: "住宿", text: "Nishitetsu Hotel Croom Hakata Gion" }
        ]
    },
    {
        day: 2,
        date: "1/30 (Fri)",
        title: "福岡：山海與運河",
        quote: "動感超人～ 變身！(去搭船)",
        activities: [
            { type: "play", time: "10:35", text: "渡輪前往海之中道" },
            { type: "play", time: "白天", text: "海濱公園單車遊" },
            { type: "play", time: "晚間", text: "博多運河城 (拉麵競技場 & 水舞秀)" },
            { type: "stay", time: "住宿", text: "Nishitetsu Hotel Croom Hakata Gion (續住)" }
        ]
    },
    {
        day: 3,
        date: "1/31 (Sat)",
        title: "由布院：霧氣與甜味",
        quote: "開車車～ 叭叭！(記得領ETC卡)",
        activities: [
            { type: "play", time: "09:00", text: "取車: Toyota Rent a Car 博多站東 (雪胎+ETC)" },
            { type: "eat", time: "途中", text: "ULUU Farm 採草莓吃到飽" },
            { type: "play", time: "下午", text: "湯之坪街道散步 (B-Speak 蛋糕捲)" },
            { type: "stay", time: "19:00前", text: "湯布院山水館 (一定要準時check-in!)" }
        ]
    },
    {
        day: 4,
        date: "2/1 (Sun)",
        title: "阿蘇：火山口的壯麗",
        quote: "哇～ 是火山耶！好大的屁屁！",
        activities: [
            { type: "play", time: "08:00", text: "金鱗湖晨霧" },
            { type: "play", time: "上午", text: "Yamanami Highway 高原公路駕駛" },
            { type: "play", time: "中午", text: "草千里之濱 & 米塚 & 阿蘇火山口" },
            { type: "eat", time: "午餐", text: "阿蘇赤牛丼 (Imakin食堂或道之驛)" },
            { type: "stay", time: "住宿", text: "Dormy Inn Kumamoto" }
        ]
    },
    {
        day: 5,
        date: "2/2 (Mon)",
        title: "天草：追逐野生海豚",
        quote: "海豚～ 海豚～ 跟你一樣滑溜溜～",
        activities: [
            { type: "play", time: "上午", text: "前往天草 (車程約2小時)" },
            { type: "play", time: "11:30", text: "天草海鮮蔵：海豚觀賞 (遇見率98%)" },
            { type: "eat", time: "午餐", text: "海鮮BBQ或海鮮丼" },
            { type: "play", time: "晚上", text: "熊本上通/下通商店街" },
            { type: "stay", time: "住宿", text: "Dormy Inn Kumamoto (續住)" }
        ]
    },
    {
        day: 6,
        date: "2/3 (Tue)",
        title: "歷史：熊本城到太宰府",
        quote: "這裡是武士住的地方嗎？",
        activities: [
            { type: "play", time: "上午", text: "熊本城 & 櫻之馬場" },
            { type: "play", time: "下午", text: "太宰府天滿宮 (吃梅枝餅!)" },
            { type: "play", time: "移動", text: "前往福岡中洲" },
            { type: "stay", time: "住宿", text: "Mitsui Garden Hotel Fukuoka Nakasu" }
        ]
    },
    {
        day: 7,
        date: "2/4 (Wed)",
        title: "唐津/糸島：透明烏賊與夕陽",
        quote: "烏賊～ 透明的烏賊～",
        activities: [
            { type: "eat", time: "上午", text: "呼子朝市：現殺活烏賊刺身" },
            { type: "play", time: "下午", text: "糸島 Sunset Road 駕駛" },
            { type: "play", time: "打卡", text: "櫻井二見浦 (白色鳥居夫婦岩)" },
            { type: "stay", time: "住宿", text: "Mitsui Garden Hotel Fukuoka Nakasu" }
        ]
    },
    {
        day: 8,
        date: "2/5 (Thu)",
        title: "北九州：Outlet 與還車",
        quote: "美冴說這裡可以買很多東西...",
        activities: [
            { type: "play", time: "白天", text: "THE OUTLETS KITAKYUSHU" },
            { type: "play", time: "18:00前", text: "還車：Toyota Rent a Car 博多站東" },
            { type: "eat", time: "晚餐", text: "中洲屋台 (拉麵與關東煮)" },
            { type: "stay", time: "住宿", text: "Mitsui Garden Hotel Fukuoka Nakasu" }
        ]
    },
    {
        day: 9,
        date: "2/6 (Fri)",
        title: "再會九州",
        quote: "回家了～ 下次再來玩！",
        activities: [
            { type: "play", time: "09:40", text: "抵達機場報到" },
            { type: "play", time: "11:40", text: "飛機起飛 (CI139)" }
        ]
    }
];

// 初始化程式
document.addEventListener('DOMContentLoaded', () => {
    const navContainer = document.getElementById('day-nav');
    const displayContainer = document.getElementById('itinerary-display');
    const quoteBox = document.getElementById('daily-quote');

    // 建立導航按鈕
    itineraryData.forEach((item, index) => {
        const btn = document.createElement('button');
        btn.className = 'day-btn';
        btn.innerHTML = `Day ${item.day}<br><span style="font-size:0.8em">${item.date}</span>`;
        btn.onclick = () => loadDay(index);
        navContainer.appendChild(btn);
    });

    // 載入特定天數的函式
    function loadDay(index) {
        const data = itineraryData[index];
        
        // 更新按鈕狀態 (變色)
        document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.day-btn')[index].classList.add('active');

        // 更新蠟筆小新語錄
        quoteBox.innerText = `小新說：「${data.quote}」`;
        quoteBox.style.backgroundColor = getRandomColor(); // 隨機換背景色

        // 生成行程 HTML
        let html = `
            <h2 style="margin-top:0">${data.title}</h2>
            <div class="activity-list">
        `;

        data.activities.forEach(act => {
            const icon = getIcon(act.type);
            html += `
                <div class="activity-item">
                    <span class="tag ${act.type}">${act.time}</span>
                    <span style="flex:1">${act.text}</span>
                    <span style="font-size:1.5rem">${icon}</span>
                </div>
            `;
        });

        html += `</div>`;
        
        // 渲染畫面並加上簡單淡入動畫
        displayContainer.innerHTML = html;
        displayContainer.style.opacity = 0;
        setTimeout(() => displayContainer.style.opacity = 1, 50);
    }

    // 輔助函式：根據類型給 icon
    function getIcon(type) {
        if (type === 'eat') return '🍱';
        if (type === 'play') return '📸';
        if (type === 'stay') return '💤';
        return '✨';
    }

    // 輔助函式：隨機產生蠟筆色
    function getRandomColor() {
        const colors = ['#FF4747', '#FFD93D', '#4D96FF', '#6BCB77'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
});
