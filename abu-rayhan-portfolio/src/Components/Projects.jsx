import useProjectsData from "../Hooks/useProjectsData";
import ProjectsCard from "./ProjectsCard";
import SectionTittle from "./SectionTittle";

const Projects = () => {

    const [projects] = useProjectsData();

    return (
        <div className="my-20 max-w-7xl mx-auto px-6">
            <SectionTittle title={'Featured Projects'} description={'Here you will find some of the personal and clients projects that I created with each project containing its own case study'} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {
                    projects.map(project => <ProjectsCard key={project.id} project={project} />)
                }
            </div>
        </div>
    );
};

export default Projects;