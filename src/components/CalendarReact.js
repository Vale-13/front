import React, { useState, Component } from "react";
import { render } from "react-dom";
import Calendar from "react-calendar";
import DatePicker from 'react-datepicker';
import '../css/Report.css';
import { func } from "prop-types";



class CalendarReact extends Component {
  render() {

    return (
    
      <div className="calendar" >
        <label>Seleccione una fecha</label>
        <p />
        <input type="date" id="date" />

      </div>
    );
  }
}
export default CalendarReact;
