import HomeCss from "../../assets/CSS/Home.module.css";
import ContentHeader from "../../Components/contentHeader.jsx";
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
import editing from "../../assets/Images/video-editing.svg";
import e_tool_logo from "../../assets/Images/Adobe_Premiere_Pro_CC_icon.svg";
import e_tool_logo2 from "../../assets/Images/Adobe_After_Effects_CC_icon.svg-removebg.png";
import e_tool_logo3 from "../../assets/Images/DaVinci_Resolve_Studio.png";

const Main = () => {
  return (
    <main className="px-4  max-w-[1580px] mx-auto ">
      <div className="social p-4 mx-2">
        {/* <h4 className="text-center my-2 py-4 text-4xl font-bold">Follow Us </h4> */}
        <Marquee
          className="overflow-hidden my-4"
          speed={50}
          pauseOnHover="True"
          pauseOnClick="True"
          autoFill="True"
          gradient="True"
          gradientWidth={300}>
          <a
            className="flex justify-center items-center mx-4 text-[#000]  text-4xl font-bold"
            href="#"
            target="blank">
            <img className="max-w-[45px] h-[45px] mx-2" src={facebook} alt="" />{" "}
            Facebook
          </a>
          <a
            className="flex justify-center items-center mx-4 text-[#000] text-4xl font-bold"
            href="https://www.instagram.com/digitalsitepro/"
            target="blank">
            <img className="max-w-[45px] h-[45px] mx-2" src={instagram} />{" "}
            Instagram
          </a>
          <a
            className="flex justify-center items-center mx-4 text-[#000] text-4xl font-bold"
            href=""
            target="blank">
            <img className="max-w-[45px] h-[45px] mx-2" src={twitter} /> Twitter
          </a>
          <a
            className="flex justify-center items-center mx-4 text-[#000] text-4xl font-bold"
            href="https://www.pinterest.com/digitalsitep/"
            target="blank">
            <img className="max-w-[45px] h-[45px] mx-2" src={pinterest} />
            Pinterest
          </a>
          <a
            className="flex justify-center items-center mx-4 text-[#000] text-4xl font-bold"
            href=""
            target="blank">
            <img className="max-w-[45px] h-[45px] mx-2" src={linkedIn} />{" "}
            LinkedIn
          </a>
          <a
            className="flex justify-center items-center mx-4 text-[#000] text-4xl font-bold"
            href=""
            target="blank">
            <img className="max-w-[45px] h-[45px] mx-2" src={youtube} /> Youtube
          </a>
          <a
            className="flex justify-center items-center mx-4 text-[#000] text-4xl font-bold"
            href=""
            target="blank">
            <img className="max-w-[45px] h-[45px] mx-2" src={tiktok} /> Tiktok
          </a>
          <a
            className="flex justify-center items-center mx-4 text-[#000] text-4xl font-bold"
            href=""
            target="blank">
            <img className="max-w-[45px] h-[45px] mx-2" src={thereds} /> Thereds
          </a>
          <a
            className="flex justify-center items-center mx-4 text-[#000] text-4xl font-bold"
            href="https://www.tumblr.com/digitalsitepro"
            target="blank">
            <img className="max-w-[45px] h-[45px] mx-2" src={tumblr} /> Tumblr
          </a>
        </Marquee>
      </div>
      <div className="services py-4 my-5 mx-2">
        <ContentHeader title="OUR SERVICES" />
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-[#ffffff] shadow-xl flex items-center justify-center gap-y-1 rounded-md relative cursor-pointer group">
            <div className="card  p-6 transition-all duration-500">
              <img
                className="min-w-[195px] max-w-[225px] m-0"
                src={editing}
                alt="Video Editing "
              />
            </div>
            <div className="absolute top-1 right-2 z-[10]">
              <img
                className={`max-w-[46px] my-2 ${HomeCss.glow}`}
                src={e_tool_logo}
                alt="Adobe_Premiere_Pro"
              />
              <img
                className={`max-w-[46px] my-2 ${HomeCss.glow}`}
                src={e_tool_logo2}
                alt="Adobe_After_Effects"
              />
              <div className={`max-w-[46px] my-2 ${HomeCss.glow}`}>
                <img
                  className={`max-w-[46px] my-2 `}
                  src={e_tool_logo3}
                  alt="DaVinci_Resolve"
                />
              </div>
            </div>
            <div
              className={`${HomeCss.gradient_bg} absolute  bottom-0 left-0 right-0 rounded-md h-[55px] overflow-hidden flex flex-col justify-center items-center group-hover:h-[100%] transition-all duration-500 ease-out group-hover:justify-start group-hover:items-start`}>
              <h4
                className={`${HomeCss.card_gradient_text}  text-2xl font-bold my-2  p-2 `}>
                Video Edting
              </h4>
              <p className="hidden w-[80%] px-2 pt-2 pb-4  opacity-0 transition-all delay-75 duration-500 ease-out group-hover:opacity-100 group-hover:block text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
                qui rem doloremque repudiandae id unde exercitationem sit,
                aliquid consequatur et?
              </p>
            </div>
          </div>
          <div className="bg-[#ffffff] shadow-xl flex items-center justify-center gap-y-1 rounded-md relative cursor-pointer group">
            <div className="card  p-6 transition-all duration-500">
              <img
                className="min-w-[195px] max-w-[225px] m-0"
                src={editing}
                alt="Video Editing "
              />
            </div>
            <div className="absolute top-1 right-2 z-[10]">
              <img
                className={`max-w-[46px] my-2 ${HomeCss.glow}`}
                src={e_tool_logo}
                alt="Adobe_Premiere_Pro"
              />
              <img
                className={`max-w-[46px] my-2 ${HomeCss.glow}`}
                src={e_tool_logo2}
                alt="Adobe_After_Effects"
              />
              <div className={`max-w-[46px] my-2 ${HomeCss.glow}`}>
                <img
                  className={`max-w-[46px] my-2 `}
                  src={e_tool_logo3}
                  alt="DaVinci_Resolve"
                />
              </div>
            </div>
            <div
              className={`${HomeCss.gradient_bg} absolute  bottom-0 left-0 right-0 rounded-md h-[55px] overflow-hidden flex flex-col justify-center items-center group-hover:h-[100%] transition-all duration-500 ease-out group-hover:justify-start group-hover:items-start`}>
              <h4
                className={`${HomeCss.card_gradient_text}  text-2xl font-bold my-2  p-2 `}>
                Video Edting
              </h4>
              <p className="hidden w-[80%] px-2 pt-2 pb-4  opacity-0 transition-all delay-75 duration-500 ease-out group-hover:opacity-100 group-hover:block text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
                qui rem doloremque repudiandae id unde exercitationem sit,
                aliquid consequatur et?
              </p>
            </div>
          </div>
          <div className="bg-[#ffffff] shadow-xl flex items-center justify-center gap-y-1 rounded-md relative cursor-pointer group">
            <div className="card  p-6 transition-all duration-500">
              <img
                className="min-w-[195px] max-w-[225px] m-0"
                src={editing}
                alt="Video Editing "
              />
            </div>
            <div className="absolute top-1 right-2 z-[10]">
              <img
                className={`max-w-[46px] my-2 ${HomeCss.glow}`}
                src={e_tool_logo}
                alt="Adobe_Premiere_Pro"
              />
              <img
                className={`max-w-[46px] my-2 ${HomeCss.glow}`}
                src={e_tool_logo2}
                alt="Adobe_After_Effects"
              />
              <div className={`max-w-[46px] my-2 ${HomeCss.glow}`}>
                <img
                  className={`max-w-[46px] my-2 `}
                  src={e_tool_logo3}
                  alt="DaVinci_Resolve"
                />
              </div>
            </div>
            <div
              className={`${HomeCss.gradient_bg} absolute  bottom-0 left-0 right-0 rounded-md h-[55px] overflow-hidden flex flex-col justify-center items-center group-hover:h-[100%] transition-all duration-500 ease-out group-hover:justify-start group-hover:items-start`}>
              <h4
                className={`${HomeCss.card_gradient_text}  text-2xl font-bold my-2  p-2 `}>
                Video Edting
              </h4>
              <p className="hidden w-[80%] px-2 pt-2 pb-4  opacity-0 transition-all delay-75 duration-500 ease-out group-hover:opacity-100 group-hover:block text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
                qui rem doloremque repudiandae id unde exercitationem sit,
                aliquid consequatur et?
              </p>
            </div>
          </div>
          <div className="bg-[#ffffff] shadow-xl flex items-center justify-center gap-y-1 rounded-md relative cursor-pointer group">
            <div className="card  p-6 transition-all duration-500">
              <img
                className="min-w-[195px] max-w-[225px] m-0"
                src={editing}
                alt="Video Editing "
              />
            </div>
            <div className="absolute top-1 right-2 z-[10]">
              <img
                className={`max-w-[46px] my-2 ${HomeCss.glow}`}
                src={e_tool_logo}
                alt="Adobe_Premiere_Pro"
              />
              <img
                className={`max-w-[46px] my-2 ${HomeCss.glow}`}
                src={e_tool_logo2}
                alt="Adobe_After_Effects"
              />
              <div className={`max-w-[46px] my-2 ${HomeCss.glow}`}>
                <img
                  className={`max-w-[46px] my-2 `}
                  src={e_tool_logo3}
                  alt="DaVinci_Resolve"
                />
              </div>
            </div>
            <div
              className={`${HomeCss.gradient_bg} absolute  bottom-0 left-0 right-0 rounded-md h-[55px] overflow-hidden flex flex-col justify-center items-center group-hover:h-[100%] transition-all duration-500 ease-out group-hover:justify-start group-hover:items-start`}>
              <h4
                className={`${HomeCss.card_gradient_text}  text-2xl font-bold my-2  p-2 `}>
                Video Edting
              </h4>
              <p className="hidden w-[80%] px-2 pt-2 pb-4  opacity-0 transition-all delay-75 duration-500 ease-out group-hover:opacity-100 group-hover:block text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
                qui rem doloremque repudiandae id unde exercitationem sit,
                aliquid consequatur et?
              </p>
            </div>
          </div>
          <div className="bg-[#ffffff] shadow-xl flex items-center justify-center gap-5 rounded-md relative cursor-pointer group">
            <div className="card  p-6 transition-all duration-500">
              <img
                className="min-w-[195px] max-w-[225px] m-0"
                src={editing}
                alt="Video Editing "
              />
            </div>
            <div className="absolute top-1 right-2 z-[10]">
              <img
                className={`max-w-[46px] my-2 ${HomeCss.glow}`}
                src={e_tool_logo}
                alt="Adobe_Premiere_Pro"
              />
              <img
                className={`max-w-[46px] my-2 ${HomeCss.glow}`}
                src={e_tool_logo2}
                alt="Adobe_After_Effects"
              />
              <div className={`max-w-[46px] my-2 ${HomeCss.glow}`}>
                <img
                  className={`max-w-[46px] my-2 `}
                  src={e_tool_logo3}
                  alt="DaVinci_Resolve"
                />
              </div>
            </div>
            <div
              className={`${HomeCss.gradient_bg} absolute  bottom-0 left-0 right-0 rounded-md h-[55px] overflow-hidden flex flex-col justify-center items-center group-hover:h-[100%] transition-all duration-500 ease-out group-hover:justify-start group-hover:items-start`}>
              <h4
                className={`${HomeCss.card_gradient_text}  text-2xl font-bold my-2  p-2 `}>
                Video Edting
              </h4>
              <p className="hidden w-[80%] px-2 pt-2 pb-4  opacity-0 transition-all delay-75 duration-500 ease-out group-hover:opacity-100 group-hover:block text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
                qui rem doloremque repudiandae id unde exercitationem sit,
                aliquid consequatur et?
              </p>
            </div>
          </div>
          <div className="bg-[#ffffff] shadow-xl flex items-center justify-center gap-y-1 rounded-md relative cursor-pointer group">
            <div className="card  p-6 transition-all duration-500">
              <img
                className="min-w-[195px] max-w-[225px] m-0"
                src={editing}
                alt="Video Editing "
              />
            </div>
            <div className="absolute top-1 right-2 z-[10]">
              <img
                className={`max-w-[46px] my-2 ${HomeCss.glow}`}
                src={e_tool_logo}
                alt="Adobe_Premiere_Pro"
              />
              <img
                className={`max-w-[46px] my-2 ${HomeCss.glow}`}
                src={e_tool_logo2}
                alt="Adobe_After_Effects"
              />
              <div className={`max-w-[46px] my-2 ${HomeCss.glow}`}>
                <img
                  className={`max-w-[46px] my-2 `}
                  src={e_tool_logo3}
                  alt="DaVinci_Resolve"
                />
              </div>
            </div>
            <div
              className={`${HomeCss.gradient_bg} absolute  bottom-0 left-0 right-0 rounded-md h-[55px] overflow-hidden flex flex-col justify-center items-center group-hover:h-[100%] transition-all duration-500 ease-out group-hover:justify-start group-hover:items-start`}>
              <h4
                className={`${HomeCss.card_gradient_text}  text-2xl font-bold my-2  p-2 `}>
                Video Edting
              </h4>
              <p className="hidden w-[80%] px-2 pt-2 pb-4  opacity-0 transition-all delay-75 duration-500 ease-out group-hover:opacity-100 group-hover:block text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
                qui rem doloremque repudiandae id unde exercitationem sit,
                aliquid consequatur et?
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
};

export default Main;
