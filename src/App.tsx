import Form from './components/Form'
import './App.css'
import { useState } from 'react';

function App() {
  const [num, setNum] = useState(0);

  function handleChange(e) {
    setNum(e.target.value);
  }

  return (
    <>
      <p>{num}</p>
      <Form handleChange={handleChange}/>
    </>
  )
}

export default App
