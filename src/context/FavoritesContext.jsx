
import React, { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("favorites")) || [];
      setFavorites(stored);
    } catch {
      setFavorites([]);
    }
  }, []);

  // Persist to localStorage when favorites change
  useEffect(() => {
    try {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } catch {}
  }, [favorites]);

  // Add favorite (avoid duplicates)
  const addFavorite = (meal) => {
    if (!meal || !meal.idMeal) return;
    setFavorites((prev) => {
      if (prev.find((m) => m.idMeal === meal.idMeal)) return prev;
      return [...prev, meal];
    });
  };

  // Remove favorite by id
  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((m) => m.idMeal !== id));
  };

  // Clear all favorites
  const clearFavorites = () => setFavorites([]);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, clearFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
