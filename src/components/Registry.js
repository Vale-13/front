import React, { Component } from 'react';
import Button from './Button';
import '../css/Registry.css';
import Clock from './Clock';


class Registry extends Component
{
  render(){
    return(
    
      <div className="regs">
        <h1>Ingreso de Académico</h1>
        <Button/>
        <Clock/>
        </div>
    );
  }

}


export default Registry;
