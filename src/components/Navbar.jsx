import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
    // menu
    const menuLink = [
        { id: 1, name: "Beranda", href: "beranda" },
        { id: 2, name: "Tentang", href: "tentang" },
        { id: 3, name: "Proyek", href: "proyek" },
        // { id: 4, name: "Keahlian", href: "keahlian" },
        { id: 5, name: "Kontak", href: "kontak" },
    ];

    // scroll
    const [isScroll, setIsScroll] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Open sidebar
    const [isOpen, setIsOpen] = React.useState(false);
    const sidebarRef = React.useRef();

    const handleOpenSidebar = () => {
        setIsOpen(!isOpen);
    };

    // Close sidebar when clicking outside
    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <nav
            className={`w-full fixed top-0 left-0 z-10 transition-all duration-700 ease-in-out ${
                isScroll ? "bg-white shadow-md " : "bg-transparent text-white"
            }`}
        >
            <div className="container py-5">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                            Wyntch.
                        </h1>
                    </div>
                    <div className="hidden md:flex">
                        <ul className="flex gap-6">
                            {menuLink.map((link) => (
                                <li key={link.id}>
                                    <Link
                                        to={link.href}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        className="cursor-pointer text-lg font-medium hover:text-primary hover:border-b-2 pb-2 hover:border-primary transition-all duration-100 ease-in-out"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex gap-4 items-center">
                        {/* language */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 hidden md:flex"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                            />
                        </svg>
                        <select
                            name="language"
                            id="language"
                            className="md:block hidden appearance-none px-4 py-2 rounded-md bg-white border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                            <option value="id">Indonesia</option>
                            <option value="en">English</option>
                            <option value="jp">日本語</option>
                        </select>
                        {/* language */}

                        <div
                            onClick={handleOpenSidebar}
                            className="md:hidden cursor-pointer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-7 h-7"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navbar Mobile */}
            {isOpen && (
                <div
                    ref={sidebarRef}
                    className="bg-white md:hidden w-[80%] h-[100vh] z-10 fixed top-0 left-0 transition-all duration-300 ease-in-out"
                >
                    <h1 className="container pt-5 text-3xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                        Wyntch.
                    </h1>
                    <ul className="flex flex-col gap-6 p-6">
                        {menuLink.map((link) => (
                            <li key={link.id}>
                                <Link
                                    to={link.href}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="cursor-pointer text-lg text-black font-medium hover:text-primary hover:border-b-2 pb-2 hover:border-primary transition-all duration-100 ease-in-out"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
