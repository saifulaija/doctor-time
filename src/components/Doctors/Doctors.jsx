
import { doctors } from "../../assets/data/doctors";
import DoctorCard from "./DoctorCard";
const Doctors = () => {
      return (
            <div className="container mx-auto mt-20 font-serif px-8 md:px-10">
                  <h1 className="heading text-center">Our great doctors</h1>
                  <h1 className="text-para text-center mb-10 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni exercitationem <br />voluptatem repellat explicabo vel nam!</h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {doctors.map(doctor=><DoctorCard key={doctor.id} doctor={doctor}></DoctorCard>)}
                  </div>
            </div>
      );
};

export default Doctors;