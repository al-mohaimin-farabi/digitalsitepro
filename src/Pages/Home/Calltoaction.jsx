import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import HomeCss from "../../assets/CSS/Home.module.css";
import { NavLink } from "react-router-dom";

const Calltoaction = () => {
  return (
    <div className={` relative my-5 md:my-10  px-2  text-center font-flow`}>
      <div className={`${HomeCss.overlay} py-6`}>
        <h4 className="my-2 text-white text-2xl md:text-4xl font-extrabold">
          Do You Have Any Project
        </h4>
        <button
          className={` bg-white px-6 py-4 my-6 font-bold text-purple-bright hover:text-[#fff] hover:bg-transparent border-2 transition-colors duration-200 ease-linear border-purple-bright rounded-tl-lg rounded-br-lg `}>
          <div className={`${HomeCss.separator} inline`}>
            <NavLink to="Contact">Contact Us</NavLink>
          </div>
          <FontAwesomeIcon className="ml-[12px] " icon={faPaperPlane} />
        </button>
      </div>
    </div>
  );
};

export default Calltoaction;
