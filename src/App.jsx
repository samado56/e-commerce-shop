import { Routes, Route } from "react-router";
import Header from "./component/Header";
import Home from "./pages/home";
import Listing from "./pages/Listing";
import Product from "./pages/product";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Checkout from "./pages/checkout";
import SuccedOrder from "./pages/SuccedOrder";
import Favorites from "./pages/Favorites";
import User from "./pages/User";
import OrderDetails from "./pages/OrderDetails";
import Dashboard from "./admin/Dashboard";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Listing />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/succes" element={<SuccedOrder />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/user" element={<User />} />
        <Route path="/order-details" element={<OrderDetails />} />
        {/* =========== admin ============ */}
        <Route path="/admin" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
