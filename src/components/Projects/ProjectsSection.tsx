import { useState } from "react";

interface ProjectsSectionProps {
    id: string;
}

const images = ["/Poker.png", "/Poker2.png", "/Poker3.png"]; // Add your image paths here

export function ProjectsSection({ id }: ProjectsSectionProps) {
    const [currentImage, setCurrentImage] = useState(0);

    return (
        <section
            id={id}
            className="flex flex-col z-10 h-screen px-4 py-10 w-3/4"
        >
            <div className="flex flex-row items-center justify-between z-10">
                <h2 className="text-3xl font-light text-white w-2/3 ">
                    Some projects I have been working on
                </h2>
                <hr className="border-t border-[#00C8FF] border-1 mt-2.5 w-full" />
            </div>
            <div className="flex flex-row">
                <div className="flex flex-col justify-start mt-12 w-[150%]">
                    <h4 className="text-3xl font-bold text-[#00C8FF]">Poker</h4>
                    <h4 className="text-md text-gray-500">Duration - 6 weeks</h4>
                    <div className="flex justify-center items-center w-full bg-[#00112D] mt-3 text-white">
                        <h4 className="text-md p-5">
                            During Integration Project 2, I collaborated on creating a
                            full-stack poker website over six weeks using Spring Boot (backend), React (frontend), and
                            Keycloak for secure authentication. This project sharpened my skills in building secure,
                            scalable web applications with modern technologies.
                        </h4>
                    </div>
                </div>

                <div className="flex flex-col justify-start ml-12 items-center relative" style={{ height: '450px', width: '2300px' }}>
                    <div className="relative w-full h-full">
                        <img
                            className="rounded-lg shadow-lg object-contain w-full h-full transition duration-1000 ease-in-out"
                            src={images[currentImage]}
                            alt={`Poker Project ${currentImage + 1}`}
                        />
                    </div>

                    {/* Navigation Circles */}
                    <div className="absolute my-110 flex space-x-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onMouseEnter={() => setCurrentImage(index)}
                                className={`w-4 h-4 rounded-full ${
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