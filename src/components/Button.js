import React, { useState, Component } from "react";
import { render } from "react-dom";
import Calendar from "react-calendar";
import DatePicker from 'react-datepicker';
import '../css/Report.css';
import { func } from "prop-types";



class Button extends Component {
    constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  	}

  handleChange(event) {
  		this.setState({value: event.target.value.toUpperCase()});
	}

  handleSubmit(event) {
    	alert('Esta seguro de ingresar con: ' + this.state.value);
    	event.preventDefault();
  	}
  render() {

    return (
      <div className="Registry">
         <form onSubmit={this.handleSubmit}>
        <label>
          IS : 
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Ingresar" />
        <div>
        
        </div>
      </form>
      </div>

      
    );
  }
}
export default Button;


