import SubMenuDrop from "./SubMenuDrop";

export default function SubMenu({ subMenuTitle, subMenus }) {
  return (
    <div className="group relative flex cursor-pointer items-center justify-center hover:bg-gray-500">
      <p className="uppercase">{subMenuTitle}</p>
      <div className="absolute top-[100%] z-10 hidden w-full flex-col group-hover:flex">
        <div className="h-2"></div>
        <div className="w-full flex-col gap-1 bg-black">
          {subMenus &&
            subMenus
              .slice(0)
              .reverse()
              .map((item) => <SubMenuDrop key={item.id} subMenuDrop={item} />)}
        </div>
      </div>
    </div>
  );
}
