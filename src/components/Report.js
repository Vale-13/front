//Dependencies
import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import Calendar from 'react-calendar';
import '../css/Report.css';
import DatePicker from 'react-datepicker';
import CalendarReact from './CalendarReact';



class Report extends Component{

  componentDidMount() {
    
  }

  render(){   
    return(
      <div className="calendar">
          <h1>Reporte de Academicos</h1>
         <CalendarReact/>
      </div>
      
      
    );
  }
}
export default Report;