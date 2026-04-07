import {useState} from 'react'

const CompanyChange=()=>{

    const[companyDetails,setCompanyDetails]=useState({name:"Transflower",year:2013});
    

    function changeName(){
        setCompanyDetails(prev=>({
            ...prev,
            name:"Seed Infotech"
        }));
    }

    function changeYear(){
        setCompanyDetails(prev=>({
            ...prev,
            year:2005
        }));
        }
            
    

    return(
        <div>
            {/* {companyDetails} */}
            <p>Name: {companyDetails.name}</p>
            <p>Year: {companyDetails.year}</p>
            <button onClick={changeName}>Change Name</button>
            <button onClick={changeYear}>Change Year</button>
        </div>
    );
}

export default CompanyChange;