

import { FaArrowRight } from "react-icons/fa";

const DoctorServiceCard = ({service}) => {
      const { image, name, desc } = service
  return (
    <div className="max-w-xs mx-auto shadow-lg rounded-lg overflow-hidden font-serif">
      <img src={image} alt={name} className="w-full h-32 object-cover" />
      <div className="px-6 py-4">
        <h3 className="text-xl text-headingColor font-bold mb-2">{name}</h3>
        <p className="text-textColor text-base">{desc}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a
          href="#"
          className="text-blue-500 inline-flex items-center text-sm"
        >
          Read more
          <FaArrowRight className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default DoctorServiceCard;
