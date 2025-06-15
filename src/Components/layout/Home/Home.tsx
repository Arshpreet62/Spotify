import { TiArrowShuffle } from "react-icons/ti";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { IoIosPause } from "react-icons/io";
import { TiArrowLoop } from "react-icons/ti";
import { LuSquarePlay } from "react-icons/lu";
import { TbMicrophone2 } from "react-icons/tb";
import { HiOutlineQueueList } from "react-icons/hi2";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { CgMiniPlayer } from "react-icons/cg";
import { GoScreenFull } from "react-icons/go";
import Siderbar from "./Siderbar";
import { PiSpeakerSimpleHighFill } from "react-icons/pi";
import Header from "./Header";
import Main from "./Main";
import ColoredSlider from "../../ui/ColoredSlider";
import { Route } from "wouter";
import ContentFeed from "./ContentFeed";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen pb-2 bg-black">
      <Header />
      <main className="flex  w-full flex-1 gap-3 bg-black px-2">
        <Siderbar />

        <Route path="/" component={Main} />
        <Route path="/content-feed" component={ContentFeed} />
        {/* <div className="flex flex-col items-center justify-start w-40 h-full bg-white">
          left
        </div> */}
      </main>
      <footer className="flex flex-col items-center justify-between w-full px-1">
        <div className="flex items-center justify-between w-full h-20">
          <div className="flex text-white items-center px-3  h-full gap-4 w-[30%]">
            <img
              src="https://i.ibb.co/4b2r0tR/logo.png"
              alt="logo"
              className="w-15 h-15 rounded-md"
            />
            <div className="flex items-start flex-col h-full justify-center">
              <h4 className="text-[18px] ">song name</h4>
              <p className="text-[14px] text-white/50">artist name</p>
            </div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_402_5941)">
                <path
                  d="M14.0009 6.03963C16.4673 3.74352 20.2787 3.81973 22.6548 6.28786C25.0299 8.75708 25.1118 12.6895 22.9026 15.2546L13.9988 24.5L5.09703 15.2546C2.88787 12.6895 2.97082 8.75055 5.34482 6.28786C7.72303 3.823 11.5271 3.74025 14.0009 6.03963Z"
                  fill="#63CF6C"
                />
              </g>
              <defs>
                <clipPath id="clip0_402_5941">
                  <rect width="28" height="28" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 h-full flex-1 py-2">
            <div className="flex items-center justify-center w-[80%] gap-5">
              <TiArrowShuffle color="white" size={28} />
              <MdSkipPrevious color="white" size={28} />
              <div className="flex justify-center items-center bg-white rounded-full text-black p-[6px]">
                <IoIosPause size={24} />
              </div>
              <MdSkipNext color="white" size={28} />
              <TiArrowLoop color="white" size={28} />
            </div>
            <div className="flex w-[80%] items-center justify-center text-white gap-2">
              <h2>1.35</h2>
              <ColoredSlider width={"100%"} />
              <p>2:35</p>
            </div>
          </div>
          <div className="flex  items-center justify-center gap-4 h-full w-[30%] ">
            <LuSquarePlay className="text-white/70" size={24} />
            <TbMicrophone2 className="text-white/70" size={24} />
            <HiOutlineQueueList className="text-white/70" size={24} />
            <HiMiniSpeakerWave className="text-white/70" size={24} />

            <ColoredSlider width={"70px"} />
            <CgMiniPlayer className="text-white/70" size={24} />
            <GoScreenFull className="text-white/70" size={24} />
          </div>
        </div>
        <div className="flex items-center  justify-end text-sm text-black bg-green-400 h-7 w-full rounded-sm p-2 gap-1 font-semibold">
          <PiSpeakerSimpleHighFill />
          Playing on Arshpreet-iphone-13-Pro
        </div>
      </footer>
    </div>
  );
}
