import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-emerald-600 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-emerald-200">
          🍽️ Recipe Ideas
        </Link>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-emerald-200">
            Home
          </Link>
          <Link
            to="/favorites"
            className="hover:text-emerald-200"
          >
            Favorites
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
