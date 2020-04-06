const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const UserSchema = mongoose.Schema ({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    require: false
  },
  address: {
    type: String,
    require: false
  }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback) {
  User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback) {
  const query = {username: username}
  User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}

// module.exports.sendNewMessage = function(newMessage, callback) {
//   newMessage.save(UserSchema.Message = callback);
// }

module.exports.getUsers = function(users, callback){
  const query = {users: users}
  User.find();
}

module.exports.deleteOne = function(req,res){
  User.findByIdAndRemove({_id:req.body.id}).then(function(data){
    res.json({success:true,msg:'Se ha eliminado correctamente.'});
  });
}

// module.exports.update = function(req,res){
//   User.findByIdAndUpdate(req.body.id,{$set:req.body}).then(function(data){
//     res.json({success:true,msg:'Se ha actualizado correctamente.'});
//   });
// }

module.exports.update = function(username, callback){
  // User.findByIdAndUpdate(req.body.id,{$set:req.body}).then(function(data){
  //   res.json({success:true,msg:'Se ha actualizado correctamente.'});
  // });
  User.findByIdAndUpdate(username, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
}
