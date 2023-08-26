import PathCard from "./PathCard";

let content = [
  {
    id: 1,
    srcImg:
      "https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png",
    pathH2: "Learn C#",
    href: "https://www.youtube.com/watch?v=DZHohhJDjHk&list=PLsV97AQt78NT0H8J71qe7edwRpAirfqOI&pp=iAQB",
  },
  {
    id: 2,
    srcImg: "https://cdnlogo.com/logos/m/21/microsoft-sql-server.svg",
    pathH2: "Learn Sql server ITI",
    href: "https://www.youtube.com/playlist?list=PLYpJKvLDuJhgMzOXRwUJ2_ZlVt3zSh8PA",
  },
  {
    id: 3,
    srcImg:
      "https://miro.medium.com/v2/resize:fit:1191/1*OzwARbvHUg1RlZ7LYyLCrg.png",
    pathH2: "Learn SOLID Principles",
    href: "https://www.youtube.com/watch?v=bMT-pth4G20&list=PLsV97AQt78NRT1GmH2EJ-o-2_ILFM9feq&pp=iAQB",
  },
  {
    id: 4,
    srcImg:
      "https://mma.prnewswire.com/media/2041351/linq_logo_release_Logo.jpg?p=twitter",
    pathH2: "Learn LINQ",
    href: "https://www.youtube.com/watch?v=XLIqOBr7Cm0&list=PL4n1Qos4Tb6Sj1Y4xJuJoWCuqleeG2yt6&pp=iAQB",
  },
  {
    id: 5,
    srcImg:
      "https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png",
    pathH2: "Learn Design Patterns",
    href: "https://www.youtube.com/watch?v=aSDdHSW6_bU&list=PLsV97AQt78NTrqUAZM562JbR3ljX19JFR&pp=iAQB",
  },

  {
    id: 6,
    srcImg:
      "https://codeopinion.com/wp-content/uploads/2017/10/Bitmap-MEDIUM_Entity-Framework-Core-Logo_2colors_Square_Boxed_RGB.png",
    pathH2: "Learn EF-Core",
    href: "https://www.youtube.com/playlist?list=PL4n1Qos4Tb6QZkbTWJx7wHqEABP8Pg6uv",
  },
  {
    id: 7,
    srcImg:
      "https://viget.imgix.net/jest.png?auto=format%2Ccompress&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&ixlib=php-3.3.1&q=90&s=a6c20876868af5a7f83241353efc2495",
    pathH2: "Learn Unit Testing",
    href: "https://www.youtube.com/watch?v=dowaRZIJRKE&list=PL4n1Qos4Tb6RrQpmpGWALaE1PVvWR8d3A&pp=iAQB",
  },
  {
    id: 8,
    srcImg:
      "https://dotnet.microsoft.com/static/images/redesign/social/square.png",
    pathH2: "Learn Asp.Net",
    href: "https://www.youtube.com/@DevCreed",
  },
  {
    id: 9,
    srcImg:
      "https://png.pngtree.com/png-vector/20191113/ourmid/pngtree-learning-deep-algorithm-data-blue-dotted-line-line-icon-png-image_1985405.jpg",
    pathH2: "Learn Algorithm",
    href: "https://www.youtube.com/watch?v=dy541mxxO-U&list=PLS4Br7eW53y67LzDpawZq3PfM16ZP2JEe&index=2",
  },
];

const NetCards = () => {
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

export default NetCards;
