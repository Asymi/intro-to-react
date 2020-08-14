import React, { Component } from 'react';
import './UserOutput.css'

class UserOutput extends Component {
    render() {
        return (
            <div className="userOutput">
            <p> {this.props.name} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula augue ut lorem egestas, at laoreet odio pulvinar. Nunc suscipit condimentum vulputate. Sed nunc ex, varius nec sodales et, malesuada nec libero. Ut rhoncus vehicula ex, non mollis odio vehicula non. Cras libero nisl, sagittis at suscipit vel, posuere sed massa. Aenean porta rhoncus justo eu porttitor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi vitae enim turpis.</p>
            <p> {this.props.name} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula augue ut lorem egestas, at laoreet odio pulvinar. Nunc suscipit condimentum vulputate. Sed nunc ex, varius nec sodales et, malesuada nec libero. Ut rhoncus vehicula ex, non mollis odio vehicula non. Cras libero nisl, sagittis at suscipit vel, posuere sed massa. Aenean porta rhoncus justo eu porttitor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi vitae enim turpis.</p>
            </div>
        )
    }
}

export default UserOutput;