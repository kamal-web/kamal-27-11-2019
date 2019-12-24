import React ,{useState, useEffect} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Employee from './components/Employee'
import Form from './components/Signup'
import Login from './components/Auth/Login'
import Notfound from './components/Notfound'
import requireAuth from './components/Auth/Authentication'


function App() {
  //console.log('in app',auth)
  return(
    <div>
        <Layout>
            <Switch>
              <Route path="/signup" component={Form} />
              <Route path="/admin" component={requireAuth(Employee)} />
              <Route path="/edit" component={requireAuth(Form)} />
              <Route path="/login" component={Login} />
              <Route component={Notfound} />
            </Switch>
        </Layout>
    </div>
  );
}

export default App;
