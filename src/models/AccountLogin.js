const mongoose = require('mongoose');

const AccountLoginSchema = new mongoose.Schema({
    accountId: { type: String, required: true, unique: true, index: true },
    userName: { type: String, required: true },
    password: { type: String, required: true },
    lastLoginDateTime: { type: Date },
    userId: { type: String, required: true, index: true }
}, { timestamps: true });

AccountLoginSchema.index({ lastLoginDateTime: 1 });

module.exports = mongoose.model('AccountLogin', AccountLoginSchema);
