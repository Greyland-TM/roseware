"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function SoftwareServicesPage() {
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
                        Software. Simplified.
                    </h1>
                    <p className="mt-4 text-lg text-neutral-500">
                        7+ years of professional development at your service.
                    </p>
                </motion.div>
            </section>

            {/* SERVICE CATEGORIES */}
            <section className="px-6 pb-32">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-10">
                        {/* Website Dev */}
                        <div className="rounded-3xl bg-neutral-100 p-8">
                            <div className="mb-6 flex h-24 items-center justify-center rounded-2xl bg-white">
                                <div className="h-10 w-10 bg-neutral-300 rounded-lg" />
                            </div>
                            <h3 className="text-lg font-semibold">
                                Website development.
                            </h3>
                            <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                                Modern, responsive websites and platforms designed for
                                performance and longevity.
                            </p>
                        </div>

                        {/* Embedded */}
                        <div className="rounded-3xl bg-neutral-100 p-8">
                            <div className="mb-6 flex h-24 items-center justify-center rounded-2xl bg-white">
                                <div className="h-10 w-10 bg-neutral-300 rounded-full" />
                            </div>
                            <h3 className="text-lg font-semibold">
                                Embedded systems.
                            </h3>
                            <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                                Custom embedded solutions bridging hardware and software
                                for automation and control.
                            </p>
                        </div>

                        {/* APIs */}
                        <div className="rounded-3xl bg-neutral-100 p-8">
                            <div className="mb-6 flex h-24 items-center justify-center rounded-2xl bg-white">
                                <div className="h-0 w-0 border-l-[18px] border-r-[18px] border-b-[30px] border-l-transparent border-r-transparent border-b-neutral-300" />
                            </div>
                            <h3 className="text-lg font-semibold">
                                Custom APIs.
                            </h3>
                            <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                                Tailored API development enabling secure and scalable
                                communication across your services.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* DETAIL SECTION */}
            <section className="px-6 pb-28">
                <div className="max-w-4xl mx-auto space-y-6">
                    <h2 className="text-2xl font-semibold">
                        Durable Software Solutions
                    </h2>
                    <p className="text-neutral-600 leading-relaxed">
                        Roseware Integrations creates robust software built to evolve
                        alongside your business. From internal tools to customer-facing
                        platforms, every system is engineered with clarity,
                        maintainability, and long-term value in mind.
                    </p>
                    <p className="text-neutral-600 leading-relaxed">
                        Whether integrating with existing infrastructure or building
                        something entirely new, solutions are designed to remain reliable
                        under real-world use.
                    </p>
                </div>
            </section>

            {/* PROJECT EXAMPLE 1 */}
            <section className="px-6 pb-24">
                <div className="max-w-6xl mx-auto">
                    <div className="rounded-3xl bg-neutral-100 p-12 text-center">
                        <div className="mx-auto mb-6 h-16 w-32 bg-neutral-300 rounded-lg" />
                        <h3 className="text-lg font-semibold mb-2">
                            Inventory Sync Platform
                        </h3>
                        <p className="text-sm text-neutral-500 max-w-xl mx-auto">
                            Developed a custom platform to synchronize inventory across
                            multiple vendors, reducing manual work and improving accuracy.
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
                            Automated Quality Control System
                        </h3>
                        <p className="text-sm text-neutral-500 max-w-xl mx-auto">
                            Designed and implemented an automated QC system integrating
                            sensors, backend logic, and reporting dashboards.
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
                        Ready to accelerate your business?
                    </h2>
                    <p className="mt-3 text-neutral-500">
                        Contact Roseware Integrations for a custom software solution.
                    </p>
                    <div className="mt-8">
                        <Link
                            href="/contact"
                            className="inline-flex items-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800 transition"
                        >
                            Request Consultation
                        </Link>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
