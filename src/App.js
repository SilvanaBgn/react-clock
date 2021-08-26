import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <h1>Clock</h1>
      <p className={styles.pClock}>{new Date().toLocaleTimeString()}</p>
    </div>
  );
}

export default App;
