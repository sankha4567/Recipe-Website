import { useFavorites } from "../context/FavoritesContext";
import MealCard from "./MealCard";

export default function Favorites() {
  const { favorites, clearFavorites } = useFavorites();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">❤️ Your Favorite Meals</h2>
        {favorites.length > 0 && (
          <button
            onClick={clearFavorites}
            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
          >
            Clear All
          </button>
        )}
      </div>

      {favorites.length === 0 ? (
        <p className="text-gray-600">No favorites yet. Add some delicious meals!</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((meal) => (
            <MealCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}
    </div>
  );
}
