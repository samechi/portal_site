const grid = document.getElementById('grid');
const scoreSpan = document.getElementById('score-val');
const timerSpan = document.getElementById('timer-val');
const startBtn = document.getElementById('start-btn');
const message = document.getElementById('message');
const ruleModal = document.getElementById('rule-modal');
const closeRuleBtn = document.getElementById('close-rule-btn');

let score = 0;
let timeLeft = 30.0;
let gameActive = false;
let gameTimer;
let spawnTimeout;

// 16マスの生成
for (let i = 0; i < 16; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.onclick = () => handleInput(i);
    grid.appendChild(cell);
}
const cells = document.querySelectorAll('.cell');

closeRuleBtn.onclick = () => ruleModal.style.display = "none";

startBtn.onclick = () => {
    score = 0;
    timeLeft = 30.0;
    gameActive = true;
    updateUI();
    message.style.display = "none";
    startBtn.style.visibility = "hidden";
    spawnTarget();
    startTimer();
};

function spawnTarget() {
    if (!gameActive) return;
    cells.forEach(c => c.className = 'cell');

    const idx = Math.floor(Math.random() * 16);
    const rand = Math.random();
    
    if (rand < 0.15) cells[idx].classList.add('target-red');
    else if (rand < 0.25) cells[idx].classList.add('target-blue');
    else cells[idx].classList.add('target-yellow');

    let speed = Math.max(450, 1000 - (score * 12));
    clearTimeout(spawnTimeout);
    spawnTimeout = setTimeout(spawnTarget, speed);
}

function handleInput(idx) {
    if (!gameActive) return;
    const cell = cells[idx];

    if (cell.classList.contains('target-yellow')) {
        score++;
        spawnTarget();
    } else if (cell.classList.contains('target-blue')) {
        score += 3;
        timeLeft += 1.0;
        spawnTarget();
    } else if (cell.classList.contains('target-red')) {
        timeLeft -= 2.0;
        spawnTarget();
    } else {
        timeLeft -= 0.3; // 空振りペナルティ
    }
    updateUI();
}

function updateUI() {
    scoreSpan.textContent = score;
    timerSpan.textContent = Math.max(0, timeLeft).toFixed(1) + "s";
}

function startTimer() {
    clearInterval(gameTimer);
    gameTimer = setInterval(() => {
        timeLeft -= 0.1;
        updateUI();
        if (timeLeft <= 0) endGame();
    }, 100);
}

function endGame() {
    gameActive = false;
    clearInterval(gameTimer);
    clearTimeout(spawnTimeout);
    cells.forEach(c => c.className = 'cell');
    startBtn.style.visibility = "visible";
    startBtn.textContent = "RETRY";
    message.style.display = "block";
    message.innerHTML = `FINISH<br><span style="font-size:1.2rem; color:#888;">Score: ${score}</span>`;
}