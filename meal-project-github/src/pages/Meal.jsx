import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import FavoriteButton from "../components/FavoriteButton.jsx";
import Loading from "../components/Loading.jsx";

export default function Meal() {
  const [popularMeals, setPopularMeals] = useState([]);
  const { categoryName } = useParams();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    async function allMeals() {
      setLoading(true);
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=`
      );
      const data = await response.json();
      setPopularMeals(data.meals);
      setLoading(false);
    }
    allMeals();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container mt-3">
      <div className="row">
        {popularMeals?.slice(0, 24).map((meal) => (
          <div
            key={meal.idMeal}
            className="col-md-3 mb-4"
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/meal/${meal.idMeal}`)}
          >
            <div className="card shadow meal-card">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="card-img-top"
              />
              <div className="card-body">
                <div className="ms-1 mt-1">
                  <h6>{meal.strMeal}</h6>
                  <h6>
                    Homeland:{" "}
                    <span className="badge bg-info">{meal.strArea}</span>
                  </h6>
                  <h6>
                    {" "}
                    Category:{" "}
                    <span className="badge bg-primary">{meal.strCategory}</span>
                  </h6>
                </div>
                <div>
                  <FavoriteButton meal={meal} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
