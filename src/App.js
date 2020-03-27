//Dependencies 
import React, { Component } from 'react';

//components
import Header from './components/Header';
import Registry from './components/Registry';
import Report from './components/Report';


// data file with export default
import items from './data/menu';


class App extends Component{
  render(){
    return(

      <header className="App">
        
        <Header  title = "Titulo" items = {items} />

        <div id = "Registry" className="Registry">
          <Registry/>
        </div>
        <div id="Report" className="Report">
          <Report/>
        </div>
      </header>
      
    
    );
  }
}




export default App;
