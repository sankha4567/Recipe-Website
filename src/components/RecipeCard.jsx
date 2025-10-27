import { Link } from "react-router-dom";

const RecipeCard = ({ meal }) => (
  <Link
    to={`/recipe/${meal.idMeal}`}
    className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1"
  >
    <img
      src={meal.strMealThumb}
      alt={meal.strMeal}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h2 className="font-semibold text-lg text-gray-700 mb-2 truncate">
        {meal.strMeal}
      </h2>
      <p className="text-emerald-600 font-medium hover:underline">
        View Details →
      </p>
    </div>
  </Link>
);

export default RecipeCard;
