import React from 'react'

const Navbar = () => {
  const showAlert = () =>{
    e.preventDefault();
    alert("Button clicked")
  }
    return (
  
    <div>
        <button onClick={showAlert}>Button 1</button>
<button onClick={showAlert}>Button 2</button>
    </div>
  
  );
};

export default Navbar;