import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GoLinkExternal } from "react-icons/go";
import { FaGithub } from "react-icons/fa6";

const ProjectDetails = () => {
    const [project, setProject] = useState([]);

    const projectsData = useLoaderData();

    const { detailsId } = useParams();

    useEffect(() => {
        const findProjectId = projectsData.find(item => item.id == detailsId);
        setProject(findProjectId);
    }, [detailsId, projectsData]);

    return (
        <div className="max-w-3xl mx-auto pt-10 pb-20">
            <h2 className="text-3xl font-semibold mb-12">
                {project.title}
            </h2>

            <img src={project.image} alt="" className="w-full md:h-[500px] object-cover rounded-2xl mx-auto mb-10" />

            <h2 className="text-2xl font-semibold mb-5">
                Project Overview
            </h2>

            <p className="text-lg mb-12">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-4">
                    <NavLink to={project.githublink} className="bg-[#d56e3f] px-4 py-2 flex items-center gap-2 font-medium text-white rounded">
                        Code <FaGithub className="text-xl" />
                    </NavLink>

                    <NavLink to={project.livelink} className="hover:bg-[#d56e3f] border-2 border-[#d56e3f] px-4 py-2 flex items-center gap-2 font-medium hover:text-white rounded">
                        Live link <GoLinkExternal className="text-xl" />
                    </NavLink>
                </div>
        </div>
    );
};

export default ProjectDetails;