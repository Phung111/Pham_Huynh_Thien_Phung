import { useSelector } from "react-redux";

import Header from "../componets/Header/Header";
import InitAllData from "../baseData/InitAllData";
import Utils from "../../utils/Utils";

import Background from "../componets/Background";
import Name from "../componets/Name";
import Content from "../componets/Content";
import Webs from "../componets/Webs/Webs";
import Knowleadges from "../componets/Knowleadges";
import Tools from "../componets/Tools";
import Contact from "../componets/Contact";

export default function Home() {
  const baseData = useSelector((state) => state.baseData.data);
  const webs = baseData.webs;
  console.log("webs", webs);
  const otherArray = webs.slice(0, webs.length - 2);
  const latestArray = webs.slice(webs.length - 2, webs.length);
  return (
    <>
      <InitAllData />
      <Utils />
      <div className="relative flex flex-col gap-28">
        <Background />
        <Header />
        <Name />
        <Content name={"knowledge"} componentContent={<Knowleadges />} />
        <Content name={"tools"} componentContent={<Tools />} />
        <Content name={"webs"} componentContent={<Webs />} />
        <Content name={"contact"} componentContent={<Contact />} />
      </div>
    </>
  );
}
