import React, {Component} from 'react'
import {render} from 'react-dom'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      actualTime: new Date()
    }
  }

  // When react-dom rendered element with clock component
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  // When react-dom deletes element with clock component
  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  // Callback function, invoked every second interval
  tick() {
    this.setState({actualTime: new Date()});
  }

  render() {
    return (<div className="col-4 time">
      <p className="clock">{
          this.state.actualTime.toLocaleTimeString(navigator.language, {
            hour: '2-digit',
            minute: '2-digit'
          })
        }</p>
      <p className="subject">Physics SL</p>
    </div>);
  }
}

export default Clock
