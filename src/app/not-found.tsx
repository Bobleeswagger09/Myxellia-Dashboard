"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { fadeAnimation } from "@/component/Animations";
import { AlertTriangle } from "lucide-react";

export default function Error() {
  useEffect(() => {
    document.title = "Page Not Found - Blossom";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="absolute inset-0 z-[15000] bg-gray-50 dark:bg-gray-900 grid place-items-center text-center px-6">
      <div>
        {/* Icon */}
        <motion.div
          variants={fadeAnimation}
          initial="init"
          whileInView="fade"
          custom={1}
          className="flex justify-center mb-4"
        >
          <AlertTriangle className="w-16 h-16 text-indigo-600 dark:text-indigo-400" />
        </motion.div>

        {/* 404 Text */}
        <motion.h1
          variants={fadeAnimation}
          initial="init"
          whileInView="fade"
          custom={2}
          className="font-extrabold text-5xl sm:text-7xl text-indigo-600 dark:text-white mb-2"
        >
          404
        </motion.h1>

        {/* Message */}
        <motion.p
          variants={fadeAnimation}
          initial="init"
          whileInView="fade"
          custom={3}
          className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-6"
        >
          Oops! The page you&apos;re looking for doesn&apos;t exist or may have
          been moved. Use the navigation menu to continue exploring.
        </motion.p>

        {/* Back Button */}
        <Link href="/">
          <motion.button
            transition={{ type: "spring", bounce: 0.5, stiffness: 500 }}
            whileHover={{ scale: 1.1 }}
            variants={fadeAnimation}
            initial="init"
            whileInView="fade"
            custom={4}
            className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-md hover:bg-indigo-700 transition"
          >
            Back to Dashboard
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
