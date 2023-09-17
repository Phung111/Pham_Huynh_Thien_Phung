import Images from "../../../utils/Images";

import Menu from "./Menu";

export default function Header() {
  return (
    <header className="relative z-10 w-full bg-transparent text-white">
      <div className="container">
        <div className="flex h-14 gap-5">
          <div className="relative flex min-w-[300px] max-w-full shrink-0 justify-center">
            <div className="absolute top-0 flex flex-col items-center pt-2">
              <div className="h-[100px] w-[100px] rounded-full bg-black p-3 sm:h-[150px] sm:w-[150px]">
                <img
                  src={Images.AVATAR}
                  alt="avatar"
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
          <Menu />
        </div>
      </div>
    </header>
  );
}
