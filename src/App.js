import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Cart from './components/Cart';
import AppContent from './components/AppContent';

function App() {
  return (
    <div>
      <div className="app-content"><AppContent/></div>
      <div className="app-menu"><Menu/></div>
      <div className="app-cart"><Cart/></div>
    </div>
  );
}

export default App;
