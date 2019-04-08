import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './redux/reducers/';

const store = createStore(reducers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
            <div className="App">
            <h1>Asim</h1>
            </div>
      </Provider>
    );
  }
}

export default App;
