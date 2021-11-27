import React from 'react';
import './style.css';

const ActualDate = () => {
  const current = new Date();
  const date = `${current.getDate()}.${
    current.getMonth() + 1
  }.${current.getFullYear()}`;

  return (
    <div className="ActualDate">
      <h1>Dnes je: {date}</h1>
    </div>
  );
};

export default ActualDate;
