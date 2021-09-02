import React from 'react';
import styles from './ClockClass.module.css';

class ClockClass extends React.Component {
  constructor(props){
    super(props);
    this.state = {date: new Date().toLocaleTimeString() };
  }

  tickClock() {
    this.setState({date: new Date().toLocaleTimeString()})
  }

  componentDidMount() {
    console.log('Mounting ClockClass');
    this.timerID = setInterval(() => this.tickClock(),1000);
  }
  componentDidUpdate(){
    console.log('ClockClass was updated:',this.state.date);
  }
  componentWillUnmount() {
    console.log('UNMounting ClockClass');
    clearInterval(this.timerID);
  }
  
  render(){
    return (
      <div className={styles.clockClass}>
        <h1>ClockClass</h1>
        <p>Hello! I'm a clock implemented with a class and setState().</p>
        <p className={styles.pClock}>{this.state.date}</p>
      </div>
    );
  }
}

export default ClockClass;