import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Correct the import

import App from "./App";
import "./index.css";
import { FavoritesContextProvider } from "./store/favorites-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FavoritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContextProvider>,
  document.getElementById("root")
);
