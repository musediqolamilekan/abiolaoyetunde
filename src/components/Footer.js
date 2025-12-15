// components/Footer.jsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import {
    FaXTwitter,
    FaYoutube,
    FaLinkedin,
    FaGithub,
    FaInstagram,
    FaTiktok,
    FaDiscord,
} from "react-icons/fa6";
import { Check, Globe, ChevronUp, ChevronDown } from "lucide-react";

const LANGS = [
    { code: "en-US", label: "English", region: "United States" },
    { code: "ja", label: "日本語" },
    { code: "es-ES", label: "español", region: "España" },
    { code: "es-LA", label: "español", region: "Latinoamérica" },
    { code: "de", label: "Deutsch" },
    { code: "da", label: "dansk" },
    { code: "fi", label: "suomi" },
    { code: "fr-FR", label: "français", region: "France" },
    { code: "hi", label: "हिन्दी" },
    { code: "bn", label: "বাংলা" },
    { code: "te", label: "తెలుగు" },
    { code: "id", label: "Indonesia" },
    { code: "it", label: "italiano" },
    { code: "ko", label: "한국어" },
    { code: "nb", label: "norsk bokmål" },
    { code: "nl", label: "Nederlands" },
    { code: "pl", label: "polski" },
    { code: "pt-BR", label: "português", region: "Brasil" },
    { code: "sv", label: "svenska" },
    { code: "tr", label: "Türkçe" },
    { code: "vi", label: "Tiếng Việt" },
    { code: "zh-CN", label: "中文", region: "中国" },
    { code: "zh-TW", label: "中文", region: "台灣" },
    { code: "zh-HK", label: "中文", region: "香港" },
];

export default function Footer() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("en-US"); // default
    const btnRef = useRef(null);
    const popRef = useRef(null);

    // Close on outside click or Esc
    useEffect(() => {
        const onDocClick = (e) => {
            if (
                open &&
                popRef.current &&
                btnRef.current &&
                !popRef.current.contains(e.target) &&
                !btnRef.current.contains(e.target)
            ) {
                setOpen(false);
            }
        };
        const onEsc = (e) => {
            if (e.key === "Escape") setOpen(false);
        };
        document.addEventListener("mousedown", onDocClick);
        document.addEventListener("keydown", onEsc);
        return () => {
            document.removeEventListener("mousedown", onDocClick);
            document.removeEventListener("keydown", onEsc);
        };
    }, [open]);

    const activeLang = LANGS.find((l) => l.code === active) || LANGS[0];

    return (
        <footer className="w-full py-8 text-black">
            <div className="mx-auto max-w-6xl px-4 flex flex-col items-center gap-6">
                <div className="w-full flex flex-col sm:flex-row items-center justify-between text-sm gap-4">
                    <h2 className="text-center lg:text-left text-2xl">
                        Abiola © {new Date().getFullYear()}{" "}
                        <a href="#" className="ml-3 text-black hover:underline">
                            Manage Cookies
                        </a>
                    </h2>
                    <div className="relative">
                        <button
                            ref={btnRef}
                            onClick={() => setOpen((v) => !v)}
                            className="flex cursor-pointer items-center gap-2 rounded-full bg-neutral-800 px-4 py-2 text-white focus:outline-none"
                            aria-haspopup="listbox"
                            aria-expanded={open}
                        >
                            <Globe size={16} />
                            <span>{activeLang.label}</span>
                            {activeLang.region && (
                                <span className="text-neutral-400">{activeLang.region}</span>
                            )}
                            {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>
                        {open && (
                            <div
                                ref={popRef}
                                className="absolute right-0 bottom-full mb-2 w-64 max-h-[70vh] overflow-auto rounded-xl bg-neutral-800 p-2 shadow-2xl ring-1 ring-white/10"
                                role="listbox"
                            >
                                {LANGS.map((l) => {
                                    const isActive = l.code === active;
                                    return (
                                        <button
                                            key={l.code}
                                            onClick={() => {
                                                setActive(l.code);
                                                setOpen(false);
                                            }}
                                            className={`w-full cursor-pointer flex items-center justify-between rounded-lg px-3 py-2 text-left hover:bg-neutral-800 ${isActive ? "text-white" : "text-neutral-300"
                                                }`}
                                            role="option"
                                            aria-selected={isActive}
                                        >
                                            <div className="flex items-baseline gap-2">
                                                <span>{l.label}</span>
                                                {l.region && (
                                                    <span className="text-neutral-400 text-xs">{l.region}</span>
                                                )}
                                            </div>
                                            {isActive && <Check size={16} className="shrink-0" />}
                                        </button>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </footer>
    );
}