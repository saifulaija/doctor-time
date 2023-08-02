import { FaArrowRight, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  const { photo, name, specialty, avgRating, totalRating } = doctor;
  return (
    <div className=" w-full mx-auto shadow-lg rounded-lg overflow-hidden">
      <img src={photo} alt={name} className="w-full h-80 object-cover" />
      <div className="px-6 py-4">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 text-base mb-2">{specialty}</p>
        <div className="flex items-center mb-2">
          <span className="text-yellow-500 mr-1">
            {avgRating.toFixed(1)} <FaStar className="inline-block w-4 h-4" />
          </span>
          <span className="text-gray-500">{totalRating} reviews</span>
        </div>
        <div className="flex justify-end ">
         <Link to='/'> <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
            <FaArrowRight className="ml-1" />
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
