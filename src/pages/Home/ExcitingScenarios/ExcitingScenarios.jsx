import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ExcitingScenarios = () => {
  useEffect(() => {
    AOS.init({ offset: 100, duration: 800 });
    // Reinitialize AOS after the page reloads
    window.addEventListener("load", AOS.refresh);

    return () => {
      window.removeEventListener("load", AOS.refresh);
    }; // Initialize AOS with desired options
  }, []);
  return (
    <div className=" py-10 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center">
          <div className="lg:w-1/2 relative my-10" data-aos="zoom-in">
            <div className="badge absolute -right-3 md:right-1 font-montserrat font-semibold -mt-4 h-8 px-5 badge-secondary">
              Top Rated
            </div>
            <img
              src="https://i.ibb.co/4Nb23rK/image.png"
              alt="Section 1"
              className="max-w-xs md:max-w-xl md:pl-10 h-auto rounded-lg shadow-lg mb-8"
            />

            <img
              src="https://i.ibb.co/cTfPVvT/image.png"
              alt=""
              className="absolute rounded -top-10 md:-top-16 -left-2 md:left-0 w-32 h-auto md:w-40 lg:w-48"
            />
            <img
              src="https://i.ibb.co/Jrh2Tx2/image.png"
              alt=""
              className="absolute rounded bottom-0   md:-bottom-5 -right-2 md:-right-6 w-32 h-auto md:w-40 lg:w-48"
            />
          </div>

          <div className="lg:w-1/2 lg:pl-16 " data-aos="zoom-in-up">
            <h2 className="text-3xl font-bold text-blue-500 mb-4">
              Exciting Battle Toys
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Immerse yourself in thrilling battles with our wide range of
              action figures and play sets. Create epic battles between heroes
              and villains, and let your imagination run wild!
            </p>
            {/* Add a button or link for more details */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExcitingScenarios;
