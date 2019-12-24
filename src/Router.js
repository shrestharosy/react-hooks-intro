import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/LoginForm';
import Counter from './components/CounterClass';
import Register from './components/RegisterForm';
import CounterFunction from './components/CounterFunction';
import HackerNews from './components/HackerNews';
import UseReducerHook from './components/UseReducerHook';
import { Gif } from './components/MyNameJeff/Gif';
import { LunchRoulette } from './components/LunchRoulette/LunchRoulette';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact={true} component={Counter} />
      <Route path='/counter' component={CounterFunction} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/hackernews' component={HackerNews} />
      <Route path='/useReducer' component={UseReducerHook} />
      <Route path='/gif' component={Gif} />
      <Route path='/lunchRoulette' component={LunchRoulette} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
