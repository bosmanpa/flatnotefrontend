import React, { Component } from 'react';
import Notes from './Notes'
import NewNote from './NewNote'
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from '../history'
import { connect } from 'react-redux'
import Update from './Update'


class LoginCheck extends Component{
  render(){

  if(!this.props.current_user)
    return <Redirect to="/login" />

   return(
    <Router history={history}>
        <div>
            <Switch>
                <Route exact path='/dashboard' component={Notes} />
                <Route exact path='/note/new' component={NewNote} />
                <Route exact path='/update' component={Update}/>
            </Switch>
        </div>
    </Router>
   );
  }
}

const mapStateToProps = (state) => {
    return {current_user: state.current_user}
  }

export default connect(mapStateToProps)(LoginCheck)