const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config({ path: './database.env' });  // Chỉ định đường dẫn đến file database.env
// Tạo instance của express
const app = express();

// Import Routes
const categoryRoutes = require('./routes/categoryRoutes');
const orderRoutes = require('./routes/orderRoutes');
const productTypeRoutes = require('./routes/productTypeRoutes');
const productRoutes = require('./routes/productRoutes');
const shippingRoutes = require('./routes/shippingRoutes');
const userRoutes = require('./routes/userRoutes');

// Middleware
app.use(cors());
app.use(express.json());

// Sử dụng Routes
app.use('/api/categories', categoryRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/product-types', productTypeRoutes);
app.use('/api/products/', productRoutes);
app.use('/api/shipping', shippingRoutes);
app.use('/api/users', userRoutes);

// Kết nối tới MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));


// Sample Route
app.get('/', (req, res) => {
  res.send('Server is running...');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// Trong file backend/server.js
app.get('/data', (req, res) => {
  res.json({ message: 'This is the data endpoint' });
});
