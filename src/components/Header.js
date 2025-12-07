"use client";
import { useState, useEffect } from "react";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-4 left-0 right-0 z-50 flex justify-center container mx-auto px-4 sm:px-6 lg:px-8">
            <div
                className={`flex container mx-auto px-4 sm:px-6 lg:px-8 mt-5 items-center justify-between rounded-2xl py-2 transition-all duration-300 ${scrolled
                    ? "bg-white text-black shadow-md max-w-3xl"
                    : "bg-[#0a0a0a] text-white"
                    }`}
            >
                <div className="flex items-center gap-2">
                    <div className={`h-6 w-6 rounded-full ${scrolled ? "bg-[#0a0a0a]" : "bg-white"}`} />
                    <span className="font-bold">Abiola</span>
                </div>
                <div className="flex items-center gap-4 justify-end">
                    <div className="flex items-center gap-4">
                        <button
                            type="button"
                            className="flex items-center justify-center rounded-full w-10 h-10 text-current hover:bg-gray-100 transition"
                            aria-label="Open Search"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                viewBox="0 0 16 16"
                                fill="none"
                            >
                                <path
                                    d="M13.8333 13.8333L10.7022 10.7022M10.7022 10.7022C11.607 9.79738 12.1667 8.54738 12.1667 7.16667C12.1667 4.40525 9.9281 2.16667 7.16667 2.16667C4.40525 2.16667 2.16667 4.40525 2.16667 7.16667C2.16667 9.9281 4.40525 12.1667 7.16667 12.1667C8.54738 12.1667 9.79738 11.607 10.7022 10.7022Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                    <a
                        href="#"
                        className={`px-4 py-2 rounded-full text-sm font-medium transition ${scrolled
                            ? "bg-black text-white hover:bg-gray-800"
                            : "bg-white text-black hover:bg-gray-200"
                            }`}
                    >
                        Resume
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;