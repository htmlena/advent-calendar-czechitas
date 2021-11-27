import React, { useState } from 'react';

const Countdown = () => {
  const today = newDate();
  const year =
    today > (today.getMonth() === 12 && today.getDay === 24)
      ? today.getFullYear() + 1
      : today.getFullYear();
  const christmas = new Date(year, 12, 24);
  const difference = christmas - today;

  return (
    <div className="Countdown">
      <h1>Do Vanoc zbyva: {difference}</h1>
    </div>
  );
};

export default Countdown;
