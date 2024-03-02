import { NavLink } from "react-router-dom";
import SectionTittle from "./SectionTittle";

const About = () => {
    return (
        <div className="my-20 max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row justify-between gap-6">
                <div>
                    <SectionTittle title={'About Me'} />
                    <div className="max-w-[600px]">
                        <p className="text-lg mb-3">
                            I'm a <strong> Frontend Web Developer</strong> building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <strong><NavLink className='underline text-[#d56e3f]'>Projects</NavLink></strong> section. <br />
                            <br />
                            I also like sharing content related to the stuff that I have learned over the years in <strong>Web Development</strong> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <strong><NavLink className='underline text-[#d56e3f]'>Linkedin</NavLink></strong> where I post useful content related to Web Development and Programming
                            <br /><br />
                            I'm open to <strong>Job</strong> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <strong><NavLink>contact</NavLink></strong> me.
                        </p>
                    </div>
                </div>

                <div className="flex justify-self-center">
                    <div className="lg:w-[400px]">
                        <img src="https://raw.githubusercontent.com/a-rayhan/a-rayhan/main/me.jpg" alt="" className="w-full rounded-2xl shadow-xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;