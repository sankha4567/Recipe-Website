import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[80vh] px-4">
      <h1 className="text-4xl font-bold mb-4 text-orange-600">
        🍳 Welcome to Recipe Ideas
      </h1>
      <p className="text-gray-700 max-w-xl mb-6">
        Discover delicious meals based on the ingredients you have! Search by ingredient,
        explore recipes, and save your favorites for later. Perfect for busy professionals like Taylor 🍽️.
      </p>
      <Link
        to="/search"
        className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
      >
        Get Started →
      </Link>
    </div>
  );
}
