import Images from "../../../utils/Images";

import Menu from "./Menu";

export default function Header() {
  return (
    <header className="relative z-10 w-full bg-transparent text-white">
      <div className="container">
        <div className="flex h-14 gap-5">
          <div className="relative flex min-w-[160px] max-w-full shrink-0 justify-center">
            <div className="absolute top-0 flex flex-col items-center pt-2">
              <div className="h-[100px] w-[100px] rounded-full bg-black p-3 sm:h-[150px] sm:w-[150px]">
                <a href="http://localhost:3000/Pham_Huynh_Thien_Phung ">
                  <img
                    src={Images.AVATAR}
                    alt="avatar"
                    className="relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full transition ease-out hover:scale-105"
                  />
                </a>
              </div>
            </div>
          </div>
          <Menu />
        </div>
      </div>
    </header>
  );
}
