// === Translations ===
const translations = {
  ru: {
    settings_title: "Настройка игры",
    element_count: "Количество элементов:",
    display_mode: "Тип элементов:",
    memory_time_mode: "Время запоминания:",
    play_time_mode: "Время на ответ:",
    no_time: "Без ограничения",
    with_time: "С таймером",
    seconds: "Секунды:",
    start_game: "Начать игру",
    exit: "Выход",
    memory_screen: "Экран запоминания",
    memory_done: "Запомнил — начать",
    play_screen: "Игра",
    check_answer: "Проверка",
    drag_instruction: "Перетащите элементы в правильном порядке:",
    options_label: "Варианты:",
    results_title: "Поздравляем!",
    success_message: "Ты молодец!",
    elements_label: "Элементов:",
    attempts_label: "Попыток:",
    new_game: "Новая игра",
    change_settings: "Изменить настройки",
    confirm_exit: "Завершить игру?",
    unsaved: "Текущий прогресс не сохранится.",
    yes_exit: "Да, выйти",
    cancel: "Отмена",
    display_modes: {
      images: "Только картинки",
      words: "Только слова",
      both: "Картинки + Слова"
    }
  },
  ua: {
    settings_title: "Налаштування гри",
    element_count: "Кількість елементів:",
    display_mode: "Тип елементів:",
    memory_time_mode: "Час запам'ятовування:",
    play_time_mode: "Час на відповідь:",
    no_time: "Без обмеження",
    with_time: "З таймером",
    seconds: "Секунди:",
    start_game: "Почати гру",
    exit: "Вихід",
    memory_screen: "Екран запам'ятовування",
    memory_done: "Запам'ятав — почати",
    play_screen: "Гра",
    check_answer: "Перевірка",
    drag_instruction: "Перетягніть елементи у правильному порядку:",
    options_label: "Варіанти:",
    results_title: "Вітаємо!",
    success_message: "Ти молодець!",
    elements_label: "Елементів:",
    attempts_label: "Спроб:",
    new_game: "Нова гра",
    change_settings: "Змінити налаштування",
    confirm_exit: "Завершити гру?",
    unsaved: "Поточний прогрес не збережеться.",
    yes_exit: "Так, вийти",
    cancel: "Скасувати",
    display_modes: {
      images: "Тільки картинки",
      words: "Тільки слова",
      both: "Картинки + Слова"
    }
  },
  en: {
    settings_title: "Game Settings",
    element_count: "Number of elements:",
    display_mode: "Element type:",
    memory_time_mode: "Memory time:",
    play_time_mode: "Answer time:",
    no_time: "No limit",
    with_time: "With timer",
    seconds: "Seconds:",
    start_game: "Start game",
    exit: "Exit",
    memory_screen: "Memory screen",
    memory_done: "Memorized — start",
    play_screen: "Game",
    check_answer: "Check",
    drag_instruction: "Drag elements in the correct order:",
    options_label: "Options:",
    results_title: "Congratulations!",
    success_message: "Well done!",
    elements_label: "Elements:",
    attempts_label: "Attempts:",
    new_game: "New game",
    change_settings: "Change settings",
    confirm_exit: "End game?",
    unsaved: "Current progress will not be saved.",
    yes_exit: "Yes, exit",
    cancel: "Cancel",
    display_modes: {
      images: "Images only",
      words: "Words only",
      both: "Images + Words"
    }
  },
  es: {
    settings_title: "Configuración del juego",
    element_count: "Número de elementos:",
    display_mode: "Tipo de elementos:",
    memory_time_mode: "Tiempo de memorización:",
    play_time_mode: "Tiempo de respuesta:",
    no_time: "Sin límite",
    with_time: "Con temporizador",
    seconds: "Segundos:",
    start_game: "Iniciar juego",
    exit: "Salir",
    memory_screen: "Pantalla de memorización",
    memory_done: "Memorizado — comenzar",
    play_screen: "Juego",
    check_answer: "Verificar",
    drag_instruction: "Arrastra los elementos en el orden correcto:",
    options_label: "Opciones:",
    results_title: "¡Felicitaciones!",
    success_message: "¡Bien hecho!",
    elements_label: "Elementos:",
    attempts_label: "Intentos:",
    new_game: "Nuevo juego",
    change_settings: "Cambiar configuración",
    confirm_exit: "¿Terminar el juego?",
    unsaved: "El progreso actual no se guardará.",
    yes_exit: "Sí, salir",
    cancel: "Cancelar",
    display_modes: {
      images: "Solo imágenes",
      words: "Solo palabras",
      both: "Imágenes + Palabras"
    }
  }
};

// Current language
let currentLang = localStorage.getItem("ml_lang") || 
  ((navigator.language || "").startsWith("ru") ? "ru" :
   (navigator.language || "").startsWith("ua") ? "ua" : "en") || "ua";

// Apply translations
function applyTranslations() {
  const t = translations[currentLang];
  
  // Settings screen
  document.querySelector("#screen-settings h2").textContent = t.settings_title;
  document.querySelector("label[for='elementCount']").textContent = t.element_count;
  document.querySelector("label[for='displayMode']").textContent = t.display_mode;
  document.querySelector("label[for='memoryTimeMode']").textContent = t.memory_time_mode;
  document.querySelector("label[for='playTimeMode']").textContent = t.play_time_mode;
  
  document.querySelectorAll("#memoryTimeMode option, #playTimeMode option").forEach(opt => {
    if (opt.value === 'no-time') opt.textContent = t.no_time;
    if (opt.value === 'with-time') opt.textContent = t.with_time;
  });
  
  document.querySelectorAll("label[for='memorySeconds'], label[for='playSeconds']").forEach(label => {
    label.textContent = t.seconds;
  });
  
  document.getElementById("btnStart").textContent = t.start_game;
  
  // Display modes
  const modeSelect = document.getElementById("displayMode");
  [...modeSelect.options].forEach(opt => {
    opt.textContent = t.display_modes[opt.value];
  });
  
  // Memory screen
  document.querySelector("#screen-memory .badge").textContent = t.memory_screen;
  document.getElementById("btnMemoryDone").textContent = t.memory_done;
  document.getElementById("btnExitMemory").textContent = t.exit;
  
  // Play screen
  document.querySelector("#screen-play .badge").textContent = t.play_screen;
  document.getElementById("btnCheckAnswer").textContent = t.check_answer;
  document.getElementById("btnExitPlay").textContent = t.exit;
  document.querySelectorAll("#screen-play .section-subtitle")[0].textContent = t.drag_instruction;
  document.querySelectorAll("#screen-play .section-subtitle")[1].textContent = t.options_label;
  
  // Results screen
  document.querySelector("#screen-results h2").textContent = t.results_title;
  document.getElementById("successMessage").textContent = t.success_message;
  document.getElementById("btnNewGame").textContent = t.new_game;
  document.getElementById("btnChangeSettings").textContent = t.change_settings;
  
  // Modal
  document.querySelector("#exitModal h3").textContent = t.confirm_exit;
  document.querySelector("#exitModal p.meta").textContent = t.unsaved;
  document.getElementById("exitYes").textContent = t.yes_exit;
  document.getElementById("exitNo").textContent = t.cancel;
}

// Initialize translations
document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("langSelect");
  if (select) {
    select.value = currentLang;
    select.addEventListener("change", (e) => {
      currentLang = e.target.value;
      localStorage.setItem("ml_lang", currentLang);
      applyTranslations();
    });
  }
  applyTranslations();
});

// === Sound Effects ===
const SFX = {
  scroll: new Audio('assets/sfx/scroll.wav'),
  correct: new Audio('assets/sfx/correct.wav'),
  wrong: new Audio('assets/sfx/wrong_user.mp3'),
  finish: new Audio('assets/sfx/finish.wav'),
  drop: new Audio('assets/sfx/drop.wav'),
  triumph: new Audio('assets/sounds/triumf.mp3')
};

Object.values(SFX).forEach(a => { a.volume = 0.35; });

// Unlock audio on first user interaction
let audioUnlocked = false;
function unlockAudio() {
  if (audioUnlocked) return;
  audioUnlocked = true;
  Object.values(SFX).forEach(a => {
    try { a.play().then(() => a.pause()).catch(() => {}); } catch(e) {}
  });
}

// === Assets Configuration ===
const INLINE_IMAGES = ["airport", "apple", "armchair", "baby", "bag", "ball", "banana", "bathroom", "bear", "bed", "bee", "bike", "bird", "board", "boat", "book", "boots", "box", "boy", "bread", "bridge", "bus", "cake", "camel", "car", "carrot", "cat", "chair", "cheese", "chicken", "child", "childboy", "children", "climbingframe", "cloud", "clown", "coat", "computer", "cow", "crown", "cup", "dancer", "dog", "doll", "door", "dress", "drums", "duck", "egg", "elephant", "family", "fire", "fireman", "fish", "fishh", "flower", "fridge", "frog", "garden", "gglass", "girafe", "girl", "glass", "glass_of_juic", "glass_of_milk", "gloves", "goat", "grandma", "grandpa", "grapes", "guitar", "hare", "hat", "hedgehog", "hippo", "horse", "house", "housee", "jacket", "kangaroo", "king", "kitchen", "lamp", "laptop", "leopard", "lion", "lion_simba", "man", "meat", "mobile", "monkey", "monkeyy", "moon", "mountain", "mouse", "objec", "octopus", "orange", "park", "parrot", "pasta", "pen", "pencil", "penguin", "people", "pig", "pizza", "plane", "plate", "platee", "police", "potato", "pplate", "queen", "rabbit", "rabbitt", "rain", "rainbow", "rhino", "river", "road", "ruler", "scarf", "school", "schooll", "sea", "shark", "sheep", "ship", "shirt", "shoes", "shorts", "skirt", "sky", "slide", "snow", "socks", "sofa", "sofaa", "soup", "spoon", "spoonn", "squarrel", "star", "station", "street", "student", "sun", "sunglasses", "swan", "sweater", "swing", "t-shirt", "table", "taxi", "teacher", "ticket", "tiger", "tomato", "tortule", "toucan", "train", "tree", "truck", "trumpet", "umbrella", "violin", "watch", "watermelon", "whale", "wind", "window", "wolf", "woman", "womanshoes", "zebra", "zebraa", "zzebra"];

const INLINE_WORDS = ["airport", "apple", "baby", "bag", "banana", "bathroom", "bear", "bed", "bike", "bird", "board", "boat", "book", "boots", "boy", "bread", "bridge", "brother", "bus", "car", "cat", "chair", "cheese", "chicken", "child", "clock", "cloud", "coat", "computer", "cow", "cup", "desk", "dog", "door", "dress", "egg", "elephant", "family", "father", "fire", "fish", "flower", "fridge", "friend", "frog", "garden", "girl", "gloves", "hat", "horse", "house", "jacket", "juice", "kitchen", "lamp", "lion", "man", "map", "meat", "metro", "milk", "monkey", "moon", "mother", "mountain", "notebook", "orange", "paper", "pasta", "pen", "pencil", "people", "phone", "picture", "pig", "plane", "plate", "rabbit", "rain", "rice", "river", "road", "room", "ruler", "scarf", "school", "sea", "sheep", "ship", "shirt", "shoes", "shorts", "sister", "skirt", "sky", "snow", "socks", "sofa", "soup", "spoon", "star", "station", "street", "student", "sun", "sweater", "t-shirt", "table", "taxi", "teacher", "tiger", "train", "tree", "trousers", "truck", "water", "wind", "window", "woman"];

const ASSETS = {
  imagesIndexUrl: "assets/images/images.json",
  wordsUrl: "assets/words/words.json",
  imagePath: (id) => `assets/images/${id}.png`,
  wordPath: (id) => `assets/words/${id}.png`
};

// === Game State ===
const State = {
  elementCount: 10,
  displayMode: "images", // images, words, both
  memoryTimed: false,
  memorySeconds: 60,
  playTimed: false,
  playSeconds: 120,
  imagesPool: [],
  wordsPool: [],
  sequence: [],
  userSequence: [],
  memoryTimer: { id: null, remaining: 0 },
  playTimer: { id: null, remaining: 0 },
  attempts: 0
};

// === Utility Functions ===
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
const sample = (arr, k) => shuffle(arr.slice()).slice(0, k);

// === UI References ===
const UI = {
  screens: {
    settings: document.getElementById('screen-settings'),
    memory: document.getElementById('screen-memory'),
    play: document.getElementById('screen-play'),
    results: document.getElementById('screen-results')
  },
  settings: {
    elementCount: document.getElementById('elementCount'),
    displayMode: document.getElementById('displayMode'),
    memoryTimeMode: document.getElementById('memoryTimeMode'),
    memoryTimeGroup: document.getElementById('memoryTimeGroup'),
    memorySeconds: document.getElementById('memorySeconds'),
    memoryTimeValue: document.getElementById('memoryTimeValue'),
    playTimeMode: document.getElementById('playTimeMode'),
    playTimeGroup: document.getElementById('playTimeGroup'),
    playSeconds: document.getElementById('playSeconds'),
    playTimeValue: document.getElementById('playTimeValue'),
    btnStart: document.getElementById('btnStart')
  },
  memory: {
    container: document.getElementById('memoryContainer'),
    timerBox: document.getElementById('memoryTimerBox'),
    btnDone: document.getElementById('btnMemoryDone'),
    btnExit: document.getElementById('btnExitMemory')
  },
  play: {
    slotsContainer: document.getElementById('slotsContainer'),
    optionsTray: document.getElementById('optionsTray'),
    timerBox: document.getElementById('playTimerBox'),
    btnCheck: document.getElementById('btnCheckAnswer'),
    btnExit: document.getElementById('btnExitPlay')
  },
  results: {
    total: document.getElementById('statTotal'),
    attempts: document.getElementById('statAttempts'),
    btnNew: document.getElementById('btnNewGame'),
    btnSettings: document.getElementById('btnChangeSettings')
  }
};

// === Screen Management ===
function showScreen(name) {
  for (const [key, el] of Object.entries(UI.screens)) {
    el.classList.toggle("hidden", key !== name);
  }
  
  if (name === 'results') {
    try {
      SFX.triumph.currentTime = 0;
      SFX.triumph.play().catch(() => {});
      launchConfetti();
    } catch(e) {}
  }
}

// === Load Assets ===
async function loadPools() {
  if (location.protocol === 'file:') {
    State.imagesPool = INLINE_IMAGES;
    State.wordsPool = INLINE_WORDS;
    return;
  }
  
  try {
    const [images, words] = await Promise.all([
      fetch(ASSETS.imagesIndexUrl, {cache: 'no-cache'})
        .then(r => r.ok ? r.json() : INLINE_IMAGES)
        .catch(() => INLINE_IMAGES),
      fetch(ASSETS.wordsUrl, {cache: 'no-cache'})
        .then(r => r.ok ? r.json() : INLINE_WORDS)
        .catch(() => INLINE_WORDS)
    ]);
    
    State.imagesPool = Array.isArray(images) ? images : INLINE_IMAGES;
    State.wordsPool = Array.isArray(words) ? words : INLINE_WORDS;
  } catch(e) {
    State.imagesPool = INLINE_IMAGES;
    State.wordsPool = INLINE_WORDS;
  }
}

// === Generate Sequence ===
function generateSequence() {
  const count = State.elementCount;
  const mode = State.displayMode;

  if (mode === 'images') {
    const selected = sample(State.imagesPool, count);
    State.sequence = selected.map(id => ({ type: 'image', value: id }));
  } else if (mode === 'words') {
    const selected = sample(State.wordsPool, count);
    State.sequence = selected.map(id => ({ type: 'word', value: id }));
  } else { // both - mix of images and words
    const halfCount = Math.ceil(count / 2);
    const imageCount = halfCount;
    const wordCount = count - halfCount;

    const selectedImages = sample(State.imagesPool, imageCount);
    const selectedWords = sample(State.wordsPool, wordCount);

    const combined = [
      ...selectedImages.map(id => ({ type: 'image', value: id })),
      ...selectedWords.map(id => ({ type: 'word', value: id }))
    ];

    State.sequence = shuffle(combined);
  }

  State.userSequence = new Array(count).fill(null);
  State.attempts = 0;
}

// === Render Element ===
function renderElement(element, showNumber = false, number = null) {
  const div = document.createElement('div');
  div.className = 'element-card';

  if (showNumber && number !== null) {
    const numLabel = document.createElement('div');
    numLabel.className = 'element-number';
    numLabel.textContent = number;
    div.appendChild(numLabel);
  }

  if (element.type === 'image') {
    const img = document.createElement('img');
    img.src = ASSETS.imagePath(element.value);
    img.alt = element.value;
    div.appendChild(img);
  } else if (element.type === 'word') {
    const img = document.createElement('img');
    img.src = ASSETS.wordPath(element.value);
    img.alt = element.value;
    div.appendChild(img);
  }

  return div;
}

// === Render Memory Screen ===
function renderMemoryScreen() {
  UI.memory.container.innerHTML = '';
  
  const grid = document.createElement('div');
  grid.className = 'memory-grid';
  
  State.sequence.forEach((element, index) => {
    const card = renderElement(element, true, index + 1);
    grid.appendChild(card);
  });
  
  UI.memory.container.appendChild(grid);
}

// === Timer Functions ===
function formatTime(sec) {
  const m = Math.floor(sec / 60).toString().padStart(2, "0");
  const s = (sec % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

function startMemoryTimer() {
  if (!State.memoryTimed || State.memorySeconds === 0) return;
  
  UI.memory.timerBox.classList.remove("hidden");
  State.memoryTimer.remaining = State.memorySeconds;
  UI.memory.timerBox.textContent = formatTime(State.memoryTimer.remaining);
  
  State.memoryTimer.id = setInterval(() => {
    State.memoryTimer.remaining--;
    UI.memory.timerBox.textContent = formatTime(State.memoryTimer.remaining);
    
    if (State.memoryTimer.remaining <= 0) {
      clearInterval(State.memoryTimer.id);
      startPlayMode();
    }
  }, 1000);
}

function stopMemoryTimer() {
  if (State.memoryTimer.id) {
    clearInterval(State.memoryTimer.id);
    State.memoryTimer.id = null;
  }
  UI.memory.timerBox.classList.add("hidden");
}

function startPlayTimer() {
  if (!State.playTimed || State.playSeconds === 0) return;
  
  UI.play.timerBox.classList.remove("hidden");
  State.playTimer.remaining = State.playSeconds;
  UI.play.timerBox.textContent = formatTime(State.playTimer.remaining);
  
  State.playTimer.id = setInterval(() => {
    State.playTimer.remaining--;
    UI.play.timerBox.textContent = formatTime(State.playTimer.remaining);
    
    if (State.playTimer.remaining <= 0) {
      clearInterval(State.playTimer.id);
      checkAnswer();
    }
  }, 1000);
}

function stopPlayTimer() {
  if (State.playTimer.id) {
    clearInterval(State.playTimer.id);
    State.playTimer.id = null;
  }
  UI.play.timerBox.classList.add("hidden");
}

// === Render Play Screen ===
function renderPlayScreen() {
  // Render slots
  UI.play.slotsContainer.innerHTML = '';
  
  const slotsGrid = document.createElement('div');
  slotsGrid.className = 'slots-grid';
  
  State.userSequence.forEach((element, index) => {
    const slot = document.createElement('div');
    slot.className = 'slot';
    slot.dataset.index = index;
    
    const numLabel = document.createElement('div');
    numLabel.className = 'slot-number';
    numLabel.textContent = index + 1;
    slot.appendChild(numLabel);
    
    if (element !== null) {
      const card = renderElement(element);
      card.className = 'element-card placed';
      card.dataset.index = index;
      card.draggable = true;
      
      // Allow removing from slot
      card.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', JSON.stringify({ fromSlot: index }));
      });
      
      slot.appendChild(card);
    }
    
    // Drop zone
    slot.addEventListener('dragover', (e) => {
      e.preventDefault();
      slot.classList.add('drag-over');
    });
    
    slot.addEventListener('dragleave', () => {
      slot.classList.remove('drag-over');
    });
    
    slot.addEventListener('drop', async (e) => {
      e.preventDefault();
      slot.classList.remove('drag-over');
      
      const data = JSON.parse(e.dataTransfer.getData('text/plain'));
      
      if (data.fromTray !== undefined) {
        // From tray
        const element = State.sequence[data.fromTray];
        State.userSequence[index] = element;
        SFX.drop.currentTime = 0;
        SFX.drop.play().catch(() => {});
      } else if (data.fromSlot !== undefined) {
        // Move between slots
        const element = State.userSequence[data.fromSlot];
        State.userSequence[data.fromSlot] = null;
        State.userSequence[index] = element;
        SFX.drop.currentTime = 0;
        SFX.drop.play().catch(() => {});
      }
      
      renderPlayScreen();
    });
    
    slotsGrid.appendChild(slot);
  });
  
  UI.play.slotsContainer.appendChild(slotsGrid);
  
  // Render options tray
  UI.play.optionsTray.innerHTML = '';
  
  const shuffledSequence = shuffle(State.sequence.map((el, idx) => ({ element: el, originalIndex: idx })));
  
  shuffledSequence.forEach(({ element, originalIndex }) => {
    if (State.userSequence.includes(element)) return; // Already placed
    
    const option = renderElement(element);
    option.className = 'element-card option';
    option.draggable = true;
    option.dataset.index = originalIndex;
    
    option.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', JSON.stringify({ fromTray: originalIndex }));
    });
    
    UI.play.optionsTray.appendChild(option);
  });
}

// === Check Answer ===
async function checkAnswer() {
  State.attempts++;
  
  // Check if all slots are filled
  if (State.userSequence.some(el => el === null)) {
    // Not all filled - do nothing or show message
    return;
  }
  
  // Check correctness
  const wrongIndices = [];
  State.userSequence.forEach((el, idx) => {
    if (el !== State.sequence[idx]) {
      wrongIndices.push(idx);
    }
  });
  
  if (wrongIndices.length === 0) {
    // All correct!
    stopPlayTimer();
    SFX.correct.currentTime = 0;
    SFX.correct.play().catch(() => {});
    await sleep(500);
    showResults();
  } else {
    // Some wrong
    SFX.wrong.currentTime = 0;
    SFX.wrong.play().catch(() => {});
    
    // Highlight wrong ones
    wrongIndices.forEach(idx => {
      const slotEl = UI.play.slotsContainer.querySelector(`.slot[data-index="${idx}"]`);
      if (slotEl) {
        slotEl.classList.add('wrong');
      }
    });
    
    await sleep(1500);
    
    // Remove wrong ones
    wrongIndices.forEach(idx => {
      State.userSequence[idx] = null;
    });
    
    renderPlayScreen();
  }
}

// === Show Results ===
function showResults() {
  UI.results.total.textContent = State.elementCount;
  UI.results.attempts.textContent = State.attempts;
  showScreen('results');
}

// === Start Game ===
async function startGame() {
  unlockAudio();
  
  // Read settings
  State.elementCount = parseInt(UI.settings.elementCount.value, 10) || 10;
  State.displayMode = UI.settings.displayMode.value;
  State.memoryTimed = UI.settings.memoryTimeMode.value === 'with-time';
  State.memorySeconds = parseInt(UI.settings.memorySeconds.value, 10) || 60;
  State.playTimed = UI.settings.playTimeMode.value === 'with-time';
  State.playSeconds = parseInt(UI.settings.playSeconds.value, 10) || 120;
  
  await loadPools();
  generateSequence();
  renderMemoryScreen();
  showScreen('memory');
  startMemoryTimer();
}

function startPlayMode() {
  stopMemoryTimer();
  renderPlayScreen();
  showScreen('play');
  startPlayTimer();
}

// === Confetti Animation ===
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  const ctx = canvas.getContext('2d');
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.display = 'block';
  
  const particles = [];
  const colors = ['#E8654B', '#B68E6B', '#7D733A', '#FDF8F3', '#FF7C00', '#FFD700'];
  
  for (let i = 0; i < 150; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      vx: (Math.random() - 0.5) * 4,
      vy: Math.random() * 3 + 2,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 1
    });
  }
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.rotationSpeed;
      p.alpha -= 0.005;
      
      if (p.alpha <= 0) {
        particles.splice(i, 1);
        return;
      }
      
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation * Math.PI / 180);
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      ctx.restore();
    });
    
    if (particles.length > 0) {
      requestAnimationFrame(animate);
    } else {
      canvas.style.display = 'none';
    }
  }
  
  animate();
}

// === Event Listeners ===

// Settings
UI.settings.memoryTimeMode.addEventListener('change', () => {
  const timed = UI.settings.memoryTimeMode.value === 'with-time';
  UI.settings.memoryTimeGroup.style.display = timed ? 'flex' : 'none';
});

UI.settings.playTimeMode.addEventListener('change', () => {
  const timed = UI.settings.playTimeMode.value === 'with-time';
  UI.settings.playTimeGroup.style.display = timed ? 'flex' : 'none';
});

UI.settings.memorySeconds.addEventListener('input', (e) => {
  const val = parseInt(e.target.value, 10);
  UI.settings.memoryTimeValue.textContent = val === 0 ? '∞' : `${val}с`;
});

UI.settings.playSeconds.addEventListener('input', (e) => {
  const val = parseInt(e.target.value, 10);
  UI.settings.playTimeValue.textContent = val === 0 ? '∞' : `${val}с`;
});

UI.settings.btnStart.addEventListener('click', startGame);

// Memory
UI.memory.btnDone.addEventListener('click', startPlayMode);

// Play
UI.play.btnCheck.addEventListener('click', checkAnswer);

// Results
UI.results.btnNew.addEventListener('click', () => {
  startGame();
});

UI.results.btnSettings.addEventListener('click', () => {
  showScreen('settings');
});

// Exit confirmation modal
function askExitConfirm() {
  return new Promise((resolve) => {
    const modal = document.getElementById('exitModal');
    const yes = document.getElementById('exitYes');
    const no = document.getElementById('exitNo');
    
    function cleanup() {
      modal.classList.add('hidden');
      yes.onclick = no.onclick = null;
      modal.onclick = null;
      document.removeEventListener('keydown', onKey);
    }
    
    function onKey(e) {
      if (e.key === 'Escape') {
        cleanup();
        resolve(false);
      }
    }
    
    modal.classList.remove('hidden');
    document.addEventListener('keydown', onKey);
    
    yes.onclick = () => {
      cleanup();
      resolve(true);
    };
    
    no.onclick = () => {
      cleanup();
      resolve(false);
    };
    
    modal.onclick = (e) => {
      if (e.target === modal) {
        cleanup();
        resolve(false);
      }
    };
  });
}

UI.memory.btnExit.addEventListener('click', async () => {
  if (await askExitConfirm()) {
    stopMemoryTimer();
    showScreen('settings');
  }
});

UI.play.btnExit.addEventListener('click', async () => {
  if (await askExitConfirm()) {
    stopPlayTimer();
    showScreen('settings');
  }
});
