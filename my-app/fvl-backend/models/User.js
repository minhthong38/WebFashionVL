const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    FullName: { type: String, required: true },
    Email: { type: String, required: true, unique: true },
    Password: { type: String, required: true }, // Lưu mật khẩu đã mã hóa
    Phone: { type: String, required: true },
    Address: { type: String, required: true },
    CreatedAt: { type: Date, default: Date.now },
    UpdatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema, 'Users');
