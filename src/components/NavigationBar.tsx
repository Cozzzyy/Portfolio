import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import "tailwindcss";

const navigation = [
    { name: 'About me', href: '#about-me', current: true },
    { name: 'Projects', href: '#projects', current: false },
    { name: 'Contact', href: '#contact', current: false }
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

function scrollToSection(id: string) {
    const section = document.getElementById(id);
    if (section) {
        const navbarHeight = 64; // Adjust based on your navbar height (e.g., 16 * 4 = 64px)
        const offsetTop = section.offsetTop - navbarHeight;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth',
        });
    }
}

export function NavigationBar() {
    return (
        <Disclosure
            as="nav"
            className="fixed top-0 left-0 w-full text-white shadow-md z-50"
            style={{
                background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e, #ff0080, #7928ca, #2af598)',
                backgroundSize: '400% 400%',
                animation: 'shimmer 15s ease infinite',
            }}
        >
            {({ open, close }) => (
                <>
                    <style>
                        {`
                        @keyframes shimmer {
                            0% {
                                background-position: 0% 50%;
                            }
                            50% {
                                background-position: 100% 50%;
                            }
                            100% {
                                background-position: 0% 50%;
                            }
                        }
                        `}
                    </style>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button */}
                                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:bg-gray-700 hover:text-white focus:ring-0 focus:border-none focus:outline-none">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon aria-hidden="true" className="block size-6" />
                                    ) : (
                                        <Bars3Icon aria-hidden="true" className="block size-6" />
                                    )}
                                </DisclosureButton>
                            </div>
                            <div className="flex flex-1 items-center justify-center md:items-stretch">
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <button
                                                key={item.name}
                                                onClick={() => scrollToSection(item.href.replace('#', ''))}
                                                aria-current={item.current ? 'page' : undefined}
                                                className={classNames(
                                                    item.current ? 'text-white' : 'text-gray-200 hover:text-white',
                                                    'rounded-md px-3 py-2 text-md font-medium relative group focus:ring-0 focus:border-none focus:outline-none',
                                                )}
                                            >
                                                {item.name}
                                                <span className="absolute inset-x-0 bottom-0 h-full bg-white opacity-0 group-hover:opacity-25 group-hover:backdrop-blur-lg transition duration-300 ease-in-out"></span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <DisclosurePanel className="sm:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {navigation.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => {
                                        scrollToSection(item.href.replace('#', ''));
                                        close(); // Close the menu
                                    }}
                                    aria-current={item.current ? 'page' : undefined}
                                    className={classNames(
                                        item.current ? 'text-white' : 'text-gray-200 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium relative group focus:ring-0 focus:border-none focus:outline-none',
                                    )}
                                >
                                    {item.name}
                                    <span className="absolute inset-x-0 bottom-0 h-full bg-white opacity-0 group-hover:opacity-50 group-hover:backdrop-blur-lg transition duration-300 ease-in-out"></span>
                                </button>
                            ))}
                        </div>
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    );
}