import { Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <h1>Recipe App</h1>
            <AddRecipeForm />
            <RecipeList />
          </>
        }
      />
      <Route path="/recipes/:id" element={<RecipeDetails />} />
    </Routes>
  );
}

export default App;