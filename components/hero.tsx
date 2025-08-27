"use client";
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, Award, BookOpen, Users } from "lucide-react";
import { motion } from "motion/react";
import GroupImage from "@/app/assets/images/group-image.jpg";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-green-600/10 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.3 } },
            }}>
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-bold text-gray-900">
              Empowering Individuals Through <br />
              <span className="text-green-600">Education & Skills</span>
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-6 text-base text-neutral-600">
              BOA WO NUA Initiative is dedicated to promoting education and
              skill development, making a positive impact through our extensive
              range of initiatives aimed at creating a brighter future for all.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Learn More About Our Mission
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-700 hover:text-white">
                View Our Programs
              </Button>
            </motion.div>
          </motion.div>

          <div className="relative">
            <Image
              src={GroupImage}
              alt="Students learning together"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
            <div className="bg-green-600/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <BookOpen className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">15</h3>
            <p className="text-gray-600">Total Programs</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
            <div className="bg-green-600/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">3</h3>
            <p className="text-gray-600">Community Reached</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
            <div className="bg-green-600/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Award className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">2,500+</h3>
            <p className="text-gray-600">Lives Impacted</p>
          </div>
        </div>
      </div>
    </section>
  );
}
