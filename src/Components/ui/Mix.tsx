import React, { useState } from "react";
import { motion } from "motion/react";
import { FaPlay } from "react-icons/fa";

export default function Mix() {
  const [ishover, setIshover] = useState(false);
  return (
    <div
      onMouseEnter={() => setIshover(true)}
      onMouseLeave={() => setIshover(false)}
      className="flex bg-white/10 h-13 items-center gap-2 text-white font-semibold text-[16px] rounded-md overflow-hidden relative"
    >
      <img
        src="https://i.ibb.co/4b2r0tR/logo.png"
        alt="logo"
        className="h-full "
      />
      <h2>Daily Mix 1</h2>
      {ishover && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="flex h-8 w-8 bg-[#6ce63c] items-center justify-center absolute right-2 bottom-2 rounded-full text-black hover:scale-105 hover:bg-[#6ce69c]"
        >
          <FaPlay className="pl-1" size={18} />
        </motion.div>
      )}
    </div>
  );
}
