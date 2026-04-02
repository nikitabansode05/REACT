import React from 'react';
import Button from "react-bootstrap/Button";
import {useNavigate} from 'react-router-dom';

const Hello =()=>{
    const navigate=useNavigate();

    const handleClick=()=>{
        console.log("GoodByeeeeeeeee!!!!");
        navigate("/goodbye");
    }
    return(
        <div>
            <p>Welcome to this webpage</p>
            <Button onClick={handleClick}>GoodBye</Button>
        </div>
    );
}
export default Hello;