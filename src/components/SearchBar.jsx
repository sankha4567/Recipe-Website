import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [ingredient, setIngredient] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ingredient.trim()) onSearch(ingredient.trim());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center mt-6 px-4 w-full"
    >
      <input
        type="text"
        placeholder="Search by ingredient (e.g., chicken, rice)"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
        className="w-full max-w-md border border-gray-300 rounded-l-lg p-2 outline-none focus:ring-2 focus:ring-orange-500"
      />
      <button
        type="submit"
        className="bg-orange-500 text-white px-4 py-2 rounded-r-lg hover:bg-orange-600"
      >
        Search
      </button>
    </form>
  );
}
