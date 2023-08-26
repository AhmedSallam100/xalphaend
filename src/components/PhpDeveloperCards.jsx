import PathCard from "./PathCard";
import mvc from "../assets/hostimg/mvc.png";

let content = [
  {
    id: 1,
    srcImg: "https://iili.io/HIoGZKv.md.png",
    pathH2: "Learn HTML",
    href: "https://www.youtube.com/playlist?list=PLDoPjvoNmBAw_t_XWUFbBX-c9MafPk9ji",
  },
  {
    id: 2,
    srcImg:
      "https://photos.smugmug.com/photos/i-2PLbfGK/0/d3df7b8d/S/i-2PLbfGK-S.png",
    pathH2: "PHP Track",
    href: "https://www.youtube.com/watch?v=DcxCB6DfvYM&list=PLe_UJpVeP8qDirnJ9xwVJ7QIMCjzAbZs2&pp=iAQB",
  },
  {
    id: 3,
    srcImg:
      "https://photos.smugmug.com/photos/i-2PLbfGK/0/d3df7b8d/S/i-2PLbfGK-S.png",
    pathH2: "Learn PHP",
    href: "https://www.youtube.com/watch?v=4JLErNiQowQ&list=PLe_UJpVeP8qBr0IotQa16V0TCLsf3db71&pp=iAQB",
  },
  {
    id: 4,
    srcImg:
      "https://photos.smugmug.com/photos/i-2PLbfGK/0/d3df7b8d/S/i-2PLbfGK-S.png",
    pathH2: "Learn PHP Part 2",
    href: "https://www.youtube.com/watch?v=1YrcBJ1rUjM&list=PLe_UJpVeP8qAJSTpDBKZa6CsqpSybJ2d3&pp=iAQB",
  },
  {
    id: 5,
    srcImg:
      "https://photos.smugmug.com/photos/i-2PLbfGK/0/d3df7b8d/S/i-2PLbfGK-S.png",
    pathH2: "PHP Projects",
    href: "https://www.youtube.com/watch?v=JZUfjPDccvE&list=PLe_UJpVeP8qBhzSJz2v9bncuMnlpG8RwZ&pp=iAQB",
  },
  {
    id: 6,
    srcImg:
      "https://photos.smugmug.com/photos/i-r49QZXc/0/960d7062/S/i-r49QZXc-S.png",
    pathH2: "Learn Sql And MySql",
    href: "https://www.youtube.com/playlist?list=PLMTdZ61eBnyoQoEmLOcgTBdrAOVT-GFju",
  },
  {
    id: 7,
    srcImg:
      "https://photos.smugmug.com/photos/i-2PLbfGK/0/d3df7b8d/S/i-2PLbfGK-S.png",
    pathH2: "Learn OOP",
    href: "https://www.youtube.com/playlist?list=PL7mt2FDjAkPdEgExp0ZNMIiW8vHI8FEK1",
  },
  {
    id: 8,
    srcImg:
      "https://miro.medium.com/v2/resize:fit:1191/1*OzwARbvHUg1RlZ7LYyLCrg.png",
    pathH2: "Learn SOLID Principles",
    href: "https://www.youtube.com/playlist?list=PLnqAlQ9hFYdflFSS4NigVB7aSoYPNwHTL",
  },
  {
    id: 8,
    srcImg:
      "https://photos.smugmug.com/photos/i-2PLbfGK/0/d3df7b8d/S/i-2PLbfGK-S.png",
    pathH2: "Learn Design Patterns PHP",
    href: "https://www.youtube.com/playlist?list=PLdYYj2XLw5BnpInmR103TyVwFd_CLI6IS",
  },
  {
    id: 9,
    srcImg:
      "https://photos.smugmug.com/photos/i-2PLbfGK/0/d3df7b8d/S/i-2PLbfGK-S.png",
    pathH2: "Learn MVC",
    href: "https://www.youtube.com/playlist?list=PLe_UJpVeP8qChlO1eyFI7dMcMCGIQNbU1",
  },
  {
    id: 10,
    srcImg:
      "https://seeklogo.com/images/L/laravel-logo-41EC1D4C3F-seeklogo.com.png",
    pathH2: "Learn Laravel",
    href: "https://www.youtube.com/playlist?list=PLftLUHfDSiZ4GfPZxaFDsA7ejUzD7SpWa",
  },
  {
    id: 11,
    srcImg: "https://www.webapp.sk/uploads/img-63f7650fbbf25.png",
    pathH2: "Learn APis",
    href: "https://www.youtube.com/playlist?list=PLftLUHfDSiZ6MfN8UhhcXDhh64eejvIKK",
  },
  {
    id: 12,
    srcImg: "https://iili.io/HIohBEu.md.png",
    pathH2: "Learn GitHub",
    href: "https://www.youtube.com/watch?v=Q6G-J54vgKc&t",
  },
];

const PhpDeveloperCards = () => {
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

export default PhpDeveloperCards;
