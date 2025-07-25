import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
//css
import "./index.css";
import "./framework.css";

import App from "./App.jsx";
import GlobalState from "./context/GlobalContext.jsx";
import ProductState from "./context/ProductContext.jsx";
import SideBarProvider from "./context/SideBarContext.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
      <SideBarProvider>
        <GlobalState>
    <BrowserRouter>
          <App />
    </BrowserRouter>
        </GlobalState>
      </SideBarProvider>
  </StrictMode>
);
