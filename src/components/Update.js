import React, { Component } from 'react';
import { connect } from 'react-redux'

class Update extends Component{
    state={
        title: '',
        body: ''
    }

    componentDidMount(){
        const noteToEdit = this.props.current_user.notes.filter(note => note.id === this.props.noteIdToShow)[0]
        this.setState({title: noteToEdit.title, body: noteToEdit.body })
    }

    handleChange = (event) =>{
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) =>{
        event.preventDefault()

    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange}></input>
                    <input type="text" name="body" value={this.state.body} onChange={this.handleChange}></input>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {current_user: state.current_user, noteIdToShow: state.noteShow}
  }

export default connect(mapStateToProps)(Update)