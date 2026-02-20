import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./RecipeForm.css"; // Import CSS for styling

const RecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/add-recipe", {
        title,
        ingredients,
        instructions,
      });
      alert(response.data.message);
      navigate("/recipes"); // Redirect to recipes list after adding
    } catch (err) {
      alert("Error adding recipe");
    }
  };

  return (
    <div className="recipe-form-container">
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Recipe Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea placeholder="Ingredients (comma-separated)" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
        <textarea placeholder="Instructions" value={instructions} onChange={(e) => setInstructions(e.target.value)} required />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default RecipeForm;
