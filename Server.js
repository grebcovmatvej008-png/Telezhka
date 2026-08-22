const express = require('express');
const http = require('http');
const { Server } = require("socket.io");
const cors = require('cors');

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

// Хранилище пользователей и сообщений
const users = {}; 
let messages = []; 

io.on('connection', (socket) => {
  // Регистрация / Вход
  socket.on('auth', (data) => {
    const { name, contact } = data;
    
    // Ищем пользователя по контакту (почта/телефон)
    let user = Object.values(users).find(u => u.contact === contact);
    
    if (!user) {
      user = { id: socket.id, name, contact };
      users[socket.id] = user;
    } else {
      // Если пользователь уже был, обновляем его socket.id
      delete users[user.id];
      user.id = socket.id;
      users[socket.id] = user;
    }

    socket.user = user;
    // Отправляем пользователю его данные и историю
    socket.emit('auth_success', { user, history: messages.slice(-50) });
    
    // Сообщаем всем, что кто-то вошел
    socket.broadcast.emit('system_msg', `${user.name} вошел в чат`);
  });

  // Отправка сообщения
  socket.on('msg', (text) => {
    if (!socket.user) return;
    const msgObj = {
      id: Date.now(),
      text,
      senderId: socket.user.id,
      name: socket.user.name,
      time: new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})
    };
    messages.push(msgObj);
    if (messages.length > 100) messages.shift();
    
    io.emit('new_msg', msgObj); // Рассылаем ВСЕМ
  });

  socket.on('disconnect', () => {
    if (socket.user) delete users[socket.id];
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log('Server ready on port ' + PORT));
