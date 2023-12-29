import Marquee from "react-fast-marquee";
import facebook from "../../assets/Images/facebook-color-svgrepo-com.svg";
import instagram from "../../assets/Images/instagram-1-svgrepo-com.svg";
import linkedIn from "../../assets/Images/linkedin-svgrepo-com.svg";
import twitter from "../../assets/Images/logo-x-twitter.svg";
import youtube from "../../assets/Images/yt.svg";
import tiktok from "../../assets/Images/tiktok-icon-white-1-logo-svgrepo-com.svg";
import thereds from "../../assets/Images/threads.svg";
import pinterest from "../../assets/Images/pinterest-svgrepo-com.svg";
import tumblr from "../../assets/Images/tumblr.svg";
import Services from "./Services";


const Main = () => {
  return (
    <main className="px-4  max-w-[1580px] mx-auto ">
      <div className="social p-4 mx-2">
        {/* <h4 className="text-center my-2 py-4 text-sm md:text-4xl font-bold">Follow Us </h4> */}
        <Marquee
          className="overflow-hidden my-6"
          speed={50}
          pauseOnHover="True"
          pauseOnClick="True"
          autoFill="True"
          gradient="True"
          gradientWidth={50}
          >
          <a
            className="flex justify-center items-center mx-4 text-[#000]  text-sm md:text-4xl font-bold"
            href="#"
            target="blank">
            <img className="max-w-[40px] h-[40px] md:max-w-[45px] md:h-[45px] mx-2" src={facebook} alt="" />{" "}
            Facebook
          </a>
          <a
            className="flex justify-center items-center mx-4 text-[#000] text-sm md:text-4xl font-bold"
            href="https://www.instagram.com/digitalsitepro/"
            target="blank">
            <img className="max-w-[40px] h-[40px] md:max-w-[45px] md:h-[45px] mx-2" src={instagram} />{" "}
            Instagram
          </a>
          <a
            className="flex justify-center items-center mx-4 text-[#000] text-sm md:text-4xl font-bold"
            href=""
            target="blank">
            <img className="max-w-[40px] h-[40px] md:max-w-[45px] md:h-[45px] mx-2" src={twitter} /> Twitter
          </a>
          <a
            className="flex justify-center items-center mx-4 text-[#000] text-sm md:text-4xl font-bold"
            href="https://www.pinterest.com/digitalsitep/"
            target="blank">
            <img className="max-w-[40px] h-[40px] md:max-w-[45px] md:h-[45px] mx-2" src={pinterest} />
            Pinterest
          </a>
          <a
            className="flex justify-center items-center mx-4 text-[#000] text-sm md:text-4xl font-bold"
            href=""
            target="blank">
            <img className="max-w-[40px] h-[40px] md:max-w-[45px] md:h-[45px] mx-2" src={linkedIn} />{" "}
            LinkedIn
          </a>
          <a
            className="flex justify-center items-center mx-4 text-[#000] text-sm md:text-4xl font-bold"
            href=""
            target="blank">
            <img className="max-w-[40px] h-[40px] md:max-w-[45px] md:h-[45px] mx-2" src={youtube} /> Youtube
          </a>
          <a
            className="flex justify-center items-center mx-4 text-[#000] text-sm md:text-4xl font-bold"
            href=""
            target="blank">
            <img className="max-w-[40px] h-[40px] md:max-w-[45px] md:h-[45px] mx-2" src={tiktok} /> Tiktok
          </a>
          <a
            className="flex justify-center items-center mx-4 text-[#000] text-sm md:text-4xl font-bold"
            href=""
            target="blank">
            <img className="max-w-[40px] h-[40px] md:max-w-[45px] md:h-[45px] mx-2" src={thereds} /> Thereds
          </a>
          <a
            className="flex justify-center items-center mx-4 text-[#000] text-sm md:text-4xl font-bold"
            href="https://www.tumblr.com/digitalsitepro"
            target="blank">
            <img className="max-w-[40px] h-[40px] md:max-w-[45px] md:h-[45px] mx-2" src={tumblr} /> Tumblr
          </a>
        </Marquee>
      </div>
      <Services/>
    </main>
  );
};

export default Main;
