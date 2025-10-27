// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home"; 
import SearchPage from "./pages/SearchPage"; 
import FavoritesPage from "./pages/FavoritesPage"; 
import MealDetails from "./components/MealDetails";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/meal/:id" element={<MealDetails />} />
      </Routes>
    </>
  );
}
