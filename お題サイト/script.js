const odaiData = [
    "尊敬する人",
    "趣味",
    "飼っている生き物",
    "一万円札の肖像画",
    "理想の休日の過ごし方",
    "好きな食べ物",
    "将来の夢",
    "好きな映画",
    "旅行したい場所",
    "子供の頃の思い出",
    "実は苦手なもの",
    "好きな季節",
    "理想のデート",
    "好きな音楽ジャンル",
    "最近ハマっていること",
    "カバンの中に必ず入っているもの",
    "座右の銘",
    "学生時代の部活動",
    "初めて聴いた曲",
    "出身地",
    "ついつい夜更かししてしまう理由",
    "一番落ち着く場所",
    "生まれで初めて発した言葉",
    "隣に住んでる人",
    "最近の悩み",
    "夢中になること",
    "好きな色",
    "最近読んだ本",
    "好きな動物",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
];

let currentIndex = 0;

const selectionScreen = document.getElementById('selection-screen');
const displayScreen = document.getElementById('display-screen');
const odaiList = document.getElementById('odai-list');
const currentOdaiText = document.getElementById('current-odai');
const odaiCounter = document.getElementById('odai-counter'); // 追加

// 一覧の生成
odaiData.forEach((odai, index) => {
    const li = document.createElement('li');
    li.className = 'list-item';
    li.innerHTML = `<span>${odai}</span><button class="select-btn">選択</button>`;
    li.querySelector('.select-btn').onclick = () => {
        currentIndex = index;
        updateDisplay();
        selectionScreen.classList.add('hidden');
        displayScreen.classList.remove('hidden');
    };
    odaiList.appendChild(li);
});

// お題表示とカウンターを更新する関数
function updateDisplay() {
    currentOdaiText.textContent = odaiData[currentIndex];
    // 「現在の番号 / 全体数」を表示 (インデックスは0から始まるので+1する)
    odaiCounter.textContent = `${currentIndex + 1} / ${odaiData.length}`;
}

// 前へボタン
document.getElementById('prev-btn').onclick = () => {
    currentIndex = (currentIndex - 1 + odaiData.length) % odaiData.length;
    updateDisplay();
};

// 次へボタン
document.getElementById('next-btn').onclick = () => {
    currentIndex = (currentIndex + 1) % odaiData.length;
    updateDisplay();
};

// 一覧に戻る
document.getElementById('back-btn').onclick = () => {
    displayScreen.classList.add('hidden');
    selectionScreen.classList.remove('hidden');
};