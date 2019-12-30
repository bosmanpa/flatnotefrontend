import React, { Component } from 'react';

class Note extends Component {
 render () {
    return(
            <div>
                {this.props.note.title}
                {this.props.note.body}
            </div>
        )
    }
}

export default Note