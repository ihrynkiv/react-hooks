import React, {useState, useCallback} from 'react'
import ItemsList from '../ItemsList'

function App() {
  const [colored, setColored] = useState(false)
  const [count, setCount] = useState(1)

  const styles = {
    color: colored ? 'darkred' : 'black'
  }

  const generateItemsFromAPI = (startIndex) => {
  console.log("generateItemsFromAPI");
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(`Елемент ${i + startIndex}`)
  }
  return result;
  }

  // const generateItemsFromAPI = useCallback((startIndex) => {
  //   console.log("generateItemsFromAPI");
  //   const result = [];
  //   for (let i = 0; i < count; i++) {
  //     result.push(`Елемент ${i + startIndex}`)
  //   }
  //   return result;
  // }, [count])

  return (
    <>
      <h1 style={styles}>Кількість елементів: {count}</h1>
      <button className={'btn btn-success'} onClick={() => setCount(prev => prev + 1)}>Додати</button>
      <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}>Змінити</button>

      <ItemsList getItems={generateItemsFromAPI} />
    </>
  )
}

export default App
