import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './pages/header/Header';
import Sidebar from './pages/sidebar/Sidebar';
import Feed from './pages/feed/Feed';


function App() {
  return (
    <div className="app">
      {/*Header*/}
      <Header />

      {/* App body */}
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
        
        {/* Feed */}
        {/* Widgets */}
      
    </div>
  );
}

export default App;
