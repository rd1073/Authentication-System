import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Register() {
    const backgroundImageStyle = {
        minHeight: '100vh',
        backgroundImage:'url("https://startupnation.com/wp-content/uploads/2020/01/Screen-Shot-2020-01-31-at-12.21.12-PM.jpg")',  // Replace with the path to your background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      };
      const navigate = useNavigate();


  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [lastname, setLastname] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [about, setAbout] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [zip, setZip] = useState();


  const submitHandler = async () => {
    if (!name || !email || !password || !confirmpassword) {
      console.log("please fill all the fields");
       return;
    }
    if (password !== confirmpassword) {
      console.log("passwords do not match");

      return;
    }
    console.log(name, email, password);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:5000/api/user/signup",
        {
          name,
          lastname, 
          password,
          email,
          about,
          city,
          zip,
          state,
        },
        config
      );
      console.log(data);
      console.log("regitration succesful");
      localStorage.setItem("userInfo", JSON.stringify(data));
      
      navigate('/login');
    } catch (error) {
      console.log(error);
     }




     
  };


  return (
    <div className="d-flex justify-content-center align-items-center"  style={backgroundImageStyle}>

    <Card style={{ width: '25rem' }}>
      <Card.Body>
        <Card.Title>REGISTER</Card.Title>
        
        <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="John" onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Lastname</Form.Label>
          <Form.Control type="text" placeholder="Smith" onChange={(e) => setLastname(e.target.value)} />
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Password</Form.Label>
        <Form.Control  type="password" onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" onChange={(e) => setConfirmpassword(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Email</Form.Label>
        <Form.Control placeholder="johnsmith@123.com" type="email" onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>About</Form.Label>
        <Form.Control placeholder="Aspiring full stack developer..." onChange={(e) => setAbout(e.target.value)} />
      </Form.Group>
 
      

      <div className="d-grid gap-2">
      <Button variant="primary" size="lg" onClick={submitHandler}>
        Submit
      </Button>
      </div>
    </Form>
        <Card.Link href="#">Login?</Card.Link>
        
      </Card.Body>
    </Card>
    </div>
    
  );
}

export default Register;