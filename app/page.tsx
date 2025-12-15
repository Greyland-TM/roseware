"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-white text-neutral-900">
      {/* HERO */}
      <section className="px-6 pt-32 pb-40 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Integrated Expertise.
          </h1>
          <p className="mt-3 text-xl text-neutral-500">
            Software. Electrical. Maintenance.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800 transition"
            >
              Request Quote
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-700 hover:border-neutral-400 transition"
            >
              See Services
            </Link>
          </div>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="px-6 pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Software */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl bg-neutral-100 p-8"
            >
              <div className="mb-6 flex h-24 items-center justify-center rounded-2xl bg-white">
                <div className="h-10 w-10 bg-neutral-300 rounded-lg" />
              </div>
              <h3 className="text-lg font-semibold">
                Software development.
              </h3>
              <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                Custom software solutions, automation, and integration
                for business growth.
              </p>
            </motion.div>

            {/* Electrical */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl bg-neutral-100 p-8"
            >
              <div className="mb-6 flex h-24 items-center justify-center rounded-2xl bg-white">
                <div className="h-10 w-10 bg-neutral-300 rounded-full" />
              </div>
              <h3 className="text-lg font-semibold">
                Electrical engineering.
              </h3>
              <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                Consulting, troubleshooting, and project support
                for modern systems.
              </p>
            </motion.div>

            {/* Maintenance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl bg-neutral-100 p-8"
            >
              <div className="mb-6 flex h-24 items-center justify-center rounded-2xl bg-white">
                <div className="h-0 w-0 border-l-[18px] border-r-[18px] border-b-[30px] border-l-transparent border-r-transparent border-b-neutral-300" />
              </div>
              <h3 className="text-lg font-semibold">
                General maintenance.
              </h3>
              <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                Comprehensive property and facility upkeep—
                one call for all your needs.
              </p>
            </motion.div>
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
            Ready to upgrade?
          </h2>
          <p className="mt-3 text-neutral-500">
            Contact Roseware Integrations today for a free consultation.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800 transition"
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
