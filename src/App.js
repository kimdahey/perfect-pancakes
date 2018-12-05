import React, { Component } from 'react';
import Header from './Header.jsx';
import FilteredList from './FilteredList.jsx';
import './App.css';

// const pancakes = require('./test.json');
const pancakes = require('./pancakes.json');

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FilteredList items={pancakes} />
      </div>

    );
  }
}

export default App;
