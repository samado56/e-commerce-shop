import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
//css
import "./index.css";
import "./framework.css";

import App from "./App.jsx";
import GlobalState from "./context/GlobalContext.jsx";
import SideBarProvider from "./context/SideBarContext.jsx";
import AuthProvider from "./context/Auth/AuthProvider.jsx";
import CartProvider from "./context/Cart/CartProvider.jsx";
import OrdersProvider from "./context/Orders/OrdersProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <OrdersProvider>
          <SideBarProvider>
            <GlobalState>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </GlobalState>
          </SideBarProvider>
        </OrdersProvider>
      </CartProvider>
    </AuthProvider>
  </StrictMode>
);
