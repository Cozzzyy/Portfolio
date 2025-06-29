import { motion } from "framer-motion";
import { ProjectOverview } from "./ProjectOverview.tsx";
import { containerVariants } from "../../utils/animations.ts";
import projectsData from "../../../data/projects.json";
import type {Project} from "../../types/Project.ts"; // Import the JSON file

interface ProjectsSectionProps {
    id: string;
}

const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ProjectsSection({ id }: ProjectsSectionProps) {
    return (
        <motion.section
            id={id}
            className="flex flex-col z-10 min-h-screen mb-5 px-8 py-5 w-3/3 lg:w-3/4 lg:px-4 "
            variants={containerVariants}
            initial="hidden"
            animate="show"
        >
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 z-10">
                <h2 className="text-3xl font-light text-white lg:w-2/3">
                    Some projects I have been working on
                </h2>
                <hr className="border-t border-[#00C8FF] mt-2.5 w-full" />
            </div>

            {projectsData.map((project: Project, index: number) => (
                <motion.div
                    key={index}
                    variants={projectVariants}
                    initial="hidden"
                    animate="visible"
                    className="mt-10"
                >
                    <ProjectOverview
                        title={project.title}
                        duration={project.duration}
                        description={project.description}
                        techImages={project.techImages}
                        images={project.images}
                        demoVideoUrl={project.demoVideoUrl}
                    />
                </motion.div>
            ))}
        </motion.section>
    );
}