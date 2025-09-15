// src/components/recipeStore.js
import create from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],

  // --- search state ---
  searchTerm: "",
  setSearchTerm: (term) => set({ searchTerm: term }),

  // --- actions ---
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

  setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;
