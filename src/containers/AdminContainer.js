import React, { Component } from 'react'
import CreateAdminModal from '../components/CreateAdminModal'
import Admin from '../components/Admin'

export default class AdminContainer extends Component {
    render() {
        return (
            <div>
           
         {this.props.admins.map(admin => <li>  {admin} </li>)
         
         }



         <button onClick={this.props.displayFormClick}>Create an Admin</button>   
         <CreateAdminModal
         displayFormClick = {this.props. displayFormClick}
        displayModal = {this.props.displayModal}
        />    
            </div>
        )
    }
}
