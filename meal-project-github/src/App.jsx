import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/MainLayout";
import Home from "./pages/Home";
import Meal from "./pages/Meal";
import Vegetarian from "./pages/Vegetarian";
import CategoryMeals from "./pages/CategoryMeals";
import MealDetails from "./pages/MealDetails";
import SearchResults from "./pages/SearchResults";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "search",
          element: <SearchResults />,
        },
        {
          path: "category/:categoryName",
          element: <CategoryMeals />,
        },
        {
          path: "meal",
          element: <Meal />,
        },
        {
          path: "meal/:mealId",
          element: <MealDetails />,
        },
        {
          path: "vegetarian",
          element: <Vegetarian />,
        },
        {
          path: "favorites",
          element: <FavoritesPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
