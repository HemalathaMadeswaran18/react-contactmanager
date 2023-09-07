import React from 'react';

import { useState } from "react";
import ReactDOM from 'react-dom/client';
import Contact from './Contact';
export  const AddContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [person, setPerson] = useState([]);

    const getName=(e)=>{
        setName(e.target.value);
    }
    const getEmail=(e)=>{
        setEmail(e.target.value);
    }

    const getCity=(e)=>{
        setCity(e.target.value);
    }
 

    const getPhone=(e)=>{
        setPhone(e.target.value);
    }
 
 

    


    const handleSubmit = (event) => {
      event.preventDefault();
     // alert(`The name you entered was: ${name}, ${email}`);
      const newContact ={
        name,
        phone,
        email,
        city
      }
     // console.log(newContact);
      setPerson([...person,newContact]);
      console.log(person);
   
      
    }
  
    return (
        <div>
        <div className="container">

<div class="col-md-12 mt-3">
<form onSubmit={handleSubmit} >
  <div class="form-group mt-2 ">
    <label for="nameonForm">Name</label>
    <input type="text" 
            value={name}
            onChange={getName} class="form-control" id="nameonForm" aria-describedby="emailHelp" />
  </div>

  <div class="form-group mt-2">
    <label for="emailonForm">Email</label>
    <input type="text" 
            value={email}
            onChange={getEmail} class="form-control" id="emailonForm" />
  </div>

  <div class="form-group mt-2">
    <label for="phoneonForm">Phone</label>
    <input type="text" 
            value={phone}
            onChange={getPhone} class="form-control" id="phoneonForm" />
  </div>


  <div class="form-group mt-2">
    <label for="cityonForm">City</label>
    <input type="text" 
            value={city}
            onChange={getCity} class="form-control" id="cityonForm"/>
  </div>





  <button type="submit" class="btn btn-primary mt-2 mx-auto d-block">Submit</button>
</form>


</div>
</div>



<div className="containter">
          
<div className="col-md-12">

    <div className="row">


        {/* <Contact name='tina' email='tina@gmail.com' phone='6379844154' city='chennai' />
        <Contact name='steve' email='steve@gmail.com' phone='123654789' city='blore' /> */}

        {
            person.map((person)=>{
                return(
                    
                    <Contact name={person.name} email={person.email} phone={person.phone} city={person.city}/>
                )
            })
        }

    </div>
</div>

</div>

</div>

    )
}

export default AddContact;
