import WebOpenTab from "./WebOpenTab";
import $ from "jquery";

export default function Web({ content }) {
  const openWebTab = (event) => {
    $(event.currentTarget).find(".web_open_tab").toggleClass("hidden");
    event.preventDefault();
  };

  return (
    <>
      <div
        className="web cursor-pointer font-bold text-white "
        onClick={openWebTab}
      >
        <WebOpenTab content={content} />
        <div className="relative left-1/2 top-1/2 h-full -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl transition ease-out hover:scale-105">
          <div className="absolute z-[-1] flex h-full w-full">
            <img
              src={require(`../../../assets/images/${content.nameImage}.png`)}
              alt={content.nameImage}
              className="object-cover"
            />
            <div className="absolute h-full w-full bg-black/20 backdrop-blur-[2px]"></div>
          </div>
          <div className="flex h-[360px] flex-col justify-between gap-2 p-6">
            <div className="flex items-center gap-3">
              <div className="flex aspect-square shrink-0 items-center justify-center rounded-full border border-white p-1">
                <p className="text-[10px]">{content.time}</p>
              </div>
              <p className="flex h-12 items-center text-[18px] font-extrabold capitalize leading-6 ">
                {content.title}
              </p>
            </div>
            <div className="flex">
              <p className="capitalize">{content.tecnology}</p>
            </div>
            <div className="flex">
              <p className="capitalize">{content.type}</p>
            </div>
            <div className="flex">
              <p className="capitalize">{content.responsive}</p>
            </div>
            <div className="flex">
              <p className="h-[72px] overflow-hidden leading-6">
                {content.decription ? `"${content.decription}"` : ``}
              </p>
            </div>
            <div className="flex">
              <button className="flex items-center justify-center rounded-full border border-white px-4 py-2 hover:bg-white hover:text-black">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
