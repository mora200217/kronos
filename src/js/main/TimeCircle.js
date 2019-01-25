import React, { Component } from 'react'
import { render } from 'react-dom'

//TODO: Less sheet for this one

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
