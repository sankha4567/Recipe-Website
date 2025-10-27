import { useState } from "react";
import SearchBar from "../components/SearchBar";
import MealCard from "../components/MealCard";

export default function SearchPage() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMeals = async (ingredient) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await res.json();
      setMeals(data.meals || []);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="p-4">
      <SearchBar onSearch={fetchMeals} />
      {loading ? (
        <p className="text-center mt-6 text-gray-500">Loading...</p>
      ) : meals.length === 0 ? (
        <p className="text-center mt-6 text-gray-500">No meals found. Try searching!</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {meals.map((meal) => (
            <MealCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}
    </div>
  );
}
