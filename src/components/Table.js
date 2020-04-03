import React, { useState, Component } from "react";
import { render } from "react-dom";
import DatePicker from 'react-datepicker';
import '../css/Report.css';
import '../css/Registry.css';

//import '../css/Table.css';
import { func } from "prop-types";

class Table extends Component {

	state= {
      data:[]
    }
	 async componentDidMount(){
      await this.fetchInput()
    }

    fetchInput= async()=>{
	    fetch('http://104.44.136.194:49160/')
	  	.then(function(response) {
	    	return response.json();
	  	})
	  	.then((response) => {
            document.getElementById('is').value = response.IS;
            document.getElementById('horaE').value = response.CHECK_IN_TIME;
            document.getElementById('horaS').value = response.CHECK_OUT_TIME; 
	  	});
      //this.setState({
        //data
      //})
    }
 
    render() {

        return ( 
            <div className="regs">
            
            <body>
   		   	 <div class="limiter">
				<div class="container-table100">
					<div class="wrap-table100">
						<div class="table100 ver1 m-b-110">
							<table data-vertable="ver1">
								<thead>
									<tr class="row100 head">										
										<th class="column100 column3" data-column="column3">IS</th>
										<th class="column100 column5" data-column="column5">Hora de entrada</th>
										<th class="column100 column6" data-column="column6">Hora de Salida</th>
										</tr>
								</thead>
								<tbody>
									<tr class="row100">
										
										<td class="column100 column2" data-column="column2" id="is">Cargando...</td>
										<td class="column100 column3" data-column="column3" id="horaE">Cargando...</td>
										<td class="column100 column4" data-column="column4" id="horaS">Cargando...</td>
									</tr>		
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			</body>
            
            </div>
        );
    }
}
export default Table;