import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const DetailedRecipe = props => {
  const id = props.match.params.id;
  const [currentRecipe, setCurrentRecipe] = useState([]);
  useEffect(() => {
    getCurrentRecipe();
  }, []);

  async function getCurrentRecipe() {
    const response = await fetch(`http://localhost:5000/recipes/details/${id}`);
    const data = await response.json();
    setCurrentRecipe(data);
   
  }

  return (
    <div className="app">
      <Header />
      <div className="container" style={{ marginTop: "2rem" }}>
        <div className="active-recipe">
          <h5 className="active-recipe__title">{currentRecipe.category}</h5>
          <h2>{currentRecipe.title}</h2>
          <p className="recipe__text">{currentRecipe.description}</p>
          <button className="active-recipe__button">
            <Link to={`/recipes/update/${currentRecipe._id}`}>Modify</Link>
          </button>
          <button className="active-recipe__button">
            <Link to={"/"}>Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailedRecipe;
