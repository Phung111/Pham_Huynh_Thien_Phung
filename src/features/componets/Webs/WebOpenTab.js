import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function WebOpenTab({ content }) {
  return (
    <>
      <div className="fixed left-0 top-0 z-20 h-full w-full bg-black/20 p-10">
        <FontAwesomeIcon
          icon="fa-solid fa-xmark"
          className="absolute right-10 top-10 text-4xl hover:text-cyan-500"
        />

        <div className="mx-auto flex w-1/2 flex-col gap-5">
          <img
            src={require(`../../../assets/images/decox design.png`)}
            alt="exza"
          />
        </div>
      </div>
    </>
  );
}
