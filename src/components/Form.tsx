import { useState } from "react"

export default function Form({ handleChange }) {
    return (
        <>  
            <input type="number" onChange={handleChange}></input>
            <button type="submit">Submit</button>
        </>
    )
}