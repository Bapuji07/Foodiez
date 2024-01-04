import logo from "./../../assets/logo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const {user}= useContext(UserContext);
  console.log('User object:', user);

  const cart = useSelector((store) => store.cart.items);

  return (
    
    <div id="header">
      <div id="logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>

      </div>
      <div id="nav-items">
      <h3>{user ? `Welcome ${user.name}` : ' '}</h3> 
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/cart">
          <h2>
            Cart <i className="ri-shopping-cart-2-fill"></i>
            <span>{cart.length}</span>
          </h2>
        </Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Header;