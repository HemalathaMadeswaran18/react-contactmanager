import React, { useState, useEffect } from "react";
import './ContactList.css';

const ContactList = () => {
    const [person, setPerson] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);

    const DeleteContactCard=(id)=>{
        fetch(` http://localhost:3002/persons/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            alert("contact deleted");
        })
      }

    const imageUrls = [
        "https://images.unsplash.com/photo-1612898887720-9a468670dc68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1826&q=80",
        "https://images.unsplash.com/photo-1502767882403-636aee14f873?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        "https://images.unsplash.com/photo-1500621679649-37b519bef4fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80",
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
        "https://images.unsplash.com/photo-1471017851983-fc49d89c57c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80",
        "https://images.unsplash.com/photo-1595347097560-69238724e7bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        "https://images.unsplash.com/photo-1596075780750-81249df16d19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        "https://images.unsplash.com/photo-1549128932-68be7325062a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
        "https://images.unsplash.com/photo-1687360728559-53fe4fedf36c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
        "https://images.unsplash.com/photo-1612898887720-9a468670dc68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1826&q=80",
        "https://images.unsplash.com/photo-1502767882403-636aee14f873?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        "https://images.unsplash.com/photo-1500621679649-37b519bef4fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80",
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
        "https://images.unsplash.com/photo-1471017851983-fc49d89c57c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80",
        "https://images.unsplash.com/photo-1595347097560-69238724e7bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        "https://images.unsplash.com/photo-1596075780750-81249df16d19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        "https://images.unsplash.com/photo-1549128932-68be7325062a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
        "https://images.unsplash.com/photo-1687360728559-53fe4fedf36c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
     
    ];

    useEffect(() => {
        fetch("http://localhost:3002/persons")
            .then(res => res.json())
            .then(data => setPerson(data));
    }, []);

    const handleCardClick = (cardIndex) => {
        if (selectedCard === cardIndex) {
            // If the same card is clicked again, close it
            setSelectedCard(null);
        } else {
            setSelectedCard(cardIndex);
        }
    }

    return (
        <div>
      
            <div className="container">
            <h1>Your Contacts</h1>
                <div className="col-md-12 mt-5 ">
                    <div className="row">
                    {person.map((user, index) => (
                        <div
                            key={user.id}
                            className={`card card-color-dark ${selectedCard === index ? 'clicked' : ''} `}
                            onClick={() => handleCardClick(index)} // Toggle details on card click
                        >

                            <div className="border"></div>
                            <img
                                src={imageUrls[index]}
                                alt={user.name}
                                height={300}
                                width={50}
                            />
                            <button className="btn btn-danger" onClick={DeleteContactCard(user.id)}  ></button>
                            <h1>{user.name}</h1>
                            {selectedCard === index && (
                                <div className="additional-details">
                                    <p className="font-weight-bold text-light">Email: {user.email}</p>
                                    <p className="font-weight-bold text-light">Phone: {user.phone}</p>
                                    <p className="font-weight-bold text-light">City: {user.city}</p>
                                    

                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
    );
}

export default ContactList;
