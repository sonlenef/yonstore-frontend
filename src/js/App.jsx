import React from 'react';
import '../css/App.css';
import {Menu} from './menu/index';
import {Cart} from './cart/index';
import {AppContent} from './content/index';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="app-content"><AppContent/></div>
        <div className="app-menu"><Menu/></div>
        <div className="app-cart"><Cart/></div>
      </div>
    );
  }
}

export { App };
