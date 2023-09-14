import { useSelector } from "react-redux";

import Header from "../componets/Header/Header";
import InitAllData from "../baseData/InitAllData";
import Utils from "../../utils/Utils";
import ContentCustom from "../componets/ContentCustom";
import SubWeb from "../componets/Web/Web";
import SubButton from "../componets/Button/Button";

import bg from "../../assets/images/bg.png";

export default function Home() {
  const baseData = useSelector((state) => state.baseData.data);
  const webs = baseData.webs;
  const buttons = baseData.buttons;
  return (
    <>
      <InitAllData />
      <Utils />
      <div className=" bg-gradient-to-b from-primary to-secondary ">
        <Header />
        <div className="h-14"></div>
        <div className="relative flex max-h-[600px] w-full justify-center overflow-hidden">
          <img src={bg} alt="background" className="relative h-full w-full" />
          <div className="absolute top-0 h-full w-full bg-gradient-to-b from-black to-transparent"></div>
          <div className="absolute top-[30%] text-center">
            <p className="font-futirism text-[60px] font-bold uppercase text-white">
              pham huynh thien phung
            </p>
            <p className="text-[20px] text-white">
              Here is all my stuffs about front-end designs, hope you like it
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <ContentCustom
            name={"web"}
            data={webs}
            latest={2}
            componentContent={<SubWeb />}
          />
          <ContentCustom
            name={"button"}
            data={buttons}
            latest={3}
            componentContent={<SubButton />}
          />
        </div>
      </div>
    </>
  );
}
