import React, { useState, useEffect } from "react";
import ItemsList from "../Item";
import axios from "axios";

export default function AoThun() {
  const [products, setProducts] = useState([]);
  const categoryId = "aothun"; // Lọc theo `category_id`

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        console.log(response.data); // Log before filtering to see all products
        const filteredProducts = response.data.filter(
          (item) => item.category_id === categoryId // Corrected to category_id
        );
        console.log(filteredProducts); // Log after filtering to verify filtered products
        setProducts(filteredProducts);
      } catch (error) {
        console.error("Lỗi khi lấy danh sách sản phẩm:", error);
      }
    };
    

    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold p-4">Danh sách Áo Thun</h1>
      <div className="grid grid-cols-4 gap-4 p-4">
        {products.map((product) => (
          <ItemsList key={product._id} {...product} />
        ))}
      </div>
    </div>
  );
}
