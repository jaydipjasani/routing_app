import React, { Component } from 'react';
import Products from './Products'
import About from './About'
import Navigation from './Navigation'
import ProductDetail from './ProductDetail'
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Home = () => (
    <div>
    <h1>This Is Home Page</h1>
    </div>
)

export default class App extends Component {

  render() {
   
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/products" exact component={Products} />
          <Route path="/products/:id" component={ProductDetail}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

