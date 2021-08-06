import React, { useState, useMemo, useEffect } from 'react';

function complexCompute(num) {
  console.log('complexCompute');
  for (let i = 0; i < 1000000000; i++)
    i = i - 0.1;
  return num * 2;
}

function App() {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const styles = {
    color: colored ? 'darkred' : 'black'
  };

  // const styles = useMemo(() => ({
  //   color: colored ? 'darkred' : 'black'
  // }), [colored])

  const computed = complexCompute(number);

  // const computed = useMemo(() => {
  //   return complexCompute(number)
  // }, [number])

  useEffect(() => {
    console.log('Styles changed');
  }, [styles]);

  return (
    <>
      <h1 style={styles}>Обчислювальна властивість: {computed}</h1>
      <button className={'btn btn-success'} onClick={() => setNumber(prev => prev + 1)}>Додати</button>
      <button className={'btn btn-danger'} onClick={() => setNumber(prev => prev - 1)}>Видалити</button>
      <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}>Змінити</button>
    </>
  );
}

export default App;
