import React, { useState } from 'react';

const Countdown = () => {
  const today = new Date();
  const year =
    today > (today.getMonth() === 12 && today.getDay === 24)
      ? today.getFullYear()
      : today.getFullYear();

  const christmas = new Date('12/24/' + year);

  const diffTime = Math.abs(christmas - today);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return (
    <div className="Countdown">
      <h1>Do Vanoc zbyva: {diffDays} dnu</h1>
    </div>
  );
};

export default Countdown;
