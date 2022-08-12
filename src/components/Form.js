import React, { useState } from 'react';

function Form() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
 

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log()
    if(!formState.name||!formState.email||!formState.message) {
      alert(`Please complete all sections of the form`)

    }else if(formState.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      alert(`Thank you for your enquiry ${formState.name}, I will return your email ASAP.`)
    }
    else{
      
    alert(`Please include a valid email`)
    
    }
    
  };


  return (
    <div>
      <p>
        Hello {formState.name}
      </p>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={formState.name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={formState.email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="email"
        />
        <textarea
          value={formState.message}
          name="message"
          onChange={handleInputChange}
          placeholder="message"
        />
        <button type="submit" >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
