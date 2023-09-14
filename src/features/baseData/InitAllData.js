import Webs from "./Webs";
import Buttons from "./Buttons";
import JavaScripts from "./JavaScripts";
import Projects from "./Projects";
import Menus from "./Menus";

export default function InitAllData() {
  return (
    <>
      <Webs />
      <Menus />
      <Buttons />
      <JavaScripts />
      <Projects />
    </>
  );
}
