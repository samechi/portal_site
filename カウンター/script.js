// HTMLの要素を取得
const counterNameElement = document.getElementById('counter-name');
const counterElement = document.getElementById('counter');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');
const nameInput = document.getElementById('name-input');
const saveNameBtn = document.getElementById('save-name-btn');

// サイコロ関連の要素を取得
const diceBtn = document.getElementById('dice-btn'); // 追加
const diceResultElement = document.getElementById('dice-result'); // 追加

let count = 0;

// カウントアップ機能
incrementBtn.addEventListener('click', () => {
    count++;
    counterElement.textContent = count;
});

// カウントダウン機能
decrementBtn.addEventListener('click', () => {
    if((count-1) < 0){
        count = 0;
    } else{count--;}
    counterElement.textContent = count;
});

// リセット機能
resetBtn.addEventListener('click', () => {
    count = 0;
    counterElement.textContent = count;
});

// 名前を保存する機能
saveNameBtn.addEventListener('click', () => {
    const newName = nameInput.value;
    if (newName) {
        counterNameElement.textContent = newName;
    }
});

// サイコロ機能（変更）
diceBtn.addEventListener('click', () => {
    // 1から6までのランダムな整数を生成
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    // サイコロの結果を新しい要素に表示
    diceResultElement.textContent = diceRoll;
});