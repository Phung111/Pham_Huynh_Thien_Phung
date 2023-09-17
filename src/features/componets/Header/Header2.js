import Images from "../../../utils/Images";

import Menu from "./Menu";

export default function Header2() {
  return (
    <header className="relative z-10 bg-black pt-5 text-white">
      <div className="container">
        <div className="flex h-8 justify-center sm:h-10 md:h-12">
          <div className="w-[80%] rounded-full bg-[#181819] p-1 sm:w-[50%]">
            <div className="grid h-full grid-cols-4 ">
              <div className="boder-white/50 flex cursor-pointer items-center justify-center rounded-full hover:border hover:bg-[#3b3a3a]">
                <p className="text-[10px] capitalize sm:text-[14px] md:text-[18px]">
                  webs
                </p>
              </div>
              <div className="boder-white/50 flex cursor-pointer items-center justify-center rounded-full hover:border hover:bg-[#3b3a3a]">
                <p className="text-[10px] capitalize sm:text-[14px] md:text-[18px]">
                  menus
                </p>
              </div>
              <div className="boder-white/50 flex cursor-pointer items-center justify-center rounded-full hover:border hover:bg-[#3b3a3a]">
                <p className="text-[10px] capitalize sm:text-[14px] md:text-[18px]">
                  javaScript
                </p>
              </div>
              <div className="boder-white/50 flex cursor-pointer items-center justify-center rounded-full hover:border hover:bg-[#3b3a3a]">
                <p className="text-[10px] capitalize sm:text-[14px] md:text-[18px]">
                  projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
