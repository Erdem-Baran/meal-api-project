import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import FavoriteButton from "../components/FavoriteButton.jsx";
import Loading from "../components/Loading.jsx";

export default function MealDetail() {
  const { mealId } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMeal() {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        );
        const data = await response.json();
        setMeal(data.meals[0]);
        setLoading(false);
      } catch (error) {
        console.error("error:", error);
        setLoading(false);
      }
    }
    fetchMeal();
  }, [mealId]);

  if (loading) {
    return <Loading />;
  }

  if (!meal) {
    return <div className="container mt-4">No food was found</div>;
  }

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push({
        ingredient: meal[`strIngredient${i}`],
        measure: meal[`strMeasure${i}`],
      });
    }
  }

  return (
    <div className="container mt-4">
      <Link
        to={`/category/${meal.strCategory}`}
        className="btn btn-secondary mb-4"
      >
        ← Go Back
      </Link>
      <div className="row">
        <div className="col-md-5">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="img-fluid rounded shadow"
          />

          {meal.strYoutube && (
            <div className="mt-3">
              <a
                href={meal.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-danger w-100 mb-3"
              >
                📺 Watch on YouTube
              </a>
            </div>
          )}
        </div>
        <div className="col-md-7">
          <h2>{meal.strMeal}</h2>

          <p className="text-muted">
            <span className="badge bg-primary me-2">{meal.strCategory}</span>
            <span className="badge bg-success">{meal.strArea}</span>
          </p>
          <div className="card mb-4">
            <div className="card-body">
              <h5>Materials:</h5>
              <div>
                <FavoriteButton meal={meal} />
              </div>
              <ul>
                {ingredients.map((item, index) => (
                  <li key={index}>
                    <strong>{item.measure}</strong> {item.ingredient}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5>Recipe:</h5>
            <p style={{ whiteSpace: "pre-line" }}>{meal.strInstructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
