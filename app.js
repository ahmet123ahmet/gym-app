// ========== EXERCISE DATABASE ==========
// ========== EXERCISE DATABASE ==========
const EXERCISES = {};

// Haftalık Program (Her Gün Bütün Hareketler)
const allExercisesList = [
  { id: 'concentrated_bicep_curl', name: 'Concentrated Bicep Curl', image: './images/concentrated-bicep-curl.gif', muscle: 'Biceps', sets: 3, reps: '10-12', description: 'Biceps kaslarını izole eder.', steps: ['Dambılı elinize alın.', 'Dirseğinizi uyluğunuza dayayın.', 'Ağırlığı yukarı kaldırıp indirin.'] },
  { id: 'crunch_mekik', name: 'Crunch (Mekik)', image: './images/crunch-mekik.gif', muscle: 'Karın', sets: 4, reps: '15-20', description: 'Karın kaslarınızı çalıştırır.', steps: ['Sırt üstü uzanın.', 'Dizlerinizi bükün.', 'Omuzlarınızı yerden kaldırarak mekik çekin.'] },
  { id: 'crunch_yarim_mekik', name: 'Crunch (Yarım Mekik)', image: './images/crunch-yarim-mekik.gif', muscle: 'Karın', sets: 4, reps: '15-20', description: 'Üst karın kaslarınızı hedefler.', steps: ['Sırt üstü yatın.', 'Elleri göğsünüzde veya başınızın arkasında tutun.', 'Yarım mekik hareketi yapın.'] },
  { id: 'dumbbell_flat_bench_press', name: 'Dumbbell Flat Bench Press', image: './images/dumbbell-flat-bench-press.gif', muscle: 'Göğüs', sets: 3, reps: '10-12', description: 'Göğüs kaslarınızı güçlendirir.', steps: ['Sehpaya sırt üstü uzanın.', 'Dambılları göğüs hizasında tutun.', 'Yukarı doğru itin ve başlangıç pozisyonuna dönün.'] },
  { id: 'dumbbell_preacher_curl', name: 'Dumbbell Preacher Curl', image: './images/dumbbell-preacher-curl.gif', muscle: 'Biceps', sets: 3, reps: '10-12', description: 'Biceps kaslarını hedefler.', steps: ['Preacher sehpasına oturun.', 'Kolunuzu sehpaya dayayın.', 'Dambılı kaldırıp indirin.'] },
  { id: 'dumbbell_pull_over', name: 'Dumbbell Pull Over', image: './images/dumbbell-pull-over.gif', muscle: 'Göğüs / Sırt', sets: 3, reps: '10-12', description: 'Göğüs ve sırt kaslarınızı esnetip çalıştırır.', steps: ['Sehpaya sırtınızın üst kısmını dayayın.', 'Tek dambılı iki elinizle tutun.', 'Başınızın arkasına doğru indirip kaldırın.'] },
  { id: 'hanging_knee_raises', name: 'Hanging Knee Raises', image: './images/hanging-knee-raises.gif', muscle: 'Alt Karın', sets: 3, reps: '12-15', description: 'Alt karın kaslarınızı çalıştırır.', steps: ['Barfiks çubuğuna asılın.', 'Dizlerinizi göğsünüze doğru çekin.', 'Bacaklarınızı kontrollü şekilde indirin.'] },
  { id: 'kardio_ip_atlama', name: 'İp Atlama', image: './images/ip-atlama.png', muscle: 'Kardiyo', sets: 1, reps: '10 Dk', description: 'Tüm vücudu çalıştıran kardiyovasküler egzersiz.', steps: ['İpi iki elinizle tutun.', 'Zıplayarak ipi altınızdan geçirin.', 'Ritmi koruyarak devam edin.'] },
  { id: 'lunge', name: 'Lunge', image: './images/lunge.gif', muscle: 'Bacak', sets: 3, reps: '12-15', description: 'Bacak ve kalça kaslarını çalıştırır.', steps: ['Ayakta dik durun.', 'Bir adım öne atın ve dizlerinizi bükerek çömelin.', 'Başlangıç pozisyonuna dönün ve bacak değiştirin.'] },
  { id: 'plank', name: 'Plank', image: './images/plank.jfif', muscle: 'Kor', sets: 3, reps: '30-60 Sn', hasWeight: false, description: 'Karın ve kor kaslarınızı güçlendirir.', steps: ['Şınav pozisyonu alın.', 'Dirsekleriniz üzerinde durun.', 'Vücudunuzu düz bir çizgide tutarak bekleyin.'] },
  { id: 'pull_ups', name: 'Pull Ups', image: './images/pull-ups.gif', muscle: 'Sırt', sets: 3, reps: '8-10', hasWeight: false, description: 'Sırt ve biceps kaslarınızı geliştirir.', steps: ['Barfiks çubuğuna tutunun.', 'Vücudunuzu yukarı çekin.', 'Kontrollü bir şekilde indirin.'] },
  { id: 'push_up', name: 'Push Up', image: './images/push-up.gif', muscle: 'Göğüs / Arka Kol', sets: 3, reps: '12-15', hasWeight: false, description: 'Göğüs, omuz ve arka kol kaslarını çalıştırır.', steps: ['Şınav pozisyonu alın.', 'Vücudunuzu aşağı indirin.', 'Kendinizi yukarı itin.'] },
  { id: 'kardio_run', name: 'Run', image: './images/run.jfif', muscle: 'Kardiyo', sets: 1, reps: '20 Dk', description: 'Genel dayanıklılık ve kalori yakımı için koşu.', steps: ['Hazırlık ısınması yapın.', 'Kendi temponuzda koşmaya başlayın.', 'Soğuma hareketleri ile bitirin.'] },
  { id: 'single_arm_dumbbell_row', name: 'Single Arm Dumbbell Row', image: './images/single-arm-dumbbell-row.gif', muscle: 'Sırt', sets: 3, reps: '10-12', description: 'Sırt kaslarını tek taraflı çalıştırır.', steps: ['Sehpaya bir dizinizi ve elinizi koyun.', 'Diğer elinizle dambılı tutun.', 'Dambılı karnınıza doğru çekip indirin.'] },
  { id: 'squat', name: 'Squat', image: './images/squat.gif', muscle: 'Bacak', sets: 4, reps: '12-15', description: 'Bacak ve kalça kaslarını hedefler.', steps: ['Ayaklarınızı omuz genişliğinde açın.', 'Sırtınızı düz tutarak çömelin.', 'Topuklarınızdan güç alarak kalkın.'] },
  { id: 'tuck_crunch', name: 'Tuck Crunch', image: './images/tuck-crunch.jfif', muscle: 'Karın', sets: 3, reps: '15-20', description: 'Karın kaslarınızı yoğun şekilde çalıştırır.', steps: ['Sırt üstü uzanın.', 'Dizlerinizi göğsünüze doğru çekerken omuzlarınızı da kaldırın.', 'Başlangıç pozisyonuna dönün.'] }
];

const getExercises = (...ids) => ids.map(id => allExercisesList.find(e => e.id === id)).filter(Boolean);

const WORKOUT_PROGRAM = {
  0: { name: 'Yoğun Göğüs, Biceps & Karın', emoji: '🔥', exercises: getExercises('dumbbell_flat_bench_press', 'push_up', 'dumbbell_pull_over', 'concentrated_bicep_curl', 'dumbbell_preacher_curl', 'tuck_crunch', 'hanging_knee_raises', 'plank'), isRestDay: false },
  1: { name: 'Tam Dinlenme', emoji: '😴', exercises: [], isRestDay: true },
  2: { name: 'Full Alt Vücut & Karın Patlaması', emoji: '🦵', exercises: getExercises('squat', 'lunge', 'crunch_mekik', 'crunch_yarim_mekik', 'tuck_crunch', 'hanging_knee_raises', 'plank'), isRestDay: false },
  3: { name: 'Sırt Power & Kondisyon', emoji: '🦅', exercises: getExercises('pull_ups', 'single_arm_dumbbell_row', 'push_up', 'plank', 'tuck_crunch', 'kardio_run'), isRestDay: false },
  4: { name: 'Tam Dinlenme', emoji: '😴', exercises: [], isRestDay: true },
  5: { name: 'Total Body & Core Warrior', emoji: '⚔️', exercises: getExercises('squat', 'push_up', 'dumbbell_flat_bench_press', 'pull_ups', 'hanging_knee_raises', 'tuck_crunch', 'plank'), isRestDay: false },
  6: { name: 'Kardiyo & Karın Parçalama', emoji: '🏃', exercises: getExercises('kardio_ip_atlama', 'kardio_run', 'crunch_mekik', 'crunch_yarim_mekik', 'tuck_crunch', 'hanging_knee_raises', 'plank'), isRestDay: false }
};

const DAY_NAMES = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
const MONTH_NAMES = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];

// ========== STATE ==========
let currentScreen = 'today';
let currentExerciseIndex = null;
let todaySets = {};
let historyMonth = new Date().getMonth();
let historyYear = new Date().getFullYear();

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderTodayScreen();
  setupNavigation();
  checkWeightTracker();
});

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
  }
}

// ========== TODAY SCREEN ==========
function renderTodayScreen() {
  const program = getTodayProgram();
  const container = document.getElementById('today-content');

  if (program.isRestDay) {
    container.innerHTML = `
      <div class="rest-day-banner">
        <span class="rest-emoji">😴</span>
        <h2>Dinlenme Günü</h2>
        <p>Bugün kaslarını dinlendir, bol su iç ve yarına hazır ol! 💪</p>
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
            <div class="exercise-meta">${ex.muscle} · ${ex.sets} set × ${ex.reps}</div>
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

  program.exercises.forEach(ex => {
    todaySets[ex.id] = [];
    for (let i = 0; i < ex.sets; i++) {
      todaySets[ex.id].push({ reps: '', weight: '' });
    }
  });

  switchScreen('workout');
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

  let setsHtml = sets.map((set, i) => {
    if (exercise.id.startsWith('kardio')) {
      return `
        <div class="set-row">
          <span class="set-label" style="font-size:0.75rem">Kayıt ${i + 1}</span>
          <div class="input-label" style="width: auto; margin-right:4px;">Dk(Süre)</div>
          <input type="number" class="set-input" placeholder="20" value="${set.reps}" 
            onchange="updateSet('${exercise.id}', ${i}, 'reps', this.value)" min="0">
          <div class="input-label" style="width: auto; margin-left:4px; margin-right:4px;">Kalori</div>
          <input type="number" class="set-input" placeholder="150" value="${set.weight}" 
            onchange="updateSet('${exercise.id}', ${i}, 'weight', this.value)" min="0">
          <button class="set-delete-btn" onclick="deleteSet('${exercise.id}', ${i})">✕</button>
        </div>
      `;
    } else {
      let weightHtml = exercise.hasWeight !== false ? `
        <div class="input-label" style="width:auto; margin-left:4px;">Kg</div>
        <input type="number" class="set-input" placeholder="0" value="${set.weight}" 
          onchange="updateSet('${exercise.id}', ${i}, 'weight', this.value)" min="0" step="0.5">
      ` : '';

      return `
        <div class="set-row">
          <span class="set-label">Set ${i + 1}</span>
          <div class="input-label" style="width:auto; margin-right:4px;">Tekrar/Süre</div>
          <input type="text" class="set-input" placeholder="0" value="${set.reps}" 
            onchange="updateSet('${exercise.id}', ${i}, 'reps', this.value)">
          ${weightHtml}
          <button class="set-delete-btn" onclick="deleteSet('${exercise.id}', ${i})">✕</button>
        </div>
      `;
    }
  }).join('');

  container.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
      <button class="back-btn" onclick="prevExercise()" ${currentExerciseIndex === 0 ? 'style="visibility:hidden"' : ''}>
        ← Önceki
      </button>
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
        
        <div class="recommended-box">
          <span class="rec-icon">🎯</span>
          <div class="rec-text">Önerilen: <strong>${exercise.sets} set × ${exercise.reps}</strong></div>
        </div>
      </div>
    </div>
    
    <div class="log-section">
      <div class="log-title">✍️ Kayıtlar</div>
      ${setsHtml}
      <button class="add-set-btn" onclick="addSet('${exercise.id}')">${exercise.id.startsWith('kardio') ? '+ Kardio Ekle' : '+ Set Ekle'}</button>
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

  const workoutData = {
    date: todayKey,
    muscleGroup: program.name,
    exercises: program.exercises.map(ex => {
      const sets = (todaySets[ex.id] || []).filter(s => s.reps !== '' || s.weight !== '');
      return {
        name: ex.name,
        image: ex.image,
        muscle: ex.muscle,
        sets: sets.map(s => ({
          reps: s.reps || 0,
          weight: parseFloat(s.weight) || 0
        }))
      };
    }).filter(ex => ex.sets.length > 0),
    completedAt: new Date().toISOString()
  };

  saveWorkout(todayKey, workoutData);
  showSuccess(workoutData);

  currentExerciseIndex = null;
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

      return `
        <div class="history-card" onclick="showHistoryDetail('${w.date}')">
          <div class="history-card-header">
            <div class="history-date">${dayName}, ${dateStr}</div>
            <div class="history-muscle">${w.muscleGroup}</div>
          </div>
          <div class="history-stats">
            <span>🤸 ${exCount} hareket</span>
            <span>🔄 ${setCount} set</span>
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
    let setsHtml = ex.sets.map((s, i) => {
      if (ex.name.toLowerCase().includes('kardio')) {
        return `
          <div class="modal-set-row">
            <span>Kayıt ${i + 1}</span>
            <span>${s.reps} Dk, ${s.weight} Kalori Yaktın</span>
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
