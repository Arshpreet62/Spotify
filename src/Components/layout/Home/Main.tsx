import ScrollablePlaylist from "../../ui/ScrollablePlaylist";

import Mix from "../../ui/Mix";
export default function Main() {
  return (
    <div className="flex flex-col items-center justify-start flex-1 h-full  bg-white/7 rounded-md ">
      <div className="flex w-full h-14 justify-start items-center gap-2 px-10">
        <div className="bg-white/10 px-[14px] py-[6px] text-[16px] text-white w-fit rounded-4xl">
          All
        </div>
        <div className="bg-white/10 px-[14px] py-[6px] text-[16px] text-white w-fit rounded-4xl">
          Music
        </div>
        <div className="bg-white/10 px-[14px] py-[6px] text-[16px] text-white w-fit rounded-4xl">
          Podcasts
        </div>
      </div>
      <div
        className="fles flex-col overflow-y-auto "
        style={{ height: "calc(100vh - 244px)", scrollbarWidth: "none" }}
      >
        <div className="grid grid-cols-2 gap-2 w-full py-3 px-10">
          {Array.from({ length: 6 }).map((_, index) => (
            <Mix key={index} />
          ))}
        </div>
        <div className="w-full flex flex-col flex-1 rounded-b-md pl-10 pt-5">
          <div className="flex w-full h-14 justify-between items-center pr-10">
            <h2 className="text-3xl font-semibold text-[#fff]">Made For You</h2>
            <h2 className="text-[14px] text-white/60 font-semibold">
              Show all
            </h2>
          </div>
          <ScrollablePlaylist />
        </div>
        <div className="w-full flex flex-col flex-1 rounded-b-md pl-10 pt-5">
          <div className="flex w-full h-14 justify-between items-center pr-10">
            <h2 className="text-3xl font-semibold text-[#fff]">Made For You</h2>
            <h2 className="text-[14px] text-white/60 font-semibold">
              Show all
            </h2>
          </div>
          <ScrollablePlaylist />
        </div>
        <div className="w-full flex flex-col flex-1 rounded-b-md pl-10 pt-5">
          <div className="flex w <ScrollablePlaylist />-full h-14 justify-between items-center pr-10">
            <h2 className="text-3xl font-semibold text-[#fff]">Made For You</h2>
            <h2 className="text-[14px] text-white/60 font-semibold">
              Show all
            </h2>
          </div>
          <ScrollablePlaylist />
        </div>
        <div className="w-full flex flex-col flex-1 rounded-b-md pl-10 pt-5">
          <div className="flex w-full h-14 justify-between items-center pr-10">
            <h2 className="text-3xl font-semibold text-[#fff]">Made For You</h2>
            <h2 className="text-[14px] text-white/60 font-semibold">
              Show all
            </h2>
          </div>
          <ScrollablePlaylist />
        </div>
      </div>
    </div>
  );
}
