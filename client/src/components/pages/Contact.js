import React, { useState } from "react";
import Notifications, { notify } from 'react-notify-toast';
import { Card, Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";


function Contact() {

  const [postEmail, setPostEmail] = useState({

    email: "",
    name: "",
    text: ""

  })

  const handleInputChange = event => {
    setPostEmail({
      ...postEmail,
      [event.target.name]: event.target.value
    })
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    axios.post("/api/submit", postEmail)
      .then(res => {
        console.log(res)
        let myColor = { background: "#007bff", text: "#fffff" }
        document.getElementById("id1").value = "";
        document.getElementById("id2").value = "";
        document.getElementById("id3").value = "";
        notify.show("Email Sent!", "custom", 4000, myColor)
      })
  }


  return (
    <>
      <main>
        <Notifications />
        <Container className="p-3">

          <Card className="m-sm-5 p-3 board">
            <Form>
              <legend className="text-primary">Contact</legend>
              <hr className="my-4" />
              <FormGroup>
                <Label for="exampleFormControlInput1">Name</Label>
                <Input name="name" type="text" className="form-control" id="id1" placeholder="John Smith" onChange={handleInputChange} />
              </FormGroup>
              <FormGroup>
                <Label for="exampleFormControlInput1">Email address</Label>
                <Input name="email" type="email" className="form-control" id="id2"
                  placeholder="example@gmail.com" onChange={handleInputChange} />
              </FormGroup>
              <FormGroup>
                <Label for="exampleFormControlTextarea1">Message</Label>
                <textarea name="text" className="form-control" id="id3" rows="5" placeholder="Write your text here." onChange={handleInputChange}></textarea>
              </FormGroup>
              <Button type="submit" className="submit" onClick={handleFormSubmit}>Submit</Button>
            </Form>
          </Card>

        </Container>
      </main>

    </>
  );
}

export default Contact;
