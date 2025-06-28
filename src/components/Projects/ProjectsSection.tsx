import { useState } from "react";

interface ProjectsSectionProps {
    id: string;
}

const images = ["/Poker.png", "/Poker2.png", "/Poker3.png"];

export function ProjectsSection({ id }: ProjectsSectionProps) {
    const [currentImage, setCurrentImage] = useState(0);

    return (
        <section
            id={id}
            className="flex flex-col z-10 min-h-screen mb-5 px-8 py-8 w-3/3 lg:w-3/4 lg:px-4 "
        >
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 z-10">
                <h2 className="text-3xl font-light text-white lg:w-2/3">
                    Some projects I have been working on
                </h2>
                <hr className="border-t border-[#00C8FF] mt-2.5 w-full" />
            </div>

            <div className="flex flex-col lg:flex-row mt-10 gap-10">
                {/* Text Section */}
                <div className="flex flex-col lg:justify-start mt-6 lg:mt-12 w-full lg:w-1/2">
                    <h4 className="text-3xl font-bold text-[#00C8FF]">Poker</h4>
                    <h4 className="text-md text-gray-500">Duration - 6 weeks</h4>

                    <div className="flex flex-col justify-center items-center w-full bg-[#00112D] mt-4 text-white rounded-lg shadow-md">
                        <h4 className="text-md p-5">
                            During Integration Project 2, I collaborated on creating a full-stack poker website over six weeks using Spring Boot (backend), React (frontend), and Keycloak for secure authentication. This project sharpened my skills in building secure, scalable web applications with modern technologies.
                        </h4>
                    </div>

                    <div className="flex flex-row w-full mt-7 gap-4">
                        <img className="w-10 h-10 sm:w-11 sm:h-11" src="/Spring.png" alt="Spring" />
                        <img className="w-10 h-10 sm:w-11 sm:h-11" src="/React.png" alt="React" />
                    </div>
                </div>

                {/* Image Section */}
                <div className="flex flex-col items-center w-full lg:w-[800px] relative">
                <div className="relative w-full h-45 sm:h-80 md:h-96 lg:h-[400px]">
                        <img
                            className="rounded-lg shadow-lg object-contain w-full h-full transition duration-1000 ease-in-out"
                            src={images[currentImage]}
                            alt={`Poker Project ${currentImage + 1}`}
                        />
                    </div>

                    {/* Navigation Circles */}
                    <div className="flex justify-center mt-4 space-x-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onMouseEnter={() => setCurrentImage(index)}
                                className={`w-3 h-3 rounded-full ${
                                    currentImage === index
                                        ? "bg-[#00C8FF]"
                                        : "bg-gray-500"
                                } hover:bg-[#008FCC] transition duration-300`}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
