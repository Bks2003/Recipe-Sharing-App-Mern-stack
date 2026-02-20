import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { title } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/recipe/${title}`)
      .then((response) => setRecipe(response.data))
      .catch((err) => alert("Recipe not found"));
  }, [title]);

  if (!recipe) return <h3>Loading...</h3>;

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
      <p><strong>Instructions:</strong> {recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;
