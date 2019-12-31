import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Notes from '../components/Notes'
import NewNote from '../components/NewNote'


class NotesContainer extends Component {

    componentDidMount(){
        fetch('http://localhost:3001/notes')
        .then(resp => resp.json())
        .then(notes => notes.map(note => this.props.addNote(note)))
    }

    render(){
        return( 
            <Router>
                <div>
                <Switch>
                    <Route path='/dashboard' render={(props) => <Notes {...props} notes={this.props.notes}/>}/>
                    <Route path='/note/new' render={(props) => <NewNote {...props} addNote={this.props.addNote}/>} />
                </Switch>
            </div>
            </Router>
        )
    }

}

const mapStateToProps = state =>{
    return {notes: state.notes}
  }

const mapDispatchToProps = dispatch => {
    return{
        addNote: note => dispatch({ type: 'ADD_NOTE', payload: note}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesContainer)