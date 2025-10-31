import { useEffect, useState } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import Loading from "../components/Loading.jsx";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const query = searchParams.get("query");

  useEffect(() => {
    if (!query) {
      setLoading(false);
      return;
    }

    async function searchMeals() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        );
        const data = await response.json();
        setMeals(data.meals || []);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setMeals([]);
        setLoading(false);
      }
    }

    searchMeals();
  }, [query]);

  if (loading) {
    return <Loading />;
  }

  if (!query) {
    return (
      <div className="container mt-4">
        <div className="alert alert-info">Please enter a search term</div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">
        Search Results for: <span className="text-primary">"{query}"</span>
      </h2>

      <Link to="/" className="btn btn-secondary mb-4">
        ← Go Back
      </Link>

      {meals.length === 0 ? (
        <div className="alert alert-warning">
          No results found for "{query}". Try a different search term.
        </div>
      ) : (
        <>
          <p className="text-muted mb-3">Found {meals.length} results</p>
          <div className="row">
            {meals.map((meal) => (
              <div
                key={meal.idMeal}
                className="col-lg-3 col-md-4 col-sm-6 mb-4"
              >
                <div
                  className="card shadow meal-card"
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
                    <div className="d-flex gap-2">
                      <span className="badge bg-info">{meal.strArea}</span>
                      <span className="badge bg-primary">
                        {meal.strCategory}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
