import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Loading from "../components/Loading";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    async function GetMeal() {
      setLoading(true);
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const data = await response.json();
      setCategories(data.categories);
      setLoading(false);
    }
    GetMeal();
  }, []);

  const handleCategoryClick = (categoryName) => {
    navigate(`/category/${categoryName}`);
    console.log(categoryName);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        {categories.map((category) => (
          <div
            key={category.idCategory}
            className="col-lg-3 col-md-4 col-9 m-auto mb-4"
            onClick={() => handleCategoryClick(category.strCategory)}
          >
            <div className="card shadow" style={{ cursor: "pointer" }}>
              <img
                src={category.strCategoryThumb}
                alt={category.strCategoryThumb}
              />
              <div className="card-body">
                <h5>{category.strCategory}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
