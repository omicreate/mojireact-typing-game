const rawPrompts = [
  { word: "二度寝", reading: "にどね", mood: "sleep" },
  { word: "寝坊", reading: "ねぼう", mood: "panic" },
  { word: "充電切れ", reading: "じゅうでんぎれ", mood: "panic" },
  { word: "既読無視", reading: "きどくむし", mood: "quiet" },
  { word: "通知多すぎ", reading: "つうちおおすぎ", mood: "panic" },
  { word: "給料日", reading: "きゅうりょうび", mood: "money" },
  { word: "月曜日", reading: "げつようび", mood: "heavy" },
  { word: "金曜日", reading: "きんようび", mood: "happy" },
  { word: "電車遅延", reading: "でんしゃちえん", mood: "glitch" },
  { word: "忘れ物", reading: "わすれもの", mood: "faint" },
  { word: "お腹すいた", reading: "おなかすいた", mood: "hungry" },
  { word: "眠すぎる", reading: "ねむすぎる", mood: "sleep" },
  { word: "あと五分", reading: "あとごふん", mood: "sleep" },
  { word: "推し活", reading: "おしかつ", mood: "pop" },
  { word: "神対応", reading: "かみたいおう", mood: "shine" },
  { word: "無理せず", reading: "むりせず", mood: "calm" },
  { word: "それな", reading: "それな", mood: "pop" },
  { word: "わかる", reading: "わかる", mood: "calm" },
  { word: "最高", reading: "さいこう", mood: "happy" },
  { word: "大丈夫", reading: "だいじょうぶ", mood: "calm" },
  { word: "存在感薄い", reading: "そんざいかんうすい", mood: "faint" },
  { word: "写真詐欺", reading: "しゃしんさぎ", mood: "glitch" },
  { word: "やっぱり無理", reading: "やっぱりむり", mood: "heavy" },
  { word: "びっくりした", reading: "びっくりした", mood: "panic" },
  { word: "爆速返信", reading: "ばくそくへんしん", mood: "speed" },
  { word: "急ブレーキ", reading: "きゅうぶれーき", mood: "brake" },
  { word: "声でかい", reading: "こえでかい", mood: "loud" },
  { word: "小声で相談", reading: "こごえでそうだん", mood: "secret" },
  { word: "ごちゃごちゃ", reading: "ごちゃごちゃ", mood: "messy" },
  { word: "すっきり", reading: "すっきり", mood: "clean" },
  { word: "雨の日", reading: "あめのひ", mood: "rain" },
  { word: "晴れた", reading: "はれた", mood: "shine" },
  { word: "冷静", reading: "れいせい", mood: "ice" },
  { word: "熱すぎる", reading: "あつすぎる", mood: "fire" },
  { word: "ふわふわ", reading: "ふわふわ", mood: "float" },
  { word: "カチカチ", reading: "かちかち", mood: "hard" },
  { word: "ラッキー", reading: "らっきー", mood: "lucky" },
  { word: "集中モード", reading: "しゅうちゅうもーど", mood: "focus" },
  { word: "限界突破", reading: "げんかいとっぱ", mood: "burst" },
  { word: "黒歴史", reading: "くろれきし", mood: "dark" },
  { word: "まぶしい", reading: "まぶしい", mood: "shine" },
  { word: "ひんやり", reading: "ひんやり", mood: "ice" },
  { word: "バタバタ", reading: "ばたばた", mood: "messy" },
  { word: "しょんぼり", reading: "しょんぼり", mood: "heavy" },
  { word: "静かな夜", reading: "しずかなよる", mood: "quiet" },
  { word: "ドキドキ", reading: "どきどき", mood: "panic" },
  { word: "きらきら", reading: "きらきら", mood: "shine" },
  { word: "ぐるぐる", reading: "ぐるぐる", mood: "messy" },
  { word: "余裕", reading: "よゆう", mood: "calm" },
  { word: "激アツ", reading: "げきあつ", mood: "fire" },
  { word: "そっと閉じる", reading: "そっととじる", mood: "secret" },
  { word: "光の速さ", reading: "ひかりのはやさ", mood: "speed" },
  { word: "心が無", reading: "こころがむ", mood: "faint" },
  { word: "大混乱", reading: "だいこんらん", mood: "glitch" },
  { word: "深呼吸", reading: "しんこきゅう", mood: "calm" },
  { word: "腹ペコ", reading: "はらぺこ", mood: "hungry" },
  { word: "寝癖爆発", reading: "ねぐせばくはつ", mood: "panic" },
  { word: "朝から勝ち", reading: "あさからかち", mood: "happy" },
  { word: "予定パンパン", reading: "よていぱんぱん", mood: "heavy" },
  { word: "財布軽い", reading: "さいふかるい", mood: "faint" },
  { word: "謎の余裕", reading: "なぞのよゆう", mood: "calm" },
  { word: "秒で理解", reading: "びょうでりかい", mood: "speed" },
  { word: "目がしょぼい", reading: "めがしょぼい", mood: "sleep" },
  { word: "通知ゼロ", reading: "つうちぜろ", mood: "quiet" },
  { word: "急に真顔", reading: "きゅうにまがお", mood: "ice" },
  { word: "頭真っ白", reading: "あたままっしろ", mood: "faint" },
  { word: "ひらめいた", reading: "ひらめいた", mood: "shine" },
  { word: "神引き", reading: "かみびき", mood: "lucky" },
  { word: "沼った", reading: "ぬまった", mood: "heavy" },
  { word: "優勝した", reading: "ゆうしょうした", mood: "happy" },
  { word: "現実逃避", reading: "げんじつとうひ", mood: "float" },
  { word: "締切前夜", reading: "しめきりぜんや", mood: "panic" },
  { word: "脳内会議", reading: "のうないかいぎ", mood: "messy" },
  { word: "やる気満タン", reading: "やるきまんたん", mood: "burst" },
  { word: "水分補給", reading: "すいぶんほきゅう", mood: "clean" },
  { word: "空腹注意", reading: "くうふくちゅうい", mood: "hungry" },
  { word: "秒で既読", reading: "びょうできどく", mood: "speed" },
  { word: "全力疾走", reading: "ぜんりょくしっそう", mood: "speed" },
  { word: "急に眠い", reading: "きゅうにねむい", mood: "sleep" },
  { word: "雨上がり", reading: "あめあがり", mood: "rain" },
  { word: "風吹いた", reading: "かぜふいた", mood: "float" },
  { word: "音量注意", reading: "おんりょうちゅうい", mood: "loud" },
  { word: "静かに拍手", reading: "しずかにはくしゅ", mood: "quiet" },
  { word: "やさしい世界", reading: "やさしいせかい", mood: "calm" },
  { word: "火力高め", reading: "かりょくたかめ", mood: "fire" },
  { word: "氷の視線", reading: "こおりのしせん", mood: "ice" },
  { word: "闇落ち", reading: "やみおち", mood: "dark" },
  { word: "バグった", reading: "ばぐった", mood: "glitch" },
  { word: "きれい好き", reading: "きれいずき", mood: "clean" },
  { word: "突然の光", reading: "とつぜんのひかり", mood: "shine" },
  { word: "重たい空気", reading: "おもたいくうき", mood: "heavy" },
  { word: "軽いノリ", reading: "かるいのり", mood: "pop" },
  { word: "秘密兵器", reading: "ひみつへいき", mood: "secret" },
  { word: "財布復活", reading: "さいふふっかつ", mood: "money" },
  { word: "歓喜の舞", reading: "かんきのまい", mood: "happy" },
  { word: "深夜テンション", reading: "しんやてんしょん", mood: "pop" },
  { word: "無音の圧", reading: "むおんのあつ", mood: "quiet" },
  { word: "焦げそう", reading: "こげそう", mood: "fire" },
  { word: "スローモーション", reading: "すろーもーしょん", mood: "float" },
  { word: "電池復活", reading: "でんちふっかつ", mood: "shine" }
];

const prompts = rawPrompts.map((prompt) => ({
  ...prompt,
  targets: RomajiEngine.buildRoutes(prompt.reading)
}));

const gameSeconds = 60;

const els = {
  canvas: document.querySelector("#fxCanvas"),
  game: document.querySelector(".game"),
  startPanel: document.querySelector("#startPanel"),
  playPanel: document.querySelector("#playPanel"),
  resultPanel: document.querySelector("#resultPanel"),
  startButton: document.querySelector("#startButton"),
  retryButton: document.querySelector("#retryButton"),
  shareButton: document.querySelector("#shareButton"),
  timeText: document.querySelector("#timeText"),
  scoreText: document.querySelector("#scoreText"),
  accuracyText: document.querySelector("#accuracyText"),
  wordText: document.querySelector("#wordText"),
  readingText: document.querySelector("#readingText"),
  romajiText: document.querySelector("#romajiText"),
  routeHint: document.querySelector("#routeHint"),
  typingInput: document.querySelector("#typingInput"),
  messageText: document.querySelector("#messageText"),
  resultTitle: document.querySelector("#resultTitle"),
  resultText: document.querySelector("#resultText"),
  resultWords: document.querySelector("#resultWords"),
  resultScore: document.querySelector("#resultScore"),
  resultAccuracy: document.querySelector("#resultAccuracy"),
  sharePreview: document.querySelector("#sharePreview")
};

const ctx = els.canvas.getContext("2d");
let state = createInitialState();
let particles = [];
let timerId = null;
let lastResult = null;

function createInitialState() {
  return {
    active: false,
    prompt: null,
    promptIndex: 0,
    score: 0,
    typed: 0,
    misses: 0,
    completed: 0,
    remaining: gameSeconds,
    startedAt: 0,
    order: shuffle([...prompts])
  };
}

function shuffle(items) {
  for (let i = items.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
}

function startGame() {
  state = createInitialState();
  state.active = true;
  state.startedAt = Date.now();
  els.startPanel.hidden = true;
  els.resultPanel.hidden = true;
  els.playPanel.hidden = false;
  els.typingInput.value = "";
  nextPrompt();
  showMessage("入力方法は自由です", "");
  updateStats();
  els.typingInput.focus();
  clearInterval(timerId);
  timerId = setInterval(tick, 200);
}

function tick() {
  const elapsed = Math.floor((Date.now() - state.startedAt) / 1000);
  state.remaining = Math.max(0, gameSeconds - elapsed);
  updateStats();
  if (state.remaining <= 0) finishGame();
}

function nextPrompt() {
  if (state.promptIndex >= state.order.length) {
    state.order = shuffle([...prompts]);
    state.promptIndex = 0;
  }
  state.prompt = state.order[state.promptIndex];
  state.promptIndex += 1;
  setMood(state.prompt.mood);
  els.wordText.textContent = state.prompt.word;
  els.readingText.textContent = state.prompt.reading;
  els.typingInput.value = "";
  renderRomaji("");
}

function setMood(mood) {
  const moodName = mood ?? "normal";
  els.game.className = els.game.className
    .split(" ")
    .filter((name) => !name.startsWith("mood-"))
    .join(" ");
  els.game.classList.add(`mood-${moodName}`);
  els.game.dataset.mood = moodName;
  document.body.dataset.mood = moodName;
}

function renderRomaji(input) {
  const candidates = getCandidates(input);
  const target = getGuideTarget(input, candidates);
  const done = target.slice(0, input.length);
  const next = target.slice(input.length, input.length + 1);
  const rest = target.slice(input.length + 1);
  els.romajiText.innerHTML = [
    `<span class="done">${escapeHtml(done)}</span>`,
    `<span class="next">${escapeHtml(next)}</span>`,
    `<span class="rest">${escapeHtml(rest)}</span>`
  ].join("");
  els.routeHint.textContent = getRouteHint(input, candidates);
}

function getCandidates(input) {
  const targets = state.prompt?.targets ?? [];
  return targets.filter((target) => target.startsWith(input));
}

function getGuideTarget(input, candidates) {
  if (candidates.length > 0) return candidates[0];
  return state.prompt?.targets?.[0] ?? "";
}

function getRouteHint(input, candidates) {
  const targets = state.prompt?.targets ?? [];
  if (targets.length <= 1) return "この読みを打てばOK";
  if (!input) return `入力候補: ${targets.slice(0, 3).join(" / ")}${targets.length > 3 ? " ..." : ""}`;
  if (candidates.length <= 1) return "この打ち方でOK";
  return `この打ち方でOK / 残り${candidates.length}通り`;
}

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  })[char]);
}

function handleInput() {
  if (!state.active) return;
  const raw = els.typingInput.value.toLowerCase();
  const candidates = getCandidates(raw);
  state.typed += 1;

  if (candidates.length === 0) {
    state.misses += 1;
    els.typingInput.value = raw.slice(0, -1);
    showMessage("ミス", "bad");
    hitEffect(false);
    updateStats();
    return;
  }

  renderRomaji(raw);
  hitEffect(true);

  if (state.prompt.targets.includes(raw)) {
    state.completed += 1;
    state.score += Math.max(50, raw.length * 12);
    showMessage("OK", "good");
    nextPrompt();
  } else {
    showMessage("入力中", "");
  }

  updateStats();
}

function showMessage(text, className) {
  els.messageText.textContent = text;
  els.messageText.className = `message ${className}`.trim();
}

function updateStats() {
  const accuracy = state.typed === 0
    ? 100
    : Math.max(0, Math.round(((state.typed - state.misses) / state.typed) * 100));
  els.timeText.textContent = String(state.remaining);
  els.scoreText.textContent = String(state.score);
  els.accuracyText.textContent = `${accuracy}%`;
}

function finishGame() {
  if (!state.active) return;
  state.active = false;
  clearInterval(timerId);
  const accuracy = state.typed === 0
    ? 100
    : Math.max(0, Math.round(((state.typed - state.misses) / state.typed) * 100));
  const rank = getRank(state.completed, accuracy);
  lastResult = {
    accuracy,
    completed: state.completed,
    misses: state.misses,
    rank,
    score: state.score
  };
  els.playPanel.hidden = true;
  els.resultPanel.hidden = false;
  els.resultTitle.textContent = rank;
  els.resultText.textContent = getResultCatch(rank);
  els.resultWords.textContent = String(state.completed);
  els.resultScore.textContent = String(state.score);
  els.resultAccuracy.textContent = `${accuracy}%`;
  els.sharePreview.textContent = createShareText();
  els.shareButton.textContent = "結果をコピー";
  els.retryButton.focus();
}

function getRank(completed, accuracy) {
  if (completed >= 24 && accuracy >= 95) return "リアクト神";
  if (completed >= 18 && accuracy >= 90) return "モジ覚醒";
  if (completed >= 12 && accuracy >= 85) return "変化の達人";
  if (completed >= 6) return "反応よし";
  return "まだ静か";
}

function getResultCatch(rank) {
  const catches = {
    リアクト神: "文字が完全に反応している。",
    モジ覚醒: "かなり光った。変化が気持ちいい。",
    変化の達人: "ことばの表情をしっかり引き出した。",
    反応よし: "いい反応。次はもっと派手にいける。",
    まだ静か: "まだ静か。次は文字をもっと動かそう。"
  };
  return catches[rank] ?? "また挑戦しよう。";
}

function createShareText() {
  if (!lastResult) return "";
  return [
    "モジリアクトをやった！",
    `称号: ${lastResult.rank}`,
    `スコア: ${lastResult.score}点`,
    `${lastResult.completed}語完成 / 正確率 ${lastResult.accuracy}%`,
    "#モジリアクト"
  ].join("\n");
}

async function copyResult() {
  const text = createShareText();
  if (!text) return;

  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.append(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }

  els.shareButton.textContent = "コピーしました";
}

function resizeCanvas() {
  const ratio = window.devicePixelRatio || 1;
  els.canvas.width = Math.floor(window.innerWidth * ratio);
  els.canvas.height = Math.floor(window.innerHeight * ratio);
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
}

function hitEffect(success) {
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight * 0.48;
  const mood = state.prompt?.mood ?? "normal";
  const color = success ? getMoodColor(mood) : "#ff6f89";
  const burst = getMoodBurst(mood);
  for (let i = 0; i < burst.count; i += 1) {
    const angle = Math.random() * Math.PI * 2;
    const speed = burst.speed * (0.45 + Math.random());
    particles.push({
      x: cx,
      y: cy,
      vx: Math.cos(angle) * speed + burst.wind,
      vy: Math.sin(angle) * speed * burst.yScale,
      life: burst.life,
      maxLife: burst.life,
      size: burst.size,
      color
    });
  }
  document.body.classList.remove("flash");
  void document.body.offsetWidth;
  document.body.classList.add("flash");
}

function getMoodColor(mood) {
  const colors = {
    brake: "#ff6f89",
    burst: "#fff1a6",
    clean: "#dffcff",
    dark: "#a89cff",
    faint: "#d5e5ee",
    fire: "#ff8a4d",
    float: "#e0d6ff",
    focus: "#58dcff",
    hard: "#d7dde6",
    ice: "#a7ecff",
    loud: "#fff1a6",
    lucky: "#9effb3",
    messy: "#ff9fde",
    money: "#9effb3",
    panic: "#ff6f89",
    rain: "#8ebdff",
    secret: "#bda7ff",
    shine: "#fff1a6",
    speed: "#58dcff"
  };
  return colors[mood] ?? "#58dcff";
}

function getMoodBurst(mood) {
  const burst = {
    count: 8,
    life: 22,
    size: 18,
    speed: 6,
    wind: 0,
    yScale: 0.55
  };
  if (mood === "speed") return { ...burst, count: 14, life: 16, speed: 10, wind: 7, yScale: 0.28 };
  if (mood === "brake") return { ...burst, count: 12, life: 28, speed: 4, wind: -6, yScale: 0.35 };
  if (mood === "float") return { ...burst, count: 10, life: 38, speed: 2.5, wind: 0, yScale: 1.2 };
  if (mood === "rain") return { ...burst, count: 16, life: 26, speed: 4, wind: -1, yScale: 1.8 };
  if (mood === "burst" || mood === "fire") return { ...burst, count: 18, life: 20, speed: 9, wind: 0, yScale: 0.9 };
  if (mood === "faint" || mood === "secret") return { ...burst, count: 6, life: 30, speed: 3, wind: 0, yScale: 0.45 };
  return burst;
}

function animate() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  particles = particles.filter((p) => p.life > 0);
  for (const p of particles) {
    p.x += p.vx;
    p.y += p.vy;
    p.life -= 1;
    ctx.globalAlpha = Math.max(0, p.life / (p.maxLife ?? 22));
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x, p.y, p.size ?? 18, 3);
  }
  ctx.globalAlpha = 1;
  requestAnimationFrame(animate);
}

els.startButton.addEventListener("click", startGame);
els.retryButton.addEventListener("click", startGame);
els.shareButton.addEventListener("click", copyResult);
els.typingInput.addEventListener("input", handleInput);
window.addEventListener("resize", resizeCanvas);
window.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !state.active) startGame();
});

resizeCanvas();
animate();
