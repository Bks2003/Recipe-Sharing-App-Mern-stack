import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './src/components/Auth/Login';
import Register from './src/components/Auth/Register';
import RecipeList from './src/components/Recipe/RecipeList';
import RecipeForm from './src/components/Recipe/RecipeForm';
import RecipeDetail from './src/components/Recipe/RecipeDetail';
import Navbar from './src/components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recipes" element={<RecipeList />} />
          <Route path="/recipes/new" element={<RecipeForm />} />
          <Route path="/recipes/:id" element={<RecipeDetail />} />
          <Route path="/" element={<RecipeList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;