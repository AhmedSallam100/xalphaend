import ArticleCard from "./ArticleCard";

let contentArticels = [
  {
    id: 1,
    imgSrc: "https://i.ibb.co/vqMSgt2/startprog.png",
    articelSrc: "/articles/كيف-تبدا-في-مجال-البرمجة",
    articelTitle: "كيف تبدا في مجال البرمجة؟",
    articelDescripton:
      "بسم الله الرحمن الرحيم ناس كتير نفسها تتعلم برمجة فعشان كدا انا قررت اكتب المقال دا نبدا بأول حاجة لازم تعملها",
    writerImg:
      "https://photos.smugmug.com/photos/i-mFSM62F/0/791e1637/S/i-mFSM62F-S.jpg",
    writerProfile: "https://web.facebook.com/xravox",
    writerName: "Ahmed Sallam",
    articelViews: "190",
  },
  {
    id: 2,
    imgSrc: "https://i.ibb.co/M7W5wKX/js-1.png",
    articelSrc: "/articles/المقال-الأول-في-لغة-الجافا-اسكربت",
    articelTitle: "المقال الأول في لغة الجافا اسكربت",
    articelDescripton:
      "بسم الله الرحمن الرحيم نبدا كدا علي خير ان شاء الله من اولها لاخرها ان شاء الله وكل حاجة هتكون js مجموعة مقالات هتمسك",
    writerImg:
      "https://photos.smugmug.com/photos/i-mFSM62F/0/791e1637/S/i-mFSM62F-S.jpg",
    writerProfile: "https://web.facebook.com/xravox",
    writerName: "Ahmed Sallam",
    articelViews: "187",
  },
  {
    id: 3,
    imgSrc:
      "https://photos.smugmug.com/photos/i-bWVHPhF/0/2bd28c7e/M/i-bWVHPhF-M.jpg",
    articelSrc: "/articles/الاغاني-في-الاستوري",
    articelTitle: "الأغاني في الستوري ! وليه بالأخص؟",
    articelDescripton:
      "طبعًا، خلينا متفقين إن الأغاني حرام قطعًا، ولو أنت مش مقتنع فأنا مش جاي في البوست دا أحرمهالك ابحث",
    writerImg:
      "https://photos.smugmug.com/photos/i-hptmMpK/0/fbaba786/S/i-hptmMpK-S.jpg",
    writerProfile: "https://web.facebook.com/xrascoz",
    writerName: "AbdulHai Gamal",
    articelViews: "241",
  },
  {
    id: 4,
    imgSrc:
      "https://photos.smugmug.com/photos/i-Q2nSfd5/0/c0c05d12/S/i-Q2nSfd5-S.jpg",
    articelSrc: "/articles/Always-Search",
    articelTitle: "دائما ابحث | Always Search",
    articelDescripton:
      "رغم ان الكلمه دي لا تتكون من اكتر من كلمتين بس لو فهمت الكلمتين دول كويس ممكن تغير حياتك",
    writerImg:
      "https://photos.smugmug.com/photos/i-hptmMpK/0/fbaba786/S/i-hptmMpK-S.jpg",
    writerProfile: "https://web.facebook.com/xrascoz",
    writerName: "AbdulHai Gamal",
    articelViews: "132",
  },
  {
    id: 5,
    imgSrc: "https://ahmedsallam100.github.io/xravoxdash/img/moh-arr.jpg",
    articelSrc: "/articles/Array-methods-1",
    articelTitle: "Array Methods Part-1",
    articelDescripton:
      "بسم الله الرحمن الرحيم اهلا يا صديقي. هنتكلم النهارده عن ال Array Methodes ولو متعرفش ايه هي الArray",
    writerImg:
      "https://photos.smugmug.com/photos/i-NCc6mPp/0/3a51ca99/Th/i-NCc6mPp-Th.jpg",
    writerProfile: "https://web.facebook.com/memo.orginal",
    writerName: "Mohammed Refaat",
    articelViews: "150",
  },
  {
    id: 6,
    imgSrc: "https://ahmedsallam100.github.io/xravoxdash/img/moh-arr-2.jpg",
    articelSrc: "/articles/Array-methods-2",
    articelTitle: "Array Methods Part-2",
    articelDescripton:
      "بسم الله الرحمن الرحيم اهلا يا صديقي. هنكمل النهارده عن ال Array Methodes أنت لازم تشوف",
    writerImg:
      "https://photos.smugmug.com/photos/i-NCc6mPp/0/3a51ca99/Th/i-NCc6mPp-Th.jpg",
    writerProfile: "https://web.facebook.com/memo.orginal",
    writerName: "Mohammed Refaat",
    articelViews: "170",
  },
  {
    id: 7,
    imgSrc: "https://ahmedsallam100.github.io/xravoxdash/img/btgp.jpg",
    articelSrc: "/articles/كيفية-تغيير-ايقونة-الموقع-و-لون-المؤشر",
    articelTitle: "كيفية تغيير ايقونة الموقع و لون المؤشر؟",
    articelDescripton:
      "عاوز تغير لون المؤشر في الادخال ومش عارف ازاي كل ما عليك انك هتستخدم caret_color وبعدها اللون المناسب او اللون اللي يعجبك",
    writerImg:
      "https://photos.smugmug.com/photos/i-NH7PT2t/0/960c5cdc/S/i-NH7PT2t-S.jpg",
    writerProfile: "https://web.facebook.com/profile.php?id=100040283528617",
    writerName: "بت الجبالي",
    articelViews: "200",
  },
  {
    id: 8,
    imgSrc: "https://ahmedsallam100.github.io/xravoxdash/img/han-clean.jpg",
    articelSrc: "/articles/ما-هو-الكلين-كود-ولماذا-هو-مهم",
    articelTitle: "ما هو الكلين كود ولماذا هو مهم؟",
    articelDescripton:
      "بسم الله الرحمن الرحيم هو ليه الكلين كود مهم؟ أوقات بتسمع مصطلح زي انك Loosely coupled",
    writerImg: "https://ahmedsallam100.github.io/xravoxdash/img/hanen.jpg",
    writerProfile: "https://web.facebook.com/profile.php?id=100093470224120",
    writerName: "Haneen Ahmed",
    articelViews: "320",
  },
  {
    id: 9,
    imgSrc: "https://ahmedsallam100.github.io/xravoxdash/img/hang.jpg",
    articelSrc: "/articles/ما-هو-الجرافيك-ديزاين",
    articelTitle: "ما هو الجرافيك ديزاين؟",
    articelDescripton:
      "بسم الله الرحمن الرحيم يعني اي جرافيك ديزينر قبل مااقلولك يعني اية ؟ هقولك هو بيعمل اية؟",
    writerImg: "https://ahmedsallam100.github.io/xravoxdash/img/hanen.jpg",
    writerProfile: "https://web.facebook.com/profile.php?id=100093470224120",
    writerName: "Haneen Ahmed",
    articelViews: "238",
  },
];

const ArticelsCards = () => {
  return (
    <>
      <div className="wrapper d-grid gap-20">
        {contentArticels.map(function (e) {
          return (
            <ArticleCard
              key={e.id}
              imgSrc={e.imgSrc}
              articelSrc={e.articelSrc}
              articelTitle={e.articelTitle}
              articelDescripton={e.articelDescripton}
              writerImg={e.writerImg}
              writerProfile={e.writerProfile}
              writerName={e.writerName}
              articelViews={e.articelViews}
            />
          );
        })}
      </div>
    </>
  );
};

export default ArticelsCards;
