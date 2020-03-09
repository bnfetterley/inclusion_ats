import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
          
                <div class="ui secondary  menu"   onClick={this.toggleCollapse}>
                <a class="item">
                <Link to="/">Home</Link>
                </a>
                
                <a onClick={ this.props.onClickDish}class= "left item">
                 <Link to="/admin">Admin</Link>
                 </a>
                

                 <a onClick={ this.props.onClickDish}class= "left item">
                 <Link to="/applications">Applications</Link>
                 </a>

                 <a onClick={ this.props.onClickDish}class= "left item">
                   <Link to="/forms">Forms</Link>
                 </a>


            </div>
        )
    }
}
