import React from 'react';
import Menu from '../../Elements/Menu.js';
import './acasa.css';

function App() {
  return (
    <>
        <Menu/>
        <div className="container">
            <h1 className="text-3xl font-bold underline">Acasă</h1>
            <p>Welcome to the home page!</p>
        </div>
    </>
  );
}

export default App;
