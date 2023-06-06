import React from 'react';
import './App.css';

import Nav from './components/Nav';
import Home from './components/Home';
import Aulas from './components/Aulas';
import Sobre from './components/Sobre';
import Aula from './components/Aula';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Assistir from './components/Assistir';

import loginReducer from './reducers/loginReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import Negado from './components/Negado'

const store = createStore(loginReducer);
function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className='app'>
        <Nav />
        <Switch>
        <Route path='/sobre'>
          <Sobre />
        </Route>
        <Route path="/aulas/:id">
          <Aula />
        </Route>
        <PrivateRoute path='/aulas'>
          <Aulas />
        </PrivateRoute>
        <Route path='/assistir'>
          <Assistir />
        </Route>
        <Route path='/negado'>
          <Negado />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
        </Switch>
      </div>
    </Router>
    </Provider>
  )
}

export default App;
