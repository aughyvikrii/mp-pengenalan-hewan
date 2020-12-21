import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './assets/css/bootstrap.min.css';
import './assets/css/all.min.css';
import './assets/css/app.css';

import Home from './pages/Home';
import Index from './pages/Index';
import About from './pages/About';
import Author from './pages/Author';

import KindOfAnimal from './pages/KindOfAnimal';
import AnimalGrowth from './pages/AnimalGrowth';
import GuessTheAnimal from './pages/GuessTheAnimal';

import NotFoundPage from './pages/NotFoundPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/author" component={Author} />
            <Route path="/kind-of-animal" component={KindOfAnimal} />
            <Route path="/animal-growth" component={AnimalGrowth} />
            <Route path="/guess-the-animal" component={GuessTheAnimal} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
      </Router>
    );
  }
}

export default App;