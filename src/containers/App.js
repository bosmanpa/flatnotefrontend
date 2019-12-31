import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar';
import NotesContainer from './NotesContainer.js'
import Login from '../components/Login'
import history from '../history'


const App = () => {
  return (
    <Router history={history}>
      <div className="App">
        <NavBar />
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/dashboard' render={(props) => <NotesContainer {...props}/>} />
            <Route path='/note/new' component={NotesContainer}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
