import './App.css';
import Navigation from './nav';
import Products from './products';
import About from './about';
import Contact from './contact';
import Blogs from './blogs';
import Home from './home';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Navigation />
      <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/products" component={Products}></Route>
      <Route path="/blogs" component={Blogs}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/contact" component={Contact}></Route>
      </Switch>
    </div>
    </Router> 
  );
}

<Home />

export default App;
