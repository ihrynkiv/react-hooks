import React, {useState, useEffect, useRef} from 'react'

function App() {
  // const [renderCount, setRenderCount] = useState(1)
  const [value, setValue] = useState('initial')
  const renderCount = useRef(1)
  const inputRef = useRef(null)
  const prevValue = useRef('')

  useEffect(() => {
    // setRenderCount(prevState => prevState + 1 ) //who can to fix it?
    renderCount.current++
  })

  useEffect(() => {
    prevValue.current = value
  }, [value])

  const focus = () => inputRef.current.focus() //ref.current it is just a DOM element

  return (
    <div>
      {/*<h1>Кількість рендерів: {renderCount}</h1>*/}
      <h1>Кількість рендерів: {renderCount.current}</h1>
      <h2>Минулий стан: {prevValue.current}</h2>
      <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value} />
      <button className="btn btn-success" onClick={focus}>Фокус</button>
    </div>
  )
}

export default App
