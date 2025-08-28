"use client";

import { Eye, Heart, Target } from "lucide-react";
import { motion } from "motion/react";
import Instructor from "@/app/assets/images/instructor.jpg";
import Image from "next/image";

export default function About() {
  const data = [
    {
      Icon: Eye,
      title: "Our Vision",
      text: "To create a world where every individual has access to quality education, tools, and resources to achieve their full potential.",
    },
    {
      Icon: Target,
      title: "Our Mission",
      text: "Impacting Tomorrow's Leaders - We aim to provide innovative and impactful programs that empower individuals to become changemakers in their communities.",
    },
    {
      Icon: Heart,
      title: "Our Values",
      text: "Empowerment, Accountability, Integrity, Fairness, Trustworthiness, Innovation, Collaboration, and Respect for people and cultures.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, staggerChildren: 0.2 },
            },
          }}>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About BOA WO NUA Initiative
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded on the principle of empowering tomorrow&apos;s leaders, we
            are dedicated to creating positive change through education, skill
            development, and community engagement.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-gray-600 mb-4">
              In 2021, <strong>Prince Dormenyo</strong> received life-changing
              news: he was admitted to Kwame Nkrumah University of Science and
              Technology (KNUST) to pursue a{" "}
              <strong>BA in Political Studies</strong>. As a first-generation
              university student, this was a dream come true and enhanced his
              journey with excitement and determination.
            </p>
            <p className="text-gray-600 mb-4">
              During his first year, Prince observed that many first-year
              students struggled academically, particularly in compulsory
              courses like <strong>Statistics</strong>,{" "}
              <strong>Communication Skills</strong>, and{" "}
              <strong>Introduction to Computing</strong>. The root problem? They
              lacked the foundational knowledge needed to excel. The need
              results were shocking: A staggering 68% failure rate amongst
              students enrolled in these courses.
            </p>
            <p className="text-gray-600">
              Determined to make a difference, Prince spent the break reflecting
              on ways he could support his peers. Upon returning to campus in
              2022, he shared a bold idea with his friends: to organize a
              tutorial specifically for first-year students.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}>
            <Image
              src={Instructor}
              alt="Students in classroom"
              className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.25 } },
          }}>
          {data.map(({ Icon, title, text }, i) => (
            <motion.div
              key={i + 1}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center p-8 bg-green-600/10 rounded-xl">
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Icon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
              <p className="text-gray-600">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
