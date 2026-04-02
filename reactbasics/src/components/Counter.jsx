import React from 'react';

const Counter = ({count,setCount}) => {
    return (
        <div>
        <button type="button" onClick={()=> setCount(count-1)}>-</button>
        <span>{count}</span>
        <button type="button" onClick={() => setCount(count+1)}>+</button>
        </div>      
    );
}
export default Counter;