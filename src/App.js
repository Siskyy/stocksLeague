import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Components
import Header from './components/Header/Header';
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/'>

          </Route>
        </Switch>
      </main>
    </Router>
  )
}

export default App;
