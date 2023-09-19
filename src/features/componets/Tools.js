export default function Tools() {
  return (
    <>
      <div className="grid grid-cols-8">
        {Array(8)
          .fill()
          .map((item, i) => (
            <div className="flex items-center justify-center">
              <img
                key={i}
                src={require(`../../assets/images/tools/${i + 1}.png`)}
                className="object-contain"
              />
            </div>
          ))}
      </div>
    </>
  );
}
