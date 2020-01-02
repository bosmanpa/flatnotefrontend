import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Notes from '../components/Notes'


class NotesContainer extends Component {



    render(){
        return( 
            <Router>
                <div>
                <Switch>
                    <Route path='/dashboard' render={(props) => <Notes {...props} notes={this.props.current_user.notes}/>}/>
                </Switch>
            </div>
            </Router>
        )
    }

}
const mapStateToProps = (state) => {
    return {current_user: state.current_user}
}

export default connect(mapStateToProps)(NotesContainer)