import { create } from "zustand";

export const useRecipeStore = create((set, get) => ({
  recipes: [
    { id: 1, title: "Jollof Rice", description: "Spicy West African rice dish" },
    { id: 2, title: "Fried Plantain", description: "Sweet and crispy plantain slices" },
    { id: 3, title: "Egusi Soup", description: "Nigerian melon seed soup" },
  ],
  favorites: [],
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, recipeId])], // prevents duplicates
    })),
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),
  recommendations: [],
  generateRecommendations: () =>
    set((state) => {
      // Mock logic: Recommend random recipes not already in favorites
      const recommended = state.recipes.filter(
        (recipe) =>
          !state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));