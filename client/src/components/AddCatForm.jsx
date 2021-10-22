import React, { useState } from "react";
import '../styles/App.css';

const AddCatForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [age, setAge] = useState();

  return (
    <div className="form-container">
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Age"
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <button>Add my cat!</button>
    </div>
  );
}

export { AddCatForm };