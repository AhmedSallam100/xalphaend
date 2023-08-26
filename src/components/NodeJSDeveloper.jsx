import PathCard from "./PathCard";

let content = [
  {
    id: 1,
    srcImg:
      "https://photos.smugmug.com/photos/i-k2Bvm4P/0/72c544db/S/i-k2Bvm4P-S.png",
    pathH2: "Learn NodeJS",
    href: "https://courses4arab.com/node-level1/node-2.html",
  },
  {
    id: 2,
    srcImg:
      "https://photos.smugmug.com/photos/i-k2Bvm4P/0/72c544db/S/i-k2Bvm4P-S.png",
    pathH2: "Build Crud App",
    href: "https://www.youtube.com/watch?v=Akt98GIXArg&t=4146s",
  },
];

const NodeCards = () => {
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

export default NodeCards;
