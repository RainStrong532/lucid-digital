import React, {Component} from 'react';
import Routes from './Routes'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component{
  render(){
    return(
      <div className="App">
        <Routes/>
      </div>
    )
  }
}
export default App;
