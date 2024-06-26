import { useDispatch } from "react-redux";
import { setWebs } from "./BaseData";

const webs = [
  {
    id: 1,
    title: "White Lotus Restaurant - Web App",
    nameImage: "white-lotus-restaurant",
    tecnology: "Java, React, Redux, API, SpringBoot, SQL, Ajax, Cloudinary",
    href: "https://nhahangsentrang.top/",
    source: "https://gitlab.com/dev4end/reactjs-white-lotus-restaurant",
    type: "dynamic",
    responsive: "",
    time: "5 weeks",
    pageOnWeb: "",
    decription: "",
  },
  {
    id: 2,
    title: "White Lotus Restaurant - Dash Board",
    nameImage: "white-lotus-restaurant-dashboard",
    tecnology: "Java, API, SpringBoot, SQL, Ajax, Cloudinary",
    href: "https://cp.nhahangsentrang.top/cp",
    source: "https://gitlab.com/dev4end/spb-module-white-lotus-restaurant",
    type: "dynamic",
    responsive: "",
    time: "5 weeks",
    pageOnWeb: "",
    decription: "",
  },
  {
    id: 3,
    title: "w3schools",
    nameImage: "w3schools",
    tecnology: "HTML, CSS",
    href: "https://phung111.github.io/W3Schools/",
    source: "https://github.com/Phung111/W3Schools",
    type: "static",
    responsive: "full responsive",
    time: "2 hour",
    pageOnWeb: "",
    decription: "",
  },
  {
    id: 4,
    title: "construction company",
    nameImage: "construction company",
    tecnology: "HTML, CSS",
    href: "https://phung111.github.io/Construction_Company/",
    source: "https://github.com/Phung111/Construction_Company",
    type: "static",
    responsive: "",
    time: "1 hour",
    pageOnWeb: "",
    decription: "",
  },
  {
    id: 5,
    title: "studio design",
    nameImage: "studio design",
    tecnology: "HTML, CSS",
    href: "https://phung111.github.io/Studio_Design/",
    source: "https://github.com/Phung111/Studio_Design",
    type: "static",
    responsive: "",
    time: "2 hour",
    pageOnWeb: "",
    decription: "",
  },
  {
    id: 6,
    title: "dream agency",
    nameImage: "dream agency",
    tecnology: "HTML, CSS, JS, Animate.style",
    href: "https://phung111.github.io/Dream_Agency/",
    source: "https://github.com/Phung111/Dream_Agency",
    type: "static",
    responsive: "full responsive",
    time: "5 hour",
    pageOnWeb: "",
    decription: "I build my own CSS",
  },
  {
    id: 7,
    title: "decox design",
    nameImage: "decox design",
    tecnology: "HTML, CSS, JS, Swiper",
    href: "https://phung111.github.io/Decox_Design/",
    source: "https://github.com/Phung111/Decox_Design",
    type: "dynamic",
    responsive: "full responsive",
    time: "10 hour",
    pageOnWeb: "Menu, Mẫu nhà đẹp",
    decription:
      "I try to build masonry layout, prepare json source for dynamic web",
  },
  {
    id: 8,
    title: "exza",
    nameImage: "exza",
    tecnology: "HTML, CSS, JS, TailwindCSS",
    href: "https://phung111.github.io/Exza/",
    source: "https://github.com/Phung111/Exza",
    type: "dynamic",
    responsive: "full responsive",
    time: "30 hour",
    pageOnWeb:
      "MotorMatic, HHOBD, Accessories, Support, Tecnical Specification, Comapre, Buy, Account, Login",
    decription: "Still dynamic web although source is json. Component reuse",
  },
  {
    id: 9,
    title: "ecommerce",
    nameImage: "ecommerce",
    tecnology: "HTML, CSS, JS, TailwindCSS",
    href: "https://phung111.github.io/Exza/",
    source: "https://github.com/Phung111/Exza",
    type: "dynamic",
    responsive: "full responsive",
    time: "30 hour",
    pageOnWeb:
      "MotorMatic, HHOBD, Accessories, Support, Tecnical Specification, Comapre, Buy, Account, Login",
    decription: "Still dynamic web although source is json. Component reuse",
  },
  {
    id: 11,
    title: "makotodecor",
    nameImage: "makotodecor",
    tecnology: "React, Redux, TailwindCSS, hosting, domain",
    href: "https://github.com/Phung111/makotodecor.git",
    source: "https://www.makotodecor.shop/",
    type: "dynamic",
    responsive: "1 pc and 1 mobile",
    time: "10 hour",
    pageOnWeb: "Home, Detail Product",
    decription: "Web doing while on intern at GOSU Online Corporation",
  },
  {
    id: 11,
    title: "gosu",
    nameImage: "gosu",
    tecnology: "React, Redux, TailwindCSS, API, axios, change language",
    href: "https://github.com/Phung111/gosu.git",
    source: "https://phung111.github.io/gosu/",
    type: "dynamic",
    responsive: "full responsive",
    time: "30 hour",
    pageOnWeb: "WE ARE GOSU, LIFE AT GOSU, GOSU WORLD, GOSU NEWS",
    decription: "Web doing while on intern at GOSU Online Corporation",
  },
  {
    id: 12,
    title: "clothshop",
    nameImage: "clothshop",
    tecnology:
      "Java,React, Redux, TailwindCSS, API, RESTfulAPI, Axios, SpringBoot, Hibernate, JPA, Security, CORS, JWT",
    href: "https://github.com/Phung111/clothshop_fe.git",
    source: "https://github.com/Phung111/clothshop_be.git",
    type: "dynamic",
    responsive: "1 pc screen only",
    time: "6 month",
    pageOnWeb: "",
    decription: "My Primary Project Present",
  },
];

export default function Webs() {
  const dispath = useDispatch();
  dispath(setWebs(webs));
  return;
}
