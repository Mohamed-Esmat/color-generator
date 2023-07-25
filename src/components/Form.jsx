import React, { useState } from 'react';

const Form = ({ addColor }) => {
  const [color, setColor] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    addColor(color);
  };

  return (
    <section className="container">
      <h4>color generator</h4>
      <form className="color-form" onSubmit={submitHandler}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#f15025"
        />
        <button
          className="btn"
          type="submit"
          style={{ backgroundColor: color }}
        >
          submit
        </button>
      </form>
    </section>
  );
};

export default Form;
