import { FaGithub } from "react-icons/fa6";
import { GoLinkExternal } from "react-icons/go";
import { TbArticle } from "react-icons/tb";
import { NavLink } from "react-router-dom";


const ProjectsCard = ({ project }) => {
    const { id, title, image, overview, githublink, livelink } = project;
    return (
        <div className="lg:max-w-[624px] rounded-2xl cursor-pointer border hover:border">
            <div className="flex-1 h-[250px] mb-2">
                <img src={image} alt="" className="h-full w-full object-cover" />
            </div>

            <div className="flex-1 p-4">
                <h2 className="text-2xl font-semibold mb-4">
                    {title}
                </h2>

                <div className="mb-5">
                    <p className="line-clamp-3 mb-3">
                        {overview}

                    </p>

                    <NavLink to={`/details/${id}`} className="font-medium text-[#d56e3f]">
                        See more
                    </NavLink>
                </div>

                <div className="flex flex-wrap gap-4">
                    <NavLink to={githublink} className="bg-[#d56e3f] px-4 py-2 flex items-center gap-2 font-medium text-white rounded">
                        Code <FaGithub className="text-xl" />
                    </NavLink>

                    <NavLink to={livelink} className="hover:bg-[#d56e3f] border-2 border-[#d56e3f] px-4 py-2 flex items-center gap-2 font-medium hover:text-white rounded">
                        Live link <GoLinkExternal className="text-xl" />
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default ProjectsCard;