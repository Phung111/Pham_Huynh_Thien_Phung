import SubMenu from "./SubMenu";
import { useSelector } from "react-redux";

export default function Menu() {
  const baseData = useSelector((state) => state.baseData.data);

  const webs = baseData.webs;
  const others = baseData.others;
  const javascripts = baseData.javascripts;
  const projects = baseData.projects;

  return (
    <div className="grid w-full grid-cols-2 lg:grid-cols-4">
      <SubMenu key={1} subMenuTitle="project" subMenus={projects} />
      <SubMenu key={2} subMenuTitle="web" subMenus={webs} />
      <SubMenu key={3} subMenuTitle="JavaScript" subMenus={javascripts} />
      <SubMenu key={4} subMenuTitle="other" subMenus={others} />
    </div>
  );
}
