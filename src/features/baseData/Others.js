import { useDispatch } from "react-redux";
import { setOthers } from "./BaseData";

const others = [
  {
    id: 1,
    title: "menu 1",
    href: "#",
  },
  {
    id: 2,
    title: "menu 2",
    href: "#",
  },
  {
    id: 3,
    title: "menu 3",
    href: "#",
  },
  {
    id: 4,
    title: "menu 4",
    href: "#",
  },
  {
    id: 999,
    title: "Buttons CSS Colection",
    href: "#",
  },
];

export default function Others() {
  const dispath = useDispatch();
  dispath(setOthers(others));
  return;
}
