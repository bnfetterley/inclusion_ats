import React, { Component } from 'react'
import '../DishForm.css';

const createAdminModal = props => {

    const divStyle = { 
      display: props.displayModal ? 'block' : 'none'
 };

 return (

    <div className="modal" onClick={ props.closeModal } style={divStyle}> 
            <div className="modal-content"   onClick={ e => e.stopPropagation()} >




    <span className="close" onClick={ props.closeModal }> X </span>
            </div>
    </div>

    )
}


export default createAdminModal;
