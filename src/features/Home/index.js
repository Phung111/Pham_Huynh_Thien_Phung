import Header from "../componets/Header/Header";
import InitAllData from "../baseData/InitAllData";
import Utils from "../../utils/Utils";

import Background from "../componets/Background";
import Name from "../componets/Name";
import Content from "../componets/Content";
import Webs from "../componets/Webs/Webs";
import Contact from "../componets/Contact";
import Knowleadges from "../componets/Knowleadges";
import Tools from "../componets/Tools";
import { useState, useEffect } from "react";
import "animate.css";
export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const targetElements = document.querySelectorAll(".animate_on_scroll");

      targetElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Kiểm tra xem phần tử có nằm ngay giữa màn hình hay không
        if (rect.top >= 0 && rect.bottom <= windowHeight) {
          element.classList.add("animate__fadeInUp");
        } else {
          element.classList.remove("animate__fadeInUp");
        }
      });
    };

    // Thêm sự kiện scroll
    window.addEventListener("scroll", handleScroll);

    // Xóa sự kiện scroll khi component bị hủy
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <InitAllData />
      <Utils />
      <div className="relative flex flex-col gap-28">
        <Background />
        <Header />
        <Name />
        <Content name={"knowledge"} componentContent={<Knowleadges />} />
        <Content name={"tools"} componentContent={<Tools />} />
        <Content name={"webs"} componentContent={<Webs />} />
        <Content name={"contact"} componentContent={<Contact />} />
      </div>
    </>
  );
}
