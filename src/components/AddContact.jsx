import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useState } from "react";
import ReactDOM from 'react-dom/client';
import Contact from './Contact';

export const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [person, setPerson] = useState([]);

  const DeleteContactCard=(id)=>{
    setPerson(person.filter(item=>item.id !== id));
  }

  const getName = (e) => {
    setName(e.target.value);
  }

  const getEmail = (e) => {
    setEmail(e.target.value);
  }

  const getCity = (e) => {
    setCity(e.target.value);
  }

  const getPhone = (e) => {
    setPhone(e.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // Generate a unique ID using uuidv4
    const id = uuidv4();

    const newContact = {
      id, // Assign the generated ID
      name,
      phone,
      email,
      city,
    }

    setPerson([...person, newContact]);
    console.log(person);
  }

 
  

  return (
    <div>
      <div className="container">
        <div className="col-md-12 mt-3">
          <form onSubmit={handleSubmit}>
            <div className="form-group mt-2">
              <label htmlFor="nameonForm">Name</label>
              <input
                type="text"
                value={name}
                onChange={getName}
                className="form-control"
                id="nameonForm"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="form-group mt-2">
              <label htmlFor="emailonForm">Email</label>
              <input
                type="text"
                value={email}
                onChange={getEmail}
                className="form-control"
                id="emailonForm"
              />
            </div>

            <div className="form-group mt-2">
              <label htmlFor="phoneonForm">Phone</label>
              <input
                type="text"
                value={phone}
                onChange={getPhone}
                className="form-control"
                id="phoneonForm"
              />
            </div>

            <div className="form-group mt-2">
              <label htmlFor="cityonForm">City</label>
              <input
                type="text"
                value={city}
                onChange={getCity}
                className="form-control"
                id="cityonForm"
              />
            </div>

            <button type="submit" className="btn btn-primary mt-2 mx-auto d-block">Submit</button>
          </form>
        </div>
      </div>

      <div className="container">
        <div className="col-md-12">
          <div className="row">
            {
              person.map((person) => (
                <Contact DeleteClickHandler={DeleteContactCard}  key={person.id} id={person.id} name={person.name} email={person.email} phone={person.phone} city={person.city} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddContact;
