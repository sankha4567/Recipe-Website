
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
  if (!meal) return <p className="text-center mt-8 text-red-500">Recipe not found.</p>;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ing = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ing && ing.trim()) ingredients.push({ ing: ing.trim(), measure: (measure || "").trim() });
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <Link to="/" className="text-emerald-600 hover:underline mb-4 inline-block">← Home</Link>

      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-80 object-cover" />
        <div className="p-6">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <h1 className="text-3xl font-bold mb-2">{meal.strMeal}</h1>
              <p className="text-sm text-gray-600 mb-4">
                <strong>Category:</strong> {meal.strCategory} • <strong>Area:</strong> {meal.strArea}
              </p>
            </div>

            {isFav ? (
              <button
                onClick={() => removeFavorite(meal.idMeal)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
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
                className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600"
              >
                Add to Favorites 🤍
              </button>
            )}
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
              <ul className="list-disc list-inside text-gray-700">
                {ingredients.map((it, idx) => (
                  <li key={idx}>{it.ing} — {it.measure}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Instructions</h2>
              <p className="whitespace-pre-line text-gray-800">{meal.strInstructions}</p>
            </div>
          </div>

          {meal.strYoutube && (
            <Link
              to={meal.strYoutube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-emerald-600 hover:underline"
            >
              ▶ Watch on YouTube
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
