import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(!false);

    const navLinks = [
        { href: '/', key: 'home', label: 'Home' },
        { href: '/skills', key: 'about', label: 'Skills' },
        { href: '/about', key: 'services', label: 'About' },
        { href: '/projects', key: 'pricing ', label: 'Projects ' },
        { href: '/contact', key: 'contact', label: 'Contact' },
    ];
    return (
        <nav className="px-5">
            <div className="flex justify-between items-center h-28 max-w-7xl mx-auto px-6">
                <h1 className="text-3xl font-semibold">
                    <NavLink to='/'>
                        Abu Rayhan<span className="text-[#d56e3f]">.</span>
                    </NavLink>
                </h1>

                <div className="hidden lg:block">
                    <ul className="text-lg font-medium flex gap-x-8">

                        {
                            navLinks.map(navLink => (
                                <li key={navLink.key} className="hover:text-[#d56e3f]">
                                    <NavLink to={navLink.href} className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-[#d56e3f]" : ""}>
                                        {navLink.label}
                                    </NavLink>
                                </li>
                            ))
                        }

                        <li>
                            <NavLink to='https://github.com/a-rayhan'>
                                <FaGithub className="text-3xl hover:text-[#d56e3f]" />
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* Mobile Navbar - responsive */}
                <div onClick={() => setToggleMenu(!toggleMenu)} className="lg:hidden">

                    {
                        toggleMenu === true ? <FiMenu className="xl:hidden text-3xl cursor-pointer" /> : <FiMenu className="xl:hidden text-3xl cursor-pointer" />
                    }

                    <div className={`absolute w-full h-[400px] top-0 left-0 pt-20 text-center bg-[#f7f7f7] shadow-xl z-50 flex flex-col text-lg font-medium lg:hidden ${toggleMenu ? 'hidden' : ''}`}>
                        <ul className="text-xl">
                            {
                                navLinks.map(navLink => (
                                    <li key={navLink.key} className="px-8 py-3 hover:bg-[#f7f7f7] cursor-pointer">
                                        <NavLink to={navLink.href} className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-[#d56e3f]" : ""}>
                                            {navLink.label}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;