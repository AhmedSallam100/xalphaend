import PathCard from "./PathCard";

let content = [
  {
    id: 1,
    srcImg:
      "https://photos.smugmug.com/photos/i-ZNDwX7w/0/63270ede/S/i-ZNDwX7w-S.png",
    pathH2: "Front End Developer",
    href: "/pathes/frontend",
  },
  {
    id: 2,
    srcImg:
      "https://photos.smugmug.com/photos/i-2PLbfGK/0/d3df7b8d/S/i-2PLbfGK-S.png",
    pathH2: "PHP Developer",
    href: "/pathes/phpdeveloper",
  },
  {
    id: 3,
    srcImg:
      "https://logosandtypes.com/wp-content/uploads/2020/07/microsoft-net.svg",
    pathH2: ".Net Developer",
    href: "/pathes/netdeveloper",
  },
  {
    id: 4,
    srcImg:
      "https://photos.smugmug.com/photos/i-k2Bvm4P/0/72c544db/S/i-k2Bvm4P-S.png",
    pathH2: "NodeJS Developer",
    href: "/pathes/nodejsdeveloper",
  },
  {
    id: 5,
    srcImg:
      "https://photos.smugmug.com/photos/i-Xvcx4TH/1/4be35cb7/S/i-Xvcx4TH-S.png",
    pathH2: "Flutter Developer",
    href: "/pathes/flutterdeveloper",
  },
];

const PathCards = () => {
  return (
    <>
      {content.map(function (e) {
        return (
          <PathCard
            key={e.id}
            pathH2={e.pathH2}
            srcImg={e.srcImg}
            href={e.href}
          />
        );
      })}
    </>
  );
};

export default PathCards;
