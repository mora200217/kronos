import React, { Component } from 'react'
import { render } from 'react-dom'
import TimeCirlce from './TimeCirlce.js'

class TimerNotifications extends Component{
  render(){
    return(
      <div className="col col-2 time-sets">
<TimeCirlce />
<TimeCirlce />
<TimeCirlce />
<TimeCirlce />
        <div id="timeBar"></div>
      </div>
    );
  }
}

export default TimerNotifications
