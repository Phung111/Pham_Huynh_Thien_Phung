import { useDispatch } from "react-redux";
import { setWebs } from "./BaseData";

const webs = [
  {
    id: 1,
    title: "w3schools",
    nameImage: "w3schools",
    tecnology: "HTML, CSS",
    href: "https://phung111.github.io/W3Schools/",
    source: "https://github.com/Phung111/W3Schools",
    type: "static",
    responsive: "full responsive",
    time: "30 hour",
    pageOnWeb:
      "MotorMatic, HHOBD, Accessories, Support, Tecnical Specification, Comapre, Buy, Account, Login",
    decription: "",
  },
  {
    id: 2,
    title: "construction company",
    nameImage: "construction company",
    tecnology: "HTML, CSS",
    href: "https://phung111.github.io/Construction_Company/",
    source: "https://github.com/Phung111/Construction_Company",
    type: "static",
    responsive: "full responsive",
    time: "30 hour",
    pageOnWeb:
      "MotorMatic, HHOBD, Accessories, Support, Tecnical Specification, Comapre, Buy, Account, Login",
    decription: "",
  },
  {
    id: 3,
    title: "studio design",
    nameImage: "studio design",
    tecnology: "HTML, CSS",
    href: "https://phung111.github.io/Studio_Design/",
    source: "https://github.com/Phung111/Studio_Design",
    type: "static",
    responsive: "full responsive",
    time: "30 hour",
    pageOnWeb:
      "MotorMatic, HHOBD, Accessories, Support, Tecnical Specification, Comapre, Buy, Account, Login",
    decription: "",
  },
  {
    id: 4,
    title: "dream agency",
    nameImage: "dream agency",
    tecnology: "HTML, CSS",
    href: "https://phung111.github.io/Dream_Agency/",
    source: "https://github.com/Phung111/Dream_Agency",
    type: "static",
    responsive: "full responsive",
    time: "30 hour",
    pageOnWeb:
      "MotorMatic, HHOBD, Accessories, Support, Tecnical Specification, Comapre, Buy, Account, Login",
    decription: "",
  },
  {
    id: 5,
    title: "decox design",
    nameImage: "decox design",
    tecnology: "HTML, CSS, JS, Swiper",
    href: "https://phung111.github.io/Decox_Design/",
    source: "https://github.com/Phung111/Decox_Design",
    type: "static",
    responsive: "full responsive",
    time: "30 hour",
    pageOnWeb:
      "MotorMatic, HHOBD, Accessories, Support, Tecnical Specification, Comapre, Buy, Account, Login",
    decription: "",
  },
  {
    id: 6,
    title: "exza",
    nameImage: "exza",
    tecnology: "HTML, CSS, JS, TailwindCSS",
    href: "https://phung111.github.io/Exza/",
    source: "https://github.com/Phung111/Exza",
    type: "static",
    responsive: "full responsive",
    time: "30 hour",
    pageOnWeb:
      "MotorMatic, HHOBD, Accessories, Support, Tecnical Specification, Comapre, Buy, Account, Login",
    decription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. asdasd asd asd sd sad",
  },
];

export default function Webs() {
  const dispath = useDispatch();
  dispath(setWebs(webs));
  return;
}
