import PathCard from "./PathCard";

let content = [
  {
    id: 1,
    srcImg: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Dart_logo.png",
    pathH2: "Learn Dart",
    href: "https://www.youtube.com/playlist?list=PL93xoMrxRJIsYc9L0XBSaiiuq01JTMQ_o",
  },
  {
    id: 2,
    srcImg:
      "https://photos.smugmug.com/photos/i-Xvcx4TH/1/4be35cb7/S/i-Xvcx4TH-S.png",
    pathH2: "Learn Flutter",
    href: "https://www.youtube.com/playlist?list=PL93xoMrxRJIvtIXjAiX15wcyNv-LOWZa9",
  },
  {
    id: 3,
    srcImg: "https://i.ibb.co/N3kNLsh/firebase.png",
    pathH2: "Learn Firebase",
    href: "https://www.youtube.com/playlist?list=PL93xoMrxRJIvHhxhB21YzzeimEEzzAz6g",
  },
  {
    id: 4,
    srcImg:
      "https://photos.smugmug.com/photos/i-Xvcx4TH/1/4be35cb7/S/i-Xvcx4TH-S.png",
    pathH2: "Learn Provider",
    href: "https://www.youtube.com/playlist?list=PL93xoMrxRJIviJiC76oO5aV8bDp2s3OrA",
  },
  {
    id: 5,
    srcImg:
      "https://blog.tpk.kr/posts/how-to-get-flutter-boilerplate/getx.webp",
    pathH2: "Learn Getx",
    href: "https://www.youtube.com/playlist?list=PL93xoMrxRJIvZHL420f63bWIOrcoM6NU-",
  },
  {
    id: 6,
    srcImg:
      "https://photos.smugmug.com/photos/i-r49QZXc/0/960d7062/S/i-r49QZXc-S.png",
    pathH2: "Learn Sql",
    href: "https://www.youtube.com/playlist?list=PL93xoMrxRJIuicqcd1UpFUYMfWKGp7JmI",
  },
  {
    id: 7,
    srcImg:
      "https://cdn.pixabay.com/photo/2013/09/18/12/13/sqlite-183454_960_720.png",
    pathH2: "Learn Sqflite",
    href: "https://www.youtube.com/playlist?list=PL93xoMrxRJIvPg3nW8WG0HDDgpMQtUkag",
  },
  {
    id: 8,
    srcImg:
      "https://photos.smugmug.com/photos/i-2PLbfGK/0/d3df7b8d/S/i-2PLbfGK-S.png",
    pathH2: "Rest Api PHP And Flutter",
    href: "https://www.youtube.com/playlist?list=PL93xoMrxRJItcqJJgyCpA7Wv_YL-ii6Dl",
  },
  {
    id: 9,
    srcImg: "https://i.ibb.co/wNqmrH4/ecommerce.png",
    pathH2: "Ecommerce App",
    href: "https://www.youtube.com/playlist?list=PL93xoMrxRJIuvTINf31EZ4S06lPklY-r0",
  },
  {
    id: 10,
    srcImg: "https://avatars.githubusercontent.com/u/55202745?s=200&v=4",
    pathH2: "Package Of The Week",
    href: "https://www.youtube.com/playlist?list=PL93xoMrxRJIuIpCMr4qi2XkOzdEX7PlrU",
  },
];

const FlutterCards = () => {
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

export default FlutterCards;
