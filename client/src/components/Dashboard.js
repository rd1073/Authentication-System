import React from 'react';
import Navbartop from './Navbar';
import Profile from './Profile';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Dashboard = () => {
  const navigate = useNavigate();

  const submitHandler = async () => {
    navigate('/login');
  };

  return (
    <div>
      <Navbartop />
      <Profile />
      <p></p>
      <Button variant="primary" size="lg" onClick={submitHandler}>
        Logout
      </Button>
    </div>
  );
};

export default Dashboard;
