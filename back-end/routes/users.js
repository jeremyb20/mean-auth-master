const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const cloudinary = require('cloudinary').v2;
const async = require('async');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const app = express();

var fileupload = require('express-fileupload');

app.use(fileupload({
  useTempFiles:true
}));

cloudinary.config({
  cloud_name:'ensamble',
  api_key: '218419814373569',
  api_secret: 'xBNx-qCyqTrcAahx8ZqGEAnNpwM'
});

// Register aqui hay ebviar la foto
router.post('/register', async(req, res, next) => {
  const obj = JSON.parse(JSON.stringify(req.body));

  const result = await cloudinary.uploader.upload(req.file.path);

  let newUser = new User ({
    name: obj.name,
    email: obj.email,
    username: obj.username,
    password: obj.password,
    photo: result.url
  });

  User.addUser(newUser, (err, user) => {
    if(err) {
      res.json({success: false, msg: 'Failed to register user'});
    } else {
      res.json({success: true, msg: 'User registered'});
    var smtpTransport = nodemailer.createTransport({
        host: 'smtp.sendgrid.net',
        port: 465,
        secure: true,
        auth: {
          user: 'apikey',
          pass: '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'
        },
        tls: {
          // do not fail on invalid certs
          rejectUnauthorized: false
        }
      });
      var mailOptions = {
        to: user.email,
        from: 'jerebac@hotmail.com',
        subject: 'Welcome to EnsambleCR',
        text: "Hi " + obj.name + "! Welcome to EnsambleCR. To enter, please use the following credential: " + obj.email + " \n\n"
      };
      smtpTransport.sendMail(mailOptions, function(err) {
        res.json({success:true,msg: 'An e-mail has been sent to ' + user.email + ' with further instructions.'});
        done(err, 'done');
      });

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
});

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
            email: user.email,
            photo: user.photo
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

router.get('/mailbox/getMessages/:id', function(req, res){
  var id = req.params.id;
  User.findById(id, function(err, results){
    if(err){
      res.send('something went really wrong');
      next();
    }
    res.json(results.message)
  });
});

router.post('/mailbox/sendMessage', (req, res, next) => {
  User.findOneAndUpdate({ _id: req.body.idUserSent }, { $push: { message: req.body  } }).then(function(data){
    res.json({success:true,msg: 'Message sent'});
  });
});


router.post('/forgot', (req, res, next) => {
  async.waterfall([
    function(done) {
      crypto.randomBytes(20, function(err, buf) {
        var token = buf.toString('hex');
        done(err, token);
      });
    },
    function(token, done) {
      User.findOne({ email: req.body.email }, (err, user) => {
        if (!user) {
         return res.json({success:false,msg: 'Email not found'});
        }

        if(user != null) {
          user.resetPasswordToken = token;
          user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
          user.save(function(err) {
            done(err, token, user);
          });
        }
      });
    },
    function(token, user, done) {
      var smtpTransport = nodemailer.createTransport({
        host: 'smtp.sendgrid.net',
        port: 465,
        secure: true,
        auth: {
          user: 'apikey',
          pass: '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'
        },
        tls: {
          // do not fail on invalid certs
          rejectUnauthorized: false
        }
      });
      var mailOptions = {
        to: user.email,
        from: 'jerebac@hotmail.com',
        subject: 'Node.js Password Reset',
        text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
          'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
          //'http://localhost:4200/reset/' + token + '\n\n' +
          'http://' + req.headers.host + '/reset/' + token + '\n\n' +
          'If you did not request this, please ignore this email and your password will remain unchanged.\n'
      };
      smtpTransport.sendMail(mailOptions, function(err) {
        res.json({success:true,msg: 'An e-mail has been sent to ' + user.email + ' with further instructions.'});
        done(err, 'done');
      });
    }
  ], function(err) {
    if (err) return next(err);
    res.redirect('/forgot');
  });
});

router.get('/reset/:token', (req, res) => {
  User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
    if (!user) {
      return res.json({success:false,msg: err});
    }else{
      res
      .status(200)
      .json({ user: user, token: req.params.token });
    }
  });
});


router.post('/reset/:token', function(req, res) {
  req.params.token = req.body.token;
  async.waterfall([
    function(done) {
      User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
        if (!user) {
          return  res.json({success:false,msg: 'Password reset token is invalid or has expired..'});
        }else if(req.body.password === req.body.confirm){
          user.password = req.body.password;
          user.resetPasswordToken = undefined;
          user.resetPasswordExpires = undefined;

            bcrypt.genSalt(10, function(err, salt) {
            if (err) return next(err);

              bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) return next(err);
                user.password = hash;
                user.save(function(err) {
                  done(err, user);
                });
              });
            });
        }else{
          return  res.json({success:false,msg: 'Password do not match..'});
        }
      });
    },
    function(user, done) {
      var smtpTransport = nodemailer.createTransport({
        service: 'Gmail', 
        auth: {
          user: 'ensamblecostarica@gmail.com',
          pass: 'ensamblecr2020'
        }
      });
      var mailOptions = {
        to: user.email,
        from: 'ensamblecostarica@gmail.com',
        subject: 'Your password has been changed',
        text: 'Hello,\n\n' +
          'This is a confirmation that the password for your account ' + user.email + ' has just been changed.\n'
      };
      smtpTransport.sendMail(mailOptions, function(err) {
        res.json({success:true,msg: 'Success! Your password has been changed.'});
        done(err);
      });
    }
  ], function(err) {
    res.redirect('/login');
  });
});



module.exports = router;
