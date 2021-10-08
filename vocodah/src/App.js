import logo from './logo.svg';
import './App.css';
import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>

      </Switch>
    </Router>
  );
}

export default App;
