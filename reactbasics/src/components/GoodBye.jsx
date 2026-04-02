import React from 'react';
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';


const GoodBye=()=>{
    const navigate=useNavigate();

    const GoToHello=()=>{
        navigate("/");
    }

    return (
        <div>
            <p>Byeeeeeeeee!!!!</p>
            <Button onClick={GoToHello}>Hello</Button>
        </div>
    );
}
export default GoodBye;