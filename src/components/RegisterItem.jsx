import React, {Component} from 'react';

class RegisterItem extends Component{
    render() {
        return(

            <li className= "list">
                <p> Title: {this.props.title} Amount: {this.props.amount} </p>
            </li>
        )
    }
}
 
export default RegisterItem;