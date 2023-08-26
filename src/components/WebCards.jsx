import SectionTitle from "./SectionTitle";
import WebCard from "./WebCard";

let contentAi = [
  {
    id: 1,
    imgSrc:
      "https://photos.smugmug.com/photos/i-NvbQ2Bf/0/e4a6a5de/S/i-NvbQ2Bf-S.png",
    text1: "من مواقع الذكاء الاصطناعي حيث يقوم بازالة",
    bold: "خلفية الفيديوهات باستخدام تقنيات الذكاء الاصطناعي",
    text2: "",
    text3: "ستحتاجه باذن الله",
    href: "https://www.unscreen.com/",
  },
  {
    id: 2,
    imgSrc:
      "https://photos.smugmug.com/photos/i-xtrBdWv/0/79f55f55/S/i-xtrBdWv-S.png",
    text1: "تستخدم هذه الاداة تقنيات الذكاء الاصطناعي لفهم مجموعة",
    bold: "الالوان التي تحبها",
    text2: "وتنشئ منها لوحة تلقائية لتصميماتك",
    text3: "ستحتاجه باذن الله",
    href: "https://www.khroma.co/",
  },
  {
    id: 3,
    imgSrc:
      "https://photos.smugmug.com/photos/i-hz5376C/0/d20df028/S/i-hz5376C-S.png",
    text1: "من مواقع الذكاء الاصطناعي المميزة حيث يقوم",
    bold: "بتحسين جودة الصور وقص الخلفية",
    text2: "بدقة واحترافية عالية ومجانا",
    text3: "ستحتاجه باذن الله",
    href: "https://picwish.com/",
  },
  {
    id: 4,
    imgSrc:
      "https://photos.smugmug.com/photos/i-J24n763/0/6b1199ab/Th/i-J24n763-Th.png",
    text1: "اذا كنت تريد كتابة محتوي",
    bold: "جذاب ويحقق انتشار كبير",
    text2: "يوفر لك هذا الموقع اساليب رائعة للكتابة",
    text3: "ستحتاجه باذن الله",
    href: "https://tribescaler.com/",
  },
  {
    id: 5,
    imgSrc:
      "https://photos.smugmug.com/photos/i-Qzxnbj9/2/3cf22e96/S/i-Qzxnbj9-S.jpg",
    text1: "اذا كان لديك صور مشوهة او بها اخطاء فان هذا",
    bold: "الموقع يوفر لك العديد",
    text2: "من ادوات الذكاء الاصطناعي الخاصة بالصور",
    text3: "ستحتاجه باذن الله",
    href: "https://clipdrop.co/",
  },
  {
    id: 6,
    imgSrc:
      "https://photos.smugmug.com/photos/i-BZGfhj3/1/af74486f/Th/i-BZGfhj3-Th.png",
    text1: "يقوم هذا الموقع بوظيفة عظيمة وهي",
    bold: "تحويل النص الوصفي الي الصورة",
    text2: "",
    text3: "ستحتاجه باذن الله",
    href: "https://writesonic.com/",
  },
  {
    id: 7,
    imgSrc:
      "https://photos.smugmug.com/photos/i-5FcCFkB/1/c2cd73e0/Th/i-5FcCFkB-Th.png",
    text1: "موقع اكثر من رائع يقوم بانشاء مقاطع",
    bold: "فيديو لاشخاص يتحدثون",
    text2: "بالذكاء الاصطناعي",
    text3: "ستحتاجه باذن الله",
    href: "https://www.synthesia.io/",
  },
  {
    id: 8,
    imgSrc:
      "https://photos.smugmug.com/photos/i-wctCJB7/0/00ed1318/S/i-wctCJB7-S.png",
    text1: "هذا الموقع يقوم بانشاء ايموجي واستيكرات",
    bold: "علي حسب حالتك المزاجية",
    text2: "بالذكاء الاصطناعي",
    text3: "جربه ستستمتع",
    href: "https://www.supermeme.ai/",
  },
  {
    id: 9,
    imgSrc:
      "https://photos.smugmug.com/photos/i-bn3bVDt/3/c7357dad/Th/i-bn3bVDt-Th.png",
    text1: "يساعدك هذا الموقع علي انشاء محتوي ذكي",
    bold: "وسلس يجذب الاخرين",
    text2: "",
    text3: "ستحتاجه باذن الله",
    href: "https://narrato.io/",
  },
  {
    id: 10,
    imgSrc:
      "https://photos.smugmug.com/photos/i-WR2CFsZ/0/4f964537/L/i-WR2CFsZ-L.png",
    text1: "موقع من مواقع الذكاء الاصطناعي يساعدك",
    bold: "في انشاء العديد من التصميمات الابداعية",
    text2: "",
    text3: "ستحتاجه باذن الله",
    href: "https://www.midjourney.com/home/?callbackUrl=%2Fapp%2F",
  },
  {
    id: 11,
    imgSrc:
      "https://photos.smugmug.com/photos/i-m9n7TMM/0/3d953efe/Ti/i-m9n7TMM-Ti.png",
    text1: "موقع من مواقع الذكاء الاصطناعي يساعدك ايضا",
    bold: "في انشاء العديد من التصميمات الابداعية",
    text2: "",
    text3: "ستحتاجه باذن الله",
    href: "https://stablecog.com/",
  },
  {
    id: 12,
    imgSrc:
      "https://photos.smugmug.com/photos/i-TZPdfF7/2/4b3ae0d8/Th/i-TZPdfF7-Th.png",
    text1: "هذا الموقع اكثر من رائع كل ما عليك هو اعطائه",
    bold: "اسم شركتك",
    text2: "وسوف يصمم العديد من الشعارات بالالوان التي تفضلها",
    text3: "ستحتاجه باذن الله",
    href: "https://www.namecheap.com/logo-maker/",
  },
  {
    id: 13,
    imgSrc:
      "https://photos.smugmug.com/photos/i-6b7g5Sx/0/eefd4c3a/S/i-6b7g5Sx-S.png",
    text1: "منصة احترافية تستعمل الذكاء الاصطناعي وتساعدك علي انشاء",
    bold: "عروض تقديمية احترافية",
    text2: "دون ان تمتلك خبرة عالية",
    text3: "ستحتاجه باذن الله",
    href: "https://gamma.app/",
  },
  {
    id: 14,
    imgSrc:
      "https://photos.smugmug.com/photos/i-FvkdJkj/0/f6b2c8c9/S/i-FvkdJkj-S.png",
    text1: "منصة من منصات الذكاء الاصطناعي تستطيع من خلالها",
    bold: "عرض مشكلتك او توليد افكار رائعة",
    text2: "",
    text3: "ستحتاجه باذن الله",
    href: "https://poe.com/",
  },
  {
    id: 15,
    imgSrc:
      "https://photos.smugmug.com/photos/i-fGC7SRB/0/1d12a514/S/i-fGC7SRB-S.png",
    text1: "منصة من منصات الذكاء الاصطناعي تستطيع من خلالها",
    bold: "انشاء موقع بسيط لشركتك الخاصة",
    text2: "دون اي خبرة",
    text3: "ستحتاجه باذن الله",
    href: "https://app.durable.co/",
  },
];
let contentDesign = [
  {
    id: 1,
    imgSrc:
      "https://photos.smugmug.com/photos/i-6Zs6h2x/0/202616e4/Th/i-6Zs6h2x-Th.png",
    text1: "من المواقع التي ستعطي شكل جذاب لموقعك يمكنك عمل به",
    bold: "موجات رائعة",
    text2: "وأشياء أخري قم باستكشافها شاهد الشكل",
    text3: "ستحتاجه باذن الله",
    href: "https://getwaves.io/",
  },
  {
    id: 2,
    imgSrc:
      "https://photos.smugmug.com/photos/i-PhmbdMv/0/716d89a1/S/i-PhmbdMv-S.png",
    text1: "من المواقع التي ستعطي شكل جذاب لموقعك يمكنك عمل به",
    bold: "اشكال دائرية مختلفة",
    text2: "استخدمها في تصميمك وموقعك",
    text3: "ستحتاجه باذن الله",
    href: "https://www.blobmaker.app/",
  },
  {
    id: 3,
    imgSrc:
      "https://photos.smugmug.com/photos/i-SXGms36/0/21b0e964/M/i-SXGms36-M.png",
    text1: "هذا الموقع مفيد من حيث الألوان حيث يعطيك ألوان الشركات",
    bold: "Facebook | Instagram | Twitter",
    text2: "المشهورة مثل",
    text3: "ستحتاجه باذن الله",
    href: "https://brandcolors.net/",
  },
  {
    id: 4,
    imgSrc:
      "https://photos.smugmug.com/photos/i-jsdvvg9/0/44e1cf73/Th/i-jsdvvg9-Th.png",
    text1: "هذا الموقع مقدم من شركة جوجل يمكنك من خلاله تحميل",
    bold: "منه الخطوط الإنجليزية لموقعك وتصميمك",
    text2: "",
    text3: "ستحتاجه باذن الله",
    href: "https://fonts.google.com/",
  },
  {
    id: 5,
    imgSrc:
      "https://photos.smugmug.com/photos/i-kqKnsqT/4/4c40a83f/M/i-kqKnsqT-M.png",
    text1: "هذا الموقع مقدم من شركة الفونت يمكنك من خلاله تحميل",
    bold: "الخطوط العربية",
    text2: "لموقعك وتصميمك",
    text3: "ستحتاجه باذن الله",
    href: "https://alfont.com/",
  },
  {
    id: 6,
    imgSrc:
      "https://photos.smugmug.com/photos/i-t4LFRHb/0/6ac3f56c/Th/i-t4LFRHb-Th.png",
    text1: "هذا الموقع كنز للمبرمجين والمصممين يحتوي علي صور",
    bold: "خطوط موك اب فيكتور رسومات وأشياء كثيرة",
    text2: "",
    text3: "سيوفر عليك الكثير من الوقت",
    href: "https://www.freepik.com/",
  },
  {
    id: 7,
    imgSrc:
      "https://photos.smugmug.com/photos/i-7xRkKmm/0/f41d9fea/S/i-7xRkKmm-S.png",
    text1: "هذا الموقع سيفيدك اذا كنت تريد تغيير صيغ الملفات",
    bold: "مثل الفيديوهات | الصور | الصوتيات | الملفات",
    text2: "",
    text3: "سيوفر عليك الكثير من الوقت",
    href: "https://www.online-convert.com/",
  },
  {
    id: 8,
    imgSrc:
      "https://photos.smugmug.com/photos/i-z8rbFHV/0/78606b84/Th/i-z8rbFHV-Th.jpg",
    text1: "هذا الموقع سيفيدك اذا كنت تريد الحصول علي قوالب الوان",
    bold: "متناسقة مع بعضها لموقعك او تصميمك",
    text2: "",
    text3: "سيوفر عليك الكثير من الوقت",
    href: "https://colorhunt.co/",
  },
  {
    id: 9,
    imgSrc:
      "https://photos.smugmug.com/photos/i-VvQHsQr/0/54c8b4a7/S/i-VvQHsQr-S.png",
    text1: "هذا الموقع يوفر لك اكثر من 1000 ايقونة لكي تستخدمهم",
    bold: "في تصاميمك وصناعة المحتوي",
    text2: "",
    text3: "ستحتاجه باذن الله",
    href: "https://www.flaticon.com/",
  },
  {
    id: 10,
    imgSrc:
      "https://photos.smugmug.com/photos/i-fPLp3nL/0/e350ea2c/Th/i-fPLp3nL-Th.png",
    text1: "هذا الموقع يوفر لك اكثر من 1000 ايقونة وصورة لكي تستخدمهم",
    bold: "في تصاميمك وصناعة المحتوي",
    text2: "",
    text3: "ستحتاجه باذن الله",
    href: "https://www.freeiconspng.com/",
  },
  {
    id: 11,
    imgSrc:
      "https://photos.smugmug.com/photos/i-6hQ4bRT/0/71ac38b2/Th/i-6hQ4bRT-Th.png",
    text1: "هذا الموقع كنز بمعني الكلمة حيث يوفر لك",
    bold: "الكثير من الصور ثلاثية الابعاد",
    text2: "",
    text3: "ستحتاجه باذن الله",
    href: "https://www.pixelsquid.com/",
  },
  {
    id: 12,
    imgSrc:
      "https://photos.smugmug.com/photos/i-fvLLR6j/0/3057551b/M/i-fvLLR6j-M.png",
    text1: "هذا الموقع كنز بمعني الكلمة حيث يوفر لك",
    bold: "الكثير من الفرش",
    text2: "",
    text3: "ستحتاجه باذن الله",
    href: "https://brushez.com/",
  },
  {
    id: 13,
    imgSrc:
      "https://photos.smugmug.com/photos/i-wdqr2gr/0/77e658b8/Th/i-wdqr2gr-Th.png",
    text1: "هذا الموقع كنز للمبرمجين والمصممين يحتوي علي صور",
    bold: "خطوط موك اب فيكتور رسومات وأشياء كثيرة",
    text2: "",
    text3: "سيوفر عليك الكثير من الوقت",
    href: "https://www.vecteezy.com/",
  },
  {
    id: 14,
    imgSrc:
      "https://photos.smugmug.com/photos/i-LxH3Ghw/0/7dda2693/Ti/i-LxH3Ghw-Ti.png",
    text1: "موقع جرافيك برجر يحتوي علي الملايين من",
    bold: "الموك اب",
    text2: "التي ستساعدك في تصميمك",
    text3: "سيوفر عليك الكثير من الوقت",
    href: "https://www.graphicburger.com/",
  },
  {
    id: 15,
    imgSrc:
      "https://photos.smugmug.com/photos/i-V8dMvVV/1/b94441bf/S/i-V8dMvVV-S.png",
    text1: "موقع مفيد للمبرمجين والمصممين في نفس الوقت",
    bold: "ومكتبة ايقونات",
    text2: "لا تعد ولا تحصي",
    text3: "سيوفر عليك الكثير من الوقت",
    href: "https://www.graphicburger.com/",
  },
  {
    id: 16,
    imgSrc:
      "https://photos.smugmug.com/photos/i-wJgGwWB/0/8362ada2/S/i-wJgGwWB-S.png",
    text1: "يوفر لك هذا الموقع مجموعة من العبوات",
    bold: "ثلاثية الابعاد",
    text2: "جاهزة للتعديل عليها",
    text3: "سيوفر عليك الكثير من الوقت",
    href: "https://www.templatemaker.nl/en/",
  },
];
let contentCoders = [
  {
    id: 1,
    imgSrc:
      "https://photos.smugmug.com/photos/i-MwMNzcw/0/34a8afc7/Th/i-MwMNzcw-Th.png",
    text1: "موقع جذاب يمكنك من انشاء اشكال بطرق جذابة",
    bold: "مع القدرة علي التلاعب بالظلال والابعاد",
    text2: "",
    text3: "ستحتاجه باذن الله",
    href: "https://neumorphism.io/",
  },
  {
    id: 2,
    imgSrc:
      "https://photos.smugmug.com/photos/i-WDdbf6Q/0/3001475d/Th/i-WDdbf6Q-Th.png",
    text1: "تستطيع من خلال هذا الموقع انشاء كروت جذابة",
    bold: "بشكل زجاجي ورائع يجعل موقعك فريد ومميز",
    text2: "",
    text3: "ستحتاجه باذن الله",
    href: "https://hype4.academy/tools/glassmorphism-generator",
  },
  {
    id: 3,
    imgSrc:
      "https://photos.smugmug.com/photos/i-wfXx56T/1/bed487cd/Th/i-wfXx56T-Th.png",
    text1: "تستطيع من خلال هذا الموقع انشاء",
    bold: "تاثيرات اضاءة احترافية وجذابة",
    text2: "في الموقع الخاص بك",
    text3: "ستحتاجه باذن الله",
    href: "https://cssbud.com/css-generator/css-glow-generator/",
  },
  {
    id: 4,
    imgSrc:
      "https://photos.smugmug.com/photos/i-ZpJHHSk/0/afc005c4/Th/i-ZpJHHSk-Th.png",
    text1: "تستطيع من خلال هذا الموقع انشاء",
    bold: "خلفيات خطية",
    text2: "بالالوان التي تفضلها ستعطي شكلا رائعا لموقعك",
    text3: "ستحتاجه باذن الله",
    href: "https://stripesgenerator.com/",
  },
  {
    id: 5,
    imgSrc:
      "https://photos.smugmug.com/photos/i-3L6LVD9/0/f69588ac/Ti/i-3L6LVD9-Ti.png",
    text1: "تستطيع من خلال هذا الموقع انشاء",
    bold: "خلفيات متدرجة",
    text2: "بالالوان التي تفضلها ستعطي شكلا رائعا لموقعك",
    text3: "ستحتاجه باذن الله",
    href: "https://cssgradient.io/",
  },
  {
    id: 6,
    imgSrc:
      "https://photos.smugmug.com/photos/i-7cWfWcD/0/28b021c4/S/i-7cWfWcD-S.jpg",
    text1: "هذا الموقع لا بد ان يعرفه كل مبرمج في اي مجال",
    bold: "توجد عليه ملايين من الحلول والاكواد لمختلف المشاكل",
    text2: "",
    text3: "ستحتاجه باذن الله",
    href: "https://stackoverflow.com/",
  },
  {
    id: 7,
    imgSrc:
      "https://photos.smugmug.com/photos/i-p6FGG9d/0/71fd3f12/S/i-p6FGG9d-S.jpg",
    text1: "موقع الجت هب هو اهم موقع لدي اي مبرمج",
    bold: "يمكنك رفع مشاريعك عليه",
    text2: "وهذا يزيد من فرص حصولك علي العمل",
    text3: "ستحتاجه باذن الله",
    href: "https://github.com/",
  },
  {
    id: 8,
    imgSrc:
      "https://photos.smugmug.com/photos/i-94hxpvp/0/dda95b86/S/i-94hxpvp-S.png",
    text1: "تستطيع من خلال هذا الموقع تعلم العديد من مجالات البرمجة",
    bold: "عن طريق مجموعة من الكورسات والمهام الاحترافية",
    text2: "",
    text3: "ستحتاجه باذن الله",
    href: "https://www.codecademy.com/",
  },
  {
    id: 9,
    imgSrc:
      "https://photos.smugmug.com/photos/i-8C9kVfP/0/1e9fc447/S/i-8C9kVfP-S.png",
    text1: "يقدم لك الموقع مجموعة كبيرة من الشروحات والمستندات",
    bold: "للعديد من لغات البرمجة والفريموركات",
    text2: "",
    text3: "ستحتاجه باذن الله",
    href: "https://www.digitalocean.com/",
  },
  {
    id: 10,
    imgSrc:
      "https://photos.smugmug.com/photos/i-R22pK9t/0/9f64128d/S/i-R22pK9t-S.png",
    text1: "ينشر هذا الموقع يوميا الكثير من المقالات في مختلف المجالات",
    bold: "وهذا غير الكورسات والكتب",
    text2: "التي تملئ الموقع",
    text3: "ستحتاجه باذن الله",
    href: "https://www.sitepoint.com/",
  },
  {
    id: 11,
    imgSrc:
      "https://photos.smugmug.com/photos/i-g3dtdpx/0/e6293e60/Th/i-g3dtdpx-Th.png",
    text1: "موقع مقدم من شركة جوجل توجد عليه الكثير",
    bold: "من احدث الاخبار الخاصة بمختلف البرمجيات",
    text2: "",
    text3: "ستحتاجه باذن الله",
    href: "https://developers.google.com/",
  },
  {
    id: 12,
    imgSrc:
      "https://photos.smugmug.com/photos/i-J8WZQZH/0/7c1d72ed/Th/i-J8WZQZH-Th.png",
    text1: "هذا الموقع لا بد ان يعرفه كل مبرمج في اي مجال",
    bold: "توجد عليه ملايين من الحلول والاكواد لمختلف المشاكل",
    text2: "",
    text3: "ستحتاجه باذن الله",
    href: "https://ar.quora.com/",
  },
  {
    id: 13,
    imgSrc:
      "https://photos.smugmug.com/photos/i-FnBqbtG/0/018d8796/S/i-FnBqbtG-S.png",
    text1: "كل ما عليك هو كتابة ما تريد تعلمه في هذا الموقع",
    bold: "وسيعطيك مصادر لتعلم الشئ الذي تريده",
    text2: "",
    text3: "ستحتاجه باذن الله",
    href: "https://learn-anything.xyz/",
  },
  {
    id: 14,
    imgSrc:
      "https://photos.smugmug.com/photos/i-pMxMhGB/0/e592a86a/S/i-pMxMhGB-S.png",
    text1: "هذا الموقع غني بالمعلومات في مختلف لغاب البرمجة ويمكنك",
    bold: "",
    text2: "الاعتماد عليه كمصدر قوي للتعلم اذا كنت محترف او مبتدئ مثل",
    text3: "HTML | CSS | JS | PhP | Python | SQL | ++C",
    href: "https://developer.mozilla.org/en-US/",
  },
  {
    id: 15,
    imgSrc:
      "https://photos.smugmug.com/photos/i-XvB6rSQ/0/9fd5e5b5/Ti/i-XvB6rSQ-Ti.png",
    text1: "هذا الموقع غني بالمعلومات في مختلف لغاب البرمجة ويمكنك",
    bold: "",
    text2: "الاعتماد عليه كمصدر قوي للتعلم اذا كنت مبتدئ مثل",
    text3: "HTML | CSS | JS | PhP | Python | SQL | ++C",
    href: "https://www.w3schools.com/",
  },
  {
    id: 16,
    imgSrc:
      "https://photos.smugmug.com/photos/i-L9rghWZ/0/b0850dc7/Th/i-L9rghWZ-Th.png",
    text1: "منصة المبرمج العملاق أسامة الزيرو واحدة من أكبر المنصات",
    bold: "",
    text2: "ستساعدك في تعلم البرمجة خصوصا مجال الويب أغلب ما",
    text3: "ستحتاجه ستجده هناك باذن الله",
    href: "https://elzero.org/",
  },
  {
    id: 17,
    imgSrc:
      "https://photos.smugmug.com/photos/i-c7pDMcH/0/558dc747/Th/i-c7pDMcH-Th.png",
    text1: "هذا الموقع كنز للمبرمجين يحتوي علي العديد من التأثيرات",
    bold: "",
    text2: "التي يمكنك عملها في موقعك بال CSS | JS",
    text3: "سيوفر عليك الكثير من الوقت",
    href: "https://freefrontend.com/",
  },
  {
    id: 18,
    imgSrc:
      "https://photos.smugmug.com/photos/i-psfKndP/0/4e1029ac/Th/i-psfKndP-Th.png",
    text1: "هذا الموقع سيفيدك اذا كنت تريد عمل انيميشن جذاب في موقعك",
    bold: "",
    text2: "يوجد عليه الكثير الأفكار الرائعة",
    text3: "ستحتاجه باذن الله",
    href: "https://lottiefiles.com/",
  },
  {
    id: 19,
    imgSrc:
      "https://photos.smugmug.com/photos/i-pFNzVMP/0/084c1f78/S/i-pFNzVMP-S.png",
    text1: "هذا الموقع توجد به مميزات لا تعد ولا تحصي لذلك قم",
    bold: "قم باستكشافه بنفسك",
    text2: "",
    text3: "ستحتاجه باذن الله",
    href: "https://omatsuri.app/",
  },
  {
    id: 20,
    imgSrc: "https://iili.io/HIonta4.png",
    text1: "(مبتدئ) هذا الموقع يوجد به العديد من المسائل في مختلف اللغات",
    bold: "لتطوير مهارة ال Problem Solving",
    text2: "",
    text3: "ستحتاجه باذن الله",
    href: "https://edabit.com/challenges",
  },
  {
    id: 21,
    imgSrc: "https://iili.io/HIoxgLX.md.png",
    text1: "(متوسط) هذا الموقع يوجد به العديد من المسائل في مختلف اللغات",
    bold: "لتطوير مهارة ال Problem Solving",
    text2: "",
    text3: "ستحتاجه باذن الله",
    href: "https://www.codewars.com/",
  },
  {
    id: 22,
    imgSrc: "https://iili.io/HIozBQ1.md.png",
    text1: "(محترف) هذا الموقع يوجد به العديد من المسائل في مختلف اللغات",
    bold: "لتطوير مهارة ال Problem Solving",
    text2: "",
    text3: "ستحتاجه باذن الله",
    href: "https://leetcode.com/",
  },
  {
    id: 23,
    imgSrc: "https://iili.io/HIoERLb.png",
    text1: "هذا الموقع كنز يحتوي علي العديد",
    bold: "الايقونات المتحركة ستعطي شكل جذاب لموقعك",
    text2: "",
    text3: "ستحتاجه باذن الله",
    href: "https://lordicon.com/",
  },
];
let contentFonts = [
  {
    id: 1,
    imgSrc:
      "https://photos.smugmug.com/photos/i-jsdvvg9/0/44e1cf73/Th/i-jsdvvg9-Th.png",
    text1: "هذا الموقع مقدم من شركة جوجل يمكنك من خلاله تحميل",
    bold: "منه الخطوط الإنجليزية لموقعك وتصميمك",
    text2: "",
    text3: "ستحتاجه باذن الله",
    href: "https://fonts.google.com/",
  },
  {
    id: 2,
    imgSrc:
      "https://photos.smugmug.com/photos/i-kqKnsqT/4/4c40a83f/M/i-kqKnsqT-M.png",
    text1: "هذا الموقع مقدم من شركة الفونت يمكنك من خلاله تحميل",
    bold: "الخطوط العربية",
    text2: "لموقعك وتصميمك",
    text3: "ستحتاجه باذن الله",
    href: "https://alfont.com/",
  },
  {
    id: 3,
    imgSrc:
      "https://photos.smugmug.com/photos/i-KpMLWP5/0/66e9d95f/S/i-KpMLWP5-S.png",
    text1: "من افضل مواقع تحميل الخطوط المعروفة حتي الان",
    bold: "ويحتوي علي مثات الالاف من الخطوط",
    text2: "",
    text3: "ستحتاجه باذن الله",
    href: "https://www.myfonts.com/",
  },
  {
    id: 4,
    imgSrc:
      "https://photos.smugmug.com/photos/i-5krhrJW/0/e8a96784/S/i-5krhrJW-S.png",
    text1: "من افضل مواقع تحميل الخطوط المعروفة حتي الان",
    bold: "ويحتوي علي مثات الالاف من الخطوط",
    text2: "",
    text3: "ستحتاجه باذن الله",
    href: "https://www.fontsquirrel.com/",
  },
  {
    id: 5,
    imgSrc:
      "https://photos.smugmug.com/photos/i-HjmsmrJ/0/c7eefb28/Th/i-HjmsmrJ-Th.png",
    text1: "من افضل مواقع تحميل الخطوط المعروفة حتي الان",
    bold: "ويحتوي علي مثات الالاف من الخطوط",
    text2: "",
    text3: "ستحتاجه باذن الله",
    href: "https://www.dafont.com/",
  },
  {
    id: 6,
    imgSrc:
      "https://photos.smugmug.com/photos/i-zpFqQRP/0/1e719cc3/S/i-zpFqQRP-S.png",
    text1: "من افضل مواقع تحميل الخطوط المعروفة حتي الان",
    bold: "ويحتوي علي مثات الالاف من الخطوط",
    text2: "",
    text3: "ستحتاجه باذن الله",
    href: "https://www.fontspring.com/",
  },
  {
    id: 7,
    imgSrc:
      "https://photos.smugmug.com/photos/i-TB2sBQP/0/d704dbb1/S/i-TB2sBQP-S.png",
    text1: "من اكبر المنصات العربية لتحميل الخطوط",
    bold: "العربية مجانا",
    text2: "",
    text3: "ستحتاجه باذن الله",
    href: "https://arbfonts.com/",
  },
];
let contentColors = [
  {
    id: 1,
    imgSrc:
      "https://photos.smugmug.com/photos/i-z8rbFHV/0/78606b84/Th/i-z8rbFHV-Th.jpg",
    text1: "هذا الموقع سيفيدك اذا كنت تريد الحصول علي قوالب الوان",
    bold: "متناسقة مع بعضها لموقعك او تصميمك",
    text2: "",
    text3: "سيوفر عليك الكثير من الوقت",
    href: "https://colorhunt.co/",
  },
  {
    id: 2,
    imgSrc:
      "https://photos.smugmug.com/photos/i-WGPkgxK/0/fec85005/S/i-WGPkgxK-S.png",
    text1: "من أقوى مواقع الألوان يقدم لك العديد من المجموعات اللونية",
    bold: "متناسقة مع بعضها لموقعك او تصميمك",
    text2: "",
    text3: "سيوفر عليك الكثير من الوقت",
    href: "https://www.colourlovers.com/",
  },
  {
    id: 3,
    imgSrc:
      "https://photos.smugmug.com/photos/i-7g8TPmF/0/3a4eab24/S/i-7g8TPmF-S.png",
    text1: "من المواقع المهمة والمفيدة والمثيرة تقدم خدمة مثالية",
    bold: "لتنسيق الالوان",
    text2: "واعطاء معلومات عن كل لون",
    text3: "سيوفر عليك الكثير من الوقت",
    href: "https://www.colorhexa.com/",
  },
  {
    id: 4,
    imgSrc:
      "https://photos.smugmug.com/photos/i-p8zjdxM/0/ca9efc44/S/i-p8zjdxM-S.jpg",
    text1: "من أقوى مواقع تنسيق الألوان يساعد على",
    bold: "اختيار تركيبات لوحات الألوان",
    text2: "ويكون عليك فقط مهمة اختيار اللون",
    text3: "سيوفر عليك الكثير من الوقت",
    href: "https://paletton.com/",
  },
  {
    id: 5,
    imgSrc:
      "https://photos.smugmug.com/photos/i-ZpJHHSk/0/afc005c4/Th/i-ZpJHHSk-Th.png",
    text1: "تستطيع من خلال هذا الموقع انشاء",
    bold: "خلفيات خطية",
    text2: "بالالوان التي تفضلها ستعطي شكلا رائعا لموقعك",
    text3: "ستحتاجه باذن الله",
    href: "https://stripesgenerator.com/",
  },
  {
    id: 6,
    imgSrc:
      "https://photos.smugmug.com/photos/i-3L6LVD9/0/f69588ac/Ti/i-3L6LVD9-Ti.png",
    text1: "تستطيع من خلال هذا الموقع انشاء",
    bold: "خلفيات متدرجة",
    text2: "بالالوان التي تفضلها ستعطي شكلا رائعا لموقعك",
    text3: "ستحتاجه باذن الله",
    href: "https://cssgradient.io/",
  },
  {
    id: 7,
    imgSrc:
      "https://photos.smugmug.com/photos/i-xPvsttw/0/30ceb215/S/i-xPvsttw-S.jpg",
    text1: "من أفضل الأدوات المجانية لتنسيق الألوان من",
    bold: "إنتاج العملاق أدوبي",
    text2: "يمكنك  التعامل مع الألوان التكميلية والاحادية",
    text3: "ستحتاجه باذن الله",
    href: "https://color.adobe.com/",
  },
  {
    id: 8,
    imgSrc:
      "https://photos.smugmug.com/photos/i-rFDJsn4/1/37eb03b4/Th/i-rFDJsn4-Th.png",
    text1: "من المواقع المبهجة يقدم لك الألوان في",
    bold: "صورة لوحات من الطبيعة",
    text2: "والهدف إثراء بصر المصمم",
    text3: "ستحتاجه باذن الله",
    href: "https://www.design-seeds.com/",
  },
  {
    id: 9,
    imgSrc:
      "https://photos.smugmug.com/photos/i-QGkfMfR/0/900a287b/Th/i-QGkfMfR-Th.jpg",
    text1: "من المواقع المميزة يتيح للمستخدم إنشاء",
    bold: "تدرجات لونية",
    text2: "تلقائية باستخدام الحاسب الآلي",
    text3: "ستحتاجه باذن الله",
    href: "https://colorfulgradients.tumblr.com/",
  },
];
let contentVisual = [
  {
    id: 1,
    imgSrc:
      "https://photos.smugmug.com/photos/i-sNK668m/0/e012247b/S/i-sNK668m-S.jpg",
    text1: "يعتبر هذا الموقع الفريد من أبرز المواقع الخاصة بالتغذية البصرية",
    bold: "لما يقدمه من أفكار متنوعة يوميا",
    text2: "",
    text3: "ستحتاجه باذن الله",
    href: "https://www.uplabs.com/",
  },
  {
    id: 2,
    imgSrc:
      "https://photos.smugmug.com/photos/i-gCH4xTr/0/323fd7fe/S/i-gCH4xTr-S.png",
    text1: "يعد من أفضل المواقع الخاصة بالتغذية البصرية لدي المصممين",
    bold: "لديه قاعدة جماهيرية ضخمة من قبل المصممين",
    text2: "",
    text3: "ستحتاجه باذن الله",
    href: "https://dribbble.com/",
  },
  {
    id: 3,
    imgSrc:
      "https://photos.smugmug.com/photos/i-9pPk3xH/1/5184a0a4/S/i-9pPk3xH-S.png",
    text1: "يعد من أفضل المواقع الخاصة بالتغذية البصرية لدي المصممين",
    bold: "لديه قاعدة جماهيرية ضخمة من قبل المصممين",
    text2: "",
    text3: "ستحتاجه باذن الله",
    href: "https://www.pinterest.com/",
  },
  {
    id: 4,
    imgSrc:
      "https://photos.smugmug.com/photos/i-mFbfp23/0/768b2199/S/i-mFbfp23-S.jpg",
    text1: "يعتبر هذا الموقع بمثابة مكتبة شاملة لشتى أنواع التصميمات",
    bold: "ليس في مجال الجرافيك فقط ولكن أيضا للمصوريين والرسامين",
    text2: "",
    text3: "ستحتاجه باذن الله",
    href: "https://www.designspiration.com/",
  },
  {
    id: 5,
    imgSrc:
      "https://photos.smugmug.com/photos/i-t4LFRHb/0/6ac3f56c/Th/i-t4LFRHb-Th.png",
    text1: "هذا الموقع كنز للمبرمجين والمصممين يحتوي علي صور",
    bold: "خطوط موك اب فيكتور رسومات وأشياء كثيرة",
    text2: "",
    text3: "سيوفر عليك الكثير من الوقت",
    href: "https://www.freepik.com/",
  },
  {
    id: 6,
    imgSrc:
      "https://photos.smugmug.com/photos/i-FNfs6Nm/1/41c2cb33/S/i-FNfs6Nm-S.jpg",
    text1: "هذا الموقع سيفيدك اذا كنت تريد عمل تغذية بصرية يوجد عليه",
    bold: "الكثير من التصماميم والأفكار الرائعة",
    text2: "",
    text3: "سيوفر عليك الكثير من الوقت",
    href: "https://www.behance.net/",
  },
];

const WebCards = () => {
  return (
    <>
      <SectionTitle id={"ai"} title="مواقع الذكاء الاصطناعي" />
      <div className="wrapper d-grid gap-20">
        {contentAi.map(function (e) {
          return (
            <WebCard
              key={e.id}
              imgSrc={e.imgSrc}
              text1={e.text1}
              bold={e.bold}
              text2={e.text2}
              text3={e.text3}
              href={e.href}
            />
          );
        })}
      </div>
      <SectionTitle id={"coders"} title="مواقع للمبرمجين" />
      <div className="wrapper d-grid gap-20">
        {contentCoders.map(function (e) {
          return (
            <WebCard
              key={e.id}
              imgSrc={e.imgSrc}
              text1={e.text1}
              bold={e.bold}
              text2={e.text2}
              text3={e.text3}
              href={e.href}
            />
          );
        })}
      </div>
      <SectionTitle id={"design"} title="مواقع للمصممين" />
      <div className="wrapper d-grid gap-20">
        {contentDesign.map(function (e) {
          return (
            <WebCard
              key={e.id}
              imgSrc={e.imgSrc}
              text1={e.text1}
              bold={e.bold}
              text2={e.text2}
              text3={e.text3}
              href={e.href}
            />
          );
        })}
      </div>
      <SectionTitle id={"fonts"} title="مواقع تحميل الخطوط" />
      <div className="wrapper d-grid gap-20">
        {contentFonts.map(function (e) {
          return (
            <WebCard
              key={e.id}
              imgSrc={e.imgSrc}
              text1={e.text1}
              bold={e.bold}
              text2={e.text2}
              text3={e.text3}
              href={e.href}
            />
          );
        })}
      </div>
      <SectionTitle id={"colors"} title="مواقع الالوان" />
      <div className="wrapper d-grid gap-20">
        {contentColors.map(function (e) {
          return (
            <WebCard
              key={e.id}
              imgSrc={e.imgSrc}
              text1={e.text1}
              bold={e.bold}
              text2={e.text2}
              text3={e.text3}
              href={e.href}
            />
          );
        })}
      </div>
      <SectionTitle id={"visual"} title="مواقع تغذية بصرية" />
      <div className="wrapper d-grid gap-20">
        {contentVisual.map(function (e) {
          return (
            <WebCard
              key={e.id}
              imgSrc={e.imgSrc}
              text1={e.text1}
              bold={e.bold}
              text2={e.text2}
              text3={e.text3}
              href={e.href}
            />
          );
        })}
      </div>
    </>
  );
};

export default WebCards;
