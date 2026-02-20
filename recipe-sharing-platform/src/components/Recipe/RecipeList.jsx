import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./RecipeList.css";

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("http://localhost:3000/recipes")
            .then(response => {
                setRecipes(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching recipes:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="recipe-list">
            <h2>Recipe List</h2>
            {loading ? <p>Loading...</p> : null}
            {recipes.length === 0 ? <p>No recipes found</p> : (
                <ul>
                    {recipes.map(recipe => (
                        <li key={recipe._id}>
                            <Link to={`/recipes/${recipe._id}`}>
                                <h3>{recipe.title}</h3>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default RecipeList;
