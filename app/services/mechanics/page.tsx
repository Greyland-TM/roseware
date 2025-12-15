"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function GeneralMaintenancePage() {
    return (
        <div className="bg-neutral-50">
            {/* Hero */}
            <section className="px-6 pt-32 pb-24 max-w-6xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
                        Maintenance, Done Right.
                    </h1>
                    <p className="mt-4 text-lg text-neutral-500 max-w-2xl mx-auto">
                        Decades of hands-on mechanical experience across agriculture, aviation,
                        and industrial environments.
                    </p>
                    <div className="mt-8 flex justify-center gap-3">
                        <Button className="rounded-full px-6">Request Maintenance Support</Button>
                        <Button variant="outline" className="rounded-full px-6">
                            View Experience
                        </Button>
                    </div>
                </motion.div>
            </section>

            {/* Core Areas */}
            <section className="px-6 py-20 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-3 gap-6">
                    {["Mechanical Repair", "Industrial Equipment", "Aviation Systems"].map(
                        (title) => (
                            <Card key={title} className="rounded-2xl border-neutral-200">
                                <CardContent className="p-6 space-y-3">
                                    <div className="h-12 w-12 rounded-xl bg-neutral-100" />
                                    <h3 className="font-medium text-neutral-900">{title}</h3>
                                    <p className="text-sm text-neutral-500">
                                        Practical troubleshooting and repair with a focus on safety,
                                        reliability, and long-term operation.
                                    </p>
                                </CardContent>
                            </Card>
                        )
                    )}
                </div>
            </section>

            {/* Experience Sections */}
            <section className="px-6 py-24 max-w-6xl mx-auto space-y-24">
                {/* Farm */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-neutral-900">
                            Farm & Agricultural Repairs
                        </h2>
                        <p className="text-neutral-500">
                            Started hands-on mechanical work at a young age repairing farm
                            equipment, tools, and machinery—learning to diagnose problems without
                            manuals and fabricate solutions when parts weren’t available.
                        </p>
                        <p className="text-neutral-500">
                            This foundation built strong instincts for mechanical systems and
                            practical problem-solving under real-world constraints.
                        </p>
                    </div>
                    <div className="h-64 rounded-2xl bg-neutral-100" />
                </div>

                {/* Aviation */}
                <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-neutral-900">
                            Aircraft Maintenance (U.S. Army)
                        </h2>
                        <p className="text-neutral-500">
                            Trained and worked as an aircraft mechanic in the U.S. Army, maintaining
                            safety-critical systems where precision, documentation, and
                            accountability are mandatory.
                        </p>
                        <p className="text-neutral-500">
                            This experience instilled a safety-first mindset and a disciplined,
                            methodical approach to maintenance and inspection.
                        </p>
                    </div>
                    <div className="h-64 rounded-2xl bg-neutral-100" />
                </div>

                {/* Industrial */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-neutral-900">
                            Industrial & Mill Equipment
                        </h2>
                        <p className="text-neutral-500">
                            Maintained and repaired mill and industrial equipment across Oregon,
                            supporting production environments where downtime is costly and
                            reliability matters.
                        </p>
                        <p className="text-neutral-500">
                            Experience includes mechanical systems, motors, conveyors, and
                            electromechanical troubleshooting in active facilities.
                        </p>
                    </div>
                    <div className="h-64 rounded-2xl bg-neutral-100" />
                </div>
            </section>

            {/* CTA */}
            <section className="px-6 py-24 text-center">
                <h2 className="text-3xl font-semibold text-neutral-900">
                    Need dependable maintenance support?
                </h2>
                <p className="mt-3 text-neutral-500">
                    Let’s fix the problem correctly — safely, efficiently, and with experience
                    you can trust.
                </p>
                <Button className="mt-6 rounded-full px-8">
                    Get in Touch
                </Button>
            </section>
        </div>
    );
}

