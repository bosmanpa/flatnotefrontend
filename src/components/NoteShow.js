import React, { Component } from 'react';
import { connect } from 'react-redux'



class NoteShow extends Component {
    deleteNote = () => {
    fetch(`http://localhost:3001/notes/${this.props.noteIdToShow}`, { method: 'DELETE'})
    .then(resp => resp.json())
    .then(note => {
        this.props.noteShow(null)
        this.props.deleteNoteFromStore(note)})
    .catch(error => console.log(error))
    }
    editNote = () => {
        this.props.history.push('/update')
    }

    render(){

        const noteToShow = this.props.current_user.notes.filter(note => note.id === this.props.noteIdToShow)
        return(
            <div>
                <h1>{noteToShow[0].title}</h1>
                <p>{noteToShow[0].body}</p>
                <button onClick={this.editNote}>Edit this note</button>
                <button onClick={this.deleteNote}>Delete this note</button>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {noteIdToShow: state.noteShow, current_user: state.current_user}
  }
  const mapDispatchToProps = dispatch => {
    return{ deleteNoteFromStore: note => dispatch({type: "DELETE_NOTE", payload: note}),
    noteShow: noteId => dispatch({type: "NOTE_SHOW", payload: noteId})}
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteShow)