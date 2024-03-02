import { NavLink } from "react-router-dom";
import SectionTittle from "./SectionTittle";
import { IoArrowRedoSharp } from "react-icons/io5";
import { FaEnvelopeOpen } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";


const Contact = () => {
    return (
        <div className="mt-10 mb-20 max-w-7xl mx-auto px-6">
            <SectionTittle title={'Get In Touch'} description={'Feel free to Contact me by submitting the form below and I will get back to you as soon as possible'} />
            <div className="">
                <div className="mb-20">
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-52">
                        <div className="flex items-center gap-5">
                            <div className="bg-[#d56e3f] w-16 h-16 rounded-full flex justify-center items-center text-white text-2xl shadow-lg">
                                <FaEnvelopeOpen />
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-1">
                                    Email
                                </h3>

                                <h2 className="mb-1 text-lg">
                                    aburayhandh@gmail.com
                                </h2>

                                <NavLink className='flex items-center gap-3 text-sm'>
                                    Write me <IoArrowRedoSharp />
                                </NavLink>
                            </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <div className="bg-[#d56e3f] w-16 h-16 rounded-full flex justify-center items-center text-white text-2xl shadow-lg">
                                <RiWhatsappFill />
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-1">
                                    Whatsapp
                                </h3>

                                <h2 className="mb-1 text-lg">
                                    +8801829676174
                                </h2>

                                <NavLink className='flex items-center gap-3 text-sm'>
                                    Write me <IoArrowRedoSharp />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;