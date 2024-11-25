// src/App.js
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";
import Cart from "./components/cart/Carts";
import AoThun from "./components/menu/AoThun";
import Payment from "./components/payment/payment";
import Confirm from "./components/confirm/confirm";
// import Sidebar from "./components/admin/Sidebar";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import ClientRoute from "./components/routes/ClientRoute";
import DetailProduct from "./components/detail/Detailproduct";
// Import thêm các thành phần admin
import DanhsachdanhmucTable from "./components/admin/DanhsachdanhmucTable";
import DanhsachloaisanphamTable from "./components/admin/DanhsachloaisanphamTable";
import DanhsachsanphamTable from "./components/admin/DanhsachsanphamTable";
import DanhsachdonhangTable from "./components/admin/DanhsachdonhangTable";
import AdminRoute from "./components/routes/AdminRoute";

import DataComponent from './components/databackend/DataComponent'; //backend

function App() {
  return (
    // <div>
    //       <DetailProduct />
    // </div>
    <BrowserRouter>
      <CartProvider>
        <Routes>
        <Route path="/data" element={<ClientRoute children={<DataComponent />} />} />
          <Route path="/" element={<ClientRoute children={<Home />} />} />
          <Route path="/menu" element={<ClientRoute children={<Menu />} />} />
          <Route
            path="/AoThun"
            element={<ClientRoute children={<AoThun />} />}
          />
          <Route
            path="/Detailproduct/:id"
            element={<ClientRoute children={<DetailProduct />} />}
          />
          <Route path="/cart" element={<ClientRoute children={<Cart />} />} />
          <Route
            path="/payment"
            element={<ClientRoute children={<Payment />} />}
          />
          <Route
            path="/Confirm"
            element={<ClientRoute children={<Confirm />} />}
          />
          <Route path="/Login" element={<ClientRoute children={<Login />} />} />

          {/* Admin Routes */}
          <Route
            path="/admin/*"
            element={
              <AdminRoute>
                <Routes>
                  <Route
                    path="DanhsachdanhmucTable"
                    element={<DanhsachdanhmucTable />}
                  />
                  <Route
                    path="DanhsachloaisanphamTable"
                    element={<DanhsachloaisanphamTable />}
                  />
                  <Route
                    path="DanhsachsanphamTable"
                    element={<DanhsachsanphamTable />}
                  />

                  <Route
                    path="DanhsachdonhangTable"
                    element={<DanhsachdonhangTable />}
                  />

                  <Route
                    path="/"
                    element={
                      <h1 className="text-2xl font-bold">
                        Welcome to Admin Dashboard
                      </h1>
                    }
                  />
                  {/* Trang mặc định cho admin */}
                </Routes>
              </AdminRoute>
            }
          />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
