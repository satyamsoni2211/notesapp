import React, { Component } from 'react';
import './App.css';
import Navbar from '../../components/Navbar/Navbar';
import Notes from '../../components/Notes/Notes';
import Login from '../../components/Login/Login';
import Aux from '../../hoc/Aux';
import {Link, Route, Switch, Redirect} from 'react-router-dom';
import CreateNote from '../../components/CreateNote/CreateNote';
import isAuthenticated from '../../components/Utils/isAuthenticated';
import AuthRoute from '../../components/Routers/AuthRoute';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SharedNotes from '../../components/ShareNotes/ShareNotes';

class App extends Component {
  state = {
    authToken: null,
    sessionSet : false
  }
  // tokenHandle= Token => {
  //   console.log(`TOken Received ${Token}`);
  //   console.log(`My toekn is ${window.sessionStorage.getItem('token')}`);
  //   this.setState({authToken: Token});
  //   this.props.history.push('/login');
  // }
  componentDidMount() {
    if(this.state.authToken === null && window.sessionStorage.getItem('token')){
      this.setState({authToken: window.sessionStorage.getItem('token')});
    }
  }

  render() {
    return (
      <Aux>
        <Navbar/>
        <ToastContainer/>        
        <Switch>
          <AuthRoute path='/' exact={true} component={Notes} token={window.sessionStorage.getItem('token')}/>        
          <AuthRoute path='/view_notes' component={Notes} token={window.sessionStorage.getItem('token')}/>
          <AuthRoute path='/create_notes' component={CreateNote} token={this.state.authToken} logout={this.logoutHandle}/>
          <AuthRoute path='/share_notes' component={SharedNotes}/>
          <Route path='/login' component={Login} tokenHandler={this.tokenHandle}/>
        </Switch>
      </Aux>
    );
  }
}
// <AuthRoute path='/' component={Notes} exact={true}/>
// 
// <Route path='/' exact component={Notes}/>
// { isAuthenticated() &&
//   <Aux>
//   <Route path='/' exact component={Notes}/>
//   <Route path='/view_notes' exact component={Notes}/>
//   <Route path='/create_notes' exact component={() => <CreateNote token={this.state.authToken} logout={this.logoutHandle}/>} />
//   </Aux>}

export default App;
