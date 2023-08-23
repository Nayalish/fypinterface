import { Component } from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state={clicked:false};
  handleclicked = ()=>{
      this.setState({clicked: !this.state.clicked})
  }
  // Set state
  // Make Handleclick Function

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">AI-Chek👗</h1>
        <div className="menu-icon" onClick={this.handleclicked}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
          
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link className="nav-link" to="/"><i class="fa-solid fa-house-user"></i>Home</Link>
          </li>
          <li>
            <Link className="nav-link" to="/about"><i class="fa-solid fa-circle-info"></i>About</Link>
          </li>
          <li>
            <Link className="nav-link" to="/process"><i class="fa-solid fa-briefcase"></i>process</Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact"><i class="fa-solid fa-address-book"></i>Contact</Link>
          </li>
          <li>
            <Link className="nav-link-btn" >signup</Link>
          </li>
          <button>Sign Up</button>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
