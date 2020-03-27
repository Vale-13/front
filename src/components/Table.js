import React, { useState, Component } from "react";
import { render } from "react-dom";
import DatePicker from 'react-datepicker';
import '../css/Report.css';
import { func } from "prop-types";

class Table extends Component {
	
function ($) {
	"use strict";
	$('.column100').on('mouseover',function(){
		var table1 = $(this).parent().parent().parent();
		var table2 = $(this).parent().parent();
		var verTable = $(table1).data('vertable')+"";
		var column = $(this).data('column') + ""; 

		$(table2).find("."+column).addClass('hov-column-'+ verTable);
		$(table1).find(".row100.head ."+column).addClass('hov-column-head-'+ verTable);
	});

	$('.column100').on('mouseout',function(){
		var table1 = $(this).parent().parent().parent();
		var table2 = $(this).parent().parent();
		var verTable = $(table1).data('vertable')+"";
		var column = $(this).data('column') + ""; 

		$(table2).find("."+column).removeClass('hov-column-'+ verTable);
		$(table1).find(".row100.head ."+column).removeClass('hov-column-head-'+ verTable);
	});
    

}
    render() {

        return ( 
            <div className="table">
            <label > Seleccione una fecha </label> 
            <p/>
            <input type = "date" id="date"/>
            </div>
        );
    }
}
export default Table;