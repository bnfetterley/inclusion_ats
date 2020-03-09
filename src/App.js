import React, { Component } from 'react'
import Nav from './Nav'
import AdminContainer from './containers/AdminContainer'
import ApplicantsContainer from './containers/ApplicantsContainer'
import FormContainer from './containers/FormContainer'
import Dashboard from './components/Dashboard'
import { Route, Switch, withRouter } from 'react-router-dom'

class App extends Component {

  state = {
     createAdminForm: false,
     admins: ["bri", "Stefano", "Rita"],
     applicants: [
       {name: "Alex Mosquea", status: "new"}, {name: "Raq Robinson", status: "Under Review"}
     ],
     forms: [
       {name: "Summer Program", question_id: 0, question_id: 1, question_id: 3, active: "yes"
       },
       {name: "Winter Program", question_id: 4, question_id: 5, question_id: 6, active: "no"
       }
     ]
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
      
      <Switch>

      <Route path= "/" exact  render={(props) => 
        <Dashboard
      
        />
      }/>

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
         applicants = {this.state.applicants}
        />
      }/>


     <Route path= "/forms" exact  render={(props) => 
        <FormContainer 
        forms = {this.state.forms}
        />
      }/>


      </Switch>
      </div>
    )
  }
}

export default withRouter(App);

