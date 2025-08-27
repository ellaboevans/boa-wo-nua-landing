"use client";
import React, { useRef } from "react";
import { Marquee } from "./ui/marquee";
import Image from "next/image";
import { useInView, motion } from "motion/react";
import AiResponsbile from "@/app/assets/trustees/ai-responsible.png";
import Smoove from "@/app/assets/trustees/smoove.png";
import Ges from "@/app/assets/trustees/ges.png";
import ELearning from "@/app/assets/trustees/e-learning.png";
import Cyc from "@/app/assets/trustees/cyc.png";
import Socioso from "@/app/assets/trustees/socioso.png";

const trustedPartners = [
  {
    src: AiResponsbile,
    alt: "AI Responsible",
  },
  {
    src: Smoove,
    alt: "Smoove",
  },
  {
    src: Ges,
    alt: "GES",
  },
  {
    src: ELearning,
    alt: "E-Learning",
  },
  {
    src: Cyc,
    alt: "Cyc",
  },
  {
    src: Socioso,
    alt: "Socioso",
  },
];

export default function Partnership() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="max-w-7xl mx-auto mt-20" ref={ref}>
      <motion.section
        className="max-w-screen-sm text-center mx-auto mb-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}>
        <h2
          className="font-bold text-3xl md:text-4xl capitalize"
          id="trusted-by-heading">
          Our Partners
        </h2>
      </motion.section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}>
        <Marquee
          className="py-4"
          reverse
          pauseOnHover
          aria-label="Trusted partners and institutions">
          {trustedPartners.map((partner, index) => (
            <motion.div
              key={partner.alt}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="mx-4 grid place-content-center">
              <Image
                src={partner.src}
                alt={partner.alt}
                width={100}
                height={100}
                className="object-contain"
                loading="lazy"
              />
            </motion.div>
          ))}
        </Marquee>
      </motion.div>
    </div>
  );
}
