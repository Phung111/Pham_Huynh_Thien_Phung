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
  {
    id: 5,
    tecnology: ["HTML", "CSS", "JS"],
  },
  {
    id: 6,
    tecnology: ["HTML", "CSS", "JS"],
  },
  {
    id: 7,
    tecnology: ["HTML", "CSS", "JS"],
  },
  {
    id: 8,
    tecnology: ["HTML", "CSS", "JS"],
  },
  {
    id: 9,
    tecnology: ["HTML", "CSS", "JS"],
  },
  {
    id: 10,
    tecnology: ["HTML", "CSS", "JS"],
  },
  {
    id: 11,
    tecnology: ["HTML", "CSS", "JS"],
  },
  {
    id: 12,
    tecnology: ["HTML", "CSS", "JS"],
  },
  {
    id: 13,
    tecnology: ["HTML", "CSS", "JS"],
  },
  {
    id: 14,
    tecnology: ["HTML", "CSS", "JS"],
  },
  {
    id: 15,
    tecnology: ["HTML", "CSS", "JS"],
  },
  {
    id: 16,
    tecnology: ["HTML", "CSS", "JS"],
  },
];

export default function Buttons() {
  const dispath = useDispatch();
  dispath(setButtons(buttons));
  return;
}
