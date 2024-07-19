import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/dashboard'; 
import Doctor from './components/doctor';
import Contact from './components/contact';
import Tracker from './components/tracker';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/doctor" component={Doctor} />
          <Route path="/contact" component={Contact} />
          <Route path="/tracker" component={Tracker} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
