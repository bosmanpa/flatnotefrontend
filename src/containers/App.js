import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar';
import NotesContainer from './NotesContainer.js'
import NewNote from '../components/NewNote'
import Login from '../components/Login'
import history from '../history'


const App = () => {
  return (
    <Router history={history}>
      <div className="App">
        <NavBar />
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/dashboard' component={NotesContainer} />
            <Route path='/note/new' component={NewNote}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
