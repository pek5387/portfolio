import React, { Component } from 'react';
import axios from 'axios';
import Header from './component/Header';
import About from './component/About';
import Work from './component/Work';
import Contact from './component/Contact';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './css/Base.scss';
import './css/Index.scss';


class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      hello : [],
    }
  }
  componentDidMount(){
    this._getHello();
  }
  _getHello = async() => {
    const res = await axios.get('/api/products');
    this.setState({ hello : res.data.hello })
    console.log(this.state.hello);
  }
  render(){
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" >
            <About />
          </Route>
          <Route path="/about">
             <About />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
