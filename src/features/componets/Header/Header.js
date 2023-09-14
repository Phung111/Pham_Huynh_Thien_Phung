import { toast } from "react-toastify";
import Images from "../../../utils/Images";

import Menu from "./Menu";

export default function Header() {
  return (
    <header className="fixed z-50 w-full bg-black text-white">
      <div className="container mx-auto">
        <div className="flex h-14 gap-5">
          <div className="relative flex min-w-[300px] max-w-full shrink-0 justify-center">
            <div className="absolute top-0 flex flex-col items-center pt-2">
              <h1>pham huynh thien phung</h1>
              <div className="h-[150px] w-[150px] rounded-full bg-black p-3">
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
