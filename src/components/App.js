import React, { useEffect, useState } from "react";
import RecipesList from "./RecipesList";
import Header from "./Header";
import "../styles/app.scss";

function App() {
  const [recipes, setRecipe] = useState([]);
  useEffect(() => {
    getRecipe();
  }, []);
  async function getRecipe() {
    const response = await fetch(`http://localhost:5000/recipes`);
    const data = await response.json();
    setRecipe(data);
  }
  return (
    <div className="app">
      <Header />
      <RecipesList recipesData={recipes} />
    </div>
  );
}

export default App;
