
import './App.css';
import CounterComponent from './Counter';
import {Hello,  HelloIm} from './Hello';
import ClockComponent from './Clock';

function App() {
  return (
    <div className="App">
      <ClockComponent />
      <br />
        <CounterComponent />
        <br />
        <Hello/>
        <hr />
        <HelloIm />

    </div>
  );
}

export default App;
