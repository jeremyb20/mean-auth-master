const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./back-end/config/database');
const socket = require('socket.io')


// Port Number
const port = process.env.PORT || 8080;
 
// Connect To Database (OLD CODE)
// mongoose.connect(config.database, { useMongoClient: true});
// // On Connection
// mongoose.connection.on('connected', () => {
//   console.log('Connected to Database '+config.database);
// });
// // On Error
// mongoose.connection.on('error', (err) => {
//   console.log('Database error '+err);
// });
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


// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./back-end/config/passport')(passport);

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
io.on('connection', function(socket){
  console.log(`${socket.id} is connected`);

  socket.on('disconnect', function(){
    console.log('User discconected');
  });

  // socket.on('message', (message) => {
  //   console.log("Message reveived:" + message);
  //   io.emit('message', {type:'new-message', text:message});
  // });

  socket.on('message', (message) => {
    // console.log("Message reveived:" + message);
    io.emit('message', {username:message.username, message:message.message});
  });

  socket.on('typing', (data)=> {
    socket.broadcast.emit('typing',data);
  })

});