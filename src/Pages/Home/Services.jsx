import ContentHeader from "../../Components/ContentHeader.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faChartLine,
  faClapperboard,
  faPalette,
  faBullhorn,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div className="services py-2  my-5 md:my-16 px-2 font-flow">
      <ContentHeader title="OUR SERVICES" />
      <div className="grid  grid-cols-1 md:grid-cols-3 ">
        <div className="p-4 text-center text-pretty text-base md:border-gray-200 md:border-b-2">
          <FontAwesomeIcon
            className="text-primary font-extrabold text-4xl"
            icon={faCode}
          />

          <h4 className="text-primary text-lg font-bold my-4">
            Web Deblopment
          </h4>
          <p className="w-full sm:w-4/5 mx-auto md:w-full text-pretty text-sm lg:text-base ">
            Elevate your online presence with our comprehensive web development
            services, covering front-end design, back-end functionality, and
            expertise in WordPress, Shopify, and Wix platforms
          </p>
        </div>
        <div className="p-4 text-center text-pretty text-base md:border-gray-200 md:border-x-2 md:border-b-2">
          <FontAwesomeIcon
            className="text-primary font-extrabold text-4xl"
            icon={faPalette}
          />

          <h4 className="text-primary text-lg font-bold my-4">
            Graphics Design
          </h4>
          <p className="w-full m:w-4/5 mx-auto md:w-full text-pretty text-sm lg:text-base ">
            Unlock the power of visual storytelling with our innovative graphic
            design solutions, where imagination knows no bounds. From
            captivating logos to breathtaking illustrations, our team of
            creative wizards transforms ideas into impactful visuals that leave
            a lasting impression.
          </p>
        </div>
        <div className="p-4 text-center text-pretty text-base md:border-gray-200 md:border-b-2">
          <FontAwesomeIcon
            className="text-primary font-extrabold text-4xl"
            icon={faClapperboard}
          />

          <h4 className="text-primary text-lg font-bold my-4">Video Editing</h4>
          <p className="w-full sm:w-4/5 mx-auto md:w-full text-pretty text-sm lg:text-base ">
            Dive into the realm of visual enchantment with our video editing
            prowess. From raw footage to cinematic brilliance, we weave magic
            into every frame, crafting narratives that mesmerize and captivate
            audiences, one edit at a time.
          </p>
        </div>
        <div className="p-4 text-center text-pretty text-base ">
          <FontAwesomeIcon
            className="text-primary font-extrabold text-4xl"
            icon={faChartLine}
          />

          <h4 className="text-primary text-lg font-bold my-4">SEO</h4>
          <p className="w-full sm:w-4/5 mx-auto md:w-full text-pretty text-sm lg:text-base ">
            Unleash the hidden potential of your digital kingdom with our SEO
            sorcery. We&apos;re not just optimizing, we&apos;re orchestrating a
            symphony of search supremacy, ensuring your online presence reigns
            supreme amidst the digital landscape
          </p>
        </div>
        <div className="p-4 text-center text-pretty text-base md:border-gray-200 md:border-x-2 ">
          <FontAwesomeIcon
            className="text-primary font-extrabold text-4xl -rotate-45"
            icon={faBullhorn}
          />

          <h4 className="text-primary text-lg font-bold my-4">
            Degital Markting
          </h4>
          <p className="w-full sm:w-4/5 mx-auto md:w-full text-pretty text-sm lg:text-base ">
            Join the digital revolution with our innovative digital marketing
            strategies. We don&apos;t just market, we craft digital symphonies that
            resonate across channels, orchestrating an unforgettable journey for
            your brand in the ever-evolving online sphere.
          </p>
        </div>
        <div className="p-4 text-center text-pretty text-base  ">
          <FontAwesomeIcon
            className="text-primary font-extrabold text-4xl "
            icon={faPenToSquare}
          />

          <h4 className="text-primary text-lg font-bold my-4">
            Content Writing
          </h4>
          <p className="w-full sm:w-[4/5] mx-auto md:w-full text-pretty text-sm lg:text-base ">
            Dive into a world where words wield magic and stories shape
            destinies. Our content writing isn&apos;t just about words; it&apos;s about
            weaving narratives that ignite imaginations, spark conversations,
            and leave an indelible mark on the digital landscape.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
