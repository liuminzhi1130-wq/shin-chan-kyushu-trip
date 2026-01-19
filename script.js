// 1. 旅行必備清單資料
const checklistData = [
    "護照 (檢查效期)", 
    "手機 & 充電線", 
    "日幣現金 (約15萬)", 
    "行動電源", 
    "台灣駕照", 
    "駕照日文譯本", 
    "ESIM / 網卡",
    "ETC 卡 (取車時確認)",
    "牙刷/牙膏 (部分飯店環保不提供)"
];

// 2. 行程資料 (全行程圖片版)
const itineraryData = [
    {
        day: 1,
        date: "1/29 (Thu)",
        title: "福岡：城市脈動與明太子",
        quote: "肚子餓了... 先去吃那個明太子麵包吧！",
        activities: [
            { type: "play", time: "12:00", text: "抵達福岡機場 (CI138)", mapcode: "13 294 542*11", phone: "", image: "airport.jpg" },
            { type: "stay", time: "Check-in", text: "Nishitetsu Hotel Croom", mapcode: "-", phone: "092-413-5454", image: "hotel_croom.jpg" },
            { type: "eat", time: "下午", text: "Full Full 明太子法國麵包", mapcode: "-", phone: "092-292-7838", image: "fullfull.jpg" },
            { type: "play", time: "傍晚", text: "川端通商店街 & 櫛田神社", mapcode: "13 318 642*55", phone: "", image: "kawabata.jpg" },
            { type: "eat", time: "晚餐", text: "藥院燒肉 NIKUICHI (已預約)", mapcode: "-", phone: "092-522-4129", image: "nikuichi.jpg" }
        ]
    },
    {
        day: 2,
        date: "1/30 (Fri)",
        title: "福岡：山海與運河",
        quote: "動感超人～ 變身！(搭船去海之中道)",
        activities: [
            { type: "play", time: "10:35", text: "博多埠頭搭船 (往海之中道)", mapcode: "13 318 123*88", phone: "", image: "ferry.jpg" },
            { type: "play", time: "白天", text: "海之中道海濱公園 (騎單車)", mapcode: "13 881 297*66", phone: "092-603-1111", image: "park.jpg" },
            { type: "play", time: "晚間", text: "博多運河城 (水舞秀)", mapcode: "13 317 763*74", phone: "092-282-2525", image: "canalcity.jpg" },
            { type: "eat", time: "晚餐", text: "中洲屋台體驗", mapcode: "-", phone: "", image: "yatai.jpg" }
        ]
    },
    {
        day: 3,
        date: "1/31 (Sat)",
        title: "由布院：霧氣與甜味",
        quote: "開車車～ 叭叭！(記得領ETC卡)",
        activities: [
            { type: "play", time: "09:00", text: "取車: Toyota Rent a Car 博多站東", mapcode: "-", phone: "092-411-0100", image: "toyota.jpg" },
            { type: "eat", time: "途中", text: "ULUU Farm 採草莓吃到飽", mapcode: "374 123 456*78", phone: "請確認預約信", image: "strawberry.jpg" },
            { type: "play", time: "下午", text: "湯之坪街道 & 金鱗湖", mapcode: "269 359 583*03", phone: "0977-84-3111", image: "yufuin.jpg" },
            { type: "stay", time: "19:00前", text: "湯布院山水館 (Check-in)", mapcode: "269 328 633*45", phone: "0977-84-2101", image: "sansuikan.jpg" }
        ]
    },
    {
        day: 4,
        date: "2/1 (Sun)",
        title: "阿蘇：火山口的壯麗",
        quote: "哇～ 是火山耶！屁屁好熱！",
        activities: [
            { type: "play", time: "上午", text: "阿蘇火山博物館 & 草千里", mapcode: "256 456 770*85", phone: "0967-34-0131", image: "kusasenri.jpg" },
            { type: "play", time: "中午", text: "阿蘇中岳火山口", mapcode: "256 458 600*30", phone: "0967-34-1600", image: "crater.jpg" },
            { type: "eat", time: "午餐", text: "Imakin食堂 (赤牛丼)", mapcode: "256 685 024*41", phone: "0967-32-0031", image: "akaushi.jpg" },
            { type: "stay", time: "住宿", text: "Dormy Inn Kumamoto", mapcode: "29 459 468*88", phone: "096-311-5489", image: "dormy_kumamoto.jpg" }
        ]
    },
    {
        {
        day: 5,
        date: "2/2 (Mon)",
        title: "天草：追逐野生海豚",
        quote: "海豚～ 海豚～ 跟你一樣滑溜溜～",
        activities: [
            { type: "play", time: "上午", text: "前往天草 (車程約2小時)", mapcode: "-", phone: "-", image: "drive.jpg" },
            { type: "play", time: "11:30", text: "天草海鮮蔵 (海豚觀賞)", mapcode: "474 084 767*55", phone: "0969-52-7707", image: "amakusa.png" },
            { type: "eat", time: "午餐", text: "海鮮BBQ / 海鮮丼", mapcode: "-", phone: "-", image: "seafood.jpg" },
            { type: "play", time: "晚上", text: "熊本上下通商店街", mapcode: "29 460 385*22", phone: "-", image: "kumamoto_city.jpg" }
        ]
    },
        ]
    },
    {
        day: 6,
        date: "2/3 (Tue)",
        title: "歷史：熊本城到太宰府",
        quote: "這裡是武士住的地方嗎？",
        activities: [
            { type: "play", time: "上午", text: "熊本城 & 櫻之馬場", mapcode: "29 489 123*55", phone: "096-352-5900", image: "kumamoto_castle.jpg" },
            { type: "play", time: "下午", text: "太宰府天滿宮 (梅枝餅)", mapcode: "55 364 076*81", phone: "092-922-8225", image: "dazaifu.jpg" },
            { type: "stay", time: "住宿", text: "Mitsui Garden Hotel", mapcode: "-", phone: "092-263-5531", image: "hotel_mitsui.jpg" }
        ]
    },
    {
        day: 7,
        date: "2/4 (Wed)",
        title: "唐津/糸島：透明烏賊",
        quote: "烏賊～ 透明的烏賊～",
        activities: [
            { type: "eat", time: "上午", text: "呼子朝市 (烏賊刺身)", mapcode: "182 516 486*52", phone: "0955-82-3421", image: "squid.jpg" },
            { type: "play", time: "下午", text: "糸島：櫻井二見浦 (夫婦岩)", mapcode: "224 788 304*77", phone: "092-327-0317", image: "futamigaura.jpg" },
            { type: "play", time: "打卡", text: "棕櫚樹鞦韆 (Palm Beach)", mapcode: "224 788 243*33", phone: "-", image: "palm_swing.jpg" }
        ]
    },
    {
        day: 8,
        date: "2/5 (Thu)",
        title: "北九州：Outlet 買買買",
        quote: "美冴說這裡可以買很多東西...",
        activities: [
            { type: "play", time: "白天", text: "THE OUTLETS KITAKYUSHU", mapcode: "16 345 581*25", phone: "093-663-7251", image: "outlet.jpg" },
            { type: "play", time: "18:00前", text: "還車：Toyota Rent a Car 博多站東", mapcode: "-", phone: "092-411-0100", image: "return_car.jpg" },
            { type: "eat", time: "晚餐", text: "博多拉麵 / 居酒屋", mapcode: "-", phone: "-", image: "ramen.jpg" }
        ]
    },
    {
        day: 9,
        date: "2/6 (Fri)",
        title: "再會九州",
        quote: "回家了～ 下次再來玩！",
        activities: [
            { type: "play", time: "09:40", text: "抵達機場報到", mapcode: "13 294 542*11", phone: "-", image: "airport_checkin.jpg" },
            { type: "play", time: "11:40", text: "飛機起飛 (CI139)", mapcode: "-", phone: "-", image: "plane.jpg" }
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
    checklistData.forEach((itemText, index) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'check-item';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `check-${index}`;
        
        // 讀取 localStorage 狀態
        if (localStorage.getItem(`check-${index}`) === 'true') {
            checkbox.checked = true;
        }

        // 監聽勾選事件
        checkbox.addEventListener('change', (e) => {
            localStorage.setItem(`check-${index}`, e.target.checked);
        });

        const label = document.createElement('label');
        label.htmlFor = `check-${index}`;
        label.innerText = itemText;

        wrapper.appendChild(checkbox);
        wrapper.appendChild(label);
        checklistContainer.appendChild(wrapper);
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

        // 生成行程 HTML
        let html = `
            <h2 style="margin-top:0">${data.title}</h2>
            <div class="activity-list">
        `;

        data.activities.forEach(act => {
            const icon = getIcon(act.type);
            
            // 判斷詳細資訊
            const hasDetails = act.mapcode || act.phone || act.image;
            const hintText = hasDetails ? '<span style="font-size:0.7em; color:#888; margin-left:5px;">(點擊展開)</span>' : '';

            // 圖片區塊 (加入 onerror 處理：如果找不到圖片，就先隱藏)
            const imgHtml = act.image ? `<img src="${act.image}" class="detail-img" alt="${act.text}" onerror="this.style.display='none'">` : '';
            
            // Mapcode & Phone 區塊
            const mapcodeHtml = act.mapcode && act.mapcode !== '-' ? `<div class="detail-row">📍 MapCode: <span class="mapcode-box">${act.mapcode}</span></div>` : '';
            const phoneHtml = act.phone ? `<div class="detail-row">📞 電話: <a href="tel:${act.phone}">${act.phone}</a></div>` : '';

            html += `
                <div class="activity-item" onclick="this.classList.toggle('open')">
                    <div class="item-header">
                        <span class="tag ${act.type}">${act.time}</span>
                        <span style="flex:1; font-weight:bold;">${act.text} ${hintText}</span>
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

