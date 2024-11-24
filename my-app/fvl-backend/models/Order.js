const mongoose = require('mongoose');

// Schema cho từng OrderDetail
const OrderDetailSchema = new mongoose.Schema({
    ProductID: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    Quantity: { type: Number, required: true },
    Price: { type: Number, required: true },
});

// Schema cho Order
const OrderSchema = new mongoose.Schema({
    UserID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    OrderDate: { type: Date, default: Date.now },
    Status: { type: String, enum: ['Đang xử lý', 'Hoàn thành', 'Đã hủy'], default: 'Đang xử lý' },
    TotalAmount: { type: Number, required: true },
    OrderDetails: [OrderDetailSchema],
    CreatedAt: { type: Date, default: Date.now },
    UpdatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', OrderSchema,'Orders');
