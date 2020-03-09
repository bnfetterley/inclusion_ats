import React, { Component } from 'react'
import Nav from './Nav'
import AdminContainer from './containers/AdminContainer'
import ApplicantsContainer from './containers/ApplicantsContainer'
import FormContainer from './containers/FormContainer'
import { Route, Switch, withRouter } from 'react-router-dom'

class App extends Component {

  state = {
     createAdminForm: false,
     admins: ["bri", "Stefano", "Rita"]
  }

  //CALLBACK FOR CREATE ADMIN MODAL
  createAdminForm = (info) => {
    this.setState({createAdminForm: !this.state.createAdminForm}) // true/false toggle
  }


  render() {

    console.log(this.state)
    return (
      
        <div className="App">
      <Nav/>
      <h1>INCLUSION APPLICANT TRACKING SYSTEM</h1>

      <p>Welcome, BriAdmin </p>

      <h1>546</h1> new applicants to review
      
      <Switch>
      <Route path= "/admin" exact  render={(props) => 
        <AdminContainer 
        displayCreateAdminForm = {this.state.createAdminForm}
        displayFormClick = {this.createAdminForm}
        displayModal = {this.state.createAdminForm}
        admins = {this.state.admins}
        />
      }/>


     <Route path= "/applications" exact  render={(props) => 
        <ApplicantsContainer 
        
        />
      }/>


     <Route path= "/forms" exact  render={(props) => 
        <FormContainer 
        
        />
      }/>


      </Switch>
      </div>
    )
  }
}

export default withRouter(App);

