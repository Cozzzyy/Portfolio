import { useState } from "react";
import { ImageZoomInModal } from "./ImagesZoomInModal.tsx";

interface ProjectOverviewProps {
    title: string;
    duration: string;
    description: string;
    techImages: string[];
    images: string[];
}

export function ProjectOverview({
                                    title,
                                    duration,
                                    description,
                                    techImages,
                                    images,
                                }: ProjectOverviewProps) {
    const [currentImage, setCurrentImage] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="flex flex-col lg:flex-row mt-10 gap-10">
            {/* Text Section */}
            <div className="flex flex-col lg:justify-start mt-6 lg:mt-12 w-full lg:w-1/2">
                <h4 className="text-3xl font-bold text-[#00C8FF]">{title}</h4>
                <h4 className="text-md text-gray-500">Duration - {duration}</h4>

                <div className="flex flex-col justify-center items-center w-full bg-[#00112D] mt-4 text-white rounded-lg shadow-md">
                    <h4 className="text-md p-5">{description}</h4>
                </div>

                <div className="flex flex-row w-full mt-7 gap-4">
                    {techImages.map((src, index) => (
                        <img
                            key={index}
                            className="w-10 h-10 sm:w-11 sm:h-11"
                            src={src}
                            alt={`Tech ${index + 1}`}
                        />
                    ))}
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

            {/* Modal */}
            {isModalOpen && (
                <ImageZoomInModal
                    currentImage={currentImage}
                    images={images}
                    setCurrentImage={setCurrentImage}
                    setIsModalOpen={setIsModalOpen}
                />
            )}
        </div>
    );
}