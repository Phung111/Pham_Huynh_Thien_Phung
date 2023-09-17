import { useState, useEffect } from "react";

export default function Web({ content }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (content) {
      setIsReady(true);
    }
  }, [content]);

  if (!isReady) {
    return null;
  }

  return (
    <div className="h-full hover:bg-black/30 hover:backdrop-blur-sm">
      <a className="relative" href="#" target="_blank">
        <div className="absolute h-full w-full bg-white/20"></div>
        <div className="relative h-full p-5">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col shadow-[7.5px_7.5px_0_0_rgba(0,0,0,0.5)]">
              <img
                src={require(`../../../assets/images/${content.nameImage}.png`)}
                alt={content.nameImage}
              />
              <div className="flex items-center justify-center bg-black p-3">
                <p className="capitalize text-white">{content.title}</p>
              </div>
            </div>

            <ul className="list_web_tec list-inside list-disc">
              {content.tecnology.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </a>
    </div>
  );
}
