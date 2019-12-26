import React  from 'react';
import { withRouter,Redirect } from 'react-router-dom';

export default function requireAuth(Component) {
class AuthenticatedComponent extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   auth: localStorage.getItem('token')
  }
 }
 componentDidMount() {
  this.checkAuth();
 }
 checkAuth() {
  if (localStorage.getItem('token') === " ") {
   this.props.history.push(`/login`);
  }
 }
 
render() {
  return this.state.auth
   ? <Component { ...this.props } />
   : <Redirect push to="/login" />;
  }
 }
 return  withRouter(AuthenticatedComponent)
}