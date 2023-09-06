import React, { useState, useEffect } from "react";
import Contact from './Contact'






const ContactList = () => {

    const [person, setPerson] = useState([ ]);

useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data => setPerson(data))
});

// const [state,setState] = useState("");

// const [person, setPerson] = useState([
//     {
//         id:1,
//         name: "John",
//         email: "john@gmail.com",
//         city:"London",
//         phone:"123445555"
//     },
//     {
//         id:2,
//         name: "steve",
//         email: "steve@gmail.com",
//         city:"Newyork",
//         phone:"895556771"
//     },
//     {
//         id:3,
//         name: "elon",
//         email: "elon@gmail.com",
//         city:"california",
//         phone:"895556771"
//     }
// ])



    return (
        <div className="containter">
          
            <div className="col-md-12">
         
                <div className="row">
        

                    {/* <Contact name='tina' email='tina@gmail.com' phone='6379844154' city='chennai' />
                    <Contact name='steve' email='steve@gmail.com' phone='123654789' city='blore' /> */}

                    {
                        person.map((person)=>{
                            return(
                                
                                <Contact name={person.name} email={person.email} phone={person.phone} city={person.address.city}/>
                            )
                        })
                    }

                </div>
            </div>
           
        </div>
    )
}

export default ContactList;