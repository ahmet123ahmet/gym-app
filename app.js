// ========== EXERCISE DATABASE ==========
const allExercisesList = [
  // Mevcut Egzersizler
  { id: 'crunch_mekik', name: 'Crunch (Mekik)', image: './images/crunch-mekik.gif', muscle: 'Karın', sets: 4, reps: '20-25', type: 'reps', hasWeight: false, description: 'Karın kaslarınızı çalıştırır.', steps: ['Sırt üstü uzanın.', 'Dizlerinizi bükün.', 'Omuzlarınızı yerden kaldırarak mekik çekin.'] },
  { id: 'crunch_yarim_mekik', name: 'Crunch (Yarım Mekik)', image: './images/crunch-yarim-mekik.gif', muscle: 'Karın', sets: 4, reps: '20-25', type: 'reps', hasWeight: false, description: 'Üst karın kaslarınızı hedefler.', steps: ['Sırt üstü yatın.', 'Elleri göğsünüzde veya başınızın arkasında tutun.', 'Yarım mekik hareketi yapın.'] },
  { id: 'dumbbell_flat_bench_press', name: 'Dumbbell Flat Bench Press', image: './images/dumbbell-flat-bench-press.gif', muscle: 'Göğüs', sets: 3, reps: '15-20', type: 'reps', suggestedWeight: 7.5, description: 'Göğüs kaslarınızı güçlendirir. Kontrollü ve seri.', steps: ['Sehpaya sırt üstü uzanın.', 'Dambılları göğüs hizasında tutun.', 'Yukarı doğru itin ve başlangıç pozisyonuna dönün.'] },
  { id: 'hanging_knee_raises', name: 'Hanging Knee Raises', image: './images/hanging-knee-raises.gif', muscle: 'Alt Karın', sets: 3, reps: '15-20', type: 'reps', hasWeight: false, description: 'Alt karın kaslarını çalıştırır.', steps: ['Barfiks çubuğuna asılın.', 'Dizlerinizi göğsünüze doğru çekin.', 'Bacaklarınızı kontrollü şekilde indirin.'] },
  { id: 'kardio_ip_atlama', name: 'İp Atlama', image: './images/ip-atlama.png', muscle: 'Kardiyo', sets: 4, reps: '2 Dk', type: 'duration', hasWeight: false, description: 'Dakikada ~200 kalori yakar! En etkili kardiyo egzersizlerinden biri.', steps: ['İpi iki elinizle tutun.', 'Zıplayarak ipi altınızdan geçirin.', '2 dakika boyunca ritimli şekilde devam edin.', '30 sn dinlen ve tekrarla.'] },
  { id: 'lunge', name: 'Lunge (Yürüyüş)', image: './images/lunge.gif', muscle: 'Bacak / Kalça', sets: 4, reps: '20 (her bacak)', type: 'reps', suggestedWeight: 0, description: 'Bacak ve kalça kaslarını çalıştırır, yüksek kalori yakar.', steps: ['Ayakta dik durun.', 'Bir adım öne atın ve dizlerinizi bükerek çömelin.', 'Öne doğru yürür gibi ilerleyin.'] },
  { id: 'plank', name: 'Plank', image: './images/plank.jfif', muscle: 'Kor / Tüm Vücut', sets: 4, reps: '45-60 Sn', type: 'duration', hasWeight: false, description: 'Karın ve kor kaslarınızı güçlendirirken metabolizmayı hızlandırır.', steps: ['Şınav pozisyonu alın.', 'Dirsekleriniz üzerinde durun.', 'Vücudunuzu düz bir çizgide tutarak bekleyin.'] },
  { id: 'pull_ups', name: 'Pull Ups', image: './images/pull-ups.gif', muscle: 'Sırt / Biceps', sets: 3, reps: 'Max Tekrar', type: 'reps', hasWeight: false, description: 'Üst vücut kaslarını çalıştırır, metabolizma hızlanır.', steps: ['Barfiks çubuğuna tutunun.', 'Vücudunuzu yukarı çekin, çenen çubuğu geçsin.', 'Kontrollü bir şekilde indirin.'] },
  { id: 'push_up', name: 'Push Up', image: './images/push-up.gif', muscle: 'Göğüs / Omuz / Triceps', sets: 4, reps: '20-25', type: 'reps', hasWeight: false, description: 'Birden fazla kas grubunu çalıştırır, kalori yakar.', steps: ['Şınav pozisyonu alın.', 'Vücudunuzu aşağı indirin (göğüs yere yakın).', 'Patlayıcı şekilde kendinizi yukarı itin.'] },
  { id: 'kardio_run', name: 'Tempolu Koşu', image: './images/run.jfif', muscle: 'Kardiyo / Tüm Vücut', sets: 1, reps: '30 Dk', type: 'duration', hasWeight: false, description: 'Temel yağ yakıcı. Orta tempoda tutulunca vücut yağı yakıt olarak kullanır.', steps: ['5 dk yavaş yürüyüşle ısın.', '20-30 dk orta tempoda koş veya hızlı yürü.', '5 dk soğuma yürüyüşü ile bitir.'] },
  { id: 'single_arm_dumbbell_row', name: 'Single Arm Dumbbell Row', image: './images/single-arm-dumbbell-row.gif', muscle: 'Sırt', sets: 3, reps: '15-20', type: 'reps', suggestedWeight: 5, description: 'Sırt kaslarını tek taraflı çalıştırır.', steps: ['Sehpaya bir dizinizi ve elinizi koyun.', 'Diğer elinizle dambılı tutun.', 'Dambılı karnınıza doğru çekip indirin.'] },
  { id: 'squat', name: 'Squat', image: './images/squat.gif', muscle: 'Bacak / Kalça / Kor', sets: 4, reps: '20-25', type: 'reps', suggestedWeight: 0, description: 'Vücuttaki en büyük kas gruplarını çalıştırarak yüksek kalori yaktırır.', steps: ['Ayaklarınızı omuz genişliğinde açın.', 'Sırtınızı düz tutarak çömelin.', 'Topuklarınızdan güç alarak kalkın.'] },

  // ===== YENİ: YAĞ YAKICI EGZERSİZLER =====
  { id: 'burpee', name: 'Burpee 🔥', image: './images/push-up.gif', muscle: 'Tüm Vücut / Kardiyo', sets: 4, reps: '10-15', type: 'reps', hasWeight: false, description: 'En çok kalori yaktıran egzersizlerden biri! Tüm vücudu tek harekette çalıştırır. 1 dakikada ~15 kalori!', steps: ['Ayakta dik dur.', 'Squat pozisyonuna in, ellerini yere koy.', 'Bacaklarını geri at (şınav pozisyonu).', 'Bir şınav çek.', 'Bacaklarını geri çek, sıçrayarak ayağa kalk.', 'Zıplayarak kollarını havaya uzat. Tekrarla!'] },
  { id: 'mountain_climber', name: 'Mountain Climber ⛰️', image: './images/plank.jfif', muscle: 'Kor / Kardiyo / Tüm Vücut', sets: 4, reps: '30 Sn', type: 'duration', hasWeight: false, description: 'Plank pozisyonunda yapılan bu hareket hem koru hem kardiyoyu çalıştırır. Metabolizmayı çok ateşler.', steps: ['Şınav/plank pozisyonu al.', 'Sağ dizini göğsüne doğru çek.', 'Hızlıca geri at ve sol dizi çek.', 'Koşar gibi hızlı ve ritmik tekrarla.'] },
  { id: 'jumping_jacks', name: 'Jumping Jacks ⭐', image: './images/ip-atlama.png', muscle: 'Kardiyo / Tüm Vücut', sets: 3, reps: '1 Dk', type: 'duration', hasWeight: false, description: 'Basit ama etkili kardiyovasküler egzersiz. Isınma ve HIIT aralarında mükemmel.', steps: ['Ayaklarını yanyana, kollarını yanda tut.', 'Sıçrayarak ayaklarını aç ve kollarını başının üstünde birleştir.', 'Geri dön. Ritimli şekilde devam et.'] },
  { id: 'high_knees', name: 'High Knees 🏃', image: './images/run.jfif', muscle: 'Bacak / Kardiyo', sets: 4, reps: '30 Sn', type: 'duration', hasWeight: false, description: 'Yerinde koşarak dizleri yüksek kaldırmak kalp atışını hızlandırır ve yağ yakar. Burpeeden daha kolay ama çok etkili!', steps: ['Dik dur.', 'Yerinde koş, ama dizlerini bel hizasına kadar kaldır.', 'Kollarını karşılıklı salla.', 'Hızla devam et.'] },
  { id: 'jump_squat', name: 'Jump Squat 🦘', image: './images/squat.gif', muscle: 'Bacak / Kalça / Kardiyo', sets: 4, reps: '15-20', type: 'reps', hasWeight: false, description: 'Normal squatın patlayıcı versiyonu. Hem kas çalıştırır hem yüksek kalori yakar. Ağırlık kullanma, vücut ağırlığı yeterli!', steps: ['Normal squat pozisyonu al.', 'Çömelirken birikim yap.', 'Yukarı çıkarken patlayıcı şekilde sıçra.', 'Nazikçe in ve hemen tekrarla.'] },
  { id: 'russian_twist', name: 'Russian Twist 🌀', image: './images/Russian_Twist.gif', muscle: 'Yan Karın / Oblique', sets: 4, reps: '25-30 (her yan)', type: 'reps', hasWeight: false, description: 'Yan karın kaslarını hedefler, bel incelmesine yardımcı olur. İsteğe bağlı hafif dambıl tutabilirsin.', steps: ['Yerde otur, dizlerin bükülü.', 'Gövdeni 45 derece geriye yasla.', 'Ellerini birleştir (ya da hafif dambıl tut).', 'Gövdeni sağa sola hızlıca döndür.'] },
  { id: 'bicycle_crunch', name: 'Bicycle Crunch 🚴', image: './images/crunch-mekik.gif', muscle: 'Karın / Yan Karın', sets: 4, reps: '20-25 (her yan)', type: 'reps', hasWeight: false, description: 'Araştırmalar Bicycle Crunch\'ın en etkili karın egzersizlerinden biri olduğunu gösteriyor!', steps: ['Sırt üstü uzan, ellerini başının arkasına koy.', 'Sağ dizini göğsüne çekerken sol dirseğinle dokun.', 'Sol dizini çekerken sağ dirsekle dokun.', 'Bisiklet çevirir gibi ritimli devam et.'] },
  { id: 'glute_bridge', name: 'Glute Bridge (Kalça Köprüsü) 🍑', image: './images/lunge.gif', muscle: 'Kalça / Hamstring / Alt Sırt', sets: 4, reps: '20-25', type: 'reps', hasWeight: false, description: 'Kalça kaslarını güçlendirir ve şekillendirir. Hamstring ve alt sırtı da çalıştırır.', steps: ['Sırt üstü uzan, dizlerin bükülü, ayaklar yerde.', 'Kalçanı yukarı kaldır, vücut düz bir çizgi oluştursun.', 'Üstte 1 saniye sıkıştır.', 'Yavaşça indir ve tekrarla.'] },
  { id: 'side_plank', name: 'Side Plank (Yan Plank) 🔷', image: './images/plank.jfif', muscle: 'Yan Karın / Kor', sets: 3, reps: '30-45 Sn (her yan)', type: 'duration', hasWeight: false, description: 'Yan karın kaslarını güçlendirir ve bel hattını sıkılaştırır.', steps: ['Yan yatın, bir dirseğinizin üzerinde durun.', 'Kalçanızı yerden kaldırın, vücut düz bir çizgi oluştursun.', 'Belirlenen süre boyunca tutun.', 'Diğer tarafa geçin.'] },
  { id: 'squat_hold', name: 'Squat Hold (İzometrik) 🏋️', image: './images/squat.gif', muscle: 'Bacak / Kalça / Kor', sets: 3, reps: '45-60 Sn', type: 'duration', hasWeight: false, description: 'Çömelme pozisyonunda beklemek kasları sabit çalıştırır ve metabolizmayı bozmaz.', steps: ['Squat pozisyonuna gir.', 'Uyluklarınız yere paralel olsun.', 'Bu pozisyonda kalın.', 'Nefesi düzenli alın.'] },

  // ===== EK: KOL EGZERSİZLERİ =====
  { id: 'dumbbell_curl', name: 'Dumbbell Bicep Curl 💪', image: './images/concentrated-bicep-curl.gif', muscle: 'Biceps / Ön Kol', sets: 3, reps: '15-20', type: 'reps', suggestedWeight: 5, description: 'Biceps kaslarını direkt hedefler. Hafif-orta ağırlıkla yüksek tekrar yağ yakarken kas tonunu korur.', steps: ['Ayakta dik dur, dambılları iki elde tut.', 'Dirseklerini sabit tutarak dambılları omzuna doğru kaldır.', 'Zirveye gelince 1 saniye sık.', 'Kontrollü şekilde indir ve tekrarla.'] },
  { id: 'tricep_dips', name: 'Tricep Dips 🪑', image: './images/push-up.gif', muscle: 'Triceps / Göğüs / Omuz', sets: 3, reps: '12-20', type: 'reps', hasWeight: false, description: 'Sadece vücut ağırlığınla yapılan bu hareket triceps (arka kol) kasını mükemmel şekilde hedefler. Sehpa veya sandalye yeterli!', steps: ['Bir sandalye veya sehpanın kenarına ellerini koy, parmaklar öne baksın.', 'Bacakları öne uzat, kalçanı kenardan hafif öteye al.', 'Dirsekleri bükerek vücudunu aşağı indir (dirsekler 90 derece).', 'Kollarını iterek başlangıç pozisyonuna dön.'] }
];

const getExercises = (...ids) => ids.map(id => allExercisesList.find(e => e.id === id)).filter(Boolean);

// ===== YAĞ YAKIMI ODAKLI HAFTALIK PROGRAM =====
// Hedef: Kalori açığı + Metabolizma hızlandırma + Kardiyo kombinasyonu
const WORKOUT_PROGRAM = {
  // PAZARTESİ — HIIT Tüm Vücut
  1: {
    name: 'HIIT: Tam Gaz Yağ Yakımı',
    emoji: '🔥',
    exercises: getExercises('jumping_jacks', 'burpee', 'jump_squat', 'mountain_climber', 'push_up', 'high_knees', 'plank'),
    isRestDay: false
  },
  // SALI — Alt Vücut & Kalça
  2: {
    name: 'Bacak & Kalça Eritme',
    emoji: '🦵',
    exercises: getExercises('kardio_run', 'squat', 'lunge', 'jump_squat', 'glute_bridge', 'hanging_knee_raises', 'side_plank'),
    isRestDay: false
  },
  // ÇARŞAMBA — TAM DİNLENME
  3: {
    name: 'Tam Dinlenme 🛌',
    emoji: '😴',
    exercises: [],
    isRestDay: true,
    restNote: 'Bugün kasların onarılıyor! İstersen hafif esneme hareketleri veya kısa bir yürüyüş yapabilirsin.'
  },
  // PERŞEMBE — Core Devresi
  4: {
    name: 'Core Devresi: Bel & Göbek',
    emoji: '🌀',
    exercises: getExercises('bicycle_crunch', 'russian_twist', 'tuck_crunch', 'hanging_knee_raises', 'mountain_climber', 'side_plank', 'plank'),
    isRestDay: false
  },
  // CUMA — Kardiyo + Üst Vücut (Curl & Dips dahil)
  5: {
    name: 'Kardiyo & Üst Vücut',
    emoji: '💪',
    exercises: getExercises('kardio_ip_atlama', 'high_knees', 'push_up', 'pull_ups', 'dumbbell_flat_bench_press', 'dumbbell_curl', 'tricep_dips', 'mountain_climber'),
    isRestDay: false
  },
  // CUMARTESİ — Haftalık Büyük Terleme
  6: {
    name: 'Haftalık Büyük Terleme Günü',
    emoji: '⚡',
    exercises: getExercises('burpee', 'jump_squat', 'push_up', 'lunge', 'mountain_climber', 'russian_twist', 'glute_bridge', 'kardio_ip_atlama', 'plank'),
    isRestDay: false
  },
  // PAZAR — Hafif Koşu & Core
  0: {
    name: 'Hafif Koşu & Core',
    emoji: '🧘‍♂️',
    exercises: getExercises('kardio_run', 'glute_bridge', 'side_plank', 'bicycle_crunch', 'plank'),
    isRestDay: false
  }
};

const DAY_NAMES = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
const MONTH_NAMES = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];

// ========== STATE ==========
let currentScreen = 'today';
let currentExerciseIndex = null;
let todaySets = {};
let historyMonth = new Date().getMonth();
let historyYear = new Date().getFullYear();
let workoutStartTime = null;
let currentTheme = localStorage.getItem('gym_theme') || 'dark';

// Rest Timer Variables
let restTimerInterval = null;
let currentRestSeconds = 0;

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
  if (currentTheme === 'light') document.documentElement.setAttribute('data-theme', 'light');
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

  renderHeader();
  renderTodayScreen();
  setupNavigation();
  checkWeightTracker();

  // Update workout clock every minute if active
  setInterval(updateWorkoutClock, 60000);
});

function toggleTheme() {
  if (currentTheme === 'dark') {
    currentTheme = 'light';
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    currentTheme = 'dark';
    document.documentElement.removeAttribute('data-theme');
  }
  localStorage.setItem('gym_theme', currentTheme);
}

// ========== HEADER ==========
function renderHeader() {
  const today = new Date();
  const dayName = DAY_NAMES[today.getDay()];
  const dateStr = `${today.getDate()} ${MONTH_NAMES[today.getMonth()]} ${today.getFullYear()}`;

  document.getElementById('header-date').textContent = `${dayName}, ${dateStr}`;
}

// ========== NAVIGATION ==========
function setupNavigation() {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const screen = btn.dataset.screen;
      switchScreen(screen);
    });
  });
}

function switchScreen(screenName) {
  currentScreen = screenName;

  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.screen === screenName);
  });

  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(`screen-${screenName}`).classList.add('active');

  if (screenName === 'today') {
    renderTodayScreen();
  } else if (screenName === 'workout') {
    renderWorkoutScreen();
  } else if (screenName === 'history') {
    renderHistoryScreen();
  } else if (screenName === 'exercises') {
    renderExercisesScreen();
  } else if (screenName === 'program') {
    renderWeeklyProgram();
  }
}

// ========== HAFTALIK PROGRAM EKRANI ==========
function renderWeeklyProgram() {
  const container = document.getElementById('program-content');
  const today = new Date().getDay();

  const orderedDays = [1, 2, 3, 4, 5, 6, 0]; // Pazartesi → Pazar
  const dayNamesFull = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];

  const cards = orderedDays.map(dayIndex => {
    const prog = WORKOUT_PROGRAM[dayIndex];
    const isToday = dayIndex === today;
    const exList = prog.exercises.map(ex =>
      `<div class="weekly-ex-item">
        <span class="weekly-ex-dot" style="background: var(--accent-gradient)"></span>
        <span>${ex.name}</span>
        <span class="weekly-ex-meta">${ex.type === 'duration' ? ex.reps : ex.sets + '×' + ex.reps}</span>
      </div>`
    ).join('');

    return `
      <div class="weekly-day-card ${isToday ? 'weekly-today' : ''}">
        <div class="weekly-day-header">
          <div class="weekly-day-left">
            <span class="weekly-emoji">${prog.emoji}</span>
            <div>
              <div class="weekly-day-name">${dayNamesFull[dayIndex]} ${isToday ? '<span class="today-badge">Bugün</span>' : ''}</div>
              <div class="weekly-prog-name">${prog.name}</div>
            </div>
          </div>
          <div class="weekly-ex-count">${prog.isRestDay ? 'Dinlenme' : prog.exercises.length + ' hareket'}</div>
        </div>
        <div class="weekly-ex-list">
          ${prog.isRestDay
        ? `<div class="weekly-rest-note">😴 ${prog.restNote || 'Dinlenme günü — Kasların onarılıyor!'}</div>`
        : exList
      }
        </div>
        ${isToday && !prog.isRestDay ? `<button class="btn-primary" style="margin-top:12px; padding:10px; font-size:0.85rem;" onclick="startWorkout(); switchScreen('workout')">🏋️ Bugün Başla</button>` : ''}
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="section-title" style="margin-bottom: 16px;">
      <span class="title-icon">📅</span>
      Haftalık Antrenman Planı
    </div>
    <div class="weekly-program-list">
      ${cards}
    </div>
  `;
}

// ========== TODAY SCREEN ==========
function renderTodayScreen() {
  const program = getTodayProgram();
  const container = document.getElementById('today-content');

  if (program.isRestDay) {
    container.innerHTML = `
      <div class="rest-day-banner">
        <span class="rest-emoji">😴</span>
        <h2>Tam Dinlenme Günü</h2>
        <p>${program.restNote || 'Bugün kaslarını dinlendir, bol su iç ve yarına hazır ol! 💪'}</p>
      </div>
    `;
    return;
  }

  const todayKey = getDateKey(new Date());
  const savedData = getSavedWorkout(todayKey);
  const completedExercises = savedData ? savedData.exercises.map(e => e.name) : [];

  let exerciseCards = program.exercises.map((ex, i) => {
    const isCompleted = completedExercises.includes(ex.name);
    return `
      <div class="exercise-card ${isCompleted ? 'completed' : ''}" onclick="goToExercise(${i})">
        ${isCompleted ? '<div class="exercise-completed-badge">✓</div>' : ''}
        <div class="exercise-card-header">
          <div class="exercise-image">
            <img src="${ex.image}" alt="${ex.name}" />
          </div>
          <div class="exercise-info">
            <div class="exercise-name">${ex.name}</div>
            <div class="exercise-meta">${ex.muscle} · ${ex.type === 'duration' ? ex.reps + ' süre' : ex.sets + ' set × ' + ex.reps + ' tekrar'}</div>
          </div>
          <div class="exercise-arrow">›</div>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="today-banner">
      <div class="day-label">Günlük Antrenman</div>
      <div class="muscle-group">${program.name}</div>
      <span class="workout-emoji">${program.emoji}</span>
    </div>
    
    <div class="section-title">
      <span class="title-icon">📋</span>
      Egzersizler (${program.exercises.length})
    </div>
    
    <div class="exercise-list">
      ${exerciseCards}
    </div>
    
    <button class="btn-primary btn-start-workout" onclick="startWorkout()">
      🏋️ Antrenmana Başla
    </button>
  `;
}

// ========== WORKOUT SCREEN ==========
function startWorkout() {
  const program = getTodayProgram();
  if (program.isRestDay) return;

  currentExerciseIndex = 0;
  todaySets = {};
  workoutStartTime = Date.now();

  program.exercises.forEach(ex => {
    todaySets[ex.id] = [];
    const lastWeight = getLastExerciseWeight(ex.id) || ex.suggestedWeight || '';
    for (let i = 0; i < ex.sets; i++) {
      todaySets[ex.id].push({ reps: '', weight: lastWeight });
    }
  });

  switchScreen('workout');
  updateWorkoutClock();
}

function updateWorkoutClock() {
  const clockEl = document.getElementById('workout-clock');
  if (clockEl && workoutStartTime) {
    const diff = Date.now() - workoutStartTime;
    const mins = Math.floor(diff / 60000);
    clockEl.textContent = `⏱️ ${mins} dk süredesiniz`;
  }
}

function getLastExerciseWeight(exerciseId) {
  const history = JSON.parse(localStorage.getItem('gym_exercise_weights') || '{}');
  return history[exerciseId] || null;
}

function saveLastExerciseWeight(exerciseId, weight) {
  if (!weight || isNaN(weight)) return;
  const history = JSON.parse(localStorage.getItem('gym_exercise_weights') || '{}');
  history[exerciseId] = parseFloat(weight);
  localStorage.setItem('gym_exercise_weights', JSON.stringify(history));
}

function applyWeightToAllSets(exerciseId, weight) {
  if (!todaySets[exerciseId]) return;
  todaySets[exerciseId].forEach(set => {
    set.weight = weight;
  });
  saveLastExerciseWeight(exerciseId, weight);
  renderWorkoutScreen();
  showToast("Ağırlık tüm setlere uygulandı! 💪");
}

function renderWorkoutScreen() {
  const program = getTodayProgram();
  const container = document.getElementById('workout-content');

  if (program.isRestDay) {
    container.innerHTML = `
      <div class="empty-state">
        <span class="empty-emoji">😴</span>
        <div class="empty-title">Bugün Tatil!</div>
        <div class="empty-text">Dinlenerek kaslarının gelişmesine izin ver.</div>
      </div>
    `;
    return;
  }

  if (currentExerciseIndex === null) {
    container.innerHTML = `
      <div class="empty-state">
        <span class="empty-emoji">🏋️</span>
        <div class="empty-title">Antrenmana Başla</div>
        <div class="empty-text">"Bugün" sekmesinden antrenmana başlayabilirsin.</div>
      </div>
      <button class="btn-primary" style="margin-top: 20px" onclick="startWorkout()">🚀 Antrenmana Başla</button>
    `;
    return;
  }

  const exercise = program.exercises[currentExerciseIndex];
  const sets = todaySets[exercise.id] || [];
  const totalExercises = program.exercises.length;
  const progressPercent = ((currentExerciseIndex) / totalExercises) * 100;

  let stepsHtml = exercise.steps.map(s => `<li>${s}</li>`).join('');

  const isDuration = exercise.type === 'duration';
  const inputLabel = isDuration ? 'Süre' : 'Tekrar';
  const inputPlaceholder = isDuration ? exercise.reps : '0';
  const inputType = isDuration ? 'text' : 'text';
  const setPrefix = isDuration ? '#' : 'Set ';

  let setsHtml = sets.map((set, i) => {
    return `
      <div class="set-row">
        <span class="set-label">${setPrefix}${i + 1}</span>
        <div class="input-container">
          <div class="input-label">${inputLabel}</div>
          <input type="${inputType}" class="set-input" placeholder="${inputPlaceholder}" value="${set.reps}" 
            onchange="updateSet('${exercise.id}', ${i}, 'reps', this.value)">
        </div>
        <button class="set-delete-btn" style="background: rgba(46, 204, 113, 0.1); color: var(--green); margin-right: 4px;" onclick="startRestTimer(60)" title="Seti bitir ve dinlen">✓</button>
        <button class="set-delete-btn" onclick="deleteSet('${exercise.id}', ${i})">✕</button>
      </div>
    `;
  }).join('');

  const diffMins = workoutStartTime ? Math.floor((Date.now() - workoutStartTime) / 60000) : 0;

  container.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; position: relative;">
      <button class="back-btn" onclick="prevExercise()" ${currentExerciseIndex === 0 ? 'style="visibility:hidden"' : ''}>
        ← Önceki
      </button>
      <span id="workout-clock" style="position: absolute; left: 50%; transform: translateX(-50%); font-size: 0.8rem; color: var(--accent-1); font-weight: 600;">⏱️ ${diffMins} dk süredesiniz</span>
      <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 500;">
        ${currentExerciseIndex + 1} / ${totalExercises}
      </span>
    </div>
    
    <div style="width: 100%; height: 4px; background: rgba(255,255,255,0.06); border-radius: 2px; margin-bottom: 16px; overflow: hidden;">
      <div style="width: ${progressPercent}%; height: 100%; background: var(--accent-gradient); border-radius: 2px; transition: width 0.4s ease;"></div>
    </div>
    
    <div class="detail-card">
      <div class="detail-hero">
        <div class="hero-image-container">
          <img class="hero-image" src="${exercise.image}" alt="${exercise.name}">
        </div>
        <div class="hero-name">${exercise.name}</div>
        <div class="hero-muscle">${exercise.muscle}</div>
      </div>
      <div class="detail-body">
        <div class="detail-section">
          <div class="detail-section-title">📝 Açıklama</div>
          <p class="detail-description">${exercise.description}</p>
        </div>
        
        <div class="detail-section">
          <div class="detail-section-title">📌 Adımlar</div>
          <ol class="detail-steps">${stepsHtml}</ol>
        </div>
        
        <div class="recommended-box" style="background: rgba(var(--accent-rgb, 255, 107, 107), 0.1); border: 1px dashed var(--accent-1);">
          <span class="rec-icon">🎯</span>
          <div class="rec-text">Hedef: <strong>${exercise.sets} set × ${exercise.reps}</strong></div>
        </div>

        ${exercise.hasWeight !== false ? `
          <div class="last-weight-box" style="margin-top: 12px; padding: 12px; background: rgba(255,255,255,0.05); border-radius: 8px; border: 1px solid var(--glass-border);">
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 4px;">Ağırlık Takibi:</div>
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <span style="font-weight: 600;">${getLastExerciseWeight(exercise.id) ? `Son Ağırlık: ${getLastExerciseWeight(exercise.id)}kg` : `Önerilen: ${exercise.suggestedWeight || 0}kg`}</span>
              <button class="btn-secondary" style="padding: 4px 10px; font-size: 0.75rem;" onclick="promptWeightUpdate('${exercise.id}')">Kiloyu Değiştir</button>
            </div>
          </div>
        ` : ''}
      </div>
    </div>
    
    <div class="log-section">
      <div class="log-title">✍️ Kayıtlar</div>
      ${setsHtml}
      <button class="add-set-btn" onclick="addSet('${exercise.id}')">${isDuration ? '+ Süre Ekle' : '+ Set Ekle'}</button>
    </div>
    
    ${currentExerciseIndex < totalExercises - 1 ? `
      <button class="btn-primary" onclick="nextExercise()">
        Sonraki Hareket →
      </button>
    ` : `
      <button class="btn-primary" onclick="finishWorkout()">
        ✅ Antrenmanı Bitir ve Kaydet
      </button>
    `}
  `;
}

function updateSet(exerciseId, setIndex, field, value) {
  if (!todaySets[exerciseId]) return;
  todaySets[exerciseId][setIndex][field] = value;
}

function addSet(exerciseId) {
  if (!todaySets[exerciseId]) todaySets[exerciseId] = [];
  todaySets[exerciseId].push({ reps: '', weight: '' });
  renderWorkoutScreen();
}

function deleteSet(exerciseId, setIndex) {
  if (!todaySets[exerciseId]) return;
  if (todaySets[exerciseId].length <= 1) return;
  todaySets[exerciseId].splice(setIndex, 1);
  renderWorkoutScreen();
}

function nextExercise() {
  const program = getTodayProgram();
  if (currentExerciseIndex < program.exercises.length - 1) {
    currentExerciseIndex++;
    renderWorkoutScreen();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function prevExercise() {
  if (currentExerciseIndex > 0) {
    currentExerciseIndex--;
    renderWorkoutScreen();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// ========== REST TIMER LOGIC ==========
function startRestTimer(seconds) {
  currentRestSeconds = seconds;
  document.getElementById('rest-timer-overlay').classList.add('active');
  updateRestTimerDisplay();

  if (restTimerInterval) clearInterval(restTimerInterval);
  restTimerInterval = setInterval(() => {
    currentRestSeconds--;
    if (currentRestSeconds <= 0) {
      if ('vibrate' in navigator) navigator.vibrate([200, 100, 200]);
      showToast("Dinlenme Süresi Bitti! Sete Başla 🔥");
      skipRestTimer();
    } else {
      updateRestTimerDisplay();
    }
  }, 1000);
}

function updateRestTimerDisplay() {
  const m = Math.floor(currentRestSeconds / 60).toString().padStart(2, '0');
  const s = (currentRestSeconds % 60).toString().padStart(2, '0');
  document.getElementById('rest-timer-display').textContent = `${m}:${s}`;
}

function addRestTime(seconds) {
  currentRestSeconds += seconds;
  if (currentRestSeconds < 0) currentRestSeconds = 0;
  updateRestTimerDisplay();
}

function skipRestTimer() {
  clearInterval(restTimerInterval);
  document.getElementById('rest-timer-overlay').classList.remove('active');
}

window.startRestTimer = startRestTimer;
window.skipRestTimer = skipRestTimer;
window.addRestTime = addRestTime;

function goToExercise(index) {
  const program = getTodayProgram();
  if (program.isRestDay) return;

  if (Object.keys(todaySets).length === 0) {
    program.exercises.forEach(ex => {
      todaySets[ex.id] = [];
      for (let i = 0; i < ex.sets; i++) {
        todaySets[ex.id].push({ reps: '', weight: '' });
      }
    });
  }

  currentExerciseIndex = index;
  switchScreen('workout');
}

function finishWorkout() {
  const program = getTodayProgram();
  const todayKey = getDateKey(new Date());

  const durationMins = workoutStartTime ? Math.floor((Date.now() - workoutStartTime) / 60000) : 0;
  let totalWorkoutSets = 0;

  const workoutData = {
    date: todayKey,
    muscleGroup: program.name,
    duration: durationMins,
    exercises: program.exercises.map(ex => {
      const sets = (todaySets[ex.id] || []).filter(s => s.reps !== '' || s.weight !== '');
      totalWorkoutSets += sets.length;
      return {
        name: ex.name,
        image: ex.image,
        muscle: ex.muscle,
        type: ex.type || 'reps',
        sets: sets.map(s => ({
          reps: s.reps || 0,
          weight: parseFloat(s.weight) || 0
        }))
      };
    }).filter(ex => ex.sets.length > 0),
    completedAt: new Date().toISOString()
  };

  // Simple calorie estimation (approx. 8 kcal per minute for active time, or 10 kcal per set)
  workoutData.calories = durationMins > 0 ? durationMins * 8 : totalWorkoutSets * 12;

  saveWorkout(todayKey, workoutData);
  showSuccess(workoutData);

  currentExerciseIndex = null;
  workoutStartTime = null;
  todaySets = {};
}

// ========== HISTORY SCREEN AND WEIGHT LOGIC ==========
function renderHistoryScreen() {
  const container = document.getElementById('history-content');
  const workouts = getMonthWorkouts(historyYear, historyMonth);
  const weights = getWeightData();

  // Calculate stats
  const totalWorkouts = workouts.length;
  let totalSets = 0;

  workouts.forEach(w => {
    w.exercises.forEach(ex => {
      totalSets += ex.sets.length;
    });
  });

  const monthLabel = `${MONTH_NAMES[historyMonth]} ${historyYear}`;

  // Weights display
  let latestWeight = 'Yok';
  let weightHistoryHTML = '';
  if (weights.length > 0) {
    // Sort weights newest first
    const sortedWeights = [...weights].sort((a, b) => new Date(b.date + 'T00:00:00') - new Date(a.date + 'T00:00:00')).reverse();
    latestWeight = sortedWeights[0].weight + ' kg';

    weightHistoryHTML = sortedWeights.map(w => {
      const d = new Date(w.date + 'T00:00:00');
      return `<span style="display:inline-block; font-size: 0.8rem; background: rgba(255,255,255,0.05); padding: 4px 8px; border-radius: 4px; border: 1px solid var(--glass-border); margin-right: 6px; margin-bottom: 6px;">
          ${w.weight}kg (${d.getDate()} ${MONTH_NAMES[d.getMonth()]})
        </span>`;
    }).join('');
  }

  let historyCards = '';
  if (workouts.length === 0) {
    historyCards = `
      <div class="empty-state">
        <span class="empty-emoji">📭</span>
        <div class="empty-title">Henüz antrenman yok</div>
        <div class="empty-text">Bu ayda herhangi bir antrenman kaydı bulunmuyor.</div>
      </div>
    `;
  } else {
    historyCards = workouts.sort((a, b) => new Date(b.date) - new Date(a.date)).map(w => {
      const date = new Date(w.date + 'T00:00:00');
      const dayName = DAY_NAMES[date.getDay()];
      const dateStr = `${date.getDate()} ${MONTH_NAMES[date.getMonth()]}`;
      const exCount = w.exercises.length;
      const setCount = w.exercises.reduce((sum, e) => sum + e.sets.length, 0);
      const calorieText = w.calories ? `<span style="color:var(--accent-1)">🔥 ${w.calories} kcal</span>` : '';
      const durationText = w.duration ? `<span>⏱️ ${w.duration} dk</span>` : '';

      return `
        <div class="history-card" onclick="showHistoryDetail('${w.date}')">
          <div class="history-card-header">
            <div class="history-date">${dayName}, ${dateStr}</div>
            <div class="history-muscle">${w.muscleGroup}</div>
          </div>
          <div class="history-stats">
            <span>🤸 ${exCount} hareket</span>
            <span>🔄 ${setCount} set</span>
            ${durationText}
            ${calorieText}
          </div>
        </div>
      `;
    }).join('');
  }

  container.innerHTML = `
    <!-- Weight Section -->
    <div style="background: var(--bg-card); border-radius: var(--radius); padding: 20px; border: 1px solid var(--accent-1); margin-bottom: 20px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span style="font-family: 'Outfit'; font-weight: 700; font-size: 1.1rem; color: var(--accent-1);">⚖️ Kilo İlerlemesi</span>
        <span style="font-size: 1.5rem; font-weight: bold; color: white;">${latestWeight}</span>
      </div>
      <div style="margin-bottom: 16px;">
        ${weightHistoryHTML || '<span style="color:var(--text-muted); font-size:0.8rem;">Henüz kilo girilmedi.</span>'}
      </div>
      <button class="btn-secondary" style="padding: 10px; font-size: 0.9rem;" onclick="showWeightTrackerModal()">+ Yeni Kilo Gir</button>
    </div>

    <div class="month-selector">
      <button onclick="changeMonth(-1)">‹</button>
      <span class="month-label">${monthLabel}</span>
      <button onclick="changeMonth(1)">›</button>
    </div>
    
    <div style="text-align: center; margin-bottom: 15px;">
      <button class="btn-secondary" style="font-size: 0.9rem; padding: 8px 16px; display: inline-flex; align-items: center; justify-content: center; gap: 8px;" onclick="exportMonthData()">
        <span>📥</span> Ayın Verisini İndir
      </button>
    </div>
    
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-value">${totalWorkouts}</div>
        <div class="stat-label">Antrenman</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${totalSets}</div>
        <div class="stat-label">Toplam Set</div>
      </div>
    </div>
    
    <div class="section-title">
      <span class="title-icon">📅</span>
      Tarihçe
    </div>
    
    <div class="history-list">
      ${historyCards}
    </div>
  `;
}

function changeMonth(direction) {
  historyMonth += direction;
  if (historyMonth > 11) {
    historyMonth = 0;
    historyYear++;
  } else if (historyMonth < 0) {
    historyMonth = 11;
    historyYear--;
  }
  renderHistoryScreen();
}

function showHistoryDetail(dateKey) {
  const workout = getSavedWorkout(dateKey);
  if (!workout) return;

  const date = new Date(dateKey + 'T00:00:00');
  const dayName = DAY_NAMES[date.getDay()];
  const dateStr = `${date.getDate()} ${MONTH_NAMES[date.getMonth()]} ${date.getFullYear()}`;

  let exercisesHtml = workout.exercises.map(ex => {
    const isDurationEx = ex.type === 'duration';
    let setsHtml = ex.sets.map((s, i) => {
      if (isDurationEx) {
        return `
          <div class="modal-set-row">
            <span>Kayıt ${i + 1}</span>
            <span>${s.reps} süre</span>
          </div>
        `;
      } else {
        const weightInfo = (s.weight > 0) ? ` x ${s.weight} kg` : '';
        return `
          <div class="modal-set-row">
            <span>Set ${i + 1}</span>
            <span>${s.reps} tekrar${weightInfo}</span>
          </div>
        `;
      }
    }).join('');

    return `
      <div class="modal-exercise">
        <div class="modal-exercise-name">
          <img src="${ex.image}" style="width: 20px; height: 20px; border-radius: 4px; object-fit: cover;" alt=""> ${ex.name}
          <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 400; margin-left: auto;">${ex.muscle}</span>
        </div>
        ${setsHtml}
      </div>
    `;
  }).join('');

  const overlay = document.getElementById('history-detail-overlay');
  document.getElementById('modal-content').innerHTML = `
    <div class="modal-header">
      <div>
        <div style="font-family: 'Outfit', sans-serif; font-size: 1.2rem; font-weight: 700;">${dayName}, ${dateStr}</div>
        <div style="font-size: 0.85rem; color: var(--accent-1); margin-top: 2px;">${workout.muscleGroup}</div>
      </div>
      <button class="modal-close" onclick="closeHistoryDetail()">✕</button>
    </div>
    ${exercisesHtml}
  `;

  overlay.classList.add('active');
}

function closeHistoryDetail() {
  document.getElementById('history-detail-overlay').classList.remove('active');
}

// ========== WEIGHT TRACKER LOGIC ==========
function checkWeightTracker() {
  const weights = getWeightData();
  let shouldPrompt = false;

  if (weights.length === 0) {
    shouldPrompt = true;
  } else {
    const lastWeightEntry = weights[weights.length - 1]; // Array is sorted chronologically when saving
    const lastDate = new Date(lastWeightEntry.date);
    const now = new Date();

    // Difference in days
    const diffTime = Math.abs(now - lastDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays >= 7) {
      shouldPrompt = true;
    }
  }

  if (shouldPrompt) {
    setTimeout(() => {
      showWeightTrackerModal();
    }, 1500); // Wait 1.5 seconds before popping up so the app loads first
  }
}

function showWeightTrackerModal() {
  document.getElementById('weight-tracker-overlay').classList.add('active');
}

function closeWeightTrackerModal() {
  document.getElementById('weight-tracker-overlay').classList.remove('active');
}

function saveWeight() {
  const weightInput = document.getElementById('weight-input-box').value;
  if (!weightInput || isNaN(weightInput)) {
    showToast("Geçerli bir kilo girin!");
    return;
  }

  const weights = getWeightData();
  const dateKey = getDateKey(new Date());

  // Check if today already has a weight, if so overwrite
  const existingIdx = weights.findIndex(w => w.date === dateKey);
  if (existingIdx > -1) {
    weights[existingIdx].weight = parseFloat(weightInput);
  } else {
    weights.push({
      date: dateKey,
      weight: parseFloat(weightInput),
      timestamp: new Date().toISOString()
    });
  }

  localStorage.setItem('gym_weights', JSON.stringify(weights));

  closeWeightTrackerModal();
  showToast("Kilonuz başarıyla kaydedildi! 🎯");

  if (currentScreen === 'history') {
    renderHistoryScreen();
  }
}

function getWeightData() {
  return JSON.parse(localStorage.getItem('gym_weights') || '[]');
}

// ========== SUCCESS ANIMATION VE TOAST ==========
function showSuccess(workoutData) {
  const overlay = document.getElementById('success-overlay');
  const exCount = workoutData.exercises.length;

  document.getElementById('success-details').innerHTML = `
    <div class="success-emoji">🎉</div>
    <div class="success-title">Tebrikler!</div>
    <div class="success-text">
      ${exCount} egzersiz tamamlandı!<br>
      Antrenman verisi kaydedildi 📊
    </div>
  `;

  overlay.classList.add('active');

  setTimeout(() => {
    overlay.classList.remove('active');
    switchScreen('today');
  }, 2500);
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// ========== DATA HELPERS ==========
function getTodayProgram() {
  const today = new Date();
  return WORKOUT_PROGRAM[today.getDay()];
}

function getDateKey(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function saveWorkout(dateKey, data) {
  const allWorkouts = JSON.parse(localStorage.getItem('gym_workouts') || '{}');
  allWorkouts[dateKey] = data;
  localStorage.setItem('gym_workouts', JSON.stringify(allWorkouts));
}

function getSavedWorkout(dateKey) {
  const allWorkouts = JSON.parse(localStorage.getItem('gym_workouts') || '{}');
  return allWorkouts[dateKey] || null;
}

function getMonthWorkouts(year, month) {
  const allWorkouts = JSON.parse(localStorage.getItem('gym_workouts') || '{}');
  const results = [];

  Object.keys(allWorkouts).forEach(key => {
    const date = new Date(key + 'T00:00:00');
    if (date.getFullYear() === year && date.getMonth() === month) {
      results.push(allWorkouts[key]);
    }
  });

  return results;
}

function exportMonthData() {
  const workouts = getMonthWorkouts(historyYear, historyMonth);
  if (workouts.length === 0) {
    showToast("İndirilecek antrenman bulunamadı!");
    return;
  }

  const monthName = MONTH_NAMES[historyMonth];
  const exportData = {
    yil: historyYear,
    ay: monthName,
    toplamAntrenman: workouts.length,
    antrenmanlar: workouts
  };

  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportData, null, 2));
  const downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", `Gymo_${monthName}_${historyYear}.json`);
  document.body.appendChild(downloadAnchorNode);
  downloadAnchorNode.click();
  downloadAnchorNode.remove();

  showToast(`${monthName} verileri indirildi! 📥`);
}

// ========== EXERCISES LIBRARY ==========
function renderExercisesScreen() {
  const container = document.getElementById('exercises-content');

  // Kas gruplarını topla (benzersiz)
  const muscles = [...new Set(allExercisesList.map(e => e.muscle))];

  const filterBtns = ['Tümü', ...muscles].map(m =>
    `<button class="filter-btn ${m === 'Tümü' ? 'active' : ''}" onclick="filterExercises('${m}', this)">${m}</button>`
  ).join('');

  container.innerHTML = `
    <div class="search-container">
      <span class="search-icon">🔍</span>
      <input type="text" class="search-input" id="exercise-search" placeholder="Hareket Ara..." oninput="handleSearch()">
    </div>
    
    <div class="filter-container" id="filter-wrapper">
      ${filterBtns}
    </div>
    
    <div class="exercise-list" id="library-list">
      ${generateExerciseCards(allExercisesList)}
    </div>
  `;
}

function generateExerciseCards(exercisesList) {
  if (exercisesList.length === 0) {
    return `<div style="text-align:center; margin-top:40px; color:var(--text-muted);">Arama sonucu bulunamadı.</div>`;
  }
  return exercisesList.map(ex => `
    <div class="exercise-card">
      <div class="exercise-card-header">
        <div class="exercise-image">
          <img src="${ex.image}" alt="${ex.name}" />
        </div>
        <div class="exercise-info">
          <div class="exercise-name">${ex.name}</div>
          <div class="exercise-meta">${ex.muscle} · ${ex.type === 'duration' ? 'Süre odaklı' : 'Tekrar odaklı'}</div>
        </div>
      </div>
    </div>
  `).join('');
}

function filterExercises(category, btnElement) {
  // Update active button
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');

  document.getElementById('exercise-search').value = ''; // clear search

  const filtered = category === 'Tümü'
    ? allExercisesList
    : allExercisesList.filter(ex => ex.muscle === category);

  document.getElementById('library-list').innerHTML = generateExerciseCards(filtered);
}

function handleSearch() {
  const searchTerm = document.getElementById('exercise-search').value.toLowerCase();

  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector('.filter-btn').classList.add('active'); // Set 'Tümü' as active visually

  const filtered = allExercisesList.filter(ex =>
    ex.name.toLowerCase().includes(searchTerm) ||
    ex.muscle.toLowerCase().includes(searchTerm)
  );

  document.getElementById('library-list').innerHTML = generateExerciseCards(filtered);
}

window.filterExercises = filterExercises;
window.handleSearch = handleSearch;

function promptWeightUpdate(exerciseId) {
  const currentWeight = getLastExerciseWeight(exerciseId) || 0;
  const newWeight = prompt("Yeni ağırlığı girin (kg):", currentWeight);
  if (newWeight !== null && !isNaN(newWeight) && newWeight !== "") {
    applyWeightToAllSets(exerciseId, newWeight);
  }
}

// Global scope a ekle (HTML onclick ler için)
window.promptWeightUpdate = promptWeightUpdate;
window.applyWeightToAllSets = applyWeightToAllSets;
