import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../../backend/api';

const DataComponent = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsData = await fetchProducts();
        console.log('Fetched categories:', productsData); // Ghi log dữ liệu
        setProducts(productsData);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch products:', err); // Ghi log lỗi
        setError('Failed to fetch products');
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product._id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataComponent;
