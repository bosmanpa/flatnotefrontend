import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

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
        this.updateFetch()    
    }

    updateFetch = () => {
        const reqObj = {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
          }
      
          fetch(`http://localhost:3001/notes/${this.props.noteIdToShow}`, reqObj)
          .then(resp => resp.json())
          .then(note => {
              this.props.noteUpdate(note)
              this.props.history.push('/dashboard')
            })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange}></input>
                    <input type="textarea" name="body" value={this.state.body} onChange={this.handleChange}></input>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {current_user: state.current_user, noteIdToShow: state.noteShow}
  }

  const mapDispatchToProps = dispatch => {
    return {noteUpdate: note => dispatch({type: "NOTE_UPDATE", payload: note})}
  }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Update))