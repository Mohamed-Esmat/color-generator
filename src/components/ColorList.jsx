import React from 'react';
import SingleColor from './SingleColor';
import { nanoid } from 'nanoid';

const ColorList = ({ colors }) => {
  return (
    <section className="colors">
      {colors.map((color, index) => {
        console.log(color);
        return <SingleColor key={nanoid()} color={color} index={index} />;
      })}
    </section>
  );
};

export default ColorList;
