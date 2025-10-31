import { useContext } from "react";
import { FavoritesContext } from "../contexts/Favorites.jsx";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function FavoriteButton({ meal }) {
  const { isFavorite, addFavorite, removeFavorite } =
    useContext(FavoritesContext);

  const mealId = meal.idMeal || meal.id;
  const favorite = isFavorite(mealId);

  const toggleFavoriteStatus = (e) => {
    e.stopPropagation(); // Event'in üst elemana yayılmasını engelle
    if (favorite) {
      removeFavorite(mealId);
    } else {
      addFavorite(meal);
    }
  };

  return (
    <button
      onClick={toggleFavoriteStatus}
      className="btn border-0 p-1 position-absolute top-0 end-0 m-2"
      style={{
        backgroundColor: "transparent",
        transition: "all 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.querySelector("i").style.transform = "scale(1.2)";
        e.currentTarget.querySelector("i").style.filter = favorite
          ? "drop-shadow(0 0 8px rgba(220, 53, 69, 0.6))"
          : "drop-shadow(0 0 4px rgba(108, 117, 125, 0.4))";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.querySelector("i").style.transform = "scale(1)";
        e.currentTarget.querySelector("i").style.filter = favorite
          ? "drop-shadow(0 2px 4px rgba(220, 53, 69, 0.3))"
          : "none";
      }}
    >
      <i
        className={favorite ? "bi bi-heart-fill" : "bi bi-heart"}
        style={{
          color: favorite ? "#dc3545" : "#fff",
          fontSize: "1.7rem",
          transition: "all 0.2s ease",
          filter: favorite
            ? "drop-shadow(0 2px 4px rgba(220, 53, 69, 0.3))"
            : "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))",
          WebkitTextStroke: favorite ? "0" : "1.5px rgba(0, 0, 0, 0.2)",
        }}
      ></i>
    </button>
  );
}
