import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import HelloClass from './components/HelloClass';
import Message from './components/Message';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import Greeting from './components/Greeting';
import NameList from './components/NameList';
import StyleSheet from './components/Stylesheet';
import InlineStyle from './components/InlineStyle';

function App() {
  return (
    <div className="App">
      {/* <Hello name="arvind" lastname="g">
        <p>hi there</p>
      </Hello>
      <Hello name="g" lastname="g">
        <button>click me!</button>
      </Hello>
      <HelloClass name="arvind" lastname="g">
      <p>hi there</p>
      </HelloClass> */}
    {/* <Message>
    </Message> */}
    {/* <Counter></Counter> */}
    {/* <EventBind></EventBind> */}
    {/* <ParentComponent/> */}
    {/* <Greeting/> */}
    {/* <NameList/> */}
    <StyleSheet/>
    <InlineStyle/>
    </div>
  );
}

export default App;
