import React, { Component } from 'react'
import { render } from 'react-dom'

class Clock extends Component{
  render(){
    return(
      <div className="col-4 time">
        <p className="clock">12:13</p>
        <p className="subject">Physics SL</p>
      </div>
    );
  }
}

export default Clock
