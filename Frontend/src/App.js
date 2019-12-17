import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Employee from './components/Employee'
import Form from './components/Signup'




function App() {
  return (
    <div>
        <Layout>
            <Switch>
              <Route path="/" exact strict component={Employee} />
              <Route path="/edit" component={Form} />
              <Route path="/signup" component={Form} />
            </Switch>
        </Layout>
    </div>
  );
}

export default App;
