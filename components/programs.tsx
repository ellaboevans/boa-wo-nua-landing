"use client";

import { GraduationCap, Lightbulb, Users, HandHeart } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";

export default function Programs() {
  const programs = [
    {
      icon: GraduationCap,
      title: "Academic Support Initiative",
      subtitle: "BOA WO NUA TUTORIALS",
      description:
        "We provide academic support to help students overcome academic challenges through our tutorial sessions which provide academic support to over 1,500 students at KNUST.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    },
    {
      icon: Lightbulb,
      title: "Skills Development Workshops",
      subtitle: "PROFESSIONAL TRAINING",
      description:
        "We provide and train individuals to acquire essential skills that align with today's dynamic job market, boost their employability, and help reduce poverty.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    },
    {
      icon: Users,
      title: "EmpowerHer Initiative",
      subtitle: "FEMALE EMPOWERMENT",
      description:
        "An empowerment initiative dedicated to nurturing the next generation of female leaders through mentorship, skill development and education.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    },
    {
      icon: HandHeart,
      title: "Community Outreach",
      subtitle: "GIVING BACK",
      description:
        "Our Community Outreach aims to create a more educated, skilled, and empowered generation through volunteering and mentorship programs.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a",
    },
  ];

  return (
    <section id="work" className="py-20 bg-gray-50">
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
            Our Programs & Initiatives
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto">
            We strive to make a difference and to achieve SDG 1, 4 and 5 through
            our wide range of initiatives:
          </motion.p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.25 } },
          }}>
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-green-600/10 p-3 rounded-lg mr-4">
                    <program.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-green-600 uppercase tracking-wide">
                      {program.subtitle}
                    </p>
                    <h3 className="text-xl font-bold text-gray-900">
                      {program.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <Button
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                  Learn More
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}>
          <div className="bg-green-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Want to Get Involved?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join us in our mission to empower the next generation of leaders
              through education and skill development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Become a Volunteer
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-transparent hover:bg-white hover:text-green-600">
                Partner With Us
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
