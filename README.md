[Qwen_html_20260827_xom5aw9v9.html](https://github.com/user-attachments/files/31516687/Qwen_html_20260827_xom5aw9v9.html)
<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<title>Телеграмма REAL</title>
<script src="https://unpkg.com/peerjs@1.5.2/dist/peerjs.min.js"></script>
<style>
  :root { --bg:#fff; --sidebar:#f4f4f5; --chat:#e5ddd5; --text:#111; --muted:#6b7280; --border:#e5e7eb; --my:#d9fdd3; --other:#fff; --accent:#2aabee; --hover:#e9ecef; --input:#fff; }
  [data-theme="dark"] { --bg:#17212b; --sidebar:#0e1621; --chat:#0e1621; --text:#fff; --muted:#8a9aa9; --border:#232e3c; --my:#2b5278; --other:#182533; --accent:#2aabee; --hover:#202b36; --input:#242f3d; }
  * { box-sizing:border-box; margin:0; padding:0; font-family:'Segoe UI',sans-serif; }
  body { background:var(--bg); color:var(--text); height:100vh; overflow:hidden; transition:.3s; }
  .app { display:flex; height:100vh; max-width:1400px; margin:0 auto; box-shadow:0 0 30px rgba(0,0,0,.1); }
  .sidebar { width:350px; background:var(--sidebar); border-right:1px solid var(--border); display:flex; flex-direction:column; }
  .sidebar-header { padding:15px; background:var(--accent); color:#fff; display:flex; justify-content:space-between; align-items:center; }
  .logo { font-size:20px; font-weight:bold; }
  .icon-btn { background:rgba(255,255,255,.2); border:none; color:#fff; width:36px; height:36px; border-radius:50%; cursor:pointer; font-size:16px; }
  .icon-btn:hover { background:rgba(255,255,255,.35); }
  
  .connection-panel { padding:15px; border-bottom:1px solid var(--border); background:var(--sidebar); }
  .my-id-box { background:var(--input); border:1px solid var(--border); border-radius:8px; padding:8px 12px; font-size:12px; margin-bottom:10px; display:flex; justify-content:space-between; align-items:center; gap:8px; }
  .my-id-box code { flex:1; word-break:break-all; font-family:monospace; color:var(--accent); font-weight:600; }
  .copy-btn { background:var(--accent); color:#fff; border:none; padding:4px 10px; border-radius:6px; cursor:pointer; font-size:12px; }
  .connect-form { display:flex; gap:6px; }
  .connect-form input { flex:1; padding:8px 12px; border-radius:20px; border:1px solid var(--border); background:var(--input); color:var(--text); outline:none; font-size:13px; }
  .connect-form button { background:var(--accent); color:#fff; border:none; padding:0 16px; border-radius:20px; cursor:pointer; font-size:13px; }
  .status { font-size:12px; margin-top:8px; padding:6px 10px; border-radius:6px; }
  .status.online { background:rgba(81,207,102,.15); color:#2f9e44; }
  .status.offline { background:rgba(239,68,68,.15); color:#c92a2a; }
  .status.connecting { background:rgba(255,212,59,.15); color:#e67700; }

  .chat-area { flex:1; display:flex; flex-direction:column; background:var(--chat); }
  .chat-header { padding:15px 20px; background:var(--sidebar); border-bottom:1px solid var(--border); display:flex; align-items:center; gap:12px; }
  .avatar { width:42px; height:42px; border-radius:50%; background:var(--accent); display:flex; align-items:center; justify-content:center; color:#fff; font-weight:bold; }
  .chat-header-info h3 { font-size:16px; }
  .chat-header-info span { font-size:12px; color:var(--muted); }
  .chat-header-info span.typing { color:var(--accent); font-style:italic; }
  .messages { flex:1; overflow-y:auto; padding:20px; display:flex; flex-direction:column; gap:8px; }
  .message { max-width:65%; padding:8px 12px; border-radius:12px; word-wrap:break-word; box-shadow:0 1px 1px rgba(0,0,0,.1); }
  .message.my { background:var(--my); align-self:flex-end; border-bottom-right-radius:4px; }
  .message.other { background:var(--other); align-self:flex-start; border-bottom-left-radius:4px; }
  .message img { max-width:100%; border-radius:8px; margin-bottom:4px; cursor:pointer; }
  .message-text { margin-bottom:3px; white-space:pre-wrap; }
  .message-meta { font-size:10px; color:var(--muted); text-align:right; }
  .audio-msg { display:flex; align-items:center; gap:10px; min-width:200px; }
  .audio-play { width:36px; height:36px; border-radius:50%; background:var(--accent); color:#fff; border:none; cursor:pointer; }
  .audio-wave { display:flex; align-items:center; gap:2px; flex:1; height:30px; }
  .audio-wave span { display:block; width:3px; background:var(--muted); border-radius:2px; }
  .audio-duration { font-size:11px; color:var(--muted); }

  .input-area { padding:10px 15px; background:var(--sidebar); border-top:1px solid var(--border); display:flex; gap:8px; align-items:center; }
  .input-area input[type="text"] { flex:1; padding:10px 15px; border-radius:20px; border:1px solid var(--border); background:var(--input); color:var(--text); outline:none; }
  .tool-btn { background:transparent; border:none; color:var(--muted); width:38px; height:38px; border-radius:50%; cursor:pointer; font-size:18px; }
  .tool-btn:hover { color:var(--accent); }
  .tool-btn.recording { color:#ef4444; animation:pulse 1s infinite; }
  @keyframes pulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.15)} }
  .send-btn { background:var(--accent); color:#fff; border:none; width:42px; height:42px; border-radius:50%; cursor:pointer; font-size:18px; }
  .empty-chat { flex:1; display:flex; align-items:center; justify-content:center; color:var(--muted); font-size:16px; text-align:center; padding:20px; }
  .emoji-panel { position:absolute; bottom:70px; left:15px; background:var(--sidebar); border:1px solid var(--border); border-radius:12px; padding:10px; width:280px; display:none; box-shadow:0 5px 20px rgba(0,0,0,.2); z-index:10; }
  .emoji-panel.open { display:block; }
  .emoji-grid { display:grid; grid-template-columns:repeat(8,1fr); gap:4px; max-height:250px; overflow-y:auto; }
  .emoji-grid span { font-size:22px; cursor:pointer; padding:4px; border-radius:6px; text-align:center; }
  .emoji-grid span:hover { background:var(--hover); }
  ::-webkit-scrollbar { width:6px; }
  ::-webkit-scrollbar-thumb { background:var(--muted); border-radius:3px; }
</style>
</head>
<body>
<div class="app">
  <aside class="sidebar">
    <div class="sidebar-header">
      <div class="logo">✈️ Телеграмма REAL</div>
      <button class="icon-btn" id="themeToggle">🌙</button>
    </div>
    <div class="connection-panel">
      <div style="font-size:12px; color:var(--muted); margin-bottom:6px;">🔑 Твой ID (отправь другу):</div>
      <div class="my-id-box">
        <code id="myId">загрузка...</code>
        <button class="copy-btn" id="copyId">📋</button>
      </div>
      <div style="font-size:12px; color:var(--muted); margin-bottom:6px;">👥 Подключиться к другу:</div>
      <div class="connect-form">
        <input type="text" id="peerIdInput" placeholder="Вставь ID друга...">
        <button id="connectBtn">→</button>
      </div>
      <div class="status offline" id="status">⚪ Не подключён</div>
    </div>
  </aside>

  <main class="chat-area" id="chatArea">
    <div class="empty-chat">
      <div>
        <div style="font-size:48px; margin-bottom:15px;">👋</div>
        <div style="font-size:18px; margin-bottom:10px;">Добро пожаловать в Телеграмма REAL!</div>
        <div style="font-size:14px; line-height:1.6;">
          1. Скопируй свой ID и отправь другу<br>
          2. Друг вставляет твой ID у себя и жмёт →<br>
          3. Общайтесь в реальном времени! 🎉
        </div>
      </div>
    </div>
  </main>
</div>

<div class="emoji-panel" id="emojiPanel">
  <div class="emoji-grid" id="emojiGrid"></div>
</div>

<script>
// ===== КОНФИГ =====
const PEER_PREFIX = 'telegramma-';
let peer = null;
let conn = null;
let myPeerId = null;
let friendName = 'Друг';
let isRecording = false;
let mediaRecorder = null;
let audioChunks = [];
let recordStartTime = 0;

// ===== ИНИЦИАЛИЗАЦИЯ PEER =====
function initPeer() {
  // Генерируем случайный ID
  myPeerId = PEER_PREFIX + Math.random().toString(36).substr(2, 9);
  
  peer = new Peer(myPeerId, {
    debug: 1,
    config: {
      iceServers: [
        { urls: 'stun:stun.l.google.com:19302' },
        { urls: 'stun:stun1.l.google.com:19302' }
      ]
    }
  });

  peer.on('open', id => {
    document.getElementById('myId').textContent = id;
    setStatus('offline', '⚪ Готов к подключению');
  });

  peer.on('connection', c => {
    conn = c;
    setupConnection();
  });

  peer.on('error', err => {
    console.error('Peer error:', err);
    if (err.type === 'peer-unavailable') {
      setStatus('offline', '❌ Друг не в сети или неверный ID');
    } else if (err.type === 'network') {
      setStatus('offline', '❌ Ошибка сети. Проверь интернет.');
    }
  });
}

// ===== ПОДКЛЮЧЕНИЕ К ДРУГУ =====
document.getElementById('connectBtn').onclick = () => {
  const friendId = document.getElementById('peerIdInput').value.trim();
  if (!friendId) return;
  
  setStatus('connecting', '🟡 Подключение...');
  conn = peer.connect(friendId, { reliable: true });
  setupConnection();
};

function setupConnection() {
  conn.on('open', () => {
    setStatus('online', '🟢 Подключён! Можно общаться');
    renderChat();
  });

  conn.on('data', data => {
    handleIncoming(data);
  });

  conn.on('close', () => {
    setStatus('offline', '🔴 Друг отключился');
    friendName = 'Друг';
  });

  conn.on('error', err => {
    console.error('Connection error:', err);
    setStatus('offline', '❌ Ошибка соединения');
  });
}

function setStatus(type, text) {
  const el = document.getElementById('status');
  el.className = 'status ' + type;
  el.textContent = text;
}

// ===== ОБРАБОТКА ВХОДЯЩИХ ДАННЫХ =====
function handleIncoming(data) {
  if (data.type === 'name') {
    friendName = data.name;
    document.querySelector('.chat-header-info h3').textContent = friendName;
    return;
  }
  if (data.type === 'typing') {
    const s = document.getElementById('statusLine');
    if (s) { s.textContent = 'печатает...'; s.classList.add('typing'); }
    setTimeout(() => {
      if (s) { s.textContent = 'в сети'; s.classList.remove('typing'); }
    }, 2000);
    return;
  }

  const messagesDiv = document.getElementById('messages');
  if (!messagesDiv) return;

  const msg = { ...data, from: 'other' };
  addMessageToDOM(msg, messagesDiv);
}

// ===== ОТПРАВКА ДАННЫХ =====
function send(data) {
  if (!conn || !conn.open) {
    alert('Сначала подключись к другу!');
    return false;
  }
  conn.send(data);
  return true;
}

// ===== РЕНДЕР ЧАТА =====
function renderChat() {
  const chatArea = document.getElementById('chatArea');
  chatArea.innerHTML = `
    <div class="chat-header">
      <div class="avatar">${friendName[0].toUpperCase()}</div>
      <div class="chat-header-info">
        <h3>${friendName}</h3>
        <span id="statusLine">в сети</span>
      </div>
    </div>
    <div class="messages" id="messages"></div>
    <div class="input-area">
      <button class="tool-btn" id="emojiBtn">😊</button>
      <button class="tool-btn" id="attachBtn">📎</button>
      <input type="text" id="msgInput" placeholder="Написать сообщение..." autocomplete="off">
      <button class="tool-btn" id="micBtn">🎤</button>
      <button class="send-btn" id="sendBtn">➤</button>
    </div>
  `;

  const input = document.getElementById('msgInput');
  document.getElementById('sendBtn').onclick = sendText;
  input.onkeypress = e => { if (e.key === 'Enter') sendText(); };
  input.oninput = () => send({ type: 'typing' });
  document.getElementById('emojiBtn').onclick = toggleEmoji;
  document.getElementById('attachBtn').onclick = attachFile;
  document.getElementById('micBtn').onclick = toggleRecording;
  input.focus();

  // Отправляем своё имя
  send({ type: 'name', name: 'Я' });
}

// ===== ТЕКСТ =====
function sendText() {
  const input = document.getElementById('msgInput');
  const text = input.value.trim();
  if (!text) return;
  
  const now = new Date();
  const time = now.getHours().toString().padStart(2,'0') + ':' + now.getMinutes().toString().padStart(2,'0');
  const msg = { type: 'text', text, time };
  
  if (send(msg)) {
    addMessageToDOM({ ...msg, from: 'my' }, document.getElementById('messages'));
    input.value = '';
  }
}

// ===== ФОТО =====
function attachFile() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.onchange = e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const max = 800;
        let w = img.width, h = img.height;
        if (w > max || h > max) {
          if (w > h) { h = h * max / w; w = max; }
          else { w = w * max / h; h = max; }
        }
        canvas.width = w; canvas.height = h;
        canvas.getContext('2d').drawImage(img, 0, 0, w, h);
        const compressed = canvas.toDataURL('image/jpeg', 0.6);
        const now = new Date();
        const time = now.getHours().toString().padStart(2,'0') + ':' + now.getMinutes().toString().padStart(2,'0');
        const msg = { type: 'image', image: compressed, time };
        if (send(msg)) {
          addMessageToDOM({ ...msg, from: 'my' }, document.getElementById('messages'));
        }
      };
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  };
  input.click();
}

// ===== ГОЛОСОВЫЕ =====
async function toggleRecording() {
  const btn = document.getElementById('micBtn');
  if (!isRecording) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder = new MediaRecorder(stream);
      audioChunks = [];
      mediaRecorder.ondataavailable = e => audioChunks.push(e.data);
      mediaRecorder.onstop = () => {
        const blob = new Blob(audioChunks, { type: 'audio/webm' });
        const reader = new FileReader();
        reader.onloadend = () => {
          const duration = Math.floor((Date.now() - recordStartTime) / 1000);
          const mins = Math.floor(duration / 60);
          const secs = (duration % 60).toString().padStart(2, '0');
          const now = new Date();
          const time = now.getHours().toString().padStart(2,'0') + ':' + now.getMinutes().toString().padStart(2,'0');
          const msg = { type: 'audio', audio: reader.result, duration: `${mins}:${secs}`, time };
          if (send(msg)) {
            addMessageToDOM({ ...msg, from: 'my' }, document.getElementById('messages'));
          }
        };
        reader.readAsDataURL(blob);
        stream.getTracks().forEach(t => t.stop());
      };
      mediaRecorder.start();
      isRecording = true;
      recordStartTime = Date.now();
      btn.classList.add('recording');
      btn.textContent = '⏹';
    } catch (err) {
      alert('Нет доступа к микрофону: ' + err.message);
    }
  } else {
    mediaRecorder.stop();
    isRecording = false;
    btn.classList.remove('recording');
    btn.textContent = '🎤';
  }
}

// ===== РЕНДЕР СООБЩЕНИЯ =====
function addMessageToDOM(msg, container) {
  const div = document.createElement('div');
  div.className = 'message ' + msg.from;
  let content = '';
  
  if (msg.type === 'text' || !msg.type) {
    content += `<div class="message-text">${escapeHtml(msg.text)}</div>`;
  } else if (msg.type === 'image') {
    content += `<img src="${msg.image}" onclick="window.open(this.src)">`;
  } else if (msg.type === 'audio') {
    content += `
      <div class="audio-msg">
        <button class="audio-play" onclick="playAudio(this, '${msg.audio}')">▶</button>
        <div class="audio-wave">${generateWave()}</div>
        <div class="audio-duration">${msg.duration}</div>
      </div>`;
  }
  content += `<div class="message-meta">${msg.time}</div>`;
  div.innerHTML = content;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function generateWave() {
  let html = '';
  for (let i = 0; i < 20; i++) {
    html += `<span style="height:${5 + Math.random() * 20}px"></span>`;
  }
  return html;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function playAudio(btn, src) {
  const audio = new Audio(src);
  if (btn.dataset.playing === '1') {
    audio.pause();
    btn.textContent = '▶';
    btn.dataset.playing = '0';
    return;
  }
  document.querySelectorAll('.audio-play').forEach(b => { b.textContent = '▶'; b.dataset.playing = '0'; });
  btn.textContent = '⏸';
  btn.dataset.playing = '1';
  audio.play();
  audio.onended = () => { btn.textContent = '▶'; btn.dataset.playing = '0'; };
}

// ===== ЭМОДЗИ =====
const emojis = ['😀','😃','😄','😁','😆','😅','😂','🤣','😊','😇','🙂','😉','😍','🥰','😘','😋','😛','😎','🤩','🥳','😢','😭','😤','😡','🤯','😱','🤔','🤗','🤫','🤭','🤐','😴','🤢','🤮','🤧','😷','🤒','🥵','🥶','🥺','😈',' 👿',' 👹','🤡','💩',' 👻','💀',' 👽','🤖','👍',' 👎',' 👌','✌️','🤞','🤟','🤘',' 🤙',' 👋','🖐️',' ✋',' 👏','🙌','🤝','🙏','❤️','🧡','💛','💚','💙','💜','🖤','🔥','✨','⭐','💫','💥','💦','🎉','🎊','🎁','🌹','🌸','🌺'];
function initEmoji() {
  const grid = document.getElementById('emojiGrid');
  emojis.forEach(e => {
    const s = document.createElement('span');
    s.textContent = e.trim();
    s.onclick = () => {
      const input = document.getElementById('msgInput');
      if (input) { input.value += e.trim(); input.focus(); }
    };
    grid.appendChild(s);
  });
}
function toggleEmoji() {
  document.getElementById('emojiPanel').classList.toggle('open');
}

// ===== КОПИРОВАНИЕ ID =====
document.getElementById('copyId').onclick = () => {
  const id = document.getElementById('myId').textContent;
  navigator.clipboard.writeText(id).then(() => {
    const btn = document.getElementById('copyId');
    btn.textContent = '✓';
    setTimeout(() => btn.textContent = '📋', 1500);
  });
};

// ===== ТЕМА =====
function applyTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  document.getElementById('themeToggle').textContent = t === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('telegramma-theme', t);
}
document.getElementById('themeToggle').onclick = () => {
  const c = document.documentElement.getAttribute('data-theme') || 'light';
  applyTheme(c === 'dark' ? 'light' : 'dark');
};
applyTheme(localStorage.getItem('telegramma-theme') || 'light');

// ===== СТАРТ =====
initPeer();
initEmoji();
</script>
</body>
</html>
