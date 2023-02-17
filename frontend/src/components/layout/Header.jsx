import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./header.css";

const Header = ({ isAuthenticate = true }) => {
   return (
      <nav className="p-4 md:p-8 h-20 flex justify-between items-center shadow shadow-slate-300 w-full">
         <motion.div
            initial={{ x: "-100%" }}
            whileInView={{ x: 0 }}
            className="text-red text-5xl"
         >
            <IoFastFoodOutline />
         </motion.div>
         <div className="flex items-center gap-5 md:gap-8">
            <NavLink
               className="nav-link"
               to="/"
            >
               Home
            </NavLink>
            <NavLink
               className="nav-link"
               to="/contact"
            >
               Contact
            </NavLink>
            <NavLink
               className="nav-link"
               to="/about"
            >
               About
            </NavLink>
            <NavLink
               className="text-red text-2xl hover:text-lightdark"
               to="/cart"
            >
               <FiShoppingCart />
            </NavLink>
            <NavLink
               className="text-red text-2xl hover:text-lightdark"
               to={isAuthenticate ? "/profile" : "/login"}
            >
               {isAuthenticate ? <FaUser /> : <FiLogIn />}
            </NavLink>
         </div>
      </nav>
   );
};

export default Header;
