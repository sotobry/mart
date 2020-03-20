import React from 'react';
import './App.css';
import { Logo } from './components/Logo';
function App() {
  return (
    <div>
      <header >
        <Logo />
        <nav>
          <ul>
            <li style={{ color: 'rgb(237, 20, 29)' }}>Departments</li>
            <li style={{ color: 'rgb(237, 20, 29)' }}>My cart</li>
          </ul>
        </nav>
      </header>

    </div>
  );
}

export default App;
