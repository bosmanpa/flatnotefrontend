import React, { Component } from 'react';
import { connect } from 'react-redux'



class NoteShow extends Component {
 

    render(){

        const noteToShow = this.props.current_user.notes.filter(note => note.id === this.props.noteIdToShow)
        return(
            <div>
            {noteToShow[0].title}
            {noteToShow[0].body}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {noteIdToShow: state.noteShow, current_user: state.current_user}
  }

export default connect(mapStateToProps)(NoteShow)