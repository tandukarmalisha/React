import React from 'react'

const form = () => {
 const ShowAlert = () =>{
    alert("Form submitted")
 }
    return (
    <div>
        <h1>Please fill the following informations:</h1>
        <form onSubmit={ShowAlert}>
        <label id="name" >Name:</label><input type="text" required/><br />
        <label id="age" >Age:</label> <input type="number" required/> <br />
        <label id="email">E-mail:</label><input type="text" required /><br />
        <button>Submit</button>
        </form>
    </div>
  )
}

export default form