"use client";
import { motion } from "motion/react";
import Prince from "@/app/assets/images/prince.jpeg";
import Evans from "@/app/assets/images/evans.jpeg";
import Tee from "@/app/assets/images/tee.jpeg";
import Elorm from "@/app/assets/images/elorm.jpeg";
import FFB from "@/app/assets/images/ffb.jpeg";
import Chris from "@/app/assets/images/chris.jpeg";
import BOK from "@/app/assets/images/bok.jpg";
import Image from "next/image";

export default function Team() {
  const teamMembers = [
    {
      name: "Prince Dormenyo",
      role: "Founder & Executive Director",
      image: Prince,
      description:
        "Visionary leader dedicated to empowering students through education and skill development.",
    },
    {
      name: "Bernard Ohene Amoah",
      role: "Co-Founder and COO",
      image: BOK,
      description:
        "Operations expert ensuring smooth execution of our programs and initiatives.",
    },
    {
      name: "Miss Theodora",
      role: "Secretary",
      image: Tee,
      description:
        "Dedicated administrator ensuring efficient operations and communication.",
    },
    {
      name: "Evans Elabo",
      role: "Head of IT and Research",
      image: Evans,
      description:
        "Tech-savvy leader driving innovation and research initiatives.",
    },
    {
      name: "Elorm Gabby",
      role: "Head of Digital Marketing",
      image: Elorm,
      description:
        "Creative marketer focused on enhancing our online presence and engagement.",
    },
    {
      name: "Francis Frimpong Boateng",
      role: "Programs Coordinator",
      image: FFB,
      description: "Ensures the successful implementation of our programs.",
    },
    {
      name: "Christian Dodzi Kwame Dzotepe",
      role: "Sponsorship Head",
      image: Chris,
      description:
        "Ensures sustainable funding and support for our initiatives.",
    },
    {
      name: "Obed Yawson Ekow",
      role: "Creative Director",
      image: BOK,
      description:
        "Designs compelling visuals to enhance our brand and communications.",
    },
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ amount: 0.4 }}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We currently have two separate teams working together to achieve our
            goals. We have a 14 executive team and 120 volunteers across the
            country.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}>
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx + 1}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center group">
              <div className="relative mb-6">
                <Image
                  width={500}
                  height={500}
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover object-top shadow-lg group-hover:shadow-xl transition-shadow"
                />
                <div className="absolute inset-0 bg-ngo-green rounded-full opacity-0 group-hover:opacity-10 transition-opacity w-32 h-32 mx-auto"></div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-green-600 font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 bg-gray-50 rounded-2xl p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ amount: 0.3 }}>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Our Team
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              We're always looking for passionate individuals to join our
              mission of empowering tomorrow's leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white p-6 rounded-xl text-center flex-1 max-w-xs">
                <h4 className="font-bold text-gray-900 mb-2">
                  Volunteer Opportunities
                </h4>
                <p className="text-gray-600 text-sm">
                  Join our 120+ volunteers making a difference across Ghana
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl text-center flex-1 max-w-xs">
                <h4 className="font-bold text-gray-900 mb-2">
                  Executive Positions
                </h4>
                <p className="text-gray-600 text-sm">
                  Leadership roles in our executive team of 14 dedicated members
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
