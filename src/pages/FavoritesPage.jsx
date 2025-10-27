
import { Link, useNavigate } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

export default function FavoritesPage() {
  const { favorites, removeFavorite, clearFavorites } = useFavorites();
  const nav = useNavigate();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">❤️ Your Favorites</h2>
        <div className="flex items-center gap-3">
          {favorites.length > 0 && (
            <button
              onClick={() => {
                if (confirm("Clear all favorites?")) clearFavorites();
              }}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Clear All
            </button>
          )}
          <button
            onClick={() => nav("/")}
            className="bg-emerald-500 text-white px-3 py-1 rounded hover:bg-emerald-600"
          >
            Back Home
          </button>
        </div>
      </div>

      {favorites.length === 0 ? (
        <p className="text-gray-600">No favorites yet. Add some from Search!</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {favorites.map((meal) => (
            <div key={meal.idMeal} className="bg-white shadow rounded-lg overflow-hidden">
              <Link to={`/meal/${meal.idMeal}`}>
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-full h-40 object-cover hover:opacity-90 transition"
                />
              </Link>
              <div className="p-3">
                <h3 className="font-semibold mb-2 truncate">{meal.strMeal}</h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => removeFavorite(meal.idMeal)}
                    className="flex-1 bg-red-500 text-white py-2 rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                  <Link
                    to={`/meal/${meal.idMeal}`}
                    className="px-3 py-2 flex items-center justify-center bg-emerald-50 text-emerald-700 rounded border border-emerald-100 hover:bg-emerald-100 text-sm"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
