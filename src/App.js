import './App.css';
import Navigation from './components/nav/nav';
import Products from './components/products/products';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Blogs from './components/blogs/blogs';
import Home from './components/home/home';
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
