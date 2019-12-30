import React, { Component } from 'react';

class NotesContainer extends Component {

    componentDidMount(){
        fetch('http://localhost:3001/notes')
        .then(resp => resp.json())
        .then(notes => console.log(notes))
    }

    render(){
        return( 
            <div>
                notes 
            </div>
        )
    }

}

export default NotesContainer