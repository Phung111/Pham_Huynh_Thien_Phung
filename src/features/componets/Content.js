import React from "react";

export default function Content({ name, componentContent }) {
  return (
    <div className="py-14">
      <div className="container">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h2 className="uppercase text-white">{name}</h2>
            <hr />
          </div>
          {React.cloneElement(componentContent)}
        </div>
      </div>
    </div>
  );
}
