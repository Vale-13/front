import React, { useState, Component } from "react";
import { render } from "react-dom";
import Calendar from "react-calendar";
import DatePicker from 'react-datepicker';
import '../css/Report.css';
import { func } from "prop-types";



class Button extends React.Component {


    constructor(props) {
      super(props);
      this.state = {value: ''};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleSubmitE = this.handleSubmitE.bind(this);
      
  	}

    handleChange =event=>{
    		this.setState({value: event.target.value.toUpperCase()});
          console.log(event.target.value);
          this.setState({
            [event.target.name]: event.target.value
          })
          //let partialState={}
          //partialState.target.name=event.value
          //this.setState(partialState)
	  }

    handleSubmit=event =>{
    	alert('Esta seguro de ingresar con: ' + this.state.value);
    	event.preventDefault();
      console.log(event.target.value);
  	}
    handleSubmitE(event) {
      alert('Esta seguro de Salir: ' + this.state.value);
      event.preventDefault();
    }

    var url='';
    var data={IS:''}
    fetch()
  
  render() {

    return (
      <div className="Registry">
         <form onSubmit={this.handleSubmit}>
        <label className =".btn-blue">
          IS : 
          <input 
              placeholder="Ingresa tu IS" 
              ref={input => {this.textInput=input;}}
              type="text" 
              value={this.state.value} 
              onChange={this.handleChange} />
        </label>
        <input 
              type="submit" 
              value="Ingresar" 
              name ="input1" 
              onClik={this.newIs}/>
       
        </form>
        <form onSubmit={this.handleSubmitE}>
         <div>
          <button className="button .btn-blue" onSubmit={this.handleSubmitE} >Salir</button>
         </div>
        </form>
    </div>   
    );
  }
}
export default Button;


