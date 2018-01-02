import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;

fetch('/json/galleries.json')
.then((res) => 
    res.json()
).then((json) => 
    console.log(json)
).catch(err => 
    console.log(err)
);
