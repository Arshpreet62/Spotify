import { PiNotebookBold } from "react-icons/pi";
import { FaPlus } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { AiFillPushpin } from "react-icons/ai";
import { HiSpeakerWave } from "react-icons/hi2";

export default function Siderbar() {
  return (
    <div className="w-85  bg-black ">
      <div className="flex flex-col justify-start w-full px-3 h-full bg-white/7 rounded-md gap-3">
        <div className="flex w-full justify-between items-center  py-2 pt-4">
          <div className="flex p-2 items-center gap-2">
            <PiNotebookBold className="text-white/70" size={28} />
            <h4 className="text-white/70 text-[18px] font-semibold">
              Your Library
            </h4>
          </div>
          <div className="h-10 w-10 bg-[#242424] text-white/55 rounded-full flex justify-center items-center">
            <FaPlus size={20} />
          </div>
        </div>
        <div className="bg-[#313131] px-[14px] py-[4px] text-[16px] text-white w-fit rounded-4xl">
          Playlists
        </div>
        <div className="flex items-center justify-between text-white/50 text-[16px]">
          <IoSearch size={22} />
          <div className="flex items-center gap-2 font-semibold">
            Recents <HiMiniBars3BottomLeft size={22} />
          </div>
        </div>
        <div className="flex w-full items-center justify-between h-18  rounded-md p-2  hover:bg-white/5 cursor-pointer">
          <div className="flex gap-2">
            <img
              src="https://i.ibb.co/4b2r0tR/logo.png"
              alt="logo"
              className="h-14 w-14 rounded-md"
            />
            <div className="flex flex-col items-start justify-center ">
              <h2 className="text-[17px] text-[#21b628] font-[500]">
                Liked Songs
              </h2>
              <p className="flex items-start text-[15px] font-[500] text-white/50">
                <span>
                  <AiFillPushpin className="text-[#21b628]" size={20} />
                </span>
                Playlist . 86 songs
              </p>
            </div>
          </div>
          <HiSpeakerWave className="text-[#21b628] mr-2" size={20} />
        </div>
        <div className="flex w-full items-center justify-between h-18  rounded-md p-2  hover:bg-white/5 cursor-pointer">
          <div className="flex gap-2">
            <img
              src="https://i.ibb.co/4b2r0tR/logo.png"
              alt="logo"
              className="h-14 w-14 rounded-md"
            />
            <div className="flex flex-col items-start justify-center ">
              <h2 className="text-[17px] text-[#21b628] font-[500]">
                Liked Songs
              </h2>
              <p className="flex items-start text-[15px] font-[500] text-white/50">
                <span>
                  <AiFillPushpin className="text-[#21b628]" size={20} />
                </span>
                Playlist . 86 songs
              </p>
            </div>
          </div>
          <HiSpeakerWave className="text-[#21b628] mr-2" size={20} />
        </div>
      </div>
    </div>
  );
}
