import { useSelector } from "react-redux";

import Header from "../componets/Header/Header";
import InitAllData from "../baseData/InitAllData";
import Utils from "../../utils/Utils";
import ContentCustom from "../componets/ContentCustom";
import SubWeb from "../componets/Web/Web";
import SubButton from "../componets/Button/Button";

import Background from "./Background";
import Name from "./Name";

export default function Home() {
  const baseData = useSelector((state) => state.baseData.data);
  const webs = baseData.webs;
  const buttons = baseData.buttons;
  return (
    <>
      <InitAllData />
      <Utils />
      <div className="relative flex flex-col gap-24">
        <Background />
        <Header />
        <Name />
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
    </>
  );
}
