import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Notes from '../components/Notes'
import NewNote from '../components/NewNote'
import Login from '../components/Login'
import history from '../history'


const App = () => {
  return (
    <Router history={history}>
      <div className="App">
        <NavBar />
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/dashboard' component={Notes} />
            <Route exact path='/note/new' component={NewNote}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
