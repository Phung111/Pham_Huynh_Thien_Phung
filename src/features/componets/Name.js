import "animate.css";
import ReactTyped from "react-typed";

export default function Name() {
  return (
    <div className="container">
      <div className="flex w-full flex-col justify-center gap-2 overflow-hidden">
        <p className="font-futirism relative left-1/2 top-1/2 -translate-x-1/2 cursor-pointer text-center text-[30px] font-bold uppercase text-white transition ease-out hover:scale-105 sm:text-[60px]">
          pham huynh thien phung
        </p>
        <div className="animate__animated animate_on_scroll animate__fadeInUp">
          <p className="text-justify text-[10px] text-white sm:text-[20px]">
            <span className="inline-block w-[120px] sm:w-[240px]">
              <ReactTyped
                strings={["I'm a Frontend Developer."]}
                typeSpeed={100}
                loop
                backSpeed={20}
                showCursor={true}
              />
            </span>
            I have the ability to design websites using Tailwind, JavaScript,
            and ReactJS. I am capable of building frontend projects from scratch
            and configuring frameworks on my own.
          </p>
          <p className="text-justify text-[10px] text-white sm:text-[20px]">
            I have completed a 6-month coding bootcamp at CodeGym and dedicated
            an additional 6 months to self-study and expand my knowledge.
          </p>
          <p className="text-justify text-[10px] text-white sm:text-[20px]">
            My short-term goal is to become a junior developer, and in the long
            run, I aspire to become a leader developer to excel in this
            industry.
          </p>
        </div>
      </div>
    </div>
  );
}
