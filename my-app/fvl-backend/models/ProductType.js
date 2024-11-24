const mongoose = require('mongoose');

const ProductTypeSchema = new mongoose.Schema({
    ProductTypeName: { type: String, required: true },
    Description: { type: String },
});

module.exports = mongoose.model('ProductType', ProductTypeSchema,'ProductTypes');
