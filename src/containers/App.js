import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import NotesContainer from './NotesContainer.js'

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <NotesContainer />
      </div>
    </Router>
  );
}

export default App;
