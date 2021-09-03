import axios from 'axios';
import http from 'http';
import express from 'express';
import { Server as socketIOServer } from 'socket.io';
import { format } from 'date-fns';

const app = express();
const httpServer = http.createServer(app);
const io = new socketIOServer(httpServer);


const PORT = process.env.PORT || 3000;
app.locals.title = 'Живность';

app.set('view engine', 'hbs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/duck', (req, res) => {
  axios('https://random-d.uk/api/v2/random')
  .then(response => {
    console.log(response.data.url);
    res.json({ url: response.data.url})
  })
});


io.on('connection', (socket) => {
  socket.on('chat:send', (nickname, message) => {
      const time = format(new Date(), '[dd/MM/yy HH:mm:ss]');
      const fullMessage = `${time} ${nickname}: <br /> ${message}`;
      io.emit('chat:newMessage', fullMessage);
  });
});


httpServer.listen(PORT, () => {
  console.log(`The HTTP server has been started on :${PORT}`);
});
