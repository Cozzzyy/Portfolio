import { motion } from "framer-motion";
import { ProjectOverview } from "./ProjectOverview.tsx";
import { containerVariants } from "../../utils/animations.ts";

interface ProjectsSectionProps {
    id: string;
}

const pokerImages = ["/Poker.png", "/Poker2.png", "/Poker3.png"];
const pokerTechImages = ["/Spring.png", "/React.png"];
const vrImages = ["/vr3.png", "/vr1.png", "/vr2.png"];

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

            <motion.div
                variants={projectVariants}
                initial="hidden"
                animate="visible"
                className="mt-10"
            >
                <ProjectOverview
                    title="Poker"
                    duration="6 weeks"
                    description="During Integration Project 2, I collaborated on creating a full-stack poker website over six weeks using Spring Boot (backend), React (frontend), and Keycloak for secure authentication. This project sharpened my skills in building secure, scalable web applications with modern technologies."
                    techImages={pokerTechImages}
                    images={pokerImages}
                />
            </motion.div>

            <motion.div
                variants={projectVariants}
                initial="hidden"
                animate="visible"
                className="mt-10"
            >
                <ProjectOverview
                    title="3D Bounded Boxes in VR"
                    duration="6 weeks"
                    description="For this project, I explored how Virtual Reality (VR) could make labeling 3D point clouds easier and more efficient than using a regular mouse and keyboard. I built a simple VR app where users can place 3D bounding boxes around objects in LiDAR point clouds. The app runs in a web browser using tools like Three.js and WebXR, and it works with a VR headset and a high-performance computer."
                    techImages={pokerTechImages}
                    images={vrImages}
                />
            </motion.div>
        </motion.section>
    );
}