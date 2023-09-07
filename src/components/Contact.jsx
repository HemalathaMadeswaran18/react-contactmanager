import React from "react";

const Contact = (props) => {

    const DeleteClickHandler = (id)=>{
        console.log(id);
        props.DeleteContactCard(id);
    }


    return (
     <div className="col-md-3">
    
            <div class="card mb-2" style={{ width: '18rem' }}>
                <div class="card-body">
                    <h5 class="card-title">{props.name}</h5>
                    <p class="card-text">Phone: {props.phone}</p>
                    <p class="card-text">Email: {props.email}</p>
                    <p class="card-text">City: {props.city}</p>
                    <button
            className="btn btn-danger"
            onClick={() => props.DeleteClickHandler(props.id)} // Call the handler with the ID
          ></button>

                </div>
            </div>
            </div>
        
    )
}

export default Contact;