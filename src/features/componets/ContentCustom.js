import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";
import React from "react";

import SwiperCustom from "./SwiperCustom";

export default function ContentCustom({
  name,
  data,
  latest,
  componentContent,
}) {
  const otherArray = data.slice(0, data.length - latest);
  const latestArray = data.slice(data.length - latest, data.length);

  return (
    <section id="web">
      <div className="container">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h2 className="text-white">web</h2>
            <hr />
          </div>
          <h3 className="text-white">latest</h3>
          <div
            className="grid h-full justify-center gap-5"
            style={{ gridTemplateColumns: `repeat(${latest}, minmax(0,1fr))` }}
          >
            {latestArray &&
              latestArray
                .slice(0)
                .reverse()
                .map((item) => {
                  return React.cloneElement(componentContent, {
                    content: item,
                    key: item.id,
                  });
                })}
          </div>
          <h3 className="text-white">other</h3>
          <SwiperCustom
            name={name}
            data={otherArray}
            componentContent={componentContent}
            spaceBetween={20}
            slidesPerView={3}
            slidesPerGroup={3}
            grid={true}
            loop={false}
          />
        </div>
      </div>
    </section>
  );
}
