import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (searchQuery.trim().length < 2) {
      setSuggestions([]);
      setShowDropdown(false);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
        );
        const data = await response.json();
        setSuggestions(data.meals || []);
        setShowDropdown(true);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setSuggestions([]);
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery.trim()}`);
      setSearchQuery("");
      setShowDropdown(false);
    }
  };

  const handleSuggestionClick = (meal) => {
    navigate(`/meal/${meal.idMeal}`);
    setSearchQuery("");
    setShowDropdown(false);
  };

  return (
    <div className="position-relative" ref={dropdownRef}>
      <form className="d-flex" role="search" onSubmit={handleSearch}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search recipes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => searchQuery.length >= 2 && setShowDropdown(true)}
          autoComplete="off"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>

      {showDropdown && (
        <div
          className="position-absolute bg-white border rounded shadow-lg mt-1"
          style={{
            top: "100%",
            right: 0,
            minWidth: "400px",
            maxHeight: "400px",
            overflowY: "auto",
            zIndex: 1050,
          }}
        >
          {loading ? (
            <div className="p-3 text-center">
              <div className="spinner-border spinner-border-sm" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : suggestions.length > 0 ? (
            <>
              <ul className="list-group list-group-flush">
                {suggestions.slice(0, 6).map((meal) => (
                  <li
                    key={meal.idMeal}
                    className="list-group-item list-group-item-action d-flex align-items-center"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleSuggestionClick(meal)}
                  >
                    <img
                      src={meal.strMealThumb}
                      alt={meal.strMeal}
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                        borderRadius: "4px",
                      }}
                      className="me-3"
                    />
                    <div className="flex-grow-1">
                      <div className="fw-semibold">{meal.strMeal}</div>
                      <small className="text-muted">
                        {meal.strCategory} • {meal.strArea}
                      </small>
                    </div>
                  </li>
                ))}
              </ul>

              {suggestions.length > 6 && (
                <div className="border-top p-2 text-center bg-light">
                  <button
                    className="btn btn-sm btn-link text-decoration-none"
                    onClick={() => {
                      navigate(`/search?query=${searchQuery}`);
                      setShowDropdown(false);
                      setSearchQuery("");
                    }}
                  >
                    View all {suggestions.length} results →
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="p-3 text-muted text-center">
              No results found for "{searchQuery}"
            </div>
          )}
        </div>
      )}
    </div>
  );
}
