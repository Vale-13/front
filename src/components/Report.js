
//Dependencies
import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import Calendar from 'react-calendar';
import '../css/Report.css';
import DatePicker from 'react-datepicker';
import CalendarReact from './CalendarReact';
//import Calendar from 'react-input-calendar'
import Table from './Table';



class Report extends Component{

  render(){   
    return(
      <div className="calendar">
          <h1>Reporte de Academicos</h1>
         <CalendarReact/>
         <Table/>
      </div>

    );
  }
}
export default Report;