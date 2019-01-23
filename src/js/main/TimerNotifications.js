import React, {Component} from 'react'
import {render} from 'react-dom'
import TimeCirlce from './TimeCirlce.js'

const NOTIFICATION_NUMBER = 4;

class TimerNotifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombres: Array(NOTIFICATION_NUMBER).fill(0).map((n, index) => index + 1)
    }
  }

  render() {
    return (<div className="col col-2 time-sets">
      {this.state.nombres.map((n) => (<TimeCirlce key={n} name={n}/>))}
      <div id="timeBar"></div>
    </div>);
  }
}

export default TimerNotifications
