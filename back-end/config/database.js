require('dotenv').config();
module.exports = {
  // configure the code below with your username, password and mlab database information 
  database: process.env.SECRET_URL_DATABASE,   //prod
  secret: 'yoursecret'
}
