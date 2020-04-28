import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import HelloClass from './components/HelloClass';

function App() {
  return (
    <div className="App">
      <Hello name="arvind" lastname="g">
        <p>hi there</p>
      </Hello>
      <Hello name="g" lastname="g">
        <button>click me!</button>
      </Hello>
      <HelloClass name="arvind" lastname="g">
      <p>hi there</p>
      </HelloClass>
    </div>
  );
}

export default App;
