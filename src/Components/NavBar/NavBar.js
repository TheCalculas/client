import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="mt-5">
      <ul className="flex justify-center space-x-16 text-lg">
        <Link to="/">
          <li className="cursor-pointer">Show</li>
        </Link>
        <Link to="/delete">
          <li className="cursor-pointer">Delete</li>
        </Link>
        <Link to="/insert">
          <li className="cursor-pointer">Insert</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
