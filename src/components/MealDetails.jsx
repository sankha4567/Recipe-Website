import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

export default function MealDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await res.json();
        setMeal(data.meals ? data.meals[0] : null);
      } catch (err) {
        console.error(err);
        setMeal(null);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [id]);

  const isFav = favorites.some((f) => f.idMeal === id);

  if (loading) return <p className="text-center mt-8">Loading...</p>;
  if (!meal)
    return <p className="text-center mt-8 text-red-500">Recipe not found.</p>;

  // Collect ingredients
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ing = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ing && ing.trim())
      ingredients.push({ ing: ing.trim(), measure: (measure || "").trim() });
  }

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6">
      <Link
        to="/"
        className="text-emerald-600 hover:underline mb-4 inline-block font-medium"
      >
        ← Back to Home
      </Link>

      <div className="bg-white shadow-xl rounded-xl overflow-hidden">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-72 sm:h-96 object-cover"
        />

        <div className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">{meal.strMeal}</h1>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Category:</strong> {meal.strCategory} •{" "}
                <strong>Area:</strong> {meal.strArea}
              </p>
            </div>

            {isFav ? (
              <button
                onClick={() => removeFavorite(meal.idMeal)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Remove from Favorites ❤️
              </button>
            ) : (
              <button
                onClick={() =>
                  addFavorite({
                    idMeal: meal.idMeal,
                    strMeal: meal.strMeal,
                    strMealThumb: meal.strMealThumb,
                  })
                }
                className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition"
              >
                Add to Favorites 🤍
              </button>
            )}
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
              <ul className="list-disc list-inside text-gray-700">
                {ingredients.map((it, idx) => (
                  <li key={idx}>
                    {it.ing} —{" "}
                    <span className="text-gray-500">{it.measure}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Instructions</h2>
              <p className="whitespace-pre-line text-gray-800 leading-relaxed">
                {meal.strInstructions}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
