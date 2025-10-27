
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

export default function MealCard({ meal }) {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const isFav = favorites.some((f) => f.idMeal === meal.idMeal);

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition transform hover:scale-[1.02]">
      <Link to={`/meal/${meal.idMeal}`} aria-label={`View ${meal.strMeal} details`}>
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-48 object-cover"
        />
      </Link>

      <div className="p-4">
        <Link to={`/meal/${meal.idMeal}`}>
          <h3 className="text-lg font-semibold mb-2 hover:text-emerald-600 truncate">
            {meal.strMeal}
          </h3>
        </Link>

        <div className="flex gap-2">
          {isFav ? (
            <button
              onClick={() => removeFavorite(meal.idMeal)}
              className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
            >
              Remove ❤️
            </button>
          ) : (
            <button
              onClick={() => addFavorite(meal)}
              className="flex-1 bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600 transition"
            >
              Add to Favorites 🤍
            </button>
          )}

          <Link
            to={`/meal/${meal.idMeal}`}
            className="px-3 py-2 bg-emerald-50 text-emerald-700 rounded-lg border border-emerald-100 hover:bg-emerald-100 text-sm"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
