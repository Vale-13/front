import React, { useState, Component } from "react";
import { render } from "react-dom";
import DatePicker from 'react-datepicker';
import '../css/Report.css';
import { func } from "prop-types";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

 
  render() {
    return (
      <div>
        <h1>{this.state.date.toLocaleTimeString()}</h1>
      </div>
    );
  }
}
export default Clock;