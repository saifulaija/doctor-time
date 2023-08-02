import { Link } from "react-router-dom";
import featureImg from "../../assets/images/feature-img.png";

const Feature = () => {
  return (
    <div className="container mx-auto mt-20 px-8 md:px-10 ">
      <div className="flex items-center gap-5 font-serif justify-between flex-col lg:flex-row">
        <div className="xl:w-[670px]">
          <h2 className="heading mt-[30px]">
            Get virtual treatment <br />
            anytime
          </h2>
          <ul className="pl-4">
            <li className="text-para">1. Schedule the appointment directly. </li>
            <li className="text-para">
              2. Search for your physician here, and contact their office.{" "}
            </li>
            <li className="text-para">
              3. View our physicians who are accepting new patients, use the
              online scheduling tool to select an appointment time.
            </li>
          </ul>
          <Link to="/">
            <button className="btn mt-[15px]">Learn More</button>
          </Link>
        </div>
        <div>
          <img src={featureImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Feature;
