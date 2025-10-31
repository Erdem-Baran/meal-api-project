import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { themeContext } from "../contexts/ThemeContext";
import Search from "./Search";
import { FavoritesContext } from "../contexts/Favorites.jsx";

export default function Header() {
  const { theme, toggleTheme } = useContext(themeContext);
  const { favorites } = useContext(FavoritesContext);
  return (
    <nav className={`navbar navbar-expand-lg bg-${theme}`}>
      <div className="container-fluid">
        <button
          className={`btn ${
            theme === "dark" ? "btn-outline-light" : "btn-outline-dark"
          } btn-sm me-2`}
          onClick={toggleTheme}
          title={
            theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"
          }
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        <NavLink className="btn btn-danger d-lg-none me-auto" to="/favorites">
          {favorites && favorites.length > 0 ? (
            <div className="position-relative">
              <i className="bi bi-heart-fill"></i>
              <span className="span-number">{favorites.length}</span>
            </div>
          ) : (
            <i className="bi bi-heart"></i>
          )}
        </NavLink>

        <a className="navbar-brand" href="/">
          theMeal
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/Meal">
                Meal
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/Vegetarian"
              >
                Vegetarian
              </NavLink>
            </li>
          </ul>

          <NavLink
            className="btn btn-danger me-3 d-none d-lg-block"
            to="/favorites"
          >
            {favorites && favorites.length > 0 ? (
              <div className="position-relative">
                <i className="bi bi-heart-fill"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger border border-light ms-3">
                  {favorites.length}
                </span>
              </div>
            ) : (
              <i className="bi bi-heart"></i>
            )}
          </NavLink>

          <Search />
        </div>
      </div>
    </nav>
  );
}
