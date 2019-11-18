import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/LoginForm';
import Counter from './components/CounterClass';
import Register from './components/RegisterForm';
import CounterFunction from './components/CounterFunction';
import HackerNews from './components/HackerNews';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact={true} component={Counter} />
      <Route path='/counter' component={CounterFunction} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/hackernews' component={HackerNews} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
