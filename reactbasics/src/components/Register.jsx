import {useState} from "react";

const Register=()=>{
    const[user,setUser]=useState({firstName:"Nikita",lastName:"Bansode",mobileNo:9000000000,email:"xyz@gmail.com",username:"nikitab123"})

    const handleChange=(event)=>{
        const {name,value}=event.target;
        setUser({
            ...user,
            [name]:value
        });
    };

    return(
        <div>
        <div>
            <p>Enter First Name : </p>
            <input type="text"
                   name="firstName"
                   value={user.firstName} onChange={handleChange}
            />
        </div>

        <div>
            <p>Enter Last Name : </p>
            <input type="text"
                   name="lastName"
                   value={user.lastName}
                   onChange={(event)=>setUser({...user, lastName: event.target.value})}/>    {/*Event Binding */}
        </div>

        <div>
            <p>Enter Mobile Number : </p>
            <input type="number"
                   name="mobileNo"
                   value={user.mobileNo}
                   onChange={handleChange}/>
        </div>

        <div>
            <p>Enter Email Id : </p>
            <input type="email"
                   name="email"
                   value={user.email}
                   onChange={handleChange}/>
        </div>

        <div>
            <p>Enter username : </p>
            <input type="text"
                   name="username"
                   value={user.username}
                   onChange={handleChange}/>
        </div>

        <div>
            <button onClick={()=>
                console.log("User Registered")}>
                Register
            </button>
        </div>
        </div>
    );
}
export default Register;