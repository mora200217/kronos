import React, { Component } from 'react'
import { render } from 'react-dom'

class TimeCircle extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <span className= 'time-circles'>
        <p>{this.props.name}</p>
      </span>
    );
  }
}

export default TimeCircle
