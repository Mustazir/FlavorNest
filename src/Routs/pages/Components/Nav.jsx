import React from "react";
import { Link } from "react-router-dom";


const Nav = () => {
  const navoptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <a>CONTACT US</a>
      </li>
      <li>
        <a>DASHBOARD</a>
      </li>
      <li>
        <Link to='menu'>Our Menu</Link>
      </li>
      <li>
        <Link to='order'>Our Shop</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-black text-white fixed z-10 bg-opacity-20 p-4">
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
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow uppercase"
            >
              {navoptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl ">
            <div className="flex flex-col logo">
              <div className="font-bold text-base md:text-[30px] tracking-[2px]">Flavor Nest</div>
              <div className="font-bold text-base tracking-[3px] md:text-[18px] md:tracking-[10px]" >Restaurant</div>
            </div>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 uppercase">{navoptions}</ul>
        </div>
        <div className="navbar-end">
          <Link to='/login'>
          <a className="">Login</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
