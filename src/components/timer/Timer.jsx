import React, { useState, useEffect } from 'react';
import styles from './timer.module.css';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  return (
    <div className={styles.timer}>
      <div className={styles.stopwatch}>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className={styles.btn}>
        <button className={styles.start} onClick={() => setRunning(true)}>Start</button>
        <button className={styles.stop} onClick={() => setRunning(false)}>Stop</button>
        <button className={styles.reset} onClick={() => setTime(0)}>Reset</button></div>
    </div>
  )
}
export default Timer;
