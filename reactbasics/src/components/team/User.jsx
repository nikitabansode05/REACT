import Counter from '../Counter';
import { useState } from 'react';

const User=(props)=>{
    const[weight,setWeight]=useState(props.weight||0);
        return (
            <div>
                <img src={props.imageurl} height={100} width={100}></img>
                <p>Id :{props.id}</p>
                <p>Name :{props.name}</p>
                <p>Username : {props.username}</p>
                <p>Height : {props.height}</p>
                <p>Weight : {weight}</p>
                <Counter count={weight} setCount={setWeight}/>
            </div>
        );
    }

export default User;