import { create } from "zustand";

export const useRecipeStore = create((set, get) => ({
  recipes: [
    { id: 1, title: "Jollof Rice", description: "Spicy West African rice dish" },
    { id: 2, title: "Fried Plantain", description: "Sweet and crispy plantain slices" },
    { id: 3, title: "Egusi Soup", description: "Nigerian melon seed soup" },
  ],
  searchTerm: "",
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },
  filteredRecipes: [],
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
}));