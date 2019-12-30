import React, { Component } from 'react';
import Note from './Note'

class Notes extends Component {
  render() {
    
    const notesList = this.props.notes.map(note => {
      return <Note  note={note} />
    })
    
    return(
      <ul>
        {notesList}
      </ul>
    );
  }
};

export default Notes;