import React, {useEffect, useState} from 'react';
import styles from './ClockHook.module.css';

function ClockHook() {
  // State hook
  const [date, setDate] = useState(new Date().toLocaleTimeString());

  // const timer = useRef();
  // useEffect(() => {
  //   timer.current =  setInterval(() => {
  //     console.log('Setting setInterval');
  //     tickClock();}, 1000);
  // }, []);
  // useEffect(() => {
  //   return () => {
  //     console.log('Clearing setInterval');
  //     clearInterval(timer.current);
  //   };
  // }, []);

  useEffect(() => {
    const timerID = setInterval(() => tickClock(), 1000);
    return () => {
      console.log('Clearing setInterval');
      clearInterval(timerID);
    }
  }, []);

  useEffect(() => {
    console.log('ClockHook was updated:', date);
  });
  
  function tickClock() {
     setDate(new Date().toLocaleTimeString());
  }

  return (
    <div className={styles.clockHook}>
      <p className={styles.pTitle}>ClockHook</p>
      <p>Hello! I'm a clock written with hooks (useState and useEffect).</p>
      <p className={styles.pClock}>{date}</p>
    </div>
  );
}

export default ClockHook;