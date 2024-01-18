import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import SearchProvider from "./context/searchContext.jsx";
import { HelmetProvider } from "react-helmet-async";
import BasketProvider from "./context/basketContext.jsx";
import WishlistProvider from "./context/wishlistContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <WishlistProvider>

      <BasketProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </BasketProvider>
      </WishlistProvider>
    </HelmetProvider>
  </React.StrictMode>
);
