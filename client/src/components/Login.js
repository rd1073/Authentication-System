import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';


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
  return (
    <div className="d-flex justify-content-center align-items-center"  style={backgroundImageStyle}>

    <Card style={{ width: '25rem' }}>
      <Card.Body>
        <Card.Title>LOGIN</Card.Title>
        
        
        <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
     
      

      <div className="d-grid gap-2">
      <Button variant="primary" size="lg">
        Submit
      </Button>
      </div>
    </Form>
    <p></p>
    <Card.Text>
          Don't have an account?
        </Card.Text>
        <Card.Link href="#">Register Here</Card.Link>
        
      </Card.Body>
    </Card>
    </div>
  )
}

export default Login
