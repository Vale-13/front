//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Assets
import '../css/Header.css'
import logo from '../images/Softtek.gif';

class Header extends Component
{
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };
  render(){
    const {title, items} = this.props;
    return(
      <div className="Header">
        
        <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Registrar</a></li>
            <li><a href="#">Reporte</a></li>
        </ul>
    </nav>
        
      </div>
    );
  }

}


export default Header;