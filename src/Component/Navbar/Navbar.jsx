import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <Link to='/'><li>
             <p>All Product</p>
            </li></Link>
            <Link to='/addProduct'><li>
              <p>Add Product</p>
            </li></Link>

            <Link to='/favorite'><li>
              <p>Favorites</p>
            </li></Link>
            </ul>
          </div>
          <Link to='/'> <p className="btn btn-ghost text-4xl px-20">E-commerce</p></Link>
        </div>

        <div className="navbar-end">
          <ul className="menu menu-horizontal px-20">
          <Link to='/'><li>
             <p>All Product</p>
            </li></Link>
            <Link to='/addProduct'><li>
              <p>Add Product</p>
            </li></Link>

            <Link to='/favorite'><li>
              <p>Favorites</p>
            </li></Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
