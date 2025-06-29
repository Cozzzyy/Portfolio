export function Footer() {
    return (
        <footer className="bg-gradient-to-b from-transparent to-[#00112D] text-white py-6 z-10 mt-40">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
                    {/* Logo Section */}
                    <div className="flex flex-col items-center">
                        <h2 className="text-2xl font-bold text-[#00C8FF]">Let's Connect</h2>
                        <p className="text-gray-400 font-light mt-2 text-center lg:text-left">
                            I'm a student passionate about learning and building innovative solutions for the future.
                        </p>
                        <div className={"flex flex-row gap-2"}>
                            <a href="https://github.com/Cozzzyy" target="_blank" rel="noopener noreferrer">
                                <img className={"w-7 h-7 mt-4 rounded-md"} src="/white-github.png" alt="GitHub Logo"/>
                            </a>
                            <a href="https://www.linkedin.com/in/cosmin-nechita-23ba91273/" target="_blank" rel="noopener noreferrer">
                                <img className={"w-7 h-7 mt-4 rounded-md"} src="/LinkedIn.png" alt="LinkedIn Logo"/>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="mt-6 text-center text-gray-400">
                    <p>&copy; 2025 Cosmin Nechita. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}