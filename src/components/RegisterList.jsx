import React, { Component } from 'react';
import RegisterItem from './RegisterItem'


class RegisterList extends Component{
    render() {
        return(
            <ul>
                {this.props.recordList.map(e=> <RegisterItem title={e.title} amount={e.amount}/>)}

            </ul>
        )
    }

}
 
export default RegisterList;