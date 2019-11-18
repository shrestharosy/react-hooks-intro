import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/LoginForm';
import Counter from './components/CounterClass';
import Register from './components/RegisterForm';
import CounterFunction from './components/CounterFunction';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact={true} component={Counter} />
      <Route path='/counter' component={CounterFunction} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
