const Register=()=>{
    return(
        <form>
        <div>
            <label>Enter First Name : </label>
            <input type="text"
                   value="Nikita"
            />
        </div>

        <div>
            <label>Enter Last Name : </label>
            <input type="text"
                   value="Bansode"/>
        </div>

        <div>
            <label>Enter Mobile Number : </label>
            <input type="number"
                   value={9000000000}/>
        </div>

        <div>
            <lable>Enter Email Id : </lable>
            <input type="text"
                   value="xyz@gmail.com"/>
        </div>

        <div>
            <label>Enter username : </label>
            <input type="text"
                   value="xyz123"/>
        </div>
        </form>
    );
}
export default Register;