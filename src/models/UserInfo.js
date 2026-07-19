const mongoose = require('mongoose');

const UserInfoSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true, index: true },
  fullName: { type: String, required: true, index: true },
  accountNumber: { type: String, required: true, unique: true, index: true },
  emailAddress: { type: String, required: true, unique: true, index: true },
  registrationNumber: { type: String, required: true, unique: true, index: true },
  role: { type: String }
});

module.exports = mongoose.model('UserInfo', UserInfoSchema);