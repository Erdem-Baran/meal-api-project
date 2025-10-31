import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import FavoriteButton from "../components/FavoriteButton.jsx";
import Loading from "../components/Loading.jsx";

export default function Vegetarian() {
  const [vegetarianMeals, setVegetarianMeals] = useState([]);
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getVegetarianMeals() {
      setLoading(true);
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian`
      );
      const data = await response.json();
      setVegetarianMeals(data.meals || []);
      setLoading(false);
    }
    getVegetarianMeals();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        {vegetarianMeals.slice(0, 40).map((meal) => (
          <div
            key={meal.idMeal}
            className="col-lg-3 col-md-4 col-9 m-auto mb-4"
            onClick={() => navigate(`/meal/${meal.idMeal}`)}
          >
            <div
              className="card shadow meal-card"
              style={{ cursor: "pointer" }}
            >
              <img
                style={{ height: "85%" }}
                src={meal.strMealThumb}
                alt={meal.strMeal}
              />
              <div>
                <FavoriteButton meal={meal} />
              </div>
              <div className="card-body">
                <h6>{meal.strMeal}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
