import { useState, useEffect } from "react";
import "./Button.scss";

export default function Button({ content }) {
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
    <div className="flex h-full w-full flex-col justify-between gap-5 p-2">
      <div className="flex justify-center">
        <button
          className={`button__${content.id} flex items-center justify-center rounded-lg border border-white bg-gray-500 px-9 py-5 font-semibold capitalize text-white transition ease-in-out`}
        >
          <span>{`Button ${content.id}`}</span>
        </button>
      </div>
      <ul className="list-inside list-disc rounded-xl border border-dashed p-3">
        {content.tecnology.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
