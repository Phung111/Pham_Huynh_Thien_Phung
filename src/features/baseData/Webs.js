import { useDispatch } from "react-redux";
import { setWebs } from "./BaseData";

const webs = [
  {
    id: 1,
    title: "web1",
    nameImage: "web1",
    tecnology: ["HTML", "CSS", "JS"],
  },
  {
    id: 2,
    title: "web2",
    nameImage: "web2",
    tecnology: ["HTML", "CSS"],
  },
  {
    id: 3,
    title: "web3",
    nameImage: "web3",
    tecnology: ["HTML", "JS"],
  },
  {
    id: 4,
    title: "web4",
    nameImage: "web4",
    tecnology: ["HTML", "CSS", "JS"],
  },
  {
    id: 5,
    title: "web1",
    nameImage: "web1",
    tecnology: ["HTML", "CSS", "JS"],
  },
  {
    id: 6,
    title: "web2",
    nameImage: "web2",
    tecnology: ["HTML", "CSS"],
  },
  {
    id: 7,
    title: "web3",
    nameImage: "web3",
    tecnology: ["HTML", "JS"],
  },
  {
    id: 8,
    title: "web4",
    nameImage: "web4",
    tecnology: ["HTML", "CSS", "JS"],
  },
  {
    id: 9,
    title: "web1",
    nameImage: "web1",
    tecnology: ["HTML", "CSS", "JS"],
  },
  {
    id: 10,
    title: "web2",
    nameImage: "web2",
    tecnology: ["HTML", "CSS"],
  },
  {
    id: 11,
    title: "web3",
    nameImage: "web3",
    tecnology: ["HTML", "JS"],
  },
  {
    id: 12,
    title: "web4",
    nameImage: "web4",
    tecnology: ["HTML", "CSS", "JS"],
  },
];

export default function Webs() {
  const dispath = useDispatch();
  dispath(setWebs(webs));
  return;
}
