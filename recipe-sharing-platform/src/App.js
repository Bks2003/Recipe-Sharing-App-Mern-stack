import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import RecipeList from './components/Recipe/RecipeList';
import RecipeForm from './components/Recipe/RecipeForm';
import RecipeDetail from './components/Recipe/RecipeDetail';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Container */}
      <div className="container">
        {/* Define Routes */}
        <Routes>
          {/* Route for Login Page */}
          <Route path="/login" element={<Login />} />

          {/* Route for Registration Page */}
          <Route path="/register" element={<Register />} />

          {/* Route for Listing All Recipes */}
          <Route path="/recipes" element={<RecipeList />} />

          {/* Route for Creating a New Recipe */}
          <Route path="/recipes/new" element={<RecipeForm />} />

          {/* Route for Viewing a Single Recipe Detail */}
          <Route path="/recipes/:id" element={<RecipeDetail />} />

          {/* Default Route (Home Page) */}
          <Route path="/" element={<RecipeList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;