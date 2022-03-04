import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './pages/header/Header';
import Sidebar from './pages/sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      {/*Header*/}
      <Header />

      {/* App body */}
      <div className="app__body">
        <Sidebar />
      </div>
        {/* Sidebar */}
        {/* Feed */}
        {/* Widgets */}
      
    </div>
  );
}

export default App;
