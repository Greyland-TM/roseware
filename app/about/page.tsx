"use client";

import { motion } from "framer-motion";
import { Briefcase, Code, Cpu, Wrench } from "lucide-react";
import Link from "next/link";

export default function ExperiencePage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Header */}
            <section className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 py-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-semibold tracking-tight"
                    >
                        Experience
                    </motion.h1>
                    <p className="mt-4 max-w-2xl text-gray-600">
                        Showcasing work across software, electrical engineering, and
                        hands-on maintenance.
                    </p>
                </div>
            </section>

            {/* Web Development Section */}
            <section className="py-24">
                <div className="max-w-5xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <Code className="h-8 w-8 text-gray-800" />
                        <h2 className="text-3xl font-semibold">Web Development</h2>
                    </motion.div>
                    <p className="text-gray-600 mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Example projects */}
                        <div className="bg-white rounded-2xl shadow p-6">
                            <h3 className="font-semibold mb-2">Project Alpha</h3>
                            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow p-6">
                            <h3 className="font-semibold mb-2">Project Beta</h3>
                            <p className="text-sm text-gray-500">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Electrical Engineering Section */}
            <section className="py-24 bg-gray-100">
                <div className="max-w-5xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <Cpu className="h-8 w-8 text-gray-800" />
                        <h2 className="text-3xl font-semibold">Electrical Engineering</h2>
                    </motion.div>
                    <p className="text-gray-600 mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-2xl shadow p-6">
                            <h3 className="font-semibold mb-2">Embedded Project X</h3>
                            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow p-6">
                            <h3 className="font-semibold mb-2">Circuit Design Y</h3>
                            <p className="text-sm text-gray-500">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Maintenance Section */}
            <section className="py-24">
                <div className="max-w-5xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <Wrench className="h-8 w-8 text-gray-800" />
                        <h2 className="text-3xl font-semibold">Maintenance & Technical Work</h2>
                    </motion.div>
                    <p className="text-gray-600 mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-2xl shadow p-6">
                            <h3 className="font-semibold mb-2">Repair Project A</h3>
                            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow p-6">
                            <h3 className="font-semibold mb-2">Diagnostics Project B</h3>
                            <p className="text-sm text-gray-500">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-white border-t border-gray-200 py-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <Briefcase className="h-8 w-8 mx-auto mb-4 text-gray-800" />
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        Built on real work, not buzzwords
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                        My experience spans software, hardware, and field work—allowing me
                        to bridge gaps and deliver solutions that actually work.
                    </p>
                    <div className="mt-8">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-xl bg-black text-white px-8 py-3 text-sm font-medium hover:bg-gray-800 transition"
                        >
                            Start a conversation
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

