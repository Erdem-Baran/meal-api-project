import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./contexts/ThemeContext";
import { FavoritesProvider } from "./contexts/Favorites.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <FavoritesProvider>
      <App />
    </FavoritesProvider>
  </ThemeProvider>
);
