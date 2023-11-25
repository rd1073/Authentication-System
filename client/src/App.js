 
import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Login from './components/Login';
 import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />

 
 
            

 


          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
