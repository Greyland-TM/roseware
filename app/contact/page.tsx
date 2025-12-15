"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-[var(--background)] flex items-center justify-center px-4 py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-4xl"
            >
                <Card className="rounded-3xl shadow-2xl bg-[var(--background-dark)] border-2 border-[var(--yale-blue)] overflow-hidden">
                    <CardContent className="p-8 grid md:grid-cols-2 gap-12 text-[var(--brown-red)]">
                        {/* Left: Contact Info */}
                        <div className="space-y-6">
                            <h1 className="text-4xl font-bold tracking-tight text-[var(--brown-red)]">
                                Get in touch
                            </h1>
                            <p className="text-[var(--slate-grey)]">
                                We&apos;d love to hear from you. Reach out with questions, ideas, or project inquiries.
                            </p>

                            <div className="space-y-4 text-sm">
                                <div className="flex items-center gap-3">
                                    <Mail className="h-5 w-5 text-[var(--brown-red)]" />
                                    <span className="text-[var(--slate-grey)]">contact@roseware.com</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="h-5 w-5 text-[var(--brown-red)]" />
                                    <span className="text-[var(--slate-grey)]">(555) 123-4567</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin className="h-5 w-5 text-[var(--brown-red)]" />
                                    <span className="text-[var(--slate-grey)]">San Diego, CA</span>
                                </div>
                            </div>
                        </div>

                        {/* Right: Contact Form */}
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1 text-[var(--yale-blue)]">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="w-full rounded-2xl border border-[var(--brown-red)] px-4 py-3 text-sm text-[var(--slate-grey)] placeholder-[var(--slate-grey)] bg-[#fdfdfd] focus:outline-none focus:ring-2 focus:ring-[var(--brown-red)] transition"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1 text-[var(--yale-blue)]">Email</label>
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    className="w-full rounded-2xl border border-[var(--brown-red)] px-4 py-3 text-sm text-[var(--slate-grey)] placeholder-[var(--slate-grey)] bg-[#fdfdfd] focus:outline-none focus:ring-2 focus:ring-[var(--brown-red)] transition"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1 text-[var(--yale-blue)]">Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell us how we can help"
                                    className="w-full rounded-2xl border border-[var(--brown-red)] px-4 py-3 text-sm text-[var(--slate-grey)] placeholder-[var(--slate-grey)] bg-[#fdfdfd] focus:outline-none focus:ring-2 focus:ring-[var(--brown-red)] transition"
                                />
                            </div>

                            <Button className="w-full rounded-2xl mt-2 bg-[var(--brown-red)] hover:bg-[var(--charoal)] text-[#fefefe] font-semibold transition">Send Message</Button>H
                        </form>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
}
