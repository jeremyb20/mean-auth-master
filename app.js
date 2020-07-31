const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');
const passport = require('passport');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const config = require('./back-end/config/database');
const socket = require('socket.io');
const multer = require('multer');
const session = require('express-session');
const flash = require('express-flash');
const User = require('./back-end/models/user');
const { userJoin, userLeave } = require('./back-end/utils/users');


// Port Number
const port = process.env.PORT || 8080;
 
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(config.database, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})
.then(() => 
  console.log('DB Connected!'))
.catch(err => {
  console.log(err.message);
});

const app = express();

const users = require('./back-end/routes/users');

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended:false}));
const storage = multer.diskStorage({
  destination: path.join(__dirname, 'public/uploads'),
  filename: (req, file, cd) => {
    cd(null, new Date().getTime() + path.extname(file.originalname));
  }
});
app.use(multer({storage}).single('image'));

// CORS Middleware
app.use(cors());

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use(session({      secret: 'session secret key',     resave: false,     saveUninitialized: false }));
app.set('views', path.join(__dirname, 'public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(session({ cookie: { maxAge: 60000 }, 
  secret: 'woot',
  resave: false, 
  saveUninitialized: false}));

require('./back-end/config/passport')(passport);
app.use(flash());
app.use('/users', users);

// Index Route
app.get('/', (req, res) => {
  res.send('invaild endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start Server
var server = app.listen(port, () => {
  console.log('Server started on port '+port);
});

var clients = [];

let io = socket(server)
io.on('connection', (socket) =>{
  console.log(`${socket.id} is connected`);
  // socket.on('joinRoom', ({ username, room }) => {
  //   const user = userJoin(socket.id, username, room);

  //   socket.join(user.room);

  //   // Welcome current user
  //   socket.emit('message', formatMessage(botName, 'Welcome to ChatCord!'));

  //   // Broadcast when a user connects
  //   socket.broadcast.to(user.room).emit('message',formatMessage(botName, `${user.username} has joined the chat`));

  //   // Send users and room info
  //   io.to(user.room).emit('roomUsers', { room: user.room, users: getRoomUsers(user.room)});
  // });


  // socket.broadcast.emit('conection', socket.id);
  socket.on('user-connected', (data) => {
    clients = userJoin(socket.id, data);
    socket.join(clients);
    io.emit('user-connected', clients);
  })

  socket.on('disconnect', () => {
    const user = userLeave(clients);
    if(clients.username.status === undefined){
      clients.username.status = "Offline";
    }else{
      clients.username.status = "Offline"
    }
    
    if (user) {
      io.emit('user-connected', clients);
    }
  });

  socket.on('send-message', (data) => {
    const sendMessage = data;
      User.findOneAndUpdate({ _id: data.idUserSent }, { $push: { message: sendMessage } }).then(function(data){
        io.emit('message-received', sendMessage);
      });
  });

  socket.on('typing', (data)=> {
    socket.broadcast.emit('typing',data);
  })
});