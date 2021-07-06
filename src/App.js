import { useState } from 'react';

const App = () => {
  const [value, setValue] = useState(0)

  return (
    <div>
      <h1>{ value }</h1>
      <button onClick={ () => setValue(value - 1) }>Sub</button>
      <button onClick={ () => setValue(value - value) }>Restart</button>
      <button onClick={ () => setValue(value + 1) }>Add</button>
    </div>
  )
}

export default App
