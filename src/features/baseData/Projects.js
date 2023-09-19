import { useDispatch } from "react-redux";
import { setProjects } from "./BaseData";

const projects = [
  {
    id: 1,
    title: "project 1",
    href: "#",
    tecnology: ["HTML", "CSS", "JS"],
  },
  {
    id: 2,
    title: "project 2",
    href: "#",
    tecnology: ["HTML", "CSS", "JS"],
  },
  {
    id: 3,
    title: "project 3",
    href: "#",
    tecnology: ["HTML", "CSS", "JS"],
  },
];

export default function Projects() {
  const dispath = useDispatch();
  dispath(setProjects(projects));
  return;
}
