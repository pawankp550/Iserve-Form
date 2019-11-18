import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InsuranceForm from './form-component/InsuranceForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <InsuranceForm />
      </div>
    );
  }
}

export default App;
