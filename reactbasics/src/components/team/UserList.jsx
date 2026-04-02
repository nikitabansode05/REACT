import React from 'react'
import User from "./User";
import members from "../../data/members.json";

class UserList extends React.Component {
    render(){
        const userdata=members;   // does it comes from file directly???
        return(
            <div>
                {
                    userdata.map((user)=>(
                        <React.Fragment key={user.id}>
                            <User
                                imageurl={user.imageurl}
                                id={user.id}
                                name={user.name}
                                username={user.username}
                                height={user.height}
                                weight={user.weight} />
                            { <hr />}
                        </React.Fragment>
                    ))
                }
            </div>
        );
    }
}
export default UserList;