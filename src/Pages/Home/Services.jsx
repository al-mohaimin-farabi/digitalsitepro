import { useState } from "react";
import { motion } from "framer-motion";
import HomeCss from "../../assets/CSS/Home.module.css";
import ContentHeader from "../../Components/contentHeader.jsx";
import editing from "../../assets/Images/video-editing.svg";
import e_tool_logo from "../../assets/Images/Adobe_Premiere_Pro_CC_icon.svg";
import e_tool_logo2 from "../../assets/Images/Adobe_After_Effects_CC_icon.svg-removebg.png";
import e_tool_logo3 from "../../assets/Images/DaVinci_Resolve_Studio.png";

const Services = () => {
  const [cardOneHovered, setCardOneHovered] = useState(false);
  const [cardTwoHovered, setCardTwoHovered] = useState(false);
  const [cardThreeHovered, setCardThreeHovered] = useState(false);
  const [cardFourHovered, setCardFourHovered] = useState(false);
  const [cardFiveHovered, setCardFiveHovered] = useState(false);
  const [cardSixHovered, setCardSixHovered] = useState(false);
  const cardbody = {
    initial: { boxShadow: "2px 5px 10px 0px rgba(0,0,0,0.2)" },
    hovered: { boxShadow: "2px 7px 10px 0px rgba(0,0,0,0.4)" },
  };

  const innerBody = {
    initial: {
      transform: "translateY( 100%)",
      willChange: "transform",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    hovered: {
      transform: "translateY( 0%)",
      transformOrigin: "bottom",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: {
      transform: "translateY( 100%)",
      transformOrigin: "bottom",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <div className="services py-4 my-5 mx-2">
      <ContentHeader title="OUR SERVICES" />
      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {/* card1 */}
        <div className="card p-2  grid grid-cols-1 justify-center items-center w-full">
          <motion.div
            className={`bg-[#ffffff] cursor-pointer  rounded-md w-full relative overflow-hidden  ${HomeCss.card_inner_body}`}
            variants={cardbody}
            initial="initial"
            animate={cardOneHovered ? "hovered" : "initial"}
            onHoverStart={() => setCardOneHovered(true)}
            onHoverEnd={() => setCardOneHovered(false)}>
            <motion.div
              initial={{ scale: 1 }}
              animate={cardOneHovered ? { scale: 0 } : { scale: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full ">
              <img
                className="max-w-[50%]  mx-auto "
                loading="lazy"
                src={editing}
                alt="A person Editing video in pc gif"
              />
              <h1
                className={`${HomeCss.card_gradient_text} font-bold text-xl text-center p-2 pb-4`}>
                VIDEO EDITING
              </h1>
            </motion.div>

            <motion.div
              className={`${HomeCss.gradient_bg} rounded-md p-2  absolute left-0 bottom-0  w-full box-border`}
              initial="initial"
              variants={innerBody}
              animate={cardOneHovered ? "hovered" : "initial"}
              exit="exit">
              <h1
                className={`${HomeCss.card_title} text-white font-bold text-xl  p-2`}>
                VIDEO EDITING
              </h1>

              <p className="text-white max-w-[85%] my-2 p-2 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                autem doloremque eveniet odio rem ut minima magnam, laboriosam
                nam! Dignissimos voluptatum alias amet adipisci nisi.
              </p>
            </motion.div>
            <div className="absolute top-1 right-2 z-[10]">
              <img
                className={`max-w-[46px] my-1  ${HomeCss.glow}`}
                src={e_tool_logo}
                alt="Adobe_Premiere_Pro"
              />
              <img
                className={`max-w-[46px] my-2 ${HomeCss.glow}`}
                src={e_tool_logo2}
                alt="Adobe_After_Effects"
              />
              <img
                className={`max-w-[46px] my-2 `}
                src={e_tool_logo3}
                alt="DaVinci_Resolve"
              />
            </div>
          </motion.div>
        </div>
        {/* card2 */}
        <div className="card p-2  grid grid-cols-1 justify-center items-center w-full">
          <motion.div
            className={`bg-[#4C40F7] cursor-pointer  rounded-md w-full relative overflow-hidden  ${HomeCss.card_inner_body}`}
            variants={cardbody}
            initial="initial"
            animate={cardTwoHovered ? "hovered" : "initial"}
            onHoverStart={() => setCardTwoHovered(true)}
            onHoverEnd={() => setCardTwoHovered(false)}>
            <motion.div
              initial={{ scale: 1 }}
              animate={cardTwoHovered ? { scale: 0 } : { scale: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full ">
              <img
                className="max-w-[50%]  mx-auto "
                loading="lazy"
                src={editing}
                alt="A person Editing video in pc gif"
              />
              <h1
                className={`${HomeCss.card_gradient_text} text-slate-900 font-bold text-xl text-center p-2 pb-4`}>
                VIDEO EDITING
              </h1>
            </motion.div>

            <motion.div
              className={`${HomeCss.gradient_bg} rounded-md p-2  absolute left-0 bottom-0  w-full box-border`}
              initial="initial"
              variants={innerBody}
              animate={cardTwoHovered ? "hovered" : "initial"}
              exit="exit">
              <h1
                className={`${HomeCss.card_title} text-white font-bold text-xl  p-2`}>
                VIDEO EDITING
              </h1>

              <p className="text-white max-w-[85%] my-2 p-2 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                autem doloremque eveniet odio rem ut minima magnam, laboriosam
                nam! Dignissimos voluptatum alias amet adipisci nisi.
              </p>
            </motion.div>
            <div className="absolute top-1 right-2 z-[10]">
              <img
                className={`max-w-[46px] my-1  ${HomeCss.glow}`}
                src={e_tool_logo}
                alt="Adobe_Premiere_Pro"
              />
              <img
                className={`max-w-[46px] my-2 ${HomeCss.glow}`}
                src={e_tool_logo2}
                alt="Adobe_After_Effects"
              />
              <img
                className={`max-w-[46px] my-2 `}
                src={e_tool_logo3}
                alt="DaVinci_Resolve"
              />
            </div>
          </motion.div>
        </div>
        {/* card3 */}
        <div className="card p-2  grid grid-cols-1 justify-center items-center w-full">
          <motion.div
            className={`bg-[#ffffff] cursor-pointer  rounded-md w-full relative overflow-hidden  ${HomeCss.card_inner_body}`}
            variants={cardbody}
            initial="initial"
            animate={cardThreeHovered ? "hovered" : "initial"}
            onHoverStart={() => setCardThreeHovered(true)}
            onHoverEnd={() => setCardThreeHovered(false)}>
            <motion.div
              initial={{ scale: 1 }}
              animate={cardThreeHovered ? { scale: 0 } : { scale: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full ">
              <img
                className="max-w-[50%]  mx-auto "
                loading="lazy"
                src={editing}
                alt="A person Editing video in pc gif"
              />
              <h1
                className={`${HomeCss.card_gradient_text}  font-bold text-xl text-center p-2 pb-4`}>
                VIDEO EDITING
              </h1>
            </motion.div>

            <motion.div
              className={`${HomeCss.gradient_bg} rounded-md p-2  absolute left-0 bottom-0  w-full box-border`}
              initial="initial"
              variants={innerBody}
              animate={cardThreeHovered ? "hovered" : "initial"}
              exit="exit">
              <h1
                className={`${HomeCss.card_title} text-white font-bold text-xl  p-2`}>
                VIDEO EDITING
              </h1>

              <p className="text-white max-w-[85%] my-2 p-2 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                autem doloremque eveniet odio rem ut minima magnam, laboriosam
                nam! Dignissimos voluptatum alias amet adipisci nisi.
              </p>
            </motion.div>
            <div className="absolute top-1 right-2 z-[10]">
              <img
                className={`max-w-[46px] my-1  ${HomeCss.glow}`}
                src={e_tool_logo}
                alt="Adobe_Premiere_Pro"
              />
              <img
                className={`max-w-[46px] my-2 ${HomeCss.glow}`}
                src={e_tool_logo2}
                alt="Adobe_After_Effects"
              />
              <img
                className={`max-w-[46px] my-2 `}
                src={e_tool_logo3}
                alt="DaVinci_Resolve"
              />
            </div>
          </motion.div>
        </div>
        {/* card4 */}
        <div className="card p-2  grid grid-cols-1 justify-center items-center w-full">
          <motion.div
            className={`bg-[#4C40F7] cursor-pointer  rounded-md w-full relative overflow-hidden  ${HomeCss.card_inner_body}`}
            variants={cardbody}
            initial="initial"
            animate={cardFourHovered ? "hovered" : "initial"}
            onHoverStart={() => setCardFourHovered(true)}
            onHoverEnd={() => setCardFourHovered(false)}>
            <motion.div
              initial={{ scale: 1 }}
              animate={cardFourHovered ? { scale: 0 } : { scale: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full ">
              <img
                className="max-w-[50%]  mx-auto "
                loading="lazy"
                src={editing}
                alt="A person Editing video in pc gif"
              />
              <h1
                className={`${HomeCss.card_gradient_text} text-slate-900 font-bold text-xl text-center p-2 pb-4`}>
                VIDEO EDITING
              </h1>
            </motion.div>

            <motion.div
              className={`${HomeCss.gradient_bg} rounded-md p-2  absolute left-0 bottom-0  w-full box-border`}
              initial="initial"
              variants={innerBody}
              animate={cardFourHovered ? "hovered" : "initial"}
              exit="exit">
              <h1
                className={`${HomeCss.card_title} text-white font-bold text-xl  p-2`}>
                VIDEO EDITING
              </h1>

              <p className="text-white max-w-[85%] my-2 p-2 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                autem doloremque eveniet odio rem ut minima magnam, laboriosam
                nam! Dignissimos voluptatum alias amet adipisci nisi.
              </p>
            </motion.div>
            <div className="absolute top-1 right-2 z-[10]">
              <img
                className={`max-w-[46px] my-1  ${HomeCss.glow}`}
                src={e_tool_logo}
                alt="Adobe_Premiere_Pro"
              />
              <img
                className={`max-w-[46px] my-2 ${HomeCss.glow}`}
                src={e_tool_logo2}
                alt="Adobe_After_Effects"
              />
              <img
                className={`max-w-[46px] my-2 `}
                src={e_tool_logo3}
                alt="DaVinci_Resolve"
              />
            </div>
          </motion.div>
        </div>
        {/* card5 */}
        <div className="card p-2  grid grid-cols-1 justify-center items-center w-full">
          <motion.div
            className={`bg-[#ffffff] cursor-pointer  rounded-md w-full relative overflow-hidden  ${HomeCss.card_inner_body}`}
            variants={cardbody}
            initial="initial"
            animate={cardFiveHovered ? "hovered" : "initial"}
            onHoverStart={() => setCardFiveHovered(true)}
            onHoverEnd={() => setCardFiveHovered(false)}>
            <motion.div
              initial={{ scale: 1 }}
              animate={cardFiveHovered ? { scale: 0 } : { scale: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full ">
              <img
                className="max-w-[50%]  mx-auto "
                loading="lazy"
                src={editing}
                alt="A person Editing video in pc gif"
              />
              <h1
                className={`${HomeCss.card_gradient_text}  font-bold text-xl text-center p-2 pb-4`}>
                VIDEO EDITING
              </h1>
            </motion.div>

            <motion.div
              className={`${HomeCss.gradient_bg} rounded-md p-2  absolute left-0 bottom-0  w-full box-border`}
              initial="initial"
              variants={innerBody}
              animate={cardFiveHovered ? "hovered" : "initial"}
              exit="exit">
              <h1
                className={`${HomeCss.card_title} text-white font-bold text-xl  p-2`}>
                VIDEO EDITING
              </h1>

              <p className="text-white max-w-[85%] my-2 p-2 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                autem doloremque eveniet odio rem ut minima magnam, laboriosam
                nam! Dignissimos voluptatum alias amet adipisci nisi.
              </p>
            </motion.div>
            <div className="absolute top-1 right-2 z-[10]">
              <img
                className={`max-w-[46px] my-1  ${HomeCss.glow}`}
                src={e_tool_logo}
                alt="Adobe_Premiere_Pro"
              />
              <img
                className={`max-w-[46px] my-2 ${HomeCss.glow}`}
                src={e_tool_logo2}
                alt="Adobe_After_Effects"
              />
              <img
                className={`max-w-[46px] my-2 `}
                src={e_tool_logo3}
                alt="DaVinci_Resolve"
              />
            </div>
          </motion.div>
        </div>
        {/* card6 */}
        <div className="card p-2  grid grid-cols-1 justify-center items-center w-full">
          <motion.div
            className={`bg-[#4C40F7] cursor-pointer  rounded-md w-full relative overflow-hidden  ${HomeCss.card_inner_body}`}
            variants={cardbody}
            initial="initial"
            animate={cardSixHovered ? "hovered" : "initial"}
            onHoverStart={() => setCardSixHovered(true)}
            onHoverEnd={() => setCardSixHovered(false)}>
            <motion.div
              initial={{ scale: 1 }}
              animate={cardSixHovered ? { scale: 0 } : { scale: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full ">
              <img
                className="max-w-[50%]  mx-auto "
                loading="lazy"
                src={editing}
                alt="A person Editing video in pc gif"
              />
              <h1
                className={`${HomeCss.card_gradient_text} text-slate-900 font-bold text-xl text-center p-2 pb-4`}>
                VIDEO EDITING
              </h1>
            </motion.div>

            <motion.div
              className={`${HomeCss.gradient_bg} rounded-md p-2  absolute left-0 bottom-0  w-full box-border`}
              initial="initial"
              variants={innerBody}
              animate={cardSixHovered ? "hovered" : "initial"}
              exit="exit">
              <h1
                className={`${HomeCss.card_title} text-white font-bold text-xl  p-2`}>
                VIDEO EDITING
              </h1>

              <p className="text-white max-w-[85%] my-2 p-2 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                autem doloremque eveniet odio rem ut minima magnam, laboriosam
                nam! Dignissimos voluptatum alias amet adipisci nisi.
              </p>
            </motion.div>
            <div className="absolute top-1 right-2 z-[10]">
              <img
                className={`max-w-[46px] my-1  ${HomeCss.glow}`}
                src={e_tool_logo}
                alt="Adobe_Premiere_Pro"
              />
              <img
                className={`max-w-[46px] my-2 ${HomeCss.glow}`}
                src={e_tool_logo2}
                alt="Adobe_After_Effects"
              />
              <img
                className={`max-w-[46px] my-2 `}
                src={e_tool_logo3}
                alt="DaVinci_Resolve"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
