import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import reducers from './redux/reducers/';
import Home from './pages/Home';
import './styles/styles.scss';


const store = createStore(reducers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
		  <Route exact path="/" component={Home} />

          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
