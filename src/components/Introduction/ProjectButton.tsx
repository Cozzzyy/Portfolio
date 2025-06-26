import { motion } from "framer-motion";
import { itemVariants } from "../../utils/animations.ts";

export function ProjectsButton() {
    return (
        <motion.button
            variants={itemVariants}
            className="btn bg-transparent rounded-xl w-40 sm:w-48 my-8 hover:bg-[#00C8FF] text-white font-semibold hover:text-black py-2 px-4 border border-[#00C8FF] hover:border-transparent z-10 transition duration-300 ease-in-out"
        >
            Projects
        </motion.button>
    );
}