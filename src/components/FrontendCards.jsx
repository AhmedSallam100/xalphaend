import PathCard from "./PathCard";

let content = [
  {
    id: 1,
    srcImg: "https://iili.io/HIoGZKv.md.png",
    pathH2: "Learn HTML",
    href: "https://www.youtube.com/playlist?list=PLDoPjvoNmBAw_t_XWUFbBX-c9MafPk9ji",
  },
  {
    id: 2,
    srcImg: "https://iili.io/HIoMfUl.png",
    pathH2: "Learn CSS",
    href: "https://www.youtube.com/playlist?list=PLDo",
  },
  {
    id: 3,
    srcImg: "https://iili.io/HIoMVqJ.md.png",
    pathH2: "HTML & CSS Practise",
    href: "https://elzero.org/practical-html-css/",
  },
  {
    id: 4,
    srcImg:
      "https://photos.smugmug.com/photos/i-ZNDwX7w/0/63270ede/S/i-ZNDwX7w-S.png",
    pathH2: "Learn JavaScript",
    href: "https://www.youtube.com/playlist?list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv",
  },
  {
    id: 5,
    srcImg: "https://iili.io/HIoVbjt.md.png",
    pathH2: "Learn BootStrap",
    href: "https://www.youtube.com/watch?v=b3ROWmXZ7iA",
  },
  {
    id: 6,
    srcImg: "https://iili.io/HIoW7wP.png",
    pathH2: "Learn ReactJS",
    href: "https://www.youtube.com/playlist?list=PLQtNtS-WfRa9LbmD8ON7rWhn-AtKTGdkn",
  },
  {
    id: 7,
    srcImg: "https://iili.io/HIoWYt1.md.png",
    pathH2: "Learn Sass",
    href: "https://www.youtube.com/playlist?list=PLDoPjvoNmBAzlpyFHOaB3b-eubmF0TAV2",
  },
  {
    id: 8,
    srcImg: "https://iili.io/HIoXfUv.md.png",
    pathH2: "Learn PugJS",
    href: "https://www.youtube.com/playlist?list=PLDoPjvoNmBAxckfbgAzwwxeoeBfi0y724",
  },
  {
    id: 9,
    srcImg: "https://iili.io/HIoXbBn.md.png",
    pathH2: "Learn GulpJS",
    href: "https://www.youtube.com/playlist?list=PLDoPjvoNmBAxyli7mXgNBhkRB-zgSHvL8",
  },
  {
    id: 10,
    srcImg: "https://iili.io/HIohBEu.md.png",
    pathH2: "Learn GitHub",
    href: "https://www.youtube.com/watch?v=Q6G-J54vgKc&t",
  },
  {
    id: 11,
    srcImg: "https://iili.io/HIoho2j.md.png",
    pathH2: "Learn Command Line",
    href: "https://www.youtube.com/playlist?list=PLDoPjvoNmBAxzNO8ixW83Sf8FnLy_MkUT",
  },
];

const FrontendCards = () => {
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

export default FrontendCards;
