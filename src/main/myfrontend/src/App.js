import React from "react"
import axios from 'axios';
import logo from './logo.svg';
import './App.css';


function App() {
  const [textServer, setTextServer] = React.useState('');
  axios.get('/api/dadjokes').then(res => res.data).then(message => {
    setTextServer(message)
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {textServer}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
