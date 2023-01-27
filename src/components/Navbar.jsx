import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./style.css";

import { AppContext } from "../App";

const Navbar = () => {
  const value = useContext(AppContext);

  return (
    <>
      <div className='navbar'>
        <li>
          <h3 style={{ color: "Yellow" }}>{value}</h3>
        </li>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About Us</Link>
        </li>
        <li>
          <Link to='/faq'>FAQ</Link>
        </li>
        <li>
          <Link to='/task2'>Task-2</Link>
        </li>
        <li>
          <Link to='/task3'>Task-3</Link>
        </li>
      </div>
    </>
  );
};

export default Navbar;
