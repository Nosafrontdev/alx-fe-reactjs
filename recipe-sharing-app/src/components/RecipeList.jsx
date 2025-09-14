import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) =>
    state.searchTerm ? state.filteredRecipes : state.recipes
  );
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.length > 0 ? (
          recipes.map((recipe) => {
            const isFavorite = favorites.includes(recipe.id);
            return (
              <li key={recipe.id}>
                <Link to={`/recipe/${recipe.id}`}>
                  <strong>{recipe.title}</strong>
                </Link>
                <p>{recipe.description}</p>
                {isFavorite ? (
                  <button onClick={() => removeFavorite(recipe.id)}>
                    Remove Favorite
                  </button>
                ) : (
                  <button onClick={() => addFavorite(recipe.id)}>
                    Add to Favorites
                  </button>
                )}
              </li>
            );
          })
        ) : (
          <p>No recipes found.</p>
        )}
      </ul>
    </div>
  );
};

export default RecipeList;