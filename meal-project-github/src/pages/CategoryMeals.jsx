import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import FavoriteButton from "../components/FavoriteButton.jsx";
import Loading from "../components/Loading.jsx";

export default function CategoryMeals() {
  const { categoryName } = useParams();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMeals() {
      setLoading(true);
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
        );
        const data = await response.json();
        setMeals(data.meals || []);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch meals:", error);
        setMeals([]);
        setLoading(false);
      }
    }

    if (categoryName) {
      fetchMeals();
    }
  }, [categoryName]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4 fs-3">{categoryName} Dishes</h2>
      <Link to="/" className="btn btn-secondary mb-4 btn-sm fs-7">
        ← Go Back
      </Link>

      <div className="row">
        {meals?.map((meal) => (
          <div key={meal.idMeal} className="col-md-3 mb-4">
            <div
              className="card shadow"
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/meal/${meal.idMeal}`)}
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="card-img-top"
              />
              <div className="card-body">
                <h6>{meal.strMeal}</h6>
              </div>
              <div>
                <FavoriteButton meal={meal} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
