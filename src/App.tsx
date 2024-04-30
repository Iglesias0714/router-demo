import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <div>
        <h1>Main page</h1>
        <h2>Navigation...</h2>
        <nav>
          <ul>
            <li>
              <Link to="/profile">Profile page</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default App;
