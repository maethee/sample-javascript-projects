import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './styles/startboostrap/vendor/bootstrap/css/bootstrap.css'
import './styles/startboostrap/vendor/font-awesome/scss/font-awesome.scss';
import './styles/startboostrap/scss/creative.scss';
import './styles/maethee/index.scss';
// //Plugin js
// import jQuery from './styles/startboostrap/vendor/jquery/jquery.min.js'

//import composition
import Header from './components/Header';
import Footer from './components/Footer';

/**
 * Scenes
 * */
import Home from './scenes/Home';
import Article from './scenes/Article';
// import Portfolio from './scenes/Portfolio';

class App extends Component {
  render() {
    return (
      <Router>
          <div>
              <Header />
              <Route path={`/`} exact component={Home}></Route>
              <Route path={`/article/`}  component={Article}></Route>
              <Footer />
          </div>
      </Router>
    );
  }
}

export default App;
