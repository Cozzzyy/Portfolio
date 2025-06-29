import { useState } from "react";
import { ImageZoomInModal } from "./ImagesZoomInModal.tsx";

interface ProjectOverviewProps {
    title: string;
    duration: string;
    description: string;
    techImages: string[];
    images: string[];
    demoVideoUrl: string; // Add a prop for the YouTube video URL
}

export function ProjectOverview({
                                    title,
                                    duration,
                                    description,
                                    techImages,
                                    images,
                                    demoVideoUrl,
                                }: ProjectOverviewProps) {
    const [currentImage, setCurrentImage] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false); // State for video modal

    return (
        <div className="flex flex-col lg:flex-row lg:md-5 gap-10">
            <div className="flex flex-col lg:mt-12 w-full lg:w-1/2">
                <h4 className="text-3xl font-bold text-[#00C8FF]">{title}</h4>
                <div className={"flex flex-row justify-between items-center mt-4"}>
                    <h4 className="text-md w-full text-gray-500">Duration - {duration}</h4>
                    {/* Tech Images Section for mobile */}
                    <div className="flex flex-row w-full gap-4 justify-end">
                        {techImages.map((src, index) => (
                            <img
                                key={index}
                                className="w-7 h-7 sm:w-8 sm:h-8"
                                src={src}
                                alt={`Tech ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
                <div
                    className="flex flex-col justify-center items-center w-full bg-[#00112D] mt-4 text-white rounded-lg shadow-md">
                    <h4 className="text-md p-5">{description}</h4>
                </div>
                <div className={"flex flex-row mt-5"}>
                    <button
                        className={"py-1.5 border-[#00C8FF] border-1 text-white rounded-lg hover:bg-[#008FCC] transition duration-300 w-1/5"}
                        onClick={() => setIsVideoModalOpen(true)} // Open video modal
                    >
                        Demo
                    </button>
                    <img className={"w-7 h-7 sm:w-8 sm:h-8 ml-4 mt-0.5"} src="/white-github.png" alt="GitHub" />
                </div>
            </div>

            {/* Image Section */}
            <div className="flex flex-col items-center w-full lg:w-[800px] relative">
                <div
                    className="relative w-full h-45 sm:h-80 md:h-96 lg:h-[400px] group cursor-pointer"
                    onClick={() => setIsModalOpen(true)}
                >
                    <img
                        className="rounded-lg shadow-lg object-contain w-full h-full transition duration-1000 ease-in-out"
                        src={images[currentImage]}
                        alt={`Project Image ${currentImage + 1}`}
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

            {/* Image Modal */}
            {isModalOpen && (
                <ImageZoomInModal
                    currentImage={currentImage}
                    images={images}
                    setCurrentImage={setCurrentImage}
                    setIsModalOpen={setIsModalOpen}
                />
            )}

            {isVideoModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                    <div className="relative w-3/4 h-3/4 bg-white rounded-lg shadow-lg">
                        <iframe
                            className="w-full h-full rounded-lg"
                            src={demoVideoUrl}
                            title="Demo Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <button
                            className="absolute top-2 right-2 px-4 py-2 bg-[#00C8FF] text-white rounded-lg hover:bg-[#008FCC] transition duration-300"
                            onClick={() => setIsVideoModalOpen(false)} // Close video modal
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}