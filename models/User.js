const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  googleName: String,
  googlePictureURL: String
});

mongoose.model('users', userSchema);
