import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar';
import NotesContainer from './NotesContainer.js'
import Login from '../components/Login'


const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/dashboard' component={NotesContainer}/>
            <Route path='/note/new' component={NotesContainer}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
