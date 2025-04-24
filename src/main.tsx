import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // tailwind burada mı?
import { ThemeProvider } from "./components/theme-provider"; // varsa dark mode için

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
