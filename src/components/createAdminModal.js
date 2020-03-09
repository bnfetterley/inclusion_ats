import React, { Component } from 'react'
import '../CreateAdminModal.css';

const CreateAdminModal = props => {

    const divStyle = { 
      display: props.displayModal ? 'block' : 'none'
 };
 console.log(props)
 
 return (
         
         
         <div className="modal" onClick={ props.displayFormClick } style={{display: props.displayModal ? 'block' : 'none'}}> 
            <div className="modal-content"   onClick={ e => e.stopPropagation()} >
         <button className="close" onClick={ props.displayFormClick }> X </button>


   <h1>CREATE AN ADMIN</h1>

   <form >

  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <br></br>
  <label>
    Password:<input type="password" name="password" />
  </label>

<br></br>
  <input type="submit" value="Submit" />
</form>

            </div>
    </div>

    )
}


export default CreateAdminModal;
