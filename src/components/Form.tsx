import { useState } from "react"

export default function Form({ handleSubmit }) {
    const [newGuy, setNewGuy] = useState({
        firstName: "Blankity blank",
        lastName: "Blankerton",
        Age: 0
    })

    function handleChange(e) {
        setNewGuy({
          ...newGuy,
          [e.target.name]: e.target.value
        });
    }

    return (
        <form onSubmit={(e)=> {
            handleSubmit(e,newGuy);
            setNewGuy({
                firstName: "",
                lastName: "",
                Age: 0
            });
        }}>  
            <input type="text" placeholder="whatever" onChange={handleChange} name="firstName"></input>
            <input type="text" onChange={handleChange}  value={newGuy.lastName} name="lastName"></input>
            <input type="number" onChange={handleChange}  value={newGuy.Age} name="Age"></input>
            <button type="submit">Submit</button>
        </form>
    )
}