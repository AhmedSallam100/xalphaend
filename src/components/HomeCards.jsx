import HomeCard from "./HomeCard";

let content = [
  {
    id: 1,
    icon: "uil-window",
    title: "المواقع",
    text1: "هنا ستجد اغلب المواقع التي ستحتاج",
    text2: "اليها كمبرمج خلال رحلتك التعليمية",
    href: "/web",
  },
  {
    id: 2,
    icon: "uil-tachometer-fast",
    title: "المسارات التعليمية",
    text1: "هنا ستجد المسارات التعليمية",
    text2: "الخاصة بمختلف المجالات البرمجية",
    href: "/pathes",
  },
  {
    id: 3,
    icon: "uil-book-open",
    title: "الكتب",
    text1: "هنا ستجد العديد من الكتب التي ستحتاج",
    text2: "اليها كمبرمج خلال رحلتك التعليمية",
    href: "/books",
  },
  {
    id: 4,
    icon: "uil-document-layout-left",
    title: "المقالات",
    text1: "هنا ستجد العديد من المقالات في مختلف",
    text2: "المجالات مثل التسويق | البرمجة | الديزاين",
    href: "/articles",
  },
  {
    id: 5,
    icon: "uil-youtube",
    title: "قنوات اليوتيوب",
    text1: "هنا ستجد العديد من قنوات اليوتيوب التي ستفيدك",
    text2: "خلال رحلتك التعليمية وحياتك عموما",
    href: "/channels",
  },
  {
    id: 6,
    icon: "uil-google",
    title: "الاضافات",
    text1: "هنا ستجد العديد من الاضافات التي يمكنك",
    text2: "تنزيلها في متصفحك لتساعدك",
    href: "/extension",
  },
  {
    id: 7,
    icon: "uil-microphone",
    title: "البودكاست",
    text1: "هنا ستجد العديد من البودكاست التي ستفيدك",
    text2: "في حياتك مهما كان مجالك",
    href: "/podcasts",
  },
  {
    id: 8,
    icon: "uil-apps",
    title: "التطبيقات",
    text1: "هنا ستجد العديد من التطبيقات التي ستفيدك",
    text2: "خلال رحلتك التعليمية",
    href: "/apps",
  },
  {
    id: 9,
    icon: "uil-brackets-curly",
    title: "تعلم البرمجة",
    text1: "هذا القسم المميز سوف ياخد بيدك من البداية الي ان تصير",
    text2: "مبرمج محترف",
    href: "/learnprogramming",
  },
];

const HomeCards = () => {
  return (
    <>
      {content.map(function (e) {
        return (
          <HomeCard
            key={e.id}
            icon={e.icon}
            title={e.title}
            text1={e.text1}
            text2={e.text2}
            href={e.href}
          />
        );
      })}
    </>
  );
};

export default HomeCards;
