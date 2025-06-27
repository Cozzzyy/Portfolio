export function SideBarContact() {
    return (
        <section>
            <div className="bottom-6 left-4 space-y-10 z-10 fixed">
                <a
                    href="https://github.com/cosmin-nechita"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-12 h-12"
                >
                    <img src="/GitHub.png" className="w-full h-full mb-4" alt="GitHub" />
                </a>
                <a
                    href="https://www.linkedin.com/in/cosmin-nechita-23ba91273/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-12 h-12"
                >
                    <img src="/LinkedIn.png" className="w-full h-full" alt="LinkedIn" />
                </a>
            </div>
        </section>
    );
}