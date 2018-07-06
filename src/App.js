import React, { Component } from 'react';
import './App.css';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';
import './Components/Style.css';

class App extends Component {
  state = {
     
      username : 'Carlito Caribbean'
    
  }
updateUserNameHandler = (event) => {
  this.setState ({
    username: event.target.value
  })
}



  render() {

    const heading ={
      color: '#989898'
  }

    return (
      <div className="App">
      <h1 style = {heading}>React App with Two Way Binding</h1>
      <UserOutput name = {this.state.username} />
      

      <UserInput
      updated = {this.updateUserNameHandler} 
      name = {this.state.username}/>
      </div>
    );
  }
}

export default App;
