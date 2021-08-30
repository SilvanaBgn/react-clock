import ClockClass from './components/ClockClass'
import ClockHook from './components/ClockHook'
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <ClockClass/>
      <ClockHook/>
    </div>
  );
}

export default App;
