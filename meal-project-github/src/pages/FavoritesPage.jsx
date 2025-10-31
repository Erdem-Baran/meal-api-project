import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FavoritesContext } from "../contexts/Favorites.jsx";
import FavoriteButton from "../components/FavoriteButton.jsx";

export default function FavoritesPage() {
  const { favorites } = useContext(FavoritesContext);
  const navigate = useNavigate();

  return (
    <div className="container mt-3">
      <h2>My Favorite Meals</h2>
      {!favorites || favorites.length === 0 ? (
        <p>You have no favorite meals yet.</p>
      ) : (
        <div className="row">
          {favorites.map((meal) => (
            <div
              key={meal.idMeal || meal.id}
              className="col-md-3 mb-4"
              onClick={() => navigate(`/meal/${meal.idMeal || meal.id}`)}
              style={{ cursor: "pointer" }}
            >
              <div className="card shadow meal-card">
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h6>{meal.strMeal}</h6>
                  {meal.strArea && (
                    <h6>
                      Homeland:{" "}
                      <span className="badge bg-info">{meal.strArea}</span>
                    </h6>
                  )}
                  {meal.strCategory && (
                    <h6>
                      Category:{" "}
                      <span className="badge bg-primary">
                        {meal.strCategory}
                      </span>
                    </h6>
                  )}
                </div>
                <div>
                  <FavoriteButton meal={meal} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
