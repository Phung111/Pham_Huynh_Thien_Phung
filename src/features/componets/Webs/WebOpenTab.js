import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from "jquery";
import { useEffect, useRef, useState } from "react";

export default function WebOpenTab({ content }) {
  const closeOpenTab = (event) => {
    $(event.currentTarget).closest(".web_open_tab").toggleClass("hidden");
  };

  const [isReady, setIsReady] = useState(false);
  const webOpenTabRef = useRef();

  const handleClickInside = (event) => {
    event.stopPropagation();
  };

  useEffect(() => {
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (isReady) {
      const handleClickOutside = (event) => {
        if (
          webOpenTabRef.current &&
          !webOpenTabRef.current.contains(event.target)
        ) {
          $(webOpenTabRef.current).addClass("hidden");
        }
      };

      $(document).on("click", handleClickOutside);

      return () => {
        $(document).off("click", handleClickOutside);
      };
    }
  }, [isReady]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        $(".web_open_tab").addClass("hidden");
      }
    };

    $(document).on("keydown", handleKeyDown);

    return () => {
      $(document).off("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <div
        className="web_open_tab fixed left-0 top-0 z-20 hidden h-full w-full bg-black/20 p-10 backdrop-blur-md"
        tabIndex={-1}
        onClick={handleClickInside}
      >
        <FontAwesomeIcon
          icon="fa-solid fa-xmark"
          className="absolute right-10 top-10 text-4xl hover:text-cyan-500"
          onClick={closeOpenTab}
        />
        <div className="mx-auto h-full max-w-[1000px] py-10">
          <div className="flex h-full bg-white/20 p-5">
            <div className="flex w-full flex-col justify-center gap-2">
              <img
                src={require(
                  `../../../assets/images/${content.nameImage}_bg.png`,
                )}
                alt={content.nameImage}
                className=""
              />

              <div className="flex flex-col gap-2">
                <div className="flex gap-5">
                  <p className="flex w-28 shrink-0 capitalize">project</p>
                  <p className="capitalize">{content.title}</p>
                </div>
                <div className="flex gap-5">
                  <p className="flex w-28 shrink-0 capitalize">time</p>
                  <p className="capitalize">{content.time}</p>
                </div>
                <div className="flex gap-5">
                  <p className="flex w-28 shrink-0 capitalize">tecnology</p>
                  <p className="capitalize">{content.tecnology}</p>
                </div>
                <div className="flex gap-5">
                  <p className="flex w-28 shrink-0 capitalize">type</p>
                  <p className="capitalize">{content.type}</p>
                </div>
                <div className="flex gap-5">
                  <p className="flex w-28 shrink-0 capitalize">responsive</p>
                  <p className="capitalize">{content.responsive}</p>
                </div>
                <div className="flex gap-5">
                  <p className="flex w-28 shrink-0 capitalize">decription</p>
                  <p className="">
                    {content.decription ? `"${content.decription}"` : ``}
                  </p>
                </div>
                <div className="flex gap-5">
                  <p className="flex w-28 shrink-0 capitalize">link web</p>
                  <a
                    href={content.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[15px] underline hover:text-blue-500"
                  >
                    {content.href}
                  </a>
                </div>
                <div className="flex gap-5">
                  <p className="flex w-28 shrink-0 capitalize">link source</p>
                  <a
                    href={content.source}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[15px] underline hover:text-blue-500"
                  >
                    {content.source}
                  </a>
                </div>
                <div className="flex gap-5">
                  <p className="flex w-28 shrink-0 capitalize">page on web</p>
                  <p className="capitalize">{content.pageOnWeb}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
