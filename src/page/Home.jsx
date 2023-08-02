
import heroImg1 from "../assets/images/hero-img01.png";
import heroImg2 from "../assets/images/hero-img02.png";
import heroImg3 from "../assets/images/hero-img03.png";

const Home = () => {
  return (
    <>
      <section className="hero-section  2xl:h-[800px] font-serif ">
        <div className="container mx-auto px-8 md:px-10">
          <div className="flex flex-col md:flex-row gap-[90px] items-center justify-between">
            {/* hero content */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] mt-[60px] md:leading-[70px]">
                  We help patients live a healthy, longer life
                </h1>
                <p className="text-para">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
                  aut incidunt ab? Magni vel odit tempora exercitationem ratione
                  odio aliquid! Maxime dolores eos mollitia. Dicta et quis
                  temporibus provident repellat totam, at earum aut, reiciendis
                  doloremque voluptas laborum cumque, sapiente qui. Quis rerum
                  aliquam aperiam facilis numquam sed, nostrum expedita.
                </p>
                <button className="btn mt-[30px]">
                  Request an Appointment
                </button>
              </div>
              {/* hero counter */}

              <div className="mt-[30px] lg:mt-[60px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[25px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[40px] lg:leading-[54px] font-[900] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text-para">Years of Experience</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[40px] lg:leading-[54px] font-[900] text-headingColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text-para">Client Location</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[40px] lg:leading-[54px] font-[900] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text-para">Patients Satisfaction</p>
                </div>
              </div>
            </div>

            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg1} alt="" />
              </div>
              <div className="mt-[30px]">
                <img src={heroImg2} alt="" className="w-full mb-[30px]" />
                <img src={heroImg3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
