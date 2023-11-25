import React, { useState } from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


const Login = () => {
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

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);
 
  const handleClick = () => setShow(!show);

  const submitHandler = async () => {
    if (!email || !password) {
      console.log("please fill all the fields");
       return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:5000/api/user/login",
        {
        
          email,
          password,
          
        },
        config
      );
      console.log(data);
      console.log("login succesfull");
      localStorage.setItem("userInfo", JSON.stringify(data));
      
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
     }
  };





  return (
    <div className="d-flex justify-content-center align-items-center"  style={backgroundImageStyle}>

    <Card style={{ width: '25rem' }}>
      <Card.Body>
        <Card.Title>LOGIN</Card.Title>
        
        
        <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" 
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"
         placeholder="Password" 
         value={password}
         onChange={(e) => setPassword(e.target.value)}
          />
      </Form.Group>
     
      

      <div className="d-grid gap-2">
      <Button variant="primary" size="lg"
       onClick={submitHandler}>
        Submit
      </Button>
      </div>
    </Form>
    <p></p>
    <Card.Text>
          Don't have an account?
        </Card.Text>
        <Card.Link href="/register">Register Here</Card.Link>
        
        <Card.Link href="/reset">Forgot Password?</Card.Link>
        
      </Card.Body>
    </Card>
    </div>
  )
}

export default Login
