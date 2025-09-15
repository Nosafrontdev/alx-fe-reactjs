// src/components/recipeStore.js
import create from "zustand";

const useRecipeStore = create((set) => ({
  // --- recipes state ---
  recipes: [],
  setRecipes: (recipes) => set({ recipes }),

  // --- search state ---
  searchTerm: "",
  setSearchTerm: (term) => set({ searchTerm: term }),

  // --- favorites state ---
  favorites: [],
  addFavorite: (recipe) =>
    set((state) => ({
      favorites: [...state.favorites, recipe],
    })),
  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((recipe) => recipe.id !== id),
    })),

  // --- recommendations state ---
  recommendations: [],
  setRecommendations: (recommendations) => set({ recommendations }),

  // --- actions for recipes ---
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
}));

export default useRecipeStore;
