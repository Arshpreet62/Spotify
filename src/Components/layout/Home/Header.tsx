import { FaSpotify } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { IoIosBasket } from "react-icons/io";
import { GrInstallOption } from "react-icons/gr";
import { GoBell } from "react-icons/go";
import { CiShare1 } from "react-icons/ci";
import { useState } from "react";
import { Link } from "wouter";
export default function Header() {
  const [Account, setAccount] = useState(false);
  return (
    <header className="flex items-center justify-between w-full h-18 bg-black gap-5">
      <div className="flex h-full flex-1 text-white justify-start items-center gap-5 pl-5">
        <FaSpotify size={40} />
        <Link to="/">
          <div className="h-13 w-13 flex items-center justify-center text-white bg-[#242424] text-3xl rounded-full">
            <GoHome />
          </div>
        </Link>
        <div className="flex items-center h-13 flex-1 justify-center text-white text-3xl max-w-130 rounded-3xl bg-[#242424] gap-5 p-3 ">
          <FiSearch size={30} className="text-white/75" />
          <input
            type="text"
            name="searchbar"
            className="flex-1 outline-none text-2xl text-white/75 border-r-2 border-r-white"
            placeholder="Search"
          />
          <IoIosBasket size={30} className="text-white/75 " />
        </div>
      </div>
      <div className="flex items-center justify-end  h-full gap-7 max-w-100 pr-2 min-w-60 text-white/75">
        <div className="flex items-center gap-2 hover:scale-105 cursor-pointer  text-white/75 hover:text-white">
          <GrInstallOption size={17} />
          <h4 className="text-[16px] font-[700]">install App</h4>
        </div>
        <Link to="/content-feed">
          <GoBell
            size={20}
            className="hover:scale-105 cursor-pointer  text-white/75 hover:text-white"
          />
        </Link>

        <div
          onClick={() => setAccount((prev: boolean) => !prev)}
          className="flex items-center justify-center bg-white/20 hover:scale-105 h-12 w-12 rounded-full "
        >
          <div className="h-8 w-8 font-semibold flex justify-center items-center text-xl rounded-full text-black bg-rose-400 cursor-pointer">
            A
          </div>
        </div>
        {Account && (
          <div className="absolute right-0  top-20 h-90 w-55 bg-[#2c2a2a] z-10 flex items-center  text-white text-[14px] font-semibold  flex-col justify-start p-[4px] rounded-md">
            <div className="flex items-center justify-between w-full px-5 py-[14px] on hover:bg-white/10 ">
              <h1>Account</h1>
              <CiShare1 size={20} className="text-white stroke-1" />
            </div>
            <div className="flex items-center justify-start w-full px-5 py-[14px] hover:bg-white/10">
              <h1>Profile</h1>
            </div>
            <div className="flex items-center justify-between w-full px-5 py-[14px] hover:bg-white/10">
              <h1>Upgrade to Premium</h1>
              <CiShare1 size={20} className="text-white stroke-1" />
            </div>
            <div className="flex items-center justify-between w-full px-5 py-[14px] hover:bg-white/10">
              <h1>Support</h1>
              <CiShare1 size={20} className="text-white stroke-1" />
            </div>
            <div className="flex items-center justify-between w-full px-5 py-[14px] hover:bg-white/10">
              <h1>Diwnload</h1>
              <CiShare1 size={20} className="text-white stroke-1" />
            </div>
            <div className="flex items-center justify-start w-full px-5 py-[14px] hover:bg-white/10">
              <h1>Settings</h1>
            </div>
            <div className="flex items-center justify-start w-full px-5 h-14  mt-2 border-t border-t-white/15 hover:bg-white/10">
              <h1>Log out</h1>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
