import React, { Component } from 'react'

export default class ApplicantsContainer extends Component {
    render() {
        return (
            <div>
                <h1>Applicants:</h1>
                 {this.props.applicants.map(applicant =>
                    <li> <b>name:</b> {applicant.name} <b>status:</b> {applicant.status}</li>
                    
                    )}
            </div>
        )
    }
}
