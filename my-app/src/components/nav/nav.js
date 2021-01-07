import './nav.css';
import logo from '../../assets/logo.png';
import {Link, Switch} from 'react-router-dom';
import {Nav,Navbar} from 'react-bootstrap';


function Navigation() {
  return(
<div>

<Link to ='/'><img
src={logo}
width="200"
height="140"
className="d-inline-block align-top"
alt="logo"
/></Link>

<Navbar collapseOnSelect expand="lg" className='Navbar'>
<Navbar.Toggle className="toggle" aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
<Nav className="mr-auto">
    <Nav.Link className='link' href="/">Home</Nav.Link>
    <Nav.Link className='link' href="/products">Products</Nav.Link>
    <Nav.Link className='link' href="/blogs">Blogs</Nav.Link>
  </Nav>
  <Nav>
    <Nav.Link className='link' href="/about">About</Nav.Link>
    <Nav.Link className='link' href="/contact">Contact</Nav.Link>
  </Nav>
</Navbar.Collapse>
</Navbar>


</div>
);
}

export default Navigation;
