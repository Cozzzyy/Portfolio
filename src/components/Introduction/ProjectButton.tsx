import { motion } from "framer-motion";
import { itemVariants } from "../../utils/animations.ts";

function scrollToSection(id: string) {
    const section = document.getElementById(id);
    if (section) {
        const navbarHeight = 64; // Adjust based on your navbar height (e.g., 16 * 4 = 64px)
        const offsetTop = section.offsetTop - navbarHeight;
        window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
        });
    }
}

export function ProjectsButton() {
    return (
        <motion.button
            variants={itemVariants}
            className="btn bg-transparent rounded-xl w-40 sm:w-48 my-8 hover:bg-[#00C8FF] text-white font-semibold hover:text-black py-2 px-4 border border-[#00C8FF] hover:border-transparent z-10 transition duration-300 ease-in-out"
            onClick={() => scrollToSection("projects")} // Add onClick handler
        >
            Projects
        </motion.button>
    );
}