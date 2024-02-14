import React from "react";
import Typewriter from "typewriter-effect";
import HeroImage from "../assets/IMG_0521.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col front-end-developer justify-center h-full">
        <div>
        <h2 className="text-4xl sm:text-6xl font-bold text-white">
            I'm a 
        </h2>
        <br/>
        <div>
        <h3 className = "text-4xl sm:text-4xl font-bold text-white">
        <Typewriter
                options={{
                strings: ['Front-End Developer',
                "Back-End Developer",
                "Java Coder",
                "Full-Stack Developer"],
                autoStart: true,
                loop: true,
                }}
            />
        </h3>

        </div>

        
       
        </div>
        
            
          <p className="text-gray-500 py-4 max-w-md">
                    Hardworking College Student seeking for an Entry Level Job Bringing forth
                    a motivated attitude and a variety of powerful skills.
                    Currently, I love to build Web application using <span className="text-white font-semibold">MERN Stack</span> 
          </p>

          <div className="hover:scale-95 transition-all duration-400">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center font-semibold
               rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="img-container-user profile-img">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-xl mx-auto w-2/3 "
          />
        </div>
      </div>
    </div>
    
  );
};

export default Home;
