import { Routes, Route, useLocation } from "react-router";
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
// Admin Pages
import SideBar from "./component/SideBar";
import StoreProducts from "./admin/StoreProducts";
import Orders from "./admin/Orders";
import Customers from "./admin/Customers";
import Analytics from "./admin/Analytics";
import Settings from "./admin/Settings";
import CustomerDetails from "./admin/CustomerDetails";
import CustomerOrderDetails from "./admin/CustomerOrderDetails";
import ProductState from "./context/ProductContext.jsx";
import CartState from "./context/CartContext.jsx";
import ProtectedRoute from "./component/ProtectedRoute";

function App() {
  const location = useLocation();

  // Define paths that belong to admin
  const isAdminLogin = location.pathname === "/admin/log";
  // const isAdminRoute = location.pathname.startsWith("/admin");

  // Define paths that belong to admin
  const isAdminRoute =
    location.pathname.startsWith("/admin/Dashboard") ||
    location.pathname.startsWith("/admin/Products") ||
    location.pathname.startsWith("/admin/Orders") ||
    location.pathname.startsWith("/admin/Customers") ||
    location.pathname.startsWith("/admin/Analytics") ||
    location.pathname.startsWith("/admin/Settings") ||
    location.pathname.startsWith("/admin/customer-details") ||
    (location.pathname.startsWith("/admin/order-details") && !isAdminLogin);

  return (
    <>
      {/* Show sidebar only on admin routes */}
      {isAdminRoute && <SideBar />}

      {/* Show header only on non-admin routes */}
      {!isAdminRoute && !isAdminLogin && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shopping" element={<Listing />} />
        <Route
          path="/product/:id"
          element={
            <ProductState>
              <Product />
            </ProductState>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/log" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route
            path="/cart"
            element={
              <CartState>
                <Cart />
              </CartState>
            }
          />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/succes" element={<SuccedOrder />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/user" element={<User />} />
          <Route path="/order-details" element={<OrderDetails />} />

          {/* ==================== admin Routes ======================= */}
          <Route path="/admin/Dashboard" element={<Dashboard />} />
          <Route path="/admin/Products" element={<StoreProducts />} />
          <Route path="/admin/Orders" element={<Orders />} />
          <Route path="/admin/Customers" element={<Customers />} />
          <Route path="/admin/Analytics" element={<Analytics />} />
          <Route path="/admin/customer-details" element={<CustomerDetails />} />
          <Route
            path="/admin/order-details"
            element={<CustomerOrderDetails />}
          />
          <Route path="/admin/Settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
