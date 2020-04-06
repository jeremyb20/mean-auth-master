const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const Message = require('../models/user');

// Register aqui hay ebviar la foto
router.post('/register', (req, res, next) => {
  let newUser = new User ({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    address:req.body.address,
    phone: req.body.phone
  });

  User.addUser(newUser, (err, user) => {
    if(err) {
      res.json({success: false, msg: 'Failed to register user'});
    } else {
      res.json({success: true, msg: 'User registered'});
    }
  });
});

router.post('/mailbox/sendMessage', (req, res, next) => {
  let newMessage = new Message ({
    id : req.body._id,
    idUserSent : req.body._idUserSent,
    email : req.body.email,
    name : req.body.name,
    username: req.body.username,
    message: req.body.val,
    isNew: true
  });

  User.sendNewMessage(newMessage, (err, user) => {
    console.log(newMessage,'TESTING')
    if(err) {
      res.json({success: false, msg: 'Failed to sent message'});
    } else {
      res.json({success: true, msg: 'Message sent'});
    }
  });
});

router.get('/profile/getAllUsers', function(req, res){
  User.find({}, function(err, users){
    if(err){
      res.send('something went really wrong');
      next();
    }
    res.json(users)
  });
})

// Authenticate
router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if(!user) {
      return res.json({success: false, msg: 'User not found'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch) {
        const token = jwt.sign({data: user}, config.secret, {
          expiresIn: 86400   // 1 week: 604800 1 day
        });
        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        })
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});

router.route('/users/:_id')
  .delete(function(req, res){
    User.remove(req,res);
});

router.put('/profile/updateUsers', (req, res) => {
  User.findByIdAndUpdate(req.body._id, { $set: req.body }).then(function (data) {
    res.json({ success: true, msg: 'Update success.' });
  });
});

module.exports = router;
