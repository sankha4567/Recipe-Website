
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

export default function Navbar() {
  const { favorites } = useFavorites();

  return (
    <header className="bg-emerald-600 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-2xl font-bold hover:text-emerald-200">
            🍽️ Recipe Ideas
          </Link>
          <Link
            to="/"
            className="text-sm px-3 py-1 rounded hover:bg-emerald-500/30 transition"
          >
            Home
          </Link>
          <Link
            to="/search"
            className="text-sm px-3 py-1 rounded hover:bg-emerald-500/30 transition"
          >
            Search
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/favorites"
            className="bg-white text-emerald-600 px-3 py-1 rounded font-medium hover:bg-emerald-100 transition"
          >
            Favorites ({favorites.length})
          </Link>
        </div>
      </div>
    </header>
  );
}
