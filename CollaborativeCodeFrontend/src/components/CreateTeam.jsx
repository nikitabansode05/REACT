import { Form, Button, Container } from "react-bootstrap";
import data from '../data/members.json';
import Counter from './Counter';

function CreateTeam() {
    const memberName=data;
    // const[count, setCount] = useState(0);
    // const[memberName, setMemberName] = useState([]);

    // const handleNameChange=(index,value)=>{
    //   const updatedNames=[...memberName];
    //   updatedNames[index]=value;
    //   setMemberNames(updatedNames);
    // };

  return (
    <Container className="mt-5">
      <h4>Create a New Team</h4>
      <Form>
        <Form.Floating className="mb-3">
          <Form.Control
            id="teamName"
            type="text"
            placeholder="Team Name"
            required
          />
          <label htmlFor="teamName">Team Name</label>
        </Form.Floating>

        <Form.Floating className="mb-3">
          <Form.Control
            id="teamDescription"
            as="textarea"
            placeholder="Description"
          />
          <label htmlFor="teamDescription">Description</label>
        </Form.Floating>

        {/* <Form.Floating className="mb-3">
          <Form.Control
            id="teamMembers"
            type="number"
            placeholder="Members"
            min="2"
            
          />
          <label htmlFor="teamMembers">Members</label>
        </Form.Floating> */}


        <Form.Floating className="mb-3">
        <p>Enter the number of membars</p>
        <Counter />
        </Form.Floating>

        <Form.Floating className="mb-3">
          <Form.Control
            id="teamMemberNames"
            type="text"
            placeholder="Member Names"
          />
          <label htmlFor="teamMemberNames">Member Names</label>
        
          {memberName.map((member) => (
            <input 
                type="text" 
                placeholder={member.name} 
                className="mb-2 form-control" 
            />
            ))}

            {/* {[...Array(count)].map((_,index)=>
            <input 
            key={index}
            type="text"
            placeholder={`Member ${index+1}`}
            className="mb-2 form-control"
            value={memberNames[index] || ""}
            onChange={(e)=>handleNameChange(index,e.target.value)}
            />
            )} */}

        </Form.Floating>

        <Button type="submit">
          Create Team
        </Button>
        
      </Form>
    </Container>
  );
}

export default CreateTeam;