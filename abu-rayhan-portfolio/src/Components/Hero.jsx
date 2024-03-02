import { FaArrowCircleDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import './Hero.css';
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Hero = () => {
    return (
        <div className="bg-img relative z-40">

            <div className="bg-white h-[80vh] w-full absolute top-0 left-0 opacity-40 -z-40"></div>


            <div className="hidden lg:flex flex-col gap-1 absolute top-1/2 -translate-y-1/2 z-50">
                <NavLink to="https://github.com/a-rayhan" target="_blank" className="w-14 h-14 bg-gray-700 text-white flex justify-center items-center">
                    <FaGithubSquare className="text-4xl cursor-pointer" />
                </NavLink>

                <NavLink to="https://www.linkedin.com/in/a-rayhan/" target="_blank" className="w-14 h-14 bg-gray-700 text-white flex justify-center items-center">
                    <FaLinkedin className="text-4xl" />
                </NavLink>

                <NavLink to="https://www.facebook.com/arayhan0/" target="_blank" className="w-14 h-14 bg-gray-700 text-white flex justify-center items-center">
                    <FaFacebookSquare className="text-4xl" />
                </NavLink>
            </div>



            <div className="text-center h-[80vh] flex justify-center items-center max-w-7xl mx-auto px-6">
                <div>
                    <h1 className="text-5xl mb-8 lg:text-7xl font-semibold leading-tight">
                        Hey, I'm <br className="md:hidden" /> Abu Rayhan <span className="text-[#d56e3f] -ml-4">!</span>
                    </h1>

                    <p className="text-xl mb-12 max-w-3xl mx-auto leading-normal">
                        A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
                    </p>

                    <NavLink to='/projects' className="inline-flex items-center gap-x-3 py-4 px-10 bg-[#d56e3f] rounded-xl text-white font-medium shadow hover:shadow-xl text-lg">
                        PROJECTS
                        <FaArrowCircleDown className="text-xl" />
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Hero;