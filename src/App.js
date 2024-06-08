// src/App.js
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Impor Bootstrap
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to My React App</h1>
      </header>
      <div className="content container">
        <h1 className="display-4">Hello, World!</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
        </p>
        <div className="image-container">
        <img src="https://via.placeholder.com/800x400" alt="Hello, World!" />
</div>

        <p>
          Use utility classes for typography and spacing to space content out within the larger container.
        </p>
      </div>
      <footer className="footer">
        <p>© 2024 My React App</p>
      </footer>
    </div>
  );
}

export default App;
