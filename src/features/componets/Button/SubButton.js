import { useState, useEffect } from "react";
import "./Button.scss";

export default function SubButton({ content }) {
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
    <>
      <div className="flex w-full flex-col gap-5">
        <div className="flex justify-center">
          <button className="button_1 rounded-lg bg-gray-500 px-9 py-5 font-semibold capitalize">
            {`Button ${content.id}`}
          </button>
        </div>
        <ul className="list-inside list-disc rounded-xl border border-dashed p-3">
          {content.tecnology.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
