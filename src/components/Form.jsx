import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const ShowAlert = (e) => {
    e.preventDefault();
    alert(`Form submitted:\nName: ${formData.name}\nAge: ${formData.age}\nEmail: ${formData.email}`);
  };

  return (
    <div>
      <h1>Please fill the following informations:</h1>
      <form onSubmit={ShowAlert}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
