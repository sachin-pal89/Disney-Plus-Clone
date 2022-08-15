import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Viewers from './components/Viewers';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Viewers />
    </div>
  );
}

export default App;
