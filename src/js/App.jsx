import React from 'react';
import '../css/App.css';
import {Menu} from './menu/index';
import {Cart} from './cart/index';
import {Home} from './home/index';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="app-content"><Home/></div>
        <div className="app-menu"><Menu/></div>
        <div className="app-cart"><Cart/></div>
      </div>
    );
  }
}

export { App };
