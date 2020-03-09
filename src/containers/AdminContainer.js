import React, { Component } from 'react'

export default class AdminContainer extends Component {
    render() {
        return (
            <div>
           

         <button onClick={this.props.displayFormClick}>Create an Admin</button>       
            </div>
        )
    }
}
