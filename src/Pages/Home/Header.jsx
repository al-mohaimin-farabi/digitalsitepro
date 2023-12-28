import { NavLink } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import HomeCss from "../../assets/CSS/Home.module.css";
import bubble from "../../assets/Images/herobubble.svg";
import subtlePatterns from "../../assets/Images/herosubtle.svg";
import heroImg from "../../assets/Images/hero_image.svg";

const Header = () => {
  return (
    <header className=" w-full relative">
      <div className={`${HomeCss.header_bg} `}>
        <Navbar></Navbar>
        <div className="hero max-w-[1580px] mx-auto relative z-50">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 mx-4 p-2">
            <div className="hero__content md:my-2 py-5 md:py-12 text-center md:text-start relative">
              <h1 className=" text-white text-[54px] md:text-6xl font-semibold my-2 leading-tight ">
                Digitalsitepro <br />
                studio <span className={`${HomeCss.gradient_text}`}>live</span>
              </h1>
              <p className="my-4 text-[14px] md:text-2xl text-white font-normal">
                we are a design studio that has completed various projects.
              </p>
              <div className=" relative flex mb-12 mt-8 md:mt-12 text-white items-center justify-center md:justify-start ">
                <NavLink
                  className="md:text-xl mr-4 bg-[#4C40F7] p-2 rounded border-2 border-[#4C40F7] hover:bg-transparent transition-colors duration-200 ease-linear"
                  to="/services">
                  Get Started
                </NavLink>
                <NavLink
                  className="md:text-xl ml-4 bg-transparent p-2 rounded border-2 border-[#fff] hover:bg-[#fff] hover:text-[#4C40F7] transition-colors duration-200 ease-linear "
                  to="/contact">
                  Contact Us
                </NavLink>
              </div>
              <img
                className="hidden absolute md:block top-[3%] left-[-12%] ml-5"
                src={bubble}
                alt="bubble"
                loading="lazy"
              />
            </div>
            <div className="hidden md:flex  text-white font-bold">
              <img className="" src={heroImg} alt="" />
            </div>
          </div>
        </div>
        <img
          className="hidden md:block absolute top-[50%] left-[37.5%] max-w-[50%] z-40"
          src={subtlePatterns}
          alt="some subtle patterns"
          loading="lazy"
        />
      </div>
    </header>
  );
};

export default Header;
