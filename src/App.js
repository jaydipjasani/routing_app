import React, { Component } from 'react';
import Products from './Products'
import About from './About'
import Navigation from './Navigation'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation></Navigation>
        <About></About>
        <Products></Products>
      </div>
    )
  }
}

