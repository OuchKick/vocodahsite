import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Bio from './components/Bio/Bio';
import Mailer from './components/ContactForm/mailer';
import Footer from './components/Footer/Footer';




function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
      <Route path='/Bio'>
      <Bio/>
      </Route>
      <Route path='/Contact'>
      <Mailer/>
      </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

