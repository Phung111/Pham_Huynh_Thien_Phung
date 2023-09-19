export default function Knowleadges() {
  return (
    <>
      <div className="grid grid-cols-8">
        {Array(14)
          .fill()
          .map((item, i) => (
            <div className="flex items-center justify-center">
              <img
                key={i}
                src={require(`../../assets/images/knowledges/${i + 1}.png`)}
                className="object-contain"
              />
            </div>
          ))}
      </div>
    </>
  );
}
