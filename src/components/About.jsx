/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import Tilt from "react-parallax-tilt";
import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

import { services } from "../constants";
import { fadeIn, textVariant, slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ title, index, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div varients={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        varients={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a skilled software developer with experience in Typescript and
        JavaScript, and have been dedicating my last years on frameworks like
        React, Next.js, TypeScript, and Three.js. I am a quick learner with
        ability to collaborate in rapidly changing environments, compositions
        and to adapt in self-starting and collaborative environments while
        staying focused on achieving high-quality results under strict
        guidelines.
      </motion.p>

      <motion.div className="mt-4" varients={fadeIn("", "", 0.1, 1)}>
        <a href="/zuhriddin-tech.pdf" download target="_blank" rel="noreferrer">
          <button className="text-white font-medium text-[18px] bg-purple-600 hover:bg-[#915eff] w-36 h-10 rounded-md text-center transition ease-in-out delay-30 hover:translate-x-0.5  hover:scale-110 duration-300">
            Resume
          </button>
        </a>
      </motion.div>
      {/* variants={slideIn("left", "tween", 0.2, 1)} */}

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            index={index}
            {...service}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
