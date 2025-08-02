import {motion} from "framer-motion";
import {ProjectOverview} from "./ProjectOverview.tsx";
import {containerVariants} from "../../utils/animations.ts";
import projectsData from "../../../data/projects.json";
import type {Project} from "../../types/Project.ts";
import FadeContent from '../Ui/Animations/FadeContent.tsx'
import {TextAnimate} from "../Ui/Animations/TextAnimate.tsx";

interface ProjectsSectionProps {
    id: string;
}

export function ProjectsSection({id}: ProjectsSectionProps) {
    return (
        <motion.section
            id={id}
            className="flex flex-col z-10 min-h-screen mb-8 px-8 py-5 w-3/3 lg:w-3/4 lg:px-4 gap-15 "
            variants={containerVariants}
            initial="hidden"
            animate="show"
        >
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 z-10">
                <TextAnimate animation="blurInUp" by="character" as={'h2'}
                             className={"text-3xl font-light text-white lg:w-2/3"} once>

                    Some projects I have been working on

                </TextAnimate>
                <hr className="border-t border-[#00C8FF] mt-2.5 w-full"/>
            </div>
            {projectsData.map((project: Project) => (
                <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                    <ProjectOverview
                        title={project.title}
                        duration={project.duration}
                        description={project.description}
                        techImages={project.techImages}
                        images={project.images}
                        demoVideoUrl={project.demoVideoUrl}
                        gitHubUrl={project.githubUrl}
                    />
                </FadeContent>
            ))}
        </motion.section>
    );
}