import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="container mx-auto px-8 md:px-10 my-10">
      {/* {about image} */}
      <div className="flex justify-between gap-[50px] md:gap-[100px] flex-col lg:flex-row">
        <div className="relative w-3/4 md:-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
          <img src={aboutImg} alt="" />
          <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
            <img src={aboutCardImg} alt="" />
          </div>

          {/* about content  */}
        </div>
        <div className="w-full md:w-1/2 xl:w-[670px] order-1 lg:order-2">
          <h2 className="heading">Proud to be one of the nations best</h2>
          <p className="text-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde delectus velit itaque vitae, veniam in nam dolor? Odio laborum aperiam dolorum deleniti a quis provident ipsam sunt! In illo culpa suscipit ipsa eveniet nesciunt earum non, asperiores aliquam explicabo quas ad animi beatae? Esse, in tempora itaque consequatur ad libero?</p>
          <p className="text-para mt-[30px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur vitae maiores laborum repudiandae eum dolores animi assumenda sit possimus eius tempora temporibus architecto, odio voluptate aliquam vel doloribus, laudantium alias doloremque quisquam aliquid ipsum accusamus. Dolor omnis quam ullam a.</p>
        
         <Link to='/'> <button className="btn mt-[30px]">Learn More</button></Link>
         
        </div>
      </div>
    </div>
  );
};

export default About;
