// DeleteRecipeButton.jsx
import { useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const navigate = useNavigate();
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate("/"); // Go back to recipe list after delete
  };

  return (
    <button onClick={handleDelete} style={{ color: "red" }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
