import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import logo from "../assets/Images/logo.svg";
import { FaRegUserCircle } from "react-icons/fa";
import { TbMenu2 } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import NavCss from "../assets/CSS/Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const variants = {
    open: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "linear" } },
    closed: {
      opacity: 0,
      x: "100%",
      transition: { duration: 0.3, ease: "linear" },
    },
  };

  return (
    <>
      <nav className="w-full text-white py-2 ">
        <div className="max-w-[1580px] mx-auto h-16 md:h-20 flex justify-between items-center p-2 my-2">
          <div className="flex items-center">
            <img
              className="mx-4 max-w-8  "
              src={logo}
              alt="digital site pro logo"
            />
            <div>
              <h2 className="font-semibold text-sm">
                DIGITALSITE <br />
              </h2>
              <h2 className="flex font-semibold text-sm">
                PRO
                <p className=" ml-1 w-[12px] h-[12px] rounded-full bg-[#4C40F7] animate-bounce"></p>
              </h2>
            </div>
          </div>

          <div className="hidden md:block menus  ">
            <ul className="flex justify-end space-x-0  sm:space-x-2 md:space-x-2 lg:space-x-8">
              <li className=" p-2 text-base">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className=" p-2 text-base">
                <NavLink to="/portfolio">Portfolio</NavLink>
              </li>

              <li className=" p-2 text-base relative group cursor-pointer">
                <a href="#" className="flex justify-start items-center  ">
                  Services
                  <IoIosArrowDown className="transition-all duration-300 group-hover:rotate-180 ml-1" />
                </a>

                <div className="hidden absolute z-[999999] w-[150px] mt-2 p-2 text-black bg-gray-200 group-hover:block rounded-md shadow-lg">
                  <ul className="">
                    <li className="p-2 hover:bg-[#4C40F7] hover:text-white rounded-md">
                      <NavLink to="/demo1">Lorem</NavLink>
                    </li>
                    <li className="p-2 hover:bg-[#4C40F7] hover:text-white rounded-md">
                      <NavLink to="/demo2">Ipsam</NavLink>
                    </li>
                    <li className="p-2 hover:bg-[#4C40F7] hover:text-white rounded-md">
                      <NavLink to="/demo3">Ammet</NavLink>
                    </li>
                  </ul>
                </div>
              </li>

              <li className=" p-2 text-base relative group cursor-pointer">
                <a href="#" className="flex justify-start items-center  ">
                  Testimonial
                  <IoIosArrowDown className="transition-all duration-300 group-hover:rotate-180 ml-1" />
                </a>

                <div className="hidden absolute z-[999999] w-[150px] mt-2 p-2 text-black bg-gray-200 group-hover:block rounded-md shadow-lg">
                  <ul className="">
                    <li className="p-2 hover:bg-[#4C40F7] hover:text-white rounded-md">
                      <NavLink to="/demo1">Lorem</NavLink>
                    </li>
                    <li className="p-2 hover:bg-[#4C40F7] hover:text-white rounded-md">
                      <NavLink to="/demo2">Ipsam</NavLink>
                    </li>
                    <li className="p-2 hover:bg-[#4C40F7] hover:text-white rounded-md">
                      <NavLink to="/demo3">Ammet</NavLink>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="hidden user   md:flex justify-end items-center ">
            <NavLink to="/account" className="text-4xl mx-2 p-2">
              <FaRegUserCircle />
            </NavLink>
            <select
              className="text-base mx-2 text-[#FFAD60] rounded border-2 bg-transparent  h-[50px] border-[#FFAD60] hover:text-[#ffffff] hover:bg-[#FFAD60]  py-2 px-2 lg:px-4 transition-colors duration-200 ease-linear"
              name="Lng"
              id="lng">
              <option value="Bn">Bangla</option>
              <option value="Eng">English</option>
            </select>
            <NavLink
              to="/signup"
              className="text-base mx-2 text-[#FFAD60] rounded border-2 border-[#FFAD60] hover:text-[#ffffff] hover:bg-[#FFAD60]  py-2 px-2 lg:px-4 transition-colors duration-200 ease-linear h-[50px]">
              SignUp
            </NavLink>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="mx-4 md:hidden text-4xl">
            <TbMenu2 />
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      <motion.nav
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        className={`md:hidden  ${NavCss.navbar_bg} text-white z-[99999]  
           fixed top-0 right-0 flex flex-col items-end mobile__menu  h-[100vh]`}>
        <button
          onClick={() => setIsOpen(false)}
          className="h-16 mt-4  p-2 mx-4 md:hidden text-4xl">
          <IoMdClose />
        </button>
        <div className="menu__list p-2 mt-2">
          <ul className="flex flex-col md:hidden">
            <li className="mx-2 p-2 text-base">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="mx-2 p-2 text-base">
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li className="mx-2 p-2 text-base relative group cursor-pointer">
              <a href="#" className="flex justify-start items-center  ">
                Services
                <IoIosArrowDown className="transition-all duration-300 group-hover:rotate-180 ml-1" />
              </a>

              <div className="hidden absolute z-[999999] w-[150px] mt-2 p-2 text-black bg-gray-200 group-hover:block rounded-md shadow-lg">
                <ul className="">
                  <li className="p-2 hover:bg-[#4C40F7] hover:text-white rounded-md">
                    <NavLink to="/demo1">Lorem</NavLink>
                  </li>
                  <li className="p-2 hover:bg-[#4C40F7] hover:text-white rounded-md">
                    <NavLink to="/demo2">Ipsam</NavLink>
                  </li>
                  <li className="p-2 hover:bg-[#4C40F7] hover:text-white rounded-md">
                    <NavLink to="/demo3">Ammet</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="mx-2 p-2 text-base relative group cursor-pointer">
              <a href="#" className="flex justify-start items-center  ">
                Testimonial
                <IoIosArrowDown className="transition-all duration-300 group-hover:rotate-180 ml-1" />
              </a>

              <div className="hidden absolute z-[999999] w-[150px] mt-2 p-2 text-black bg-gray-200 group-hover:block rounded-md shadow-lg">
                <ul className="">
                  <li className="p-2 hover:bg-[#4C40F7] hover:text-white rounded-md">
                    <NavLink to="/demo1">Lorem</NavLink>
                  </li>
                  <li className="p-2 hover:bg-[#4C40F7] hover:text-white rounded-md">
                    <NavLink to="/demo2">Ipsam</NavLink>
                  </li>
                  <li className="p-2 hover:bg-[#4C40F7] hover:text-white rounded-md">
                    <NavLink to="/demo3">Ammet</NavLink>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <div className="flex items-center ">
            <NavLink
              to="/signup"
              className="text-base mx-2 text-[#FFAD60] rounded border-2 border-[#FFAD60] hover:text-[#ffffff] hover:bg-[#FFAD60]  py-2 px-4 transition-colors duration-200 ease-linear">
              SignUp
            </NavLink>
            <NavLink to="/account" className="text-4xl mx-2 p-2">
              <FaRegUserCircle />
            </NavLink>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
