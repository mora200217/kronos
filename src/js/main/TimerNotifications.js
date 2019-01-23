import React, {Component} from 'react'
import {render} from 'react-dom'
import TimeCirlce from './TimeCircle.js'

const NOTIFICATION_TIMES = [45, 30, 15, 5].reverse()
const NOTIFICATION_NUMBER = NOTIFICATION_TIMES.length;

class TimerNotifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      times: NOTIFICATION_TIMES,
    }
  }

  render() {
    return (<div className="col col-2 time-sets">
      {this.state.times.map((n) => (<TimeCirlce key={n} name={n}/>))}
      <div class = "time-bar" id="timeBarBg"></div>
      <div class = "time-bar" id="timeBar"></div>

    </div>);
  }
}

export default TimerNotifications