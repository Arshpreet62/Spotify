import React, { useEffect, useState } from "react";

export default function ColoredSlider({ width }: { width: string }) {
  const [value, setValue] = useState(50);
  const [hover, setHover] = useState(false);
  // const [size, setSize] = useState(`w-15`);
  // useEffect(() => {
  //   setSize(`w-${width}`);
  //   console.log(width);
  // }, [width]);

  const getSliderBackground = () => {
    const percent = value;
    return `linear-gradient(to right, #4caf50 ${percent}%, #2b2b2a ${percent}%)`;
  };
  const getBackground = () => {
    const percent = value;
    return `linear-gradient(to right, #fff ${percent}%, #2b2b2a ${percent}%)`;
  };
  return hover ? (
    <input
      type="range"
      min="0"
      max="100"
      value={value}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onChange={(e) => setValue(Number(e.target.value))}
      className={`custom-range  overflow-visible `}
      style={{ background: getSliderBackground(), width: width }}
    />
  ) : (
    <input
      type="range"
      min="0"
      max="100"
      value={value}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onChange={(e) => setValue(Number(e.target.value))}
      className={`custom-r  overflow-visible `}
      style={{ background: getBackground(), width: width }}
    />
  );
}
