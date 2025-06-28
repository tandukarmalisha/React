import React from 'react'

const form = () => {
 const ShowAlert = () =>{
    alert("Form submitted")
 }
    return (
    <div>
        <pre>
        <h1>Please fill the following informations:</h1>
        <label id="name">Name:</label><input type="text" /><br />
        <label id="age">Age:</label> <input type="number" /> <br />
        <button onClick="ShowAlert">Submit</button>
        </pre>
    </div>
  )
}

export default form