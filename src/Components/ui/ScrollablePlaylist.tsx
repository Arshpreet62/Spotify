import React, { useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import CustomPlaylist from "./CustomPlaylist";

export default function ScrollablePlaylist() {
  const [showMore, setShowMore] = React.useState(false);
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };
  return (
    <div
      onMouseEnter={() => setShowMore(true)}
      onMouseLeave={() => setShowMore(false)}
      className="relative"
    >
      {showMore && (
        <button
          onClick={scrollLeft}
          className="absolute left-1 z-10 top-1/2 h-10 w-10 rounded-full bg-[#292727] text-white flex justify-center items-center"
        >
          <FaAngleLeft />
        </button>
      )}
      <div
        ref={scrollRef}
        style={{ scrollbarWidth: "none" }}
        className="flex gap-5 scroll-smooth overflow-auto h-fit w-160 pr-15"
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <CustomPlaylist key={index} />
        ))}
      </div>
      {showMore && (
        <button
          onClick={scrollRight}
          className="absolute right-4 z-10 top-1/2 h-10 w-10 rounded-full bg-[#292727] text-white flex justify-center items-center"
        >
          <FaAngleRight />
        </button>
      )}
    </div>
  );
}
