"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ElectricalEngineeringPage() {
    return (
        <main className="bg-white text-neutral-900">
            {/* HERO */}
            <section className="px-6 pt-32 pb-28 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto"
                >
                    <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
                        Electrical Engineering.
                    </h1>
                    <p className="mt-4 text-lg text-neutral-500">
                        Thoughtful design from concept to working hardware.
                    </p>
                </motion.div>
            </section>

            {/* CORE CAPABILITIES */}
            <section className="px-6 pb-32">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-10">
                        {/* PCB Design */}
                        <div className="rounded-3xl bg-neutral-100 p-8">
                            <div className="mb-6 flex h-24 items-center justify-center rounded-2xl bg-white">
                                <div className="h-10 w-10 bg-neutral-300 rounded-lg" />
                            </div>
                            <h3 className="text-lg font-semibold">PCB Design (KiCad)</h3>
                            <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                                Schematic capture and PCB layout using KiCad, with a focus on
                                clarity, manufacturability, and iterative improvement.
                            </p>
                        </div>

                        {/* Analog & Digital */}
                        <div className="rounded-3xl bg-neutral-100 p-8">
                            <div className="mb-6 flex h-24 items-center justify-center rounded-2xl bg-white">
                                <div className="h-10 w-10 bg-neutral-300 rounded-full" />
                            </div>
                            <h3 className="text-lg font-semibold">Analog & Digital Systems</h3>
                            <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                                Fundamental design and analysis of analog and digital circuits,
                                including signal conditioning, timing, and logic systems.
                            </p>
                        </div>

                        {/* Prototyping */}
                        <div className="rounded-3xl bg-neutral-100 p-8">
                            <div className="mb-6 flex h-24 items-center justify-center rounded-2xl bg-white">
                                <div className="h-0 w-0 border-l-[18px] border-r-[18px] border-b-[30px] border-l-transparent border-r-transparent border-b-neutral-300" />
                            </div>
                            <h3 className="text-lg font-semibold">Circuit Prototyping</h3>
                            <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                                Hands-on prototyping and testing to validate designs before
                                committing to final hardware.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* APPROACH */}
            <section className="px-6 pb-28">
                <div className="max-w-4xl mx-auto space-y-6">
                    <h2 className="text-2xl font-semibold">Engineering with Intent</h2>
                    <p className="text-neutral-600 leading-relaxed">
                        As a sophomore Electrical Engineering student at Portland State
                        University, Roseware Integrations approaches design with strong
                        theoretical grounding and a practical mindset.
                    </p>
                    <p className="text-neutral-600 leading-relaxed">
                        Every project emphasizes understanding first principles, verifying
                        assumptions through testing, and producing designs that are easy to
                        reason about and iterate on.
                    </p>
                </div>
            </section>

            {/* PROJECT EXAMPLE 1 */}
            <section className="px-6 pb-24">
                <div className="max-w-6xl mx-auto">
                    <div className="rounded-3xl bg-neutral-100 p-12 text-center">
                        <div className="mx-auto mb-6 h-16 w-32 bg-neutral-300 rounded-lg" />
                        <h3 className="text-lg font-semibold mb-2">
                            Microcontroller Development Board
                        </h3>
                        <p className="text-sm text-neutral-500 max-w-xl mx-auto">
                            Designed a custom microcontroller-based PCB for experimentation
                            and learning, including power regulation, IO headers, and
                            programming support.
                        </p>
                    </div>
                </div>
            </section>

            {/* PROJECT EXAMPLE 2 */}
            <section className="px-6 pb-32">
                <div className="max-w-6xl mx-auto">
                    <div className="rounded-3xl bg-neutral-100 p-12 text-center">
                        <div className="mx-auto mb-6 h-16 w-32 bg-neutral-300 rounded-lg" />
                        <h3 className="text-lg font-semibold mb-2">
                            Analog Signal Conditioning Circuit
                        </h3>
                        <p className="text-sm text-neutral-500 max-w-xl mx-auto">
                            Built and tested analog circuitry for sensor signal conditioning,
                            focusing on noise reduction, stability, and measurement accuracy.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-6 py-32 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-xl mx-auto"
                >
                    <h2 className="text-3xl font-semibold">
                        Have an engineering challenge?
                    </h2>
                    <p className="mt-3 text-neutral-500">
                        Let’s discuss your idea and explore a practical solution.
                    </p>
                    <div className="mt-8">
                        <Link
                            href="/contact"
                            className="inline-flex items-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800 transition"
                        >
                            Start a Conversation
                        </Link>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}

