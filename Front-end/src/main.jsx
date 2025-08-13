import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
//css
import "./index.css";
import "./framework.css";

import App from "./App.jsx";
import SideBarProvider from "./context/SideBarContext.jsx";
import AuthProvider from "./context/Auth/AuthProvider.jsx";
import CartProvider from "./context/Cart/CartProvider.jsx";
import OrdersProvider from "./context/Orders/OrdersProvider.jsx";
import ProductState from "./context/ProductContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ProductState>
        <CartProvider>
          <OrdersProvider>
            <SideBarProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </SideBarProvider>
          </OrdersProvider>
        </CartProvider>
      </ProductState>
    </AuthProvider>
  </StrictMode>
);
