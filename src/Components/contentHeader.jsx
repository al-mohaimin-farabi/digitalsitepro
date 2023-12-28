import HomeCss from "../assets/css/Home.module.css";
const contentHeader = ({ title }) => {
  return (
    <div className="p-2 mb-8 text-center">
          <h2 className="text-black text-5xl font-bold">{title}</h2>
          <div className={`${HomeCss.border_bg} w-[50%] mx-auto h-[2px]` }> </div>
    </div>
  );
};

export default contentHeader;
