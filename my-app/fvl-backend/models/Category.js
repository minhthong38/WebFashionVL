const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    CategoryName: { type: String, required: true },
    Description: String,
});

// Chỉ định rõ ràng tên collection là 'Categories'
module.exports = mongoose.model('Category', CategorySchema, 'Categories');
