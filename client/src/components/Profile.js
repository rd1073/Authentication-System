import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

const Profile = () => {
  return (
    <div style={{ marginTop: '10rem' }}>
      <Card style={{ display: 'flex', alignItems: 'center' }}>
        <Image
          src="https://nationaltoday.com/wp-content/uploads/2022/07/National-Flower-Day.jpg.webp"
          roundedCircle
          style={{ width: '10rem', height: '10rem', marginRight: '16px' }}
        />
        <Card.Body>
          <Card.Title>John Smith</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Profile;
