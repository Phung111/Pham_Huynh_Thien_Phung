import { useDispatch } from "react-redux";
import { setJavaScripts } from "./BaseData";

const javaScrips = [
  {
    id: 1,
    title: "light ball",
    href: "#",
  },
  {
    id: 2,
    title: "caculator",
    href: "#",
  },
];

export default function JavaScripts() {
  const dispath = useDispatch();
  dispath(setJavaScripts(javaScrips));
  return;
}
