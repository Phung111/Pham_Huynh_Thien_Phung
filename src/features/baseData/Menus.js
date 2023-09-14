import { useDispatch } from "react-redux";
import { setMenus } from "./BaseData";

const menus = [
  {
    id: 1,
    title: "Menu1",
    href: "#",
  },
  {
    id: 2,
    title: "menu2",
    href: "#",
  },
  {
    id: 3,
    title: "menu3",
    href: "#",
  },
  {
    id: 4,
    title: "menu4",
    href: "#",
  },
];

export default function Webs() {
  const dispath = useDispatch();
  dispath(setMenus(menus));
  return;
}
