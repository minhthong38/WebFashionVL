const mongoose = require('mongoose');

const ShippingSchema = new mongoose.Schema({
    OrderID: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
    ShippingAddress: { type: String, required: true },
    ShippingDate: { type: Date, default: Date.now },
    DeliveryDate: { type: Date, required: true },
    Status: { type: String, enum: ['Chờ giao hàng', 'Đang giao hàng', 'Đã giao', 'Đã hủy'], default: 'Chờ giao hàng' },
    CreatedAt: { type: Date, default: Date.now },
    UpdatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Shipping', ShippingSchema,'Shippings');
