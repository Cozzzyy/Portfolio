import { cn } from "../../../lib/utils.ts";
import React from "react";
import { motion, useAnimate, type HTMLMotionProps } from "framer-motion"

interface ButtonProps extends HTMLMotionProps<"button"> {
    className?: string;
    children: React.ReactNode;
}
export const Button = ({ className, children,...props }: ButtonProps) => {
    const [scope] = useAnimate();

    return (
        <motion.button
            layout
            ref={scope}
            className={cn(
                "flex min-w-[120px] mt-2 items-center justify-center gap-2 rounded-full bg-[#00C8FF] px-5 py-2 font-medium text-white ring-offset-2 transition duration-200 hover:ring-2 hover:ring-[#00C8FF] dark:ring-offset-black",
                className
            )}
            {...props} // ✅ Forward onClick, onFocus, etc.
        >
            <motion.div layout className="flex items-center gap-2">
                <Loader />
                <CheckIcon />
                <motion.span layout>{children}</motion.span>
            </motion.div>
        </motion.button>
    );
};

const Loader = () => {
    return (
        <motion.svg
            animate={{ rotate: [0, 360] }}
            initial={{ scale: 0, width: 0, display: "none" }}
            style={{ scale: 0.5, display: "none" }}
            transition={{ duration: 0.3, repeat: Infinity, ease: "linear" }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            data-loader
            className="text-white"
        >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 3a9 9 0 1 0 9 9" />
        </motion.svg>
    );
};

const CheckIcon = () => {
    return (
        <motion.svg
            initial={{ scale: 0, width: 0, display: "none" }}
            style={{ scale: 0.5, display: "none" }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            data-check
            className="text-white"
        >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M9 12l2 2l4 -4" />
        </motion.svg>
    );
};
