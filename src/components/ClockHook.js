import React, {useEffect, useState} from 'react';
import styles from './ClockHook.module.css';

function ClockHook() {
  // State hook
  const [date, setDate] = useState(new Date().toLocaleTimeString());

  let timerID = setInterval(() => tickClock(),1000);

  useEffect(()=>{
    console.log('ClockHook was updated:', date);
  });

  // componentWillUnmount() {
  //   console.log('UNMounting');
  //   clearInterval(this.timerID);
  // }
  
  function tickClock() {
     setDate(new Date().toLocaleTimeString());
  }

  return (
    <div className={styles.clockHook}>
      <h1>ClockHook</h1>
      <p>Hello! I'm a clock implemented with hooks (useState and useEffect).</p>
      <p className={styles.pClock}>{date}</p>
    </div>
  );
}


export default ClockHook;