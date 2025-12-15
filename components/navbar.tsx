"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    return (
        <nav className="w-full bg-[var(--charcoal)] border-b-2 border-[var(--brown-red)]">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-xl font-semibold tracking-tight text-[var(--peach-glow)]">
                            Roseware
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        <div className="relative">
                            <button
                                onClick={() => setServicesOpen(!servicesOpen)}
                                className="text-sm font-medium text-[var(--peach-glow)] hover:text-white flex items-center gap-1"
                            >
                                Services <ChevronDown className="h-4 w-4" />
                            </button>
                            {servicesOpen && (
                                <div className="absolute mt-2 bg-[var(--charcoal)] border border-[var(--brown-red)] shadow-lg rounded-lg py-2 min-w-[220px] z-10">
                                    <Link href="/services/software" className="block px-4 py-2 text-[var(--peach-glow)] hover:bg-[var(--brown-red)] hover:text-white transition">Software Development</Link>
                                    <Link href="/services/electrical" className="block px-4 py-2 text-[var(--peach-glow)] hover:bg-[var(--brown-red)] hover:text-white transition">Electrical Engineering</Link>
                                    <Link href="/services/mechanics" className="block px-4 py-2 text-[var(--peach-glow)] hover:bg-[var(--brown-red)] hover:text-white transition">General Maintenance</Link>
                                </div>
                            )}
                        </div>
                        <Link href="/about" className="text-sm font-medium text-[var(--peach-glow)] hover:text-white transition">
                            About
                        </Link>
                        <Link href="/contact" className="text-sm font-medium text-[var(--peach-glow)] hover:text-white transition">
                            Contact
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-[var(--peach-glow)] hover:text-white">
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-[var(--slate-grey)] border-t-2 border-[var(--brown-red)]">
                    <Link href="/about" className="block px-4 py-2 text-[var(--peach-glow)] hover:bg-[var(--brown-red)] hover:text-white transition">About</Link>
                    <Link href="/contact" className="block px-4 py-2 text-[var(--peach-glow)] hover:bg-[var(--brown-red)] hover:text-white transition">Contact</Link>
                    <div className="border-t border-[var(--brown-red)]">
                        <button
                            onClick={() => setServicesOpen(!servicesOpen)}
                            className="w-full text-left px-4 py-2 text-[var(--peach-glow)] hover:bg-[var(--brown-red)] hover:text-white flex items-center justify-between transition"
                        >
                            Services <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                        </button>
                        {servicesOpen && (
                            <div className="pl-4">
                                <Link href="/services/software" className="block px-4 py-2 text-[var(--peach-glow)] hover:bg-[var(--brown-red)] hover:text-white transition">Software Development</Link>
                                <Link href="/services/electrical" className="block px-4 py-2 text-[var(--peach-glow)] hover:bg-[var(--brown-red)] hover:text-white transition">Electrical Engineering</Link>
                                <Link href="/services/mechanics" className="block px-4 py-2 text-[var(--peach-glow)] hover:bg-[var(--brown-red)] hover:text-white transition">General Maintenance</Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}
