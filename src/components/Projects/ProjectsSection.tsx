interface ProjectsSectionProps {
    id: string;
}

export function ProjectsSection({ id }: ProjectsSectionProps) {
    return (
        <section
            id={id}
            className="flex flex-col items-center z-10 h-screen w-full md:w-2/3 lg:w-1/2 px-4 py-10"
        >
            <div className="flex flex-col items-center justify-center gap-15 z-10">
                <h2 className="text-5xl font-bold text-white mb-8">Projects</h2>
                {/* Add your project components here */}
            </div>
        </section>
    );
}