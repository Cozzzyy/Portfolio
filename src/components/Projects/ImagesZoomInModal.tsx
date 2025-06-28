

interface ImageZoomInModalProps {
    currentImage: number;
    images: string[];
    setCurrentImage: (index: number) => void;
    setIsModalOpen: (isOpen: boolean) => void;
}

export function ImageZoomInModal({
                                     currentImage,
                                     images,
                                     setCurrentImage,
                                     setIsModalOpen,
                                 }: ImageZoomInModalProps) {
    return (
        <div className="fixed inset-0 mt-10 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50">
            <div className="relative w-3/4 h-3/4">
                <img
                    className="rounded-lg shadow-lg object-contain w-full h-full"
                    src={images[currentImage]}
                    alt={`Poker Project ${currentImage + 1}`}
                />
            </div>
            <div className="flex justify-center mt-4 space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`w-3 h-3 rounded-full ${
                            currentImage === index
                                ? "bg-[#00C8FF]"
                                : "bg-gray-500"
                        } hover:bg-[#008FCC] transition duration-300`}
                    ></button>
                ))}
            </div>
            <button
                className="mt-5 px-4 py-2 bg-[#00C8FF] text-white rounded-lg hover:bg-[#008FCC] transition duration-300"
                onClick={() => setIsModalOpen(false)}
            >
                Close
            </button>
        </div>
    );
}