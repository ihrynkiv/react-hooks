import React, { useState } from 'react';

function computeInitialCounter() {
  console.log('Some calculations...');
  return Math.trunc(Math.random() * 20);
}

function App() {
  // const [counter, setCounter] = useState(computeInitialCounter());
  const [counter, setCounter] = useState(() => computeInitialCounter());

  const [person, setPerson] = useState({
    name: 'Vanya',
    age: 20
  });

  function increment(value) {
    setCounter(prev => prev + value);
  }

  function updatePerson() {
    setPerson(prev => {
      return {
        ...prev,
        name: 'Орест топ чєл!'
      };
    });
  }

  function random() {
    setCounter(Math.floor(Math.random() * 100));
  }

  return (
    <div>
      <h1>Счетчик: {counter}</h1>
      <button onClick={() => increment(5)} className="btn btn-outline-success">Додати</button>
      <button onClick={() => setCounter((prevState => --prevState))} className="btn btn-outline-danger">Видалити</button>
      <button onClick={random} className="btn btn-outline-warning">Рандом</button>
      <button onClick={updatePerson} className="btn btn-outline-dark">Змінити назву</button>

      <hr />

      <h2>Name: {person.name}</h2>
      <h2>Age: {person.age}</h2>
    </div>
  );
}

export default App;
