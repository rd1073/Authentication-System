import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

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
  return (
    <div className="d-flex justify-content-center align-items-center"  style={backgroundImageStyle}>

    <Card style={{ width: '25rem' }}>
      <Card.Body>
        <Card.Title>REGISTER</Card.Title>
        
        <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="John" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Lastname</Form.Label>
          <Form.Control type="text" placeholder="Smith" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Email</Form.Label>
        <Form.Control placeholder="johnsmith@123.com" type="email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>About</Form.Label>
        <Form.Control placeholder="Aspiring full stack developer..." />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>State 1</option>
            <option>State 2</option>
            <option>State 3</option>
            <option>State 4</option>
            <option>State 5</option>

          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      

      <div className="d-grid gap-2">
      <Button variant="primary" size="lg">
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