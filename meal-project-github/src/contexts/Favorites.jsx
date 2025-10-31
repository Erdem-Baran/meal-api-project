import { createContext, useEffect, useState } from "react";
export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const isFavorite = (mealId) => {
    return favorites.some(
      (meal) => meal.id === mealId || meal.idMeal === mealId
    );
  };

  const addFavorite = (meal) => {
    const normalizedMeal = {
      ...meal,
      id: meal.idMeal || meal.id,
      idMeal: meal.idMeal || meal.id,
    };
    setFavorites((prevFavorites) => [...prevFavorites, normalizedMeal]);
  };

  const removeFavorite = (mealId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter(
        (meal) => meal.id !== mealId && meal.idMeal !== mealId
      )
    );
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
