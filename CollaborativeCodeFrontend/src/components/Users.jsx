import React from 'react'

class Users extends React.Component {
    render() {
        return (
            <div>
                <p>Id :{this.props.id}</p>
                <p>Name :{this.props.name}</p>
                <p>Username : {this.props.username}</p>
            </div>
        );
    }
}
export default Users;