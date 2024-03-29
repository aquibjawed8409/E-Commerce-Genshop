import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CgMenu, CgClose } from "react-icons/cg";
import { CartContext } from "../context/CartContext";

const Nav = () => {
  let { total_items } = useContext(CartContext);

  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle for Menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Hide after click pages
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="flex justify-between items-center p-4 min-w-[23rem]">
        <div>
          <NavLink to="/">
            {/* <img src="./images/logo.png" alt="" className="h-[2.5rem]" /> */}
            <h2 className="text-2xl font-bold text-[#3273dc]">Genshop</h2>
          </NavLink>
        </div>
        <div className="z-[100]">
          <ul
            className={`flex flex-col justify-center items-center md:flex md:flex-row gap-5 md:gap-3 md:text-xl absolute md:static z-[1] md:z-100 max-md:bg-slate-300 w-full left-0 md:opacity-100 py-5 md:py-0  ${
              menuOpen ? "top-[70px]" : "top-[-100%] z-[100]"
            } } `}
          >
            <li
              className="hover:text-[#3273dc] trasition-1000"
              onClick={closeMenu}
            >
              <NavLink to="/">Home</NavLink>
            </li>
            <li
              className="hover:text-[#3273dc] trasition-1000"
              onClick={closeMenu}
            >
              <NavLink to="/about">About</NavLink>
            </li>
            <li
              className="hover:text-[#3273dc] trasition-1000"
              onClick={closeMenu}
            >
              <NavLink to="/products">Product</NavLink>
            </li>
            <li
              className="hover:text-[#3273dc] trasition-1000"
              onClick={closeMenu}
            >
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li
              className="hover:text-[#3273dc] trasition-1000"
              onClick={closeMenu}
            >
              <NavLink to="/cart" className="flex relative">
                <FaShoppingCart className="text-[1.5rem] relative" />
                  { total_items >= 1 &&   <span className="absolute top-[-10px] right-[-10px] md:top-[-10px] md:right-[-10px] bg-blue-500 text-white rounded-[50%] w-5 h-5 md:text-[15px] flex items-center justify-center">
                  {total_items}
                </span>}
                
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex md:hidden">
          <CgMenu
            className={`text-3xl ${menuOpen ? "hidden" : "block"}`}
            onClick={toggleMenu}
          />
          <CgClose
            className={`text-3xl ${menuOpen ? "block" : "hidden"}`}
            onClick={toggleMenu}
          />
        </div>
      </div>
    </>
  );
};

export default Nav;
