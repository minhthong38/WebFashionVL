// src/App.js
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";
import Cart from "./components/cart/Carts";
import Store from "./components/store/Store";
import AoThun from "./components/menu/AoThun";
// import Sidebar from "./components/admin/Sidebar";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import ClientRoute from "./components/routes/ClientRoute";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<ClientRoute children={<Home />} />} />
          <Route path="/menu" element={<ClientRoute children={<Menu />} />} />
          <Route path="/AoThun" element={<ClientRoute children={<AoThun />} />} />
          <Route path="/cart" element={<ClientRoute children={<Cart />} />} />
          <Route path="/Store" element={<ClientRoute children={<Store />} />} />
          <Route path="/Login" element={<ClientRoute children={<Login />} />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
