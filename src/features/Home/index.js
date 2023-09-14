import { useSelector } from "react-redux";

import Header from "../componets/Header/Header";
import InitAllData from "../baseData/InitAllData";
import Utils from "../../utils/Utils";
import ContentCustom from "../componets/ContentCustom";
import SubWeb from "../componets/Web/SubWeb";
import SubButton from "../componets/Button/SubButton";

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
        <div className="h-[200px]"></div>
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
