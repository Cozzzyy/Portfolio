export function SideBarContact() {
    return (
        <section>
            <div className="bottom-4 left-4 space-y-10 z-10 fixed">
                <a
                    href="https://github.com/cosmin-nechita"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-10 w-10 sm:w-12 sm:h-12 my-5"
                >
                    <img src="/GitHub.png" className="w-full h-full" alt="GitHub" />
                </a>
                <a
                    href="https://www.linkedin.com/in/cosmin-nechita-23ba91273/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-10 w-10 sm:w-12 sm:h-12"
                >
                    <img src="/LinkedIn.png" className="w-full h-full" alt="LinkedIn" />
                </a>
            </div>
        </section>
    );
}