import { useDispatch } from "react-redux";
import { setWebs } from "./BaseData";

const webs = [
  {
    id: 1,
    title: "w3schools",
    nameImage: "w3schools",
    tecnology: ["HTML", "CSS"],
    href: "https://phung111.github.io/W3Schools/",
  },
  {
    id: 2,
    title: "construction company",
    nameImage: "construction company",
    tecnology: ["HTML", "CSS"],
    href: "https://phung111.github.io/Construction_Company/",
  },
  {
    id: 3,
    title: "studio design",
    nameImage: "studio design",
    tecnology: ["HTML", "CSS", "JS"],
    href: "https://phung111.github.io/Studio_Design/",
  },
  {
    id: 4,
    title: "web1",
    nameImage: "exza",
    tecnology: ["HTML", "CSS", "JS"],
    href: "###",
  },
  {
    id: 5,
    title: "web2",
    nameImage: "exza",
    tecnology: ["HTML", "CSS"],
    href: "###",
  },
  {
    id: 6,
    title: "web3",
    nameImage: "exza",
    tecnology: ["HTML", "JS"],
    href: "###",
  },
  {
    id: 7,
    title: "web4",
    nameImage: "exza",
    tecnology: ["HTML", "CSS", "JS"],
    href: "###",
  },
  {
    id: 8,
    title: "web1",
    nameImage: "exza",
    tecnology: ["HTML", "CSS", "JS"],
    href: "###",
  },
  {
    id: 9,
    title: "web2",
    nameImage: "exza",
    tecnology: ["HTML", "CSS"],
    href: "###",
  },
  {
    id: 10,
    title: "web3",
    nameImage: "exza",
    tecnology: ["HTML", "JS"],
    href: "###",
  },
  {
    id: 11,
    title: "web4",
    nameImage: "exza",
    tecnology: ["HTML", "CSS", "JS"],
    href: "###",
  },
];

export default function Webs() {
  const dispath = useDispatch();
  dispath(setWebs(webs));
  return;
}
