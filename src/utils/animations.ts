import type {Variants} from "framer-motion";

export const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.1,
            staggerChildren: 0.6,
            duration: 1.3,
            ease: [0.25, 0.1, 0.25, 1]
        }
    }
};

export const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1]
        }
    }
};
