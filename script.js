// 1. 旅行必備清單資料
const checklistData = [
    "護照", 
    "手機", 
    "日幣 (現金)", 
    "行動電源", 
    "台灣駕照", 
    "駕照日文譯本", 
    "ESIM / 網卡"
];

// 2. 行程資料 (已新增 Mapcode, Phone, Image 欄位)
// 你可以在這裡填入真實的 MapCode 和圖片網址
const itineraryData = [
    {
        day: 1,
        date: "1/29 (Thu)",
        title: "福岡：城市脈動與明太子",
        quote: "肚子餓了... 吃法國麵包吧！",
        activities: [
            { type: "play", time: "12:00", text: "抵達福岡機場 (CI138)", mapcode: "13 294 542*11", phone: "092-621-6059", image: "https://via.placeholder.com/400x200?text=Fukuoka+Airport" },
            { type: "eat", time: "下午", text: "Full Full 明太子法國麵包", mapcode: "13 495 123*45", phone: "待更新", image: "https://via.placeholder.com/400x200?text=Full+Full+Bakery" },
            { type: "play", time: "傍晚", text: "川端通商店街散策", mapcode: "13 318 642*55", phone: "待更新", image: "" },
            { type: "eat", time: "晚餐", text: "藥院燒肉 (已預約)", mapcode: "13 288 333*22", phone: "092-123-4567", image: "" },
            { type: "stay", time: "住宿", text: "Nishitetsu Hotel Croom Hakata Gion", mapcode: "13 319 555*11", phone: "092-111-2222", image: "" }
        ]
    },
    {
        day: 2,
        date: "1/30 (Fri)",
        title: "福岡：山海與運河",
        quote: "動感超人～ 變身！(去搭船)",
        activities: [
            { type: "play", time: "10:35", text: "渡輪前往海之中道", mapcode: "13 318 123*88", phone: "", image: "" },
            { type: "play", time: "白天", text: "海濱公園單車遊", mapcode: "13 529 777*14", phone: "092-603-1111", image: "https://via.placeholder.com/400x200?text=Park+Cycling" },
            { type: "play", time: "晚間", text: "博多運河城 (水舞秀)", mapcode: "13 318 642*12", phone: "092-282-2525", image: "" },
            { type: "stay", time: "住宿", text: "Nishitetsu Hotel Croom Hakata Gion", mapcode: "", phone: "", image: "" }
        ]
    },
    {
        day: 3,
        date: "1/31 (Sat)",
        title: "由布院：霧氣與甜味",
        quote: "開車車～ 叭叭！(記得領ETC卡)",
        activities: [
            { type: "play", time: "09:00", text: "取車: Toyota Rent a Car", mapcode: "13 320 123*44", phone: "092-411-0100", image: "" },
            { type: "eat", time: "途中", text: "ULUU Farm 採草莓", mapcode: "374 123 456*78", phone: "094-123-4567", image: "" },
            { type: "play", time: "下午", text: "湯之坪街道散步", mapcode: "269 358 123*56", phone: "", image: "" },
            { type: "stay", time: "住宿", text: "湯布院山水館", mapcode: "269 359 456*12", phone: "0977-84-2101", image: "" }
        ]
    },
    {
        day: 4,
        date: "2/1 (Sun)",
        title: "阿蘇：火山口的壯麗",
        quote: "哇～ 是火山耶！好大的屁屁！",
        activities: [
            { type: "play", time: "08:00", text: "金鱗湖晨霧", mapcode: "269 359 111*22", phone: "", image: "" },
            { type: "play", time: "中午", text: "阿蘇火山口 & 草千里", mapcode: "256 456 789*00", phone: "0967-34-0411", image: "" },
            { type: "eat", time: "午餐", text: "阿蘇赤牛丼", mapcode: "256 123 789*55", phone: "", image: "" },
            { type: "stay", time: "住宿", text: "Dormy Inn Kumamoto", mapcode: "29 459 123*88", phone: "096-311-5489", image: "" }
        ]
    },
    {
        day: 5,
        date: "2/2 (Mon)",
        title: "天草：追逐野生海豚",
        quote: "海豚～ 海豚～ 跟你一樣滑溜溜～",
        activities: [
            { type: "play", time: "上午", text: "前往天草 (開車)", mapcode: "", phone: "", image: "" },
            { type: "play", time: "11:30", text: "天草海鮮蔵 (海豚觀賞)", mapcode: "474 123 456*99", phone: "0969-22-1234", image: "" },
            { type: "eat", time: "午餐", text: "海鮮BBQ", mapcode: "", phone: "", image: "" },
            { type: "stay", time: "住宿", text: "Dormy Inn Kumamoto", mapcode: "", phone: "", image: "" }
        ]
    },
    {
        day: 6,
        date: "2/3 (Tue)",
        title: "歷史：熊本城到太宰府",
        quote: "這裡是武士住的地方嗎？",
        activities: [
            { type: "play", time: "上午", text: "熊本城 & 櫻之馬場", mapcode: "29 489 123*55", phone: "096-352-5900", image: "" },
            { type: "play", time: "下午", text: "太宰府天滿宮", mapcode: "55 364 076*81", phone: "092-922-8225", image: "" },
            { type: "stay", time: "住宿", text: "Mitsui Garden Hotel", mapcode: "13 318 456*77", phone: "", image: "" }
        ]
    },
    {
        day: 7,
        date: "2/4 (Wed)",
        title: "唐津/糸島：透明烏賊",
        quote: "烏賊～ 透明的烏賊～",
        activities: [
            { type: "eat", time: "上午", text: "呼子朝市 (烏賊刺身)", mapcode: "182 123 456*00", phone: "0955-82-3421", image: "" },
            { type: "play", time: "下午", text: "櫻井二見浦 (夫婦岩)", mapcode: "224 123 456*77", phone: "", image: "" },
            { type: "stay", time: "住宿", text: "Mitsui Garden Hotel", mapcode: "", phone: "", image: "" }
        ]
    },
    {
        day: 8,
        date: "2/5 (Thu)",
        title: "北九州：Outlet 買買買",
        quote: "美冴說這裡可以買很多東西...",
        activities: [
            { type: "play", time: "白天", text: "THE OUTLETS KITAKYUSHU", mapcode: "16 123 456*88", phone: "", image: "" },
            { type: "play", time: "18:00", text: "還車 (博多站東)", mapcode: "13 320 123*44", phone: "", image: "" },
            { type: "eat", time: "晚餐", text: "中洲屋台", mapcode: "13 318 000*00", phone: "", image: "" }
        ]
    },
    {
        day: 9,
        date: "2/6 (Fri)",
        title: "再會九州",
        quote: "回家了～ 下次再來玩！",
        activities: [
            { type: "play", time: "09:40", text: "抵達機場報到", mapcode: "13 294 000*00", phone: "", image: "" },
            { type: "play", time: "11:40", text: "飛機起飛 (CI139)", mapcode: "", phone: "", image: "" }
        ]
    }
];

// 初始化程式
document.addEventListener('DOMContentLoaded', () => {
    const navContainer = document.getElementById('day-nav');
    const displayContainer = document.getElementById('itinerary-display');
    const quoteBox = document.getElementById('daily-quote');
    const checklistContainer = document.getElementById('checklist-container');

    // --- 1. 初始化必備清單 ---
    checklistData.forEach(itemText => {
        const label = document.createElement('label');
        label.className = 'check-item';
        label.innerHTML = `
            <input type="checkbox"> 
            <span>${itemText}</span>
        `;
        checklistContainer.appendChild(label);
    });

    // --- 2. 建立日期導航按鈕 ---
    itineraryData.forEach((item, index) => {
        const btn = document.createElement('button');
        btn.className = 'day-btn';
        btn.innerHTML = `Day ${item.day}<br><span style="font-size:0.8em">${item.date}</span>`;
        btn.onclick = () => loadDay(index);
        navContainer.appendChild(btn);
    });

    // --- 3. 載入特定天數的函式 ---
    function loadDay(index) {
        const data = itineraryData[index];
        
        // 更新按鈕狀態
        document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.day-btn')[index].classList.add('active');

        // 更新語錄
        quoteBox.innerText = `小新說：「${data.quote}」`;
        quoteBox.style.backgroundColor = getRandomColor();

        // 生成行程 HTML (包含隱藏的詳細資訊)
        let html = `
            <h2 style="margin-top:0">${data.title}</h2>
            <div class="activity-list">
        `;

        data.activities.forEach(act => {
            const icon = getIcon(act.type);
            
            // 判斷是否有詳細資訊需要顯示
            const hasDetails = act.mapcode || act.phone || act.image;
            const hintText = hasDetails ? '<span style="font-size:0.7em; color:#888;">(點我看詳情)</span>' : '';

            // 圖片區塊
            const imgHtml = act.image ? `<img src="${act.image}" class="detail-img" alt="景點圖片">` : '';
            
            // Mapcode & Phone 區塊
            const mapcodeHtml = act.mapcode ? `<div class="detail-row">📍 MapCode: <span class="mapcode-box">${act.mapcode}</span></div>` : '';
            const phoneHtml = act.phone ? `<div class="detail-row">📞 電話: ${act.phone}</div>` : '';

            html += `
                <div class="activity-item" onclick="this.classList.toggle('open')">
                    <div class="item-header">
                        <span class="tag ${act.type}">${act.time}</span>
                        <span style="flex:1">${act.text} ${hintText}</span>
                        <span style="font-size:1.5rem">${icon}</span>
                    </div>
                    <div class="item-details">
                        ${imgHtml}
                        ${mapcodeHtml}
                        ${phoneHtml}
                        ${!hasDetails ? '<div class="detail-row">暫無詳細資訊</div>' : ''}
                    </div>
                </div>
            `;
        });

        html += `</div>`;
        
        // 渲染畫面
        displayContainer.innerHTML = html;
        displayContainer.style.opacity = 0;
        setTimeout(() => displayContainer.style.opacity = 1, 50);
    }

    // 輔助函式
    function getIcon(type) {
        if (type === 'eat') return '🍱';
        if (type === 'play') return '📸';
        if (type === 'stay') return '💤';
        return '✨';
    }

    function getRandomColor() {
        const colors = ['#FF4747', '#FFD93D', '#4D96FF', '#6BCB77'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
});
