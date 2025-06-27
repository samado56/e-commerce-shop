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
//Admin Pages
import SideBar from "./component/SideBar";
import StoreProducts from "./admin/StoreProducts";
import Orders from "./admin/Orders";
import Customers from "./admin/Customers";
import Analytics from "./admin/Analytics";
import CustomerDetails from "./admin/CustomerDetails";

function App() {
  return (
    <>
      <SideBar />
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Products" element={<StoreProducts />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Customers" element={<Customers />} />
        <Route path="/Analytics" element={<Analytics />} />
        <Route path="/customer-details" element={<CustomerDetails />} />
      </Routes>
      {/* <Header /> */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shopping" element={<Listing />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/succes" element={<SuccedOrder />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/user" element={<User />} />
        <Route path="/order-details" element={<OrderDetails />} />
      </Routes> */}
    </>
  );
}

export default App;
