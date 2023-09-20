import "animate.css";

export default function Tools() {
  return (
    <>
      <div className="grid grid-cols-9">
        {Array(8)
          .fill()
          .map((item, i) => (
            <div
              className={`animate__animated ${
                i % 2 === 0 ? "animate__fadeInUp " : " "
              }flex items-center justify-center `}
            >
              <img
                key={i}
                src={require(`../../assets/images/tools/${i + 1}.png`)}
                className="relative left-1/2 top-1/2 h-full -translate-x-1/2 -translate-y-1/2 cursor-pointer object-contain transition ease-out hover:scale-110"
                alt="img"
              />
            </div>
          ))}
      </div>
    </>
  );
}
