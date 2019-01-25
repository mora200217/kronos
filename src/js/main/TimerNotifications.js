import React, {Component} from 'react'
import {render} from 'react-dom'
import TimeCirlce from './TimeCircle.js'

const NOTIFICATION_TIMES = [45, 30, 15, 5].reverse()
const NOTIFICATION_NUMBER = NOTIFICATION_TIMES.length;

// Test Functions


class TimerNotifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      times: NOTIFICATION_TIMES,
      time: 0,

    }
  }

  componentDidMount(){
    // document.getElementById('timeBar').addClass('experiment');
    console.log('TimeBar Mounted!');
    const timer = setInterval(() => this.tick(timer), 5000);

  }

  tick(timer){
      this.setState((state, props)=>({time: state.time + 20 }));
      const element = document.getElementById('timeBar');
      element.style.height = `${this.state.time}%`;
      console.log(`Actual Time State: ${this.state.time}`);
      if(this.state.time >= 100){
        clearInterval(timer)
        console.log('Done!')
      }
  }

  render() {
    return (
      <div className="col col-2 time-sets">
        {this.state.times.map((n) => (<TimeCirlce key={n} name={n}/>))}
        <div className = "time-bar-container">
          <div className = "time-bar" id = "timeBar"></div>
        </div>
      </div>
  );
  }
}

export default TimerNotifications
