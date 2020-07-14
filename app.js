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

let io = socket(server)
io.on('connection', (socket) =>{
  console.log(`${socket.id} is connected`);

  // socket.on('disconnect', function(socket){
  //   console.log('User'+socket+'discconected');
  // });

  socket.on('send-message', (data) => {
    io.emit('message-received', data);
  });



  

  // socket.on('message', (message) => {
  //   console.log("Message reveived:" + message);
  //   io.emit('message', {username:message.username, message:message.message, timeNow: message.timeNow});
  // });

  // socket.on('typing', (data)=> {
  //   socket.broadcast.emit('typing',data);
  // })



  // socket.on('event1', (data)=> {
  //   console.log(data.msg);
  // });

  // socket.emit('event2', {
  //   msg:' Server to client, do you read me?'
  // });


  // socket.on('event3', (data) => {
  //   console.log("Message reveived:" + data.msg);
  //   socket.emit('evet4', {
  //     msg: 'Loud and clear'
  //   });
  // });

});