import React from 'react'
import Users from "./Users";
import members from "../data/members.json";

class UserList extends React.Component {
    render(){
        const userdata=members;
        return(
            <div>
                {
                    userdata.map(user=>(
                        <Users key={user.id}
                               id={user.id}
                               name={user.name}
                               username={user.username}/>
                    ))
                }
            </div>
        );
    }
}
export default UserList;