import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ImageProvider } from "./context/ImageProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ImageProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ImageProvider>
  </React.StrictMode>
);
