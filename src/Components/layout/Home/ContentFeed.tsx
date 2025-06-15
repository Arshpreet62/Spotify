import { FaPlus } from "react-icons/fa6";

export default function ContentFeed() {
  return (
    <div
      className="fles flex-col overflow-y-auto flex-1  px-5  bg-white/7 rounded-md"
      style={{ height: "calc(100vh - 190px)", scrollbarWidth: "none" }}
    >
      <div className="flex flex-col w-full h-70 justify-center items-start gap-2">
        <h2 className="text-white text-[38px] font-semibold">What's New</h2>
        <h2 className="text-white/65 text-[14px] font-semibold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus.
        </h2>
        <div className="flex w-full gap-2 mt-2">
          <div className="flex px-3 h-8 justify-center items-center text-white text-[16px] font-[450] bg-[#2c2b2b] rounded-3xl">
            Music
          </div>
          <div className="flex px-3 h-8 justify-center items-center text-white text-[16px] font-[450] bg-[#2c2b2b] rounded-3xl">
            Products & Shows
          </div>
        </div>
      </div>
      <div className="w-full h-110 flex flex-col justify-start pt-15 items-center gap-5">
        <h2 className="text-white text-[36px] font-semibold">
          We don't have any content yet
        </h2>
        <h2 className="text-white text-[16px] font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae culpa
          placeat numquam.
        </h2>
      </div>
      <div className="flex w-full min-h-70 pb-10">
        <div className=" grid grid-cols-4 gap-2 text-white h-full flex-1 justify-between px-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
          <div className="flex flex-col h-fit ">
            <h3 className="text-white font-semibold text-[18px]">Company</h3>
            <h3 className="text-white/80 font-semibold">Company</h3>
            <h3 className="text-white/80 font-semibold">Company</h3>
            <h3 className="text-white/80 font-semibold">Company</h3>
            <h3 className="text-white/80 font-semibold">Company</h3>
          </div>
          <div className="flex flex-col gap-2 ">
            <h3 className="text-white font-semibold text-[18px]">Company</h3>
            <h3 className="text-white/80 font-semibold">Company</h3>
            <h3 className="text-white/80 font-semibold">Company</h3>
            <h3 className="text-white/80 font-semibold">Company</h3>
            <h3 className="text-white/80 font-semibold">Company</h3>
          </div>{" "}
          <div className="flex flex-col gap-2 ">
            <h3 className="text-white font-semibold text-[18px]">Company</h3>
            <h3 className="text-white/80 font-semibold">Company</h3>
            <h3 className="text-white/80 font-semibold">Company</h3>
            <h3 className="text-white/80 font-semibold">Company</h3>
            <h3 className="text-white/80 font-semibold">Company</h3>
          </div>{" "}
          <div className="flex flex-col gap-2 ">
            <h3 className="text-white font-semibold text-[18px]">Company</h3>
            <h3 className="text-white/80 font-semibold">Company</h3>
            <h3 className="text-white/80 font-semibold">Company</h3>
            <h3 className="text-white/80 font-semibold">Company</h3>
            <h3 className="text-white/80 font-semibold">Company</h3>
          </div>
        </div>
        <div className="flex h-full w-40  item-start justify-center gap-3">
          <div className="w-12 h-12 bg-[#494747] rounded-full flex justify-center items-center">
            <FaPlus size={20} className="text-white" />
          </div>
          <div className="w-12 h-12 bg-[#494747] rounded-full flex justify-center items-center">
            <FaPlus size={20} className="text-white" />
          </div>
          <div className="w-12 h-12 bg-[#494747] rounded-full flex justify-center items-center">
            <FaPlus size={20} className="text-white" />
          </div>
        </div>
      </div>
      <div className="w-full border-t border-t-white/15 pt-10 px-4 h-50 sm:px-6 md:px-8 ">
        <div className=" grid grid-cols-1 items-start justify-between gap-4 text-white/80 text-sm font-semibold lg:flex  text-nowrap">
          {/* Links */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 md:justify-between gap-5 ">
            <h2>Legal</h2>
            <h2>Safety and Privacy</h2>
            <h2>Privacy Policy</h2>
            <h2>Cookie</h2>
            <h2>About Ads</h2>
            <h2>Accessibility</h2>
          </div>

          {/* Copyright */}
          <div className="flex items-end justify-start">
            <span>@2025 Sportify AB</span>
          </div>
        </div>
      </div>
    </div>
  );
}
