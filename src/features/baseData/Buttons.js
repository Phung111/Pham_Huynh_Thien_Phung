import { useDispatch } from "react-redux";
import { setButtons } from "./BaseData";

const buttons = [
  {
    id: 1,
    tecnology: ["HTML", "CSS", "JS"],
  },
  {
    id: 2,
    tecnology: ["HTML", "CSS", "JS"],
  },
  {
    id: 3,
    tecnology: ["HTML", "CSS", "JS"],
  },
  {
    id: 4,
    tecnology: ["HTML", "CSS", "JS"],
  },
];

export default function Buttons() {
  const dispath = useDispatch();
  dispath(setButtons(buttons));
  return;
}
