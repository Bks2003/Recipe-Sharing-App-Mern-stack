import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./RecipeDetail.css";

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:3000/recipe/${id}`)
            .then(response => {
                setRecipe(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching recipe:", error);
                setLoading(false);
            });
    }, [id]);

    return (
        <div className="recipe-detail">
            {loading ? <p>Loading...</p> : recipe ? (
                <>
                    <h2>{recipe.title}</h2>
                    <h3>Ingredients</h3>
                    <ul>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    <h3>Instructions</h3>
                    <p>{recipe.instructions}</p>
                </>
            ) : <p>Recipe not found</p>}
        </div>
    );
};

export default RecipeDetail;
