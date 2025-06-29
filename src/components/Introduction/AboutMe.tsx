import { motion } from "framer-motion";
import {containerVariants, itemVariants} from "../../utils/animations.ts";
import {ProjectsButton} from "./ProjectButton.tsx";

interface AboutMeProps {
    id: string;
}

export function AboutMe({ id }: AboutMeProps) {
    return (
        <motion.div
            variants={containerVariants}
            id={id}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center justify-center z-10 h-screen w-full md:w-2/3 lg:w-1/2 px-4 my-10"
        >
            <motion.h1
                variants={itemVariants}
                initial="hidden"
                animate="show"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white z-10 font-sans font-bold text-center"
            >
                Cosmin Nechita
            </motion.h1>
            <motion.h1
                variants={itemVariants}
                initial="hidden"
                animate="show"
                className="text-lg sm:text-md text-[#00C8FF] z-10 my-4 font-sans text-center"
            >
                Full Stack Developer
            </motion.h1>
            <motion.h1
                variants={itemVariants}
                initial="hidden"
                animate="show"
                className="text-base sm:text-lg text-white opacity-75 z-10 my-3 font-sans text-center font-light max-w-xl"
            >
                Hi, I’m Cosmin, a full stack developer with a passion for solving complex problems and building clean,
                scalable solutions. I specialize in Spring Boot, .NET, and React, but I’m always exploring new
                technologies to stay sharp and versatile.
            </motion.h1>
            <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="show"
                className="flex flex-wrap items-center justify-center gap-6 z-10 my-5"
            >
                <img className="w-12 h-12 sm:w-19 sm:h-19" src="/java.png" alt="Java" />
                <img className="w-10 h-10 sm:w-14 sm:h-14" src="/React.png" alt="React" />
                <img className="w-10 h-10 sm:w-14 sm:h-14" src="/Spring.png" alt="Spring" />
                <img className="w-10 h-10 sm:w-14 sm:h-14" src="/NET core.png" alt=".NET" />
                <img className="w-10 h-10 sm:w-14 sm:h-14" src="/PostgresSQL.png" alt="DB" />
            </motion.div>
            <ProjectsButton/>
        </motion.div>
    );
}
