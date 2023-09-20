import { useSelector } from "react-redux";

import Web from "./Web";

export default function Webs() {
  const baseData = useSelector((state) => state.baseData.data);
  const webs = baseData.webs;
  const otherArray = webs.slice(0, webs.length - 2);
  const latestArray = webs.slice(webs.length - 2, webs.length);

  return (
    <>
      <h3 className="capitalize text-white">latest</h3>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {latestArray &&
          latestArray
            .slice(0)
            .reverse()
            .map((item, index) => <Web key={index} content={item} />)}
      </div>
      <h3 className="capitalize text-white">other</h3>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {otherArray &&
          otherArray
            .slice(0)
            .reverse()
            .map((item, index) => <Web key={index} content={item} />)}
      </div>
    </>
  );
}
