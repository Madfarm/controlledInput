import Form from './components/Form'
import './App.css'
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    Age: 0
  })

  function handleSubmit(e, newStuffs) {
    e.preventDefault();

    setFormData(newStuffs);
  }

  return (
    <>
      <p>First - {formData.firstName}</p>
      <p>Last - {formData.lastName}</p>
      <p>Age -{formData.Age}</p>
      <Form handleSubmit={handleSubmit}/>
      <div className='wootdoot'>
        <div className='box'>we</div>
        <div className='box'>23</div>
        <div className='box'>1</div>
      </div>
    </>
  )
}

export default App
