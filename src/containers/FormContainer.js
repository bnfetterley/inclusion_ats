import React, { Component } from 'react'

export default class FormContainer extends Component {
    render() {
        return (
            <div>
                <h1>Forms:</h1>
                {this.props.forms.map(form =>
                    <li> <b>name:</b> {form.name} <b>active:</b> {form.active}</li>
                    
                    )}

<button onClick={this.props.displayFormClick}>Create a New Form</button>   
                
            </div>
        )
    }
}
