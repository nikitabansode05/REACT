import React from 'react';
import { useState } from 'react';


const Counter = () => {
    const [count, setCount] = useState(2);

    return (
        <div>
        <h6>{count}</h6>
        <button onClick={()=> setCount(count-1)}>
            Decrease
        </button>
        <button onClick={() => setCount(count+1)}>
            Increase
        </button>
        </div>      
    );
}
export default Counter;