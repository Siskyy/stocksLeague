import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Components
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <Header />
    </Router>
  )
}

export default App;
