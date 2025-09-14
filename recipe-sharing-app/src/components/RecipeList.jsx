// src/components/RecipeList.jsx
import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) =>
    state.searchTerm ? state.filteredRecipes : state.recipes
  );

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <li key={recipe.id}>
              <Link
                to={`/recipe/${recipe.id}`}
                style={{ textDecoration: "none", color: "blue" }}
              >
                <strong>{recipe.title}</strong>
              </Link>
              <p>{recipe.description}</p>
            </li>
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </ul>
    </div>
  );
};

export default RecipeList;