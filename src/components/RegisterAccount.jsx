import React, { Component } from "react";

class RegisterAccount extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: "",
            amount: 0
        };

    }

    render() {
        const { title, amount } = this.state;
        return (
            <div>
                <form onSubmit={event => { event.preventDefault();
                this.props.handleSetRecordList(title, amount);
                }}
                >
                Title
                <input className= "titleInput" type="text" onChange={event => this.setState({ title: event.target.value })} />
                Value 
                <input className= "valueInput" type="number" onChange={event => this.setState({ amount: event.target.value })} />

                <button className="submitButton" type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default RegisterAccount;
