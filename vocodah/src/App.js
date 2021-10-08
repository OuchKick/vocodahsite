import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Bio from './components/Bio/Bio';



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
      <Route path='/Bio'>
      <Bio/>
      </Route>
      </Switch>
    </Router>
  );
}

export default App;

