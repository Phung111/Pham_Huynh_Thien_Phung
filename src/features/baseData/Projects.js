import { useDispatch } from "react-redux";
import { setProjects } from "./BaseData";

const projects = [
  {
    id: 1,
    title: "w3schools",
    href: "#",
    tecnology: ["HTML", "CSS", "JS"],
  },
  {
    id: 2,
    title: "w3schools2",
    href: "#",
    tecnology: ["HTML", "CSS", "JS"],
  },
  {
    id: 3,
    title: "w3schools3",
    href: "#",
    tecnology: ["HTML", "CSS", "JS"],
  },
];

export default function Projects() {
  const dispath = useDispatch();
  dispath(setProjects(projects));
  return;
}
