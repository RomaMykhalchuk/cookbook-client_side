import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
const CreateRecipe = () => {
  const [categoryField, setCategoryField] = useState("");
  const [nameField, setNameField] = useState("");
  const [descriptionField, setDescriptionField] = useState("");
  const [imageField, setImageField] = useState("");

  const formData = {
    category: categoryField,
    title: nameField,
    description: descriptionField,
    image: imageField
  };


  const grabInputCategory = e => {
    setCategoryField(e.target.value);
  };

  const grabInputName = e => {
    setNameField(e.target.value);
  };

  const grabInputDescription = e => {
    setDescriptionField(e.target.value);
  };

  const grabInputImage = e => {
    setImageField(e.target.value);
  };

  async function sendData(e) {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/recipes/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(formData)
    });
    const data = await response.json();
    alert(data);
  }

  return (
    <div className="app">
      <Header />
      <form className="universal-form">
        <div className="input-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            onChange={grabInputCategory}
            placeholder="Tag your recipe"
          />
        </div>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={grabInputName}
            placeholder="What's the title of your recipe? (min.3 symbols)"
          />
        </div>
        <div className="input-group">
          <label htmlFor="url">Image URL</label>
          <input
            type="text"
            id="url"
            onChange={grabInputImage}
            placeholder="Recipe image URL"
          />
        </div>
        <div className="input-group">
          <label htmlFor="description">Description</label>
          <textarea
            rows="5"
            id="description"
            onChange={grabInputDescription}
            placeholder="Tell about your recipe (min.10 symbols)"
          ></textarea>
        </div>
        <div className="input-group">
          <button
            className="active-recipe__button"
            id="submit"
            onClick={sendData}
          >
            Accept
          </button>
          <button className="active-recipe__button" id="submit">
            <Link to={"/"}>Home</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateRecipe;
