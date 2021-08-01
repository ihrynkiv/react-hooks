import React, { useState } from 'react';

export default function App() {
  let myCounter = 0;

  function increment() {

  }

  function decrement() {

  }

  return (
    <div>
      <h1>Лічильник: {myCounter}</h1>
      <button onClick={increment} className="btn btn-outline-success">Додати</button>
      <button onClick={decrement} className="btn btn-outline-danger">Видалити</button>
    </div>
  );
}
