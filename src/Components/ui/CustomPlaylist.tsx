import { useState } from "react";
import { motion } from "motion/react";
import { FaPlay } from "react-icons/fa";

export default function CustomPlaylist() {
  const [ishover, setIshover] = useState(false);
  return (
    <div
      onMouseEnter={() => setIshover(true)}
      onMouseLeave={() => setIshover(false)}
      className="flex flex-col min-w-fit items-start p-2 hover:bg-white/5 text-white/75 text-[15px] py-3 rounded-md"
    >
      <div className="flex relative">
        <img
          className="h-40 w-40 rounded-md"
          src="src/public/COVER PLAYLIST FOR SPOTIFY.jpeg"
          alt="song cover"
        />
        {ishover && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="flex h-14 w-14 bg-[#6ce63c] items-center justify-center absolute right-2 bottom-2 rounded-full text-black hover:scale-105 hover:bg-[#6ce69c]"
          >
            <FaPlay className="pl-1" size={22} />
          </motion.div>
        )}
      </div>

      <h2 className="pt-2">Lorem, ipsum</h2>
      <p>Dolorum, quia,...</p>
    </div>
  );
}
