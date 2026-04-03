import { Form, Button, Container } from "react-bootstrap";
import data from '../../data/members.json';
import { useState } from "react";
import Counter from '../Counter';



function CreateTeam() {
  //  const memberName=data;
  const[member,setMember]=useState(2);

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

        <Form.Floating className="mb-3">
        <p>Enter the number of members</p>
        <p>{member}</p>
        <Counter count={member} setCount={setMember}/>
        </Form.Floating>

        <Form.Floating className="mb-3">
          <Form.Control id="username"
                        type="text" 
                        placeholder="username"/>
          <label>Enter username of members</label>    {/* why does it floats only after i give the placeholder and without it,it doesnt work */}
        </Form.Floating>

        {/* <Form.Floating className="mb-3">
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
        </Form.Floating> */}

        <Button type="submit">
          Create Team
        </Button>
        
      </Form>
    </Container>
  );
}

export default CreateTeam;