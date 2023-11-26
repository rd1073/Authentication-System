import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const backgroundImageStyle = {
    minHeight: '100vh',
    backgroundImage: 'url("https://startupnation.com/wp-content/uploads/2020/01/Screen-Shot-2020-01-31-at-12.21.12-PM.jpg")', // Replace with the path to your background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const handleForgotPassword = async () => {
    try {
      // Send a request to your backend to initiate the forgot password process
      const response = await fetch('http://localhost:5000/api/user/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      // Display a success or error message to the user
      console.log(data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={backgroundImageStyle}>
      <Card style={{ width: '25rem' }}>
        <Card.Body>
          <Card.Title>FORGOT PASSWORD</Card.Title>

          <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" size="lg" onClick={handleForgotPassword}>
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ForgotPassword;
