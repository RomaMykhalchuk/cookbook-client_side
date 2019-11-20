import React from "react";
import { Link } from "react-router-dom";

const RecipeList = props => {
  return (
    <div className="container">
      <button className="active-recipe__button">
        <Link to={"/recipes/new"}>Add a New Recipe</Link>
      </button>
      <div className="row">
        {props.recipesData.map(currentItem => (
          <div
            className="col-md-4"
            key={currentItem._id}
            style={{ marginBottom: "2rem" }}
          >
            <div className="recipe__box">
              <img
                className="recipe__box-img"
                src={currentItem.image}
                alt={currentItem.title}
              />
              <div className="recipe__text">
                <h4 className="recipe__title">
                  {currentItem.title.length < 20
                    ? `${currentItem.title}`
                    : `${currentItem.title.substring(0, 35)}...`}
                </h4>
                <p className="recipe__subtitle">
                  Published | <span>{currentItem.createdAt.slice(0, 10)}</span>
                </p>
              </div>
              <button className="recipe__button">
                {" "}
                <Link to={`/recipes/details/${currentItem._id}`}>
                  View Details
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
