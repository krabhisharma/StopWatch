import React, {useState} from 'react';
import Show from './components/show_time';
import Btn from './components/button';
import './App.css';

function App() {
  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  var newdMs = time.ms, newdS = time.s, newdM = time.m, newdH = time.h;

  const run = () => {
    if(newdM === 60){
      newdH++;
      newdM = 0;
    }
    if(newdS === 60){
      newdM++;
      newdS = 0;
    }
    if(newdMs === 60){
      newdS++;
      newdMs = 0;
    }
    newdMs++;
    return setTime({ms:newdMs, s:newdS, m:newdM, h:newdH});
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ms:0, s:0, m:0, h:0})
  };

  const resume = () => start();
  return (
    <div className="main-section">  
      <div className="stopwatch">
        <Show time={time}/>
        <Btn status={status} resume={resume} reset={reset} stop={stop} start={start}/>
      </div>
    </div>
  );
}

export default App;