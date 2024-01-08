import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Resume = () => {
  return (
    <motion.div className="" varients={fadeIn("", "", 0.1, 1)}>
      <a
        href="/zuhriddin-tech6(eng).pdf"
        download
        target="_blank"
        rel="noreferrer"
      >
        <button className="text-white font-medium text-[18px] bg-purple-600 hover:bg-[#915eff] w-36 h-10 rounded-md text-center transition ease-in-out delay-30 hover:translate-x-0.5  hover:scale-110 duration-300">
          Resume(eng)
        </button>
      </a>
      <a
        href="/zuhriddin-tech6(kor).pdf"
        download
        target="_blank"
        rel="noreferrer"
      >
        <button className="text-white ml-4 font-medium text-[18px] bg-purple-600 hover:bg-[#5241af] w-36 h-10 rounded-md text-center transition ease-in-out delay-30 hover:translate-x-0.5  hover:scale-110 duration-300">
          Resume(kor)
        </button>
      </a>
    </motion.div>
  );
};

export default SectionWrapper(Resume, "resume");
