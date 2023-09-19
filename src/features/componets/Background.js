import bg from "../../assets/images/bg.png";

export default function Background() {
  return (
    <div className="fixed top-0 -z-10 h-full w-full">
      <img src={bg} alt="background" className="h-full w-full object-cover" />
      <div className="absolute top-0 h-full w-full bg-gradient-to-b from-black to-transparent"></div>
    </div>
  );
}
