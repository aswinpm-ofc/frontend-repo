import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";  
import "./styles/app.css";  // ✅ Update the path to match your folder structure

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found. Make sure index.html has <div id='root'></div>");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
