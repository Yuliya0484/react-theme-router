import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "modern-normalize";
//import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <App />
      {/* <Toaster /> */}
    </StrictMode>
  </BrowserRouter>
);
