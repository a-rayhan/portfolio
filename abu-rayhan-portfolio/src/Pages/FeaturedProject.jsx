import ProjectsCard from "../Components/ProjectsCard";
import useProjectsData from "../Hooks/useProjectsData";

const FeaturedProject = () => {

    const [projects] = useProjectsData();

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 pt-10 pb-20 max-w-7xl mx-auto px-6">
            {
                projects.map(project => <ProjectsCard key={project.id} project={project} />)
            }
        </div>
    );
};

export default FeaturedProject;