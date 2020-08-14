import React, { Component } from 'react';

class UserInput extends Component {
    style = {
        border: "1px solid blue",
        padding: "8px",
        width: "50vw"
    }

    render() {
        return (
            <input style={this.style} value={this.props.value} onChange={this.props.handle}></input>
        )
    }
}

export default UserInput;