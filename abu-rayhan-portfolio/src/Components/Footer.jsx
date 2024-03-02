import { FaGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="">
            <hr />
            <div className="py-10 flex flex-col md:flex-row justify-between items-center gap-5 max-w-7xl mx-auto px-6">
                <div>
                    <p className="text-sm font-medium opacity-60">
                        © Copyright Abu Rayhan. All rights reserved
                    </p>
                </div>
                <div className="flex text-2xl cursor-pointer gap-3">
                    <NavLink to='https://github.com/a-rayhan'>
                        <FaGithub className="hover:text-[#d56e3f]" />
                    </NavLink>

                    <NavLink to='https://www.linkedin.com/in/a-rayhan/'>
                        <IoLogoLinkedin className="hover:text-[#d56e3f]" />
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Footer;