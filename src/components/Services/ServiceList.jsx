
import { services } from "../../assets/data/services";
import ServiceCard from "./ServiceCard";

const ServiceList = () => {

      return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-4 mt-[30px] lg:mt-[50px]">
                  {services.map((service,index)=> <ServiceCard key={index} service={service}></ServiceCard>)}
            </div>
      );
};

export default ServiceList;