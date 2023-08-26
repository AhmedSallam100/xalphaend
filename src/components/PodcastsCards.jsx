import PodcastCard from "./PodcastCard";
import SectionTitle from "./SectionTitle";

let imgSize = "maxresdefault";

let contentLearn = [
  {
    id: 1,
    imgSrc: `http://i3.ytimg.com/vi/5wpp3vFM41U/hqdefault.jpg`,
    podcastTitle: "أشهر مبرمج عربي، لم يدرس البرمجة |  أسامة الزيرو",
    podcastLink:
      "https://www.youtube.com/watch?v=5wpp3vFM41U&list=PL5isa5XjlZ5pH8vT0TJO9qZrRiZcrWuDp&index=6",
    makerImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaTB9XtbM37u9jey7AFl8Lrbu4pPIdlYraSp0l5y0g=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@DroosOnline4u",
    makerName: "دروس اونلاين",
    podcastTime: "1:09:12",
  },
  {
    id: 2,
    imgSrc: `http://i3.ytimg.com/vi/kRJF-yX5kfo/${imgSize}.jpg`,
    podcastTitle: "بودكاست مع اسامة الزيرو: البرمجة والفلوس والشغل",
    podcastLink:
      "https://www.youtube.com/watch?v=kRJF-yX5kfo&list=PL5isa5XjlZ5pH8vT0TJO9qZrRiZcrWuDp&index=2&t=41s&pp=iAQB",
    makerImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaTB9XtbM37u9jey7AFl8Lrbu4pPIdlYraSp0l5y0g=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@DroosOnline4u",
    makerName: "دروس اونلاين",
    podcastTime: "1:24:12",
  },
  {
    id: 3,
    imgSrc: `http://i3.ytimg.com/vi/a5gx5i82S40/${imgSize}.jpg`,
    podcastTitle:
      "بودكاست البرمجة | اسامة الزيرو والحياة والبرمجة وصناعة المحتوى",
    podcastLink: "https://www.youtube.com/watch?v=a5gx5i82S40",
    makerImg:
      "https://yt3.googleusercontent.com/Va1Pe3Yn9dQgQW14Q0QSR9IUxa0S2g-iAUeuOl2XlIjP2KvI5l6UQ8zit-BDqxdIwW_2Kojj=s176-c-k-c0x00ffffff-no-rj",
    makerName: "CodeCast",
    makerChannel: "https://www.youtube.com/@codezillacodecast/videos",
    podcastTime: "3:07:53",
  },
  {
    id: 4,
    imgSrc: `http://i3.ytimg.com/vi/PITSYsAEjF0/${imgSize}.jpg`,
    podcastTitle: "الدراسة والشغل وهندسة البرمجيات مع اخوك الكبير المتولي",
    podcastLink: "https://www.youtube.com/watch?v=PITSYsAEjF0",
    makerImg:
      "https://yt3.googleusercontent.com/Va1Pe3Yn9dQgQW14Q0QSR9IUxa0S2g-iAUeuOl2XlIjP2KvI5l6UQ8zit-BDqxdIwW_2Kojj=s176-c-k-c0x00ffffff-no-rj",
    makerName: "CodeCast",
    makerChannel: "https://www.youtube.com/@codezillacodecast/videos",
    podcastTime: "2:48:07",
  },
  {
    id: 5,
    imgSrc: `https://i3.ytimg.com/vi/SvKDtzJ157M/${imgSize}.jpg`,
    podcastTitle:
      "من الطب الي احتراف البرمجة وادارة المبرمجين وكيف تصبح مبرمج ",
    podcastLink: "https://www.youtube.com/watch?v=SvKDtzJ157M",
    makerImg:
      "https://yt3.googleusercontent.com/Va1Pe3Yn9dQgQW14Q0QSR9IUxa0S2g-iAUeuOl2XlIjP2KvI5l6UQ8zit-BDqxdIwW_2Kojj=s176-c-k-c0x00ffffff-no-rj",
    makerName: "CodeCast",
    makerChannel: "https://www.youtube.com/@codezillacodecast/videos",
    podcastTime: "3:19:11",
  },
  {
    id: 6,
    imgSrc: `https://i3.ytimg.com/vi/0-b2BmZhCi4/${imgSize}.jpg`,
    podcastTitle:
      "بودكاست مع عمرو رمضان: المنح والدراسة في الخارج بعد الثانوية",
    podcastLink:
      "https://www.youtube.com/watch?v=5wpp3vFM41U&list=PL5isa5XjlZ5pH8vT0TJO9qZrRiZcrWuDp&index=6",
    makerImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaTB9XtbM37u9jey7AFl8Lrbu4pPIdlYraSp0l5y0g=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@DroosOnline4u",
    makerName: "دروس اونلاين",
    podcastTime: "1:45:25",
  },
  {
    id: 7,
    imgSrc: `https://i3.ytimg.com/vi/j1nxd_wQFXM/${imgSize}.jpg`,
    podcastTitle: "الرحلة من الهندسة للعمل الحر والموشن جرافيك (صهيب الدسوقي)",
    podcastLink:
      "https://www.youtube.com/watch?v=j1nxd_wQFXM&list=PL5isa5XjlZ5pH8vT0TJO9qZrRiZcrWuDp&index=6&pp=iAQB",
    makerImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaTB9XtbM37u9jey7AFl8Lrbu4pPIdlYraSp0l5y0g=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@DroosOnline4u",
    makerName: "دروس اونلاين",
    podcastTime: "45:16",
  },
  {
    id: 8,
    imgSrc: `http://i3.ytimg.com/vi/kfm85z3r-Kg/hqdefault.jpg`,
    podcastTitle: "بودكاست مع إبراهيم عادل مؤسس زي أمريكان إنجلش وطليق",
    podcastLink:
      "https://www.youtube.com/watch?v=kfm85z3r-Kg&list=PL5isa5XjlZ5pH8vT0TJO9qZrRiZcrWuDp&index=8&t=307s&pp=iAQB",
    makerImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaTB9XtbM37u9jey7AFl8Lrbu4pPIdlYraSp0l5y0g=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@DroosOnline4u",
    makerName: "دروس اونلاين",
    podcastTime: "1:33:07",
  },
  {
    id: 9,
    imgSrc: `https://i3.ytimg.com/vi/lPOMtVevmiE/${imgSize}.jpg`,
    podcastTitle:
      "بودكاست مع محمد أبو سريع : لماذا هرب هذا المبرمج من ألمانيا؟",
    podcastLink:
      "https://www.youtube.com/watch?v=lPOMtVevmiE&list=PL5isa5XjlZ5pH8vT0TJO9qZrRiZcrWuDp&index=10&t=33s&pp=iAQB",
    makerImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaTB9XtbM37u9jey7AFl8Lrbu4pPIdlYraSp0l5y0g=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@DroosOnline4u",
    makerName: "دروس اونلاين",
    podcastTime: "2:19:03",
  },
  {
    id: 10,
    imgSrc: `https://i3.ytimg.com/vi/2T1eTM2NFL4/${imgSize}.jpg`,
    podcastTitle: "كيف تحافظ على مدخراتك أفضل شخص تتعلم منه الاقتصاد والتاريخ",
    podcastLink:
      "https://www.youtube.com/watch?v=2T1eTM2NFL4&list=PL5isa5XjlZ5pH8vT0TJO9qZrRiZcrWuDp&index=16&t=86s&pp=iAQB",
    makerImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaTB9XtbM37u9jey7AFl8Lrbu4pPIdlYraSp0l5y0g=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@DroosOnline4u",
    makerName: "دروس اونلاين",
    podcastTime: "2:40:03",
  },
  {
    id: 11,
    imgSrc: `https://i3.ytimg.com/vi/jmKK6sNzh4k/${imgSize}.jpg`,
    podcastTitle: "خفايا لا تعرفها عن البرمجة والحاسب مع البرفسور محمد الشايب",
    podcastLink: "https://www.youtube.com/watch?v=jmKK6sNzh4k",
    makerImg:
      "https://yt3.googleusercontent.com/7Dls29zwf9c0mRJwoAgj7rRglk8Y-iR7HLNOi4eJN3hDG10Lqmsyy7dSrwjG7MVbn_hGOLzT2B4=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@iPetroly",
    makerName: "بترولي",
    podcastTime: "1:30:46",
  },
  {
    id: 12,
    imgSrc: `https://i3.ytimg.com/vi/nidIeodjXqQ/${imgSize}.jpg`,
    podcastTitle: "عمر وعماد عملو ملايين من برمجة المواقع",
    podcastLink: "https://www.youtube.com/watch?v=nidIeodjXqQ",
    makerImg:
      "https://yt3.googleusercontent.com/xV5JasprCLYSMSfoDpV0SRn494ZXiJc6A0PqVnD7DDWqc1kjgwNAo8Fsu0nmapxzyEtUpZHiFg=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@DrMohamedAyman",
    makerName: "Mohamed Ayman",
    podcastTime: "1:19:16",
  },
  {
    id: 13,
    imgSrc: `https://i3.ytimg.com/vi/vkyrDN1JuEM/${imgSize}.jpg`,
    podcastTitle: "كيف بدأت في مجال البرمجة و كيف إخترت التخصص؟",
    podcastLink: "https://www.youtube.com/watch?v=vkyrDN1JuEM",
    makerImg:
      "https://yt3.googleusercontent.com/NWgPslWG-WnEshSpbmOemfU2O8_GlLEeJD5NRomxbJ25ZnI4wJj7ccrowcYFfdeXLnwTHfHfZA=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@ahmdelemam",
    makerName: "Ahmed Elemam",
    podcastTime: "1:16:20",
  },
  {
    id: 14,
    imgSrc: `https://i3.ytimg.com/vi/c02Klz36-xI/${imgSize}.jpg`,
    podcastTitle: "كيف تصل للشركات العالمية؟ || بودكاست مع المهندس أحمد علي",
    podcastLink: "https://www.youtube.com/watch?v=c02Klz36-xI",
    makerImg:
      "https://yt3.googleusercontent.com/gUZ6Jqst_1SoJSDJ6D6AybUizbdc0XC9YBEqHC5ug5VQbjfXELpW4PYYvewyivV43SEJ0s0LlDI=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@GhareebElshaikh",
    makerName: "Ghareeb Elshaikh",
    podcastTime: "1:22:08",
  },
  {
    id: 15,
    imgSrc: `https://i3.ytimg.com/vi/fAcly0pVeuU/${imgSize}.jpg`,
    podcastTitle: "رحلة بناء تطبيق سعودي عالمي مع م.سلطان الخيال",
    podcastLink: "https://www.youtube.com/watch?v=fAcly0pVeuU",
    makerImg:
      "https://yt3.googleusercontent.com/7Dls29zwf9c0mRJwoAgj7rRglk8Y-iR7HLNOi4eJN3hDG10Lqmsyy7dSrwjG7MVbn_hGOLzT2B4=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@iPetroly",
    makerName: "بترولي",
    podcastTime: "1:15:02",
  },
  {
    id: 16,
    imgSrc: `http://i3.ytimg.com/vi/QJ94iZx7DZ8/hqdefault.jpg`,
    podcastTitle:
      "بودكاست | خبير في البرمجة ترك أمريكا ورجع إلى المغرب يروي تجربته",
    podcastLink: "https://www.youtube.com/watch?v=fAcly0pVeuU",
    makerImg:
      "https://yt3.googleusercontent.com/z66EjNLlkSEP83MTL5x3awUkbGDnPxPtD0l0_zGaMqE43BNRW1KZ4YYK909lOL415b5h1QPjdg=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@sfn-iallouchen",
    makerName: "soufyan iallouchen",
    podcastTime: "1:27:09",
  },
  {
    id: 17,
    imgSrc: `https://i3.ytimg.com/vi/heeFfYvxk2Q/${imgSize}.jpg`,
    podcastTitle: "ازاى تبقى فريلانسر محترف",
    podcastLink: "https://www.youtube.com/watch?v=heeFfYvxk2Q",
    makerImg:
      "https://yt3.googleusercontent.com/OzIL6bJ4AJSrnzvw8Bz3QX3SLPScFPe5tBPGsIQWIuxnNKx4D08hxQF8S3rcTd2P72Q6N3kGRQ=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@MetwallyLabs",
    makerName: "Metwally Labs",
    podcastTime: "1:27:09",
  },
  {
    id: 18,
    imgSrc: `https://i3.ytimg.com/vi/nT-E5Fe1vVU/${imgSize}.jpg`,
    podcastTitle: "ChatGPT | وتطبيقات الذكاء الاصطناعي | م. ناهض الحربي",
    podcastLink: "https://www.youtube.com/watch?v=nT-E5Fe1vVU",
    makerImg:
      "https://yt3.googleusercontent.com/lKZXvRCnDIL5Vo_Er2xDQdr7oZB2ciQz0kVafS6_xy-xhSeCaZqcUmmVP8dFMivNScufGHFthSw=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@PodcastKaf",
    makerName: "بودكاست كاف",
    podcastTime: "1:44:37",
  },
  {
    id: 19,
    imgSrc: `https://i3.ytimg.com/vi/C2cjaC9m-qs/${imgSize}.jpg`,
    podcastTitle: "Ask Developer Podcast - 56 - الطريق الى برمجة الألعاب",
    podcastLink: "https://www.youtube.com/watch?v=C2cjaC9m-qs",
    makerImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaRTGGueBQkMIAFN10i0lICpTysykb_ydRUE062un3g=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@bashmohandes",
    makerName: "محمد الشريف",
    podcastTime: "2:04:45",
  },
  {
    id: 20,
    imgSrc: `https://i3.ytimg.com/vi/1YQ0X-_gRNs/${imgSize}.jpg`,
    podcastTitle: "حكاية الذكاء الاصطناعي - بودكاست إطناب",
    podcastLink: "https://www.youtube.com/watch?v=1YQ0X-_gRNs",
    makerImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaQX9hm_FtCYJ2gutDq299DALN5Yq_qWRHPXcP3y_Q=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@AliMuhammadAli",
    makerName: "Ali Muhammad Ali",
    podcastTime: "2:04:45",
  },
  {
    id: 21,
    imgSrc: `http://i3.ytimg.com/vi/21InCFweV44/hqdefault.jpg`,
    podcastTitle: "أنا مش يوتيوبر ولا صانع محتوى - بودكاست إطناب #1",
    podcastLink:
      "https://www.youtube.com/watch?v=21InCFweV44&list=PLDN8vU_ZehsVHxPw4hA_TRnPwL47EUdon&index=2&pp=iAQB",
    makerImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaQX9hm_FtCYJ2gutDq299DALN5Yq_qWRHPXcP3y_Q=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@AliMuhammadAli",
    makerName: "Ali Muhammad Ali",
    podcastTime: "41:37",
  },
  {
    id: 22,
    imgSrc: `https://i3.ytimg.com/vi/buFGuBV5PWY/${imgSize}.jpg`,
    podcastTitle: "أعمل إيه في الإنترڤيو؟",
    podcastLink:
      "https://www.youtube.com/watch?v=buFGuBV5PWY&list=PLSNyJuJvmgwHqVFGVcrIqE7wppkgeObcv&index=3&pp=iAQB",
    makerImg:
      "https://yt3.googleusercontent.com/NWgPslWG-WnEshSpbmOemfU2O8_GlLEeJD5NRomxbJ25ZnI4wJj7ccrowcYFfdeXLnwTHfHfZA=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@ahmdelemam",
    makerName: "Ahmed Elemam",
    podcastTime: "2:48:08",
  },
];
let contentImprove = [
  {
    id: 1,
    imgSrc: `https://i3.ytimg.com/vi/pJ0auP7dbcY/${imgSize}.jpg`,
    podcastTitle: "كيف تنجح العلاقات مع ياسر الحزيمي | بودكاست فنجان",
    podcastLink: "https://www.youtube.com/watch?v=pJ0auP7dbcY",
    makerImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaQpOyUzDhLCVPRM3jVTKYefrUr1OJNTLmwYkieG8A=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@thmanyahPodcasts",
    makerName: "إذاعة ثمانية ",
    podcastTime: "3:03:08",
  },
  {
    id: 2,
    imgSrc: `https://i3.ytimg.com/vi/syJv_uzgofM/${imgSize}.jpg`,
    podcastTitle: "احسان بنعلوش ,أتحدث مع نفسي أمام المرآة لأتغلب على الخجل",
    podcastLink: "https://www.youtube.com/watch?v=syJv_uzgofM",
    makerImg:
      "https://yt3.googleusercontent.com/dSgphjoYy0wMokC649upL78-ecUOX4kl4g3OOLV3p-EMlACJAPfjka1Ju9azGeVl7GU_-03B=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@hikmatwehbipodcast",
    makerName: "Hikmat Wehbi Podcast",
    podcastTime: "46:38",
  },
  {
    id: 3,
    imgSrc: `https://i3.ytimg.com/vi/wa2-XaQB8ng/${imgSize}.jpg`,
    podcastTitle:
      "حلقة 7 - كيف يمكن للفرد تنمية الكاريزما والتأثير على الآخرين؟",
    podcastLink: "https://www.youtube.com/watch?v=wa2-XaQB8ng",
    makerImg:
      "https://yt3.googleusercontent.com/paYQGBQq053ZLYEp_ryLwAMeKD5wxZ-iIq1C8_kjFtZZ6cu9kz0xXAooO7bseBva6QTYWkBuWA=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@podcastwesam",
    makerName: "بودكاست وسام",
    podcastTime: "47:03",
  },
  {
    id: 4,
    imgSrc: `https://i3.ytimg.com/vi/2pVxc2_--iI/${imgSize}.jpg`,
    podcastTitle: "أفضل أساليب الإنجاز وزيادة الإنتاجية - بودكاست إطناب #2",
    podcastLink:
      "https://www.youtube.com/watch?v=2pVxc2_--iI&list=PLDN8vU_ZehsVHxPw4hA_TRnPwL47EUdon&index=3&pp=iAQB",
    makerImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaQX9hm_FtCYJ2gutDq299DALN5Yq_qWRHPXcP3y_Q=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@AliMuhammadAli",
    makerName: "Ali Muhammad Ali",
    podcastTime: "1:52:34",
  },
  {
    id: 5,
    imgSrc: `https://i3.ytimg.com/vi/r683VS3Ywo4/${imgSize}.jpg`,
    podcastTitle: "حكايتي مع الروايات - بودكاست إطناب #3",
    podcastLink:
      "https://www.youtube.com/watch?v=r683VS3Ywo4&list=PLDN8vU_ZehsVHxPw4hA_TRnPwL47EUdon&index=4&pp=iAQB",
    makerImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaQX9hm_FtCYJ2gutDq299DALN5Yq_qWRHPXcP3y_Q=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@AliMuhammadAli",
    makerName: "Ali Muhammad Ali",
    podcastTime: "54:48",
  },
  {
    id: 6,
    imgSrc: `https://i3.ytimg.com/vi/rI7GZOhKxpA/${imgSize}.jpg`,
    podcastTitle: "التحرر من الوظيفة - بودكاست إطناب #4",
    podcastLink:
      "https://www.youtube.com/watch?v=rI7GZOhKxpA&list=PLDN8vU_ZehsVHxPw4hA_TRnPwL47EUdon&index=5&pp=iAQB",
    makerImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaQX9hm_FtCYJ2gutDq299DALN5Yq_qWRHPXcP3y_Q=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@AliMuhammadAli",
    makerName: "Ali Muhammad Ali",
    podcastTime: "1:21:12",
  },
  {
    id: 7,
    imgSrc: `https://i3.ytimg.com/vi/pjQgH_KmedA/${imgSize}.jpg`,
    podcastTitle: "أسباب حبنا للتفاهة - بودكاست إطناب",
    podcastLink:
      "https://www.youtube.com/watch?v=pjQgH_KmedA&list=PLDN8vU_ZehsVHxPw4hA_TRnPwL47EUdon&index=6&pp=iAQB",
    makerImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaQX9hm_FtCYJ2gutDq299DALN5Yq_qWRHPXcP3y_Q=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@AliMuhammadAli",
    makerName: "Ali Muhammad Ali",
    podcastTime: "2:10:52",
  },
  {
    id: 8,
    imgSrc: `https://i3.ytimg.com/vi/U-qmNsmw5ck/${imgSize}.jpg`,
    podcastTitle: "حكايتي مع الدراسة - إطناب",
    podcastLink:
      "https://www.youtube.com/watch?v=U-qmNsmw5ck&list=PLDN8vU_ZehsVHxPw4hA_TRnPwL47EUdon&index=7&pp=iAQB",
    makerImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaQX9hm_FtCYJ2gutDq299DALN5Yq_qWRHPXcP3y_Q=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@AliMuhammadAli",
    makerName: "Ali Muhammad Ali",
    podcastTime: "1:08:57",
  },
  {
    id: 9,
    imgSrc: `https://i3.ytimg.com/vi/4s9wtDZSiKc/${imgSize}.jpg`,
    podcastTitle: "رحلتي في سوق العمل - إطناب",
    podcastLink:
      "https://www.youtube.com/watch?v=4s9wtDZSiKc&list=PLDN8vU_ZehsVHxPw4hA_TRnPwL47EUdon&index=8&pp=iAQB",
    makerImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaQX9hm_FtCYJ2gutDq299DALN5Yq_qWRHPXcP3y_Q=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@AliMuhammadAli",
    makerName: "Ali Muhammad Ali",
    podcastTime: "1:47:43",
  },
  {
    id: 10,
    imgSrc: `https://i3.ytimg.com/vi/MT8mUsrShEk/${imgSize}.jpg`,
    podcastTitle: "كيف تصمم حياتك وتعيش راضيًا | بودكاست فنجان",
    podcastLink: "https://www.youtube.com/watch?v=MT8mUsrShEk",
    makerImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaQpOyUzDhLCVPRM3jVTKYefrUr1OJNTLmwYkieG8A=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@thmanyahPodcasts",
    makerName: "إذاعة ثمانية ",
    podcastTime: "2:13:48",
  },
  {
    id: 11,
    imgSrc: `https://i3.ytimg.com/vi/FT7113sFOZA/${imgSize}.jpg`,
    podcastTitle: "لماذا التشتت سبب للاكتئاب عند الشباب | بودكاست مربع",
    podcastLink: "https://www.youtube.com/watch?v=FT7113sFOZA",
    makerImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaQpOyUzDhLCVPRM3jVTKYefrUr1OJNTLmwYkieG8A=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@thmanyahPodcasts",
    makerName: "إذاعة ثمانية ",
    podcastTime: "1:28:35",
  },
  {
    id: 12,
    imgSrc: `https://i3.ytimg.com/vi/vH67N14UifM/${imgSize}.jpg`,
    podcastTitle: "كيف يصبح الإنسان قائداً ؟ هل التنمية البشرية وهم أم حقيقة ؟",
    podcastLink: "https://www.youtube.com/watch?v=vH67N14UifM",
    makerImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaTDeDqv21wIaSO7Sa-mQ6WfrFIRui-1hr6hIhjx=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@DrAlSuwaidan",
    makerName: "د. طارق السويدان",
    podcastTime: "49:17",
  },
  {
    id: 13,
    imgSrc: `https://i3.ytimg.com/vi/KIj2g3Rr7mo/${imgSize}.jpg`,
    podcastTitle: "بودكاست: كيف تبني مهاره التواصل وبناء العلاقات؟",
    podcastLink: "https://www.youtube.com/watch?v=KIj2g3Rr7mo",
    makerImg:
      "https://yt3.googleusercontent.com/Z9mhK-G_xtAHCqgifYan_degUxU_NQtroO5VN3kO75mxEpYqCM4sXOiWijpWl9pS5tjzdZAgMw=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@Businessbelarabi",
    makerName: "Business بالعربي",
    podcastTime: "50:28",
  },
  {
    id: 14,
    imgSrc: `https://i3.ytimg.com/vi/Z4vVEULtLa4/${imgSize}.jpg`,
    podcastTitle: "تحدّي البطالة: حكاوي عن قياس الأثر",
    podcastLink:
      "https://www.youtube.com/watch?v=Z4vVEULtLa4&list=PLmsoufCWu8EvzsXgA7vRFL6HktI-hnJK2&index=2",
    makerImg:
      "https://yt3.googleusercontent.com/Va_onhMjFGFaHgZ4Q0ewwcWAIiWvVvbANg3CXGHHVjCp3Zs0sQWy59oVVNMFXIbLWTKZr6Nj=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@sawirisfoundationsfsd7225",
    makerName: "Sawiris Foundation SFSD",
    podcastTime: "41:06",
  },
  {
    id: 15,
    imgSrc: `https://i3.ytimg.com/vi/5GNZBGd6-rg/${imgSize}.jpg`,
    podcastTitle: "باب أمل: باب الخروج من الفقر المدقع",
    podcastLink:
      "https://www.youtube.com/watch?v=5GNZBGd6-rg&list=PLmsoufCWu8EvzsXgA7vRFL6HktI-hnJK2&index=1",
    makerImg:
      "https://yt3.googleusercontent.com/Va_onhMjFGFaHgZ4Q0ewwcWAIiWvVvbANg3CXGHHVjCp3Zs0sQWy59oVVNMFXIbLWTKZr6Nj=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@sawirisfoundationsfsd7225",
    makerName: "Sawiris Foundation SFSD",
    podcastTime: "25:08",
  },
  {
    id: 16,
    imgSrc: `https://i3.ytimg.com/vi/RpIFf_cJhpU/${imgSize}.jpg`,
    podcastTitle: "وهم التنمية البشرية و الشغف و اختيار المسار الوظيفي الكارير",
    podcastLink:
      "https://www.youtube.com/watch?v=RpIFf_cJhpU&list=PL5isa5XjlZ5pH8vT0TJO9qZrRiZcrWuDp&index=3&pp=iAQB",
    makerImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaTB9XtbM37u9jey7AFl8Lrbu4pPIdlYraSp0l5y0g=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@DroosOnline4u",
    makerName: "دروس اونلاين",
    podcastTime: "1:13:41",
  },
  {
    id: 17,
    imgSrc: `https://i3.ytimg.com/vi/Tnt4NJcPMfM/${imgSize}.jpg`,
    podcastTitle: "لم يحضر يومًا في الكلية ويعمل الأن في بنك مرموق، كيف؟",
    podcastLink:
      "https://www.youtube.com/watch?v=Tnt4NJcPMfM&list=PL5isa5XjlZ5pH8vT0TJO9qZrRiZcrWuDp&index=5&pp=iAQB",
    makerImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaTB9XtbM37u9jey7AFl8Lrbu4pPIdlYraSp0l5y0g=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@DroosOnline4u",
    makerName: "دروس اونلاين",
    podcastTime: "1:21:50",
  },
  {
    id: 18,
    imgSrc: `https://i3.ytimg.com/vi/BzYuHkgYtsI/${imgSize}.jpg`,
    podcastTitle:
      "مع د.رمزي عبدالعزيز : من عامل في مصنع لدكتور جامعة في فنلندا",
    podcastLink:
      "https://www.youtube.com/watch?v=BzYuHkgYtsI&list=PL5isa5XjlZ5pH8vT0TJO9qZrRiZcrWuDp&index=7&pp=iAQB",
    makerImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaTB9XtbM37u9jey7AFl8Lrbu4pPIdlYraSp0l5y0g=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@DroosOnline4u",
    makerName: "دروس اونلاين",
    podcastTime: "2:12:20",
  },
  {
    id: 19,
    imgSrc: `https://i3.ytimg.com/vi/L-QcoQh4AeY/${imgSize}.jpg`,
    podcastTitle: "الطاقة ومدربين التنمية البشرية والكوتشنج مع كريم إسماعيل",
    podcastLink:
      "https://www.youtube.com/watch?v=L-QcoQh4AeY&list=PL5isa5XjlZ5pH8vT0TJO9qZrRiZcrWuDp&index=9&pp=iAQB",
    makerImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaTB9XtbM37u9jey7AFl8Lrbu4pPIdlYraSp0l5y0g=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@DroosOnline4u",
    makerName: "دروس اونلاين",
    podcastTime: "1:53:26",
  },
  {
    id: 20,
    imgSrc: `https://i3.ytimg.com/vi/JIhLZvtj2bg/${imgSize}.jpg`,
    podcastTitle: "بودكاست جداً خطير مع محمود أبو اسماعيل (+١٦)",
    podcastLink:
      "https://www.youtube.com/watch?v=JIhLZvtj2bg&list=PL5isa5XjlZ5pH8vT0TJO9qZrRiZcrWuDp&index=11&t=166s&pp=iAQB",
    makerImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaTB9XtbM37u9jey7AFl8Lrbu4pPIdlYraSp0l5y0g=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@DroosOnline4u",
    makerName: "دروس اونلاين",
    podcastTime: "2:15:12",
  },
  {
    id: 21,
    imgSrc: `https://i3.ytimg.com/vi/fxik_X5j4XM/${imgSize}.jpg`,
    podcastTitle:
      "ممدوح نصرالله: تجربة ملهمة من الفشل والصيدلة لليوتيوب والكورة",
    podcastLink:
      "https://www.youtube.com/watch?v=fxik_X5j4XM&list=PL5isa5XjlZ5pH8vT0TJO9qZrRiZcrWuDp&index=12&pp=iAQB",
    makerImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaTB9XtbM37u9jey7AFl8Lrbu4pPIdlYraSp0l5y0g=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@DroosOnline4u",
    makerName: "دروس اونلاين",
    podcastTime: "2:33:43",
  },
  {
    id: 22,
    imgSrc: `https://i3.ytimg.com/vi/U0Z1kSA8xCI/${imgSize}.jpg`,
    podcastTitle: "أحمد صبري: ميكس دراسة الطب والتيك توك والسفر وتعليم اللغات",
    podcastLink:
      "https://www.youtube.com/watch?v=U0Z1kSA8xCI&list=PL5isa5XjlZ5pH8vT0TJO9qZrRiZcrWuDp&index=13&pp=iAQB",
    makerImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaTB9XtbM37u9jey7AFl8Lrbu4pPIdlYraSp0l5y0g=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@DroosOnline4u",
    makerName: "دروس اونلاين",
    podcastTime: "2:09:18",
  },
  {
    id: 23,
    imgSrc: `https://i3.ytimg.com/vi/Nd988L8FiHw/${imgSize}.jpg`,
    podcastTitle: "ترك أموال هندسة البترول من أجل تلخيص الكتب على يوتيوب",
    podcastLink:
      "https://www.youtube.com/watch?v=Nd988L8FiHw&list=PL5isa5XjlZ5pH8vT0TJO9qZrRiZcrWuDp&index=17&pp=iAQB",
    makerImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaTB9XtbM37u9jey7AFl8Lrbu4pPIdlYraSp0l5y0g=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@DroosOnline4u",
    makerName: "دروس اونلاين",
    podcastTime: "2:18:53",
  },
  {
    id: 24,
    imgSrc: `https://i3.ytimg.com/vi/M77sNp0GfQ4/${imgSize}.jpg`,
    podcastTitle: "هل كلنا مرضى نفسيين؟ متى تذهب للطبيب النفسي؟",
    podcastLink:
      "https://www.youtube.com/watch?v=M77sNp0GfQ4&list=PL5isa5XjlZ5pH8vT0TJO9qZrRiZcrWuDp&index=18&pp=iAQB",
    makerImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaTB9XtbM37u9jey7AFl8Lrbu4pPIdlYraSp0l5y0g=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@DroosOnline4u",
    makerName: "دروس اونلاين",
    podcastTime: "2:34:09",
  },
  {
    id: 25,
    imgSrc: `https://i3.ytimg.com/vi/gbxq7-B0CFs/${imgSize}.jpg`,
    podcastTitle: "العمل الحر، لماذا لا تناسبنا بعض الكتب، تأثير كرة القدم",
    podcastLink:
      "https://www.youtube.com/watch?v=gbxq7-B0CFs&list=PL5isa5XjlZ5pH8vT0TJO9qZrRiZcrWuDp&index=19&pp=iAQB",
    makerImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaTB9XtbM37u9jey7AFl8Lrbu4pPIdlYraSp0l5y0g=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@DroosOnline4u",
    makerName: "دروس اونلاين",
    podcastTime: "2:13:05",
  },
  {
    id: 26,
    imgSrc: `https://i3.ytimg.com/vi/9KmDmge7L8g/${imgSize}.jpg`,
    podcastTitle:
      "الفطرة السليمة والرحلة من الصعيد لأمريكا ومن النقاشة للعمل الحر",
    podcastLink:
      "https://www.youtube.com/watch?v=gbxq7-B0CFs&list=PL5isa5XjlZ5pH8vT0TJO9qZrRiZcrWuDp&index=19&pp=iAQB",
    makerImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaTB9XtbM37u9jey7AFl8Lrbu4pPIdlYraSp0l5y0g=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@DroosOnline4u",
    makerName: "دروس اونلاين",
    podcastTime: "2:45:03",
  },
  {
    id: 27,
    imgSrc: `https://i3.ytimg.com/vi/Df-Ou0AphH4/${imgSize}.jpg`,
    podcastTitle: "قعدة مصطبة يوتيوبية هندسية بين طنطا والأسكندرية",
    podcastLink:
      "https://www.youtube.com/watch?v=Df-Ou0AphH4&list=PL5isa5XjlZ5pH8vT0TJO9qZrRiZcrWuDp&index=22&pp=iAQB",
    makerImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaTB9XtbM37u9jey7AFl8Lrbu4pPIdlYraSp0l5y0g=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@DroosOnline4u",
    makerName: "دروس اونلاين",
    podcastTime: "2:33:37",
  },
  {
    id: 28,
    imgSrc: `https://i3.ytimg.com/vi/yCvYLjNnrx8/${imgSize}.jpg`,
    podcastTitle: "إدراك قيمة الوقت وكيفية تحقيق الأهداف والتخطيط الفعال",
    podcastLink:
      "https://www.youtube.com/watch?v=yCvYLjNnrx8&list=PLSNyJuJvmgwHqVFGVcrIqE7wppkgeObcv&index=31&pp=iAQB",
    makerImg:
      "https://yt3.googleusercontent.com/3vSeeRgujIgDw6ygmg7TSNwtYGek5meOlUWkF67ozP_avCXeKg0pWzFFGb_1Xz6vEyn-8_LjC1c=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@mahmoudfawzyofficial",
    makerName: "Mahmoud Fawzy",
    podcastTime: "51:26",
  },
];
let contentRegion = [
  {
    id: 1,
    imgSrc: `https://i3.ytimg.com/vi/hzoAYs0AqNw/${imgSize}.jpg`,
    podcastTitle: "فاهم 11 | الدعاء | مع الشيخ هيثم سمير",
    podcastLink:
      "https://www.youtube.com/watch?v=hzoAYs0AqNw&list=PLSNyJuJvmgwHqVFGVcrIqE7wppkgeObcv&index=1&pp=iAQB",
    makerImg:
      "https://yt3.googleusercontent.com/ZcQIalUR37hJBfDsw29R1J2lgblWW783n1w3DojqUMbo-_UmdHp6pCtbPyRiKyC3Vho_4NWh=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@Fahem.Podcast",
    makerName: "فاهم بودكاست",
    podcastTime: "1:22:01",
  },
  {
    id: 2,
    imgSrc: `https://i3.ytimg.com/vi/sjSijv6QhLw/${imgSize}.jpg`,
    podcastTitle:
      "بودكاست💰الحريه الماليه | الماليه الإسلامية | محاسبه زكاة الشركات",
    podcastLink:
      "https://www.youtube.com/watch?v=sjSijv6QhLw&list=PLSNyJuJvmgwHqVFGVcrIqE7wppkgeObcv&index=2&pp=iAQB",
    makerImg:
      "https://yt3.googleusercontent.com/09h-TWdSI3H9qUl3PHv-Jhc5fAjtx9YXYNcnKKMFI5d63BJqhoA_eZK_iBZihqk7nDccWSbp=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@AhmedShahinOfficial",
    makerName: "Ahmed Shahin",
    podcastTime: "1:12:11",
  },
  {
    id: 3,
    imgSrc: `https://i3.ytimg.com/vi/oXEV9bwzVXo/${imgSize}.jpg`,
    podcastTitle: "فاهم 10 | الدعوة مسئولية كل مسلم .. اعرف دورك",
    podcastLink:
      "https://www.youtube.com/watch?v=oXEV9bwzVXo&list=PLSNyJuJvmgwHqVFGVcrIqE7wppkgeObcv&index=4&pp=iAQB",
    makerImg:
      "https://yt3.googleusercontent.com/ZcQIalUR37hJBfDsw29R1J2lgblWW783n1w3DojqUMbo-_UmdHp6pCtbPyRiKyC3Vho_4NWh=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@Fahem.Podcast",
    makerName: "فاهم بودكاست",
    podcastTime: "1:51:59",
  },
  {
    id: 4,
    imgSrc: `https://i3.ytimg.com/vi/RbQPSD7Gqnw/${imgSize}.jpg`,
    podcastTitle: "العشر من ذي الحجه واستيعاب اهميه تلك الايام والمطلوب فيها",
    podcastLink:
      "https://www.youtube.com/watch?v=RbQPSD7Gqnw&list=PLSNyJuJvmgwHqVFGVcrIqE7wppkgeObcv&index=8&pp=iAQB",
    makerImg:
      "https://yt3.googleusercontent.com/6uJJSwekJeReenIzIrnzs4Vwe3PTi8_G5XBbHgHym7ycI44Xv5KkuAhUBu_pVw-KmNDQelOUeQ=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@waie",
    makerName: "وعي",
    podcastTime: "1:34:38",
  },
  {
    id: 5,
    imgSrc: `https://i3.ytimg.com/vi/IesOE8Rkzik/${imgSize}.jpg`,
    podcastTitle: "فاهم 16 | أخلاقيات العمل | مع د. محمد حسام خضر",
    podcastLink:
      "https://www.youtube.com/watch?v=IesOE8Rkzik&list=PLSNyJuJvmgwHqVFGVcrIqE7wppkgeObcv&index=14&pp=iAQB",
    makerImg:
      "https://yt3.googleusercontent.com/ZcQIalUR37hJBfDsw29R1J2lgblWW783n1w3DojqUMbo-_UmdHp6pCtbPyRiKyC3Vho_4NWh=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@Fahem.Podcast",
    makerName: "فاهم بودكاست",
    podcastTime: "1:23:01",
  },
  {
    id: 6,
    imgSrc: `https://i3.ytimg.com/vi/cg6VvHFUAHg/${imgSize}.jpg`,
    podcastTitle: "لماذا النوم بعد الفجر يزيد احتمالية الوفاة | بودكاست فنجان",
    podcastLink:
      "https://www.youtube.com/watch?v=cg6VvHFUAHg&list=PLSNyJuJvmgwHqVFGVcrIqE7wppkgeObcv&index=17&pp=iAQB",
    makerImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaQpOyUzDhLCVPRM3jVTKYefrUr1OJNTLmwYkieG8A=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@thmanyahPodcasts",
    makerName: "إذاعة ثمانية ",
    podcastTime: "2:28:26",
  },
  {
    id: 7,
    imgSrc: `https://i3.ytimg.com/vi/fqL5bKCZlMw/${imgSize}.jpg`,
    podcastTitle:
      "حسن التعامل مع النفس وقيمة التفرغ للعبادة وطريقة دعاء الأنبياء",
    podcastLink:
      "https://www.youtube.com/watch?v=fqL5bKCZlMw&list=PLSNyJuJvmgwHqVFGVcrIqE7wppkgeObcv&index=22&pp=iAQB",
    makerImg:
      "https://yt3.googleusercontent.com/3L-h8XQwYM-8dYTpt05XCmF3wGDnkQTzHtcWdWC469dglfF8G-FAAXBhEs0_mDg0NiCbMeYQ=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@HazemElSeddiq",
    makerName: "حازم الصديق",
    podcastTime: "1:23:29",
  },
  {
    id: 8,
    imgSrc: `https://i3.ytimg.com/vi/OO8TN0V1xxQ/${imgSize}.jpg`,
    podcastTitle: "ليه رمضان جنة؟🌴🌙 بودكاست رمضانى🎙️ مع شريف على",
    podcastLink:
      "https://www.youtube.com/watch?v=OO8TN0V1xxQ&list=PLSNyJuJvmgwHqVFGVcrIqE7wppkgeObcv&index=25&pp=iAQB",
    makerImg:
      "https://yt3.googleusercontent.com/09h-TWdSI3H9qUl3PHv-Jhc5fAjtx9YXYNcnKKMFI5d63BJqhoA_eZK_iBZihqk7nDccWSbp=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@AhmedShahinOfficial",
    makerName: "Ahmed Shahin",
    podcastTime: "1:20:10",
  },
  {
    id: 9,
    imgSrc: `http://i3.ytimg.com/vi/H9SXCa8s58w/hqdefault.jpg`,
    podcastTitle: "رمضان والقرآن ☑ | رمضان كاست",
    podcastLink:
      "https://www.youtube.com/watch?v=H9SXCa8s58w&list=PLSNyJuJvmgwHqVFGVcrIqE7wppkgeObcv&index=26&pp=iAQB",
    makerImg:
      "https://yt3.googleusercontent.com/NZD_4Y8BEeQMfH85CBOrYMQJ_4AN0sWVBCgJtqu-MotYnYeyp-W-Ps9uPheBO-d4iUMfPDP9AA=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@Way2allahCom",
    makerName: "Way2AllahCom",
    podcastTime: "2:11:53",
  },
  {
    id: 10,
    imgSrc: `http://i3.ytimg.com/vi/mLQqCjr4Zf8/hqdefault.jpg`,
    podcastTitle: "رمضان والتغيير ☑ | رمضان كاست",
    podcastLink:
      "https://www.youtube.com/watch?v=mLQqCjr4Zf8&list=PLSNyJuJvmgwHqVFGVcrIqE7wppkgeObcv&index=27&pp=iAQB",
    makerImg:
      "https://yt3.googleusercontent.com/NZD_4Y8BEeQMfH85CBOrYMQJ_4AN0sWVBCgJtqu-MotYnYeyp-W-Ps9uPheBO-d4iUMfPDP9AA=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@Way2allahCom",
    makerName: "Way2AllahCom",
    podcastTime: "1:21:38",
  },
  {
    id: 11,
    imgSrc: `http://i3.ytimg.com/vi/3WHJS0-eBK0/hqdefault.jpg`,
    podcastTitle: "رمضان توبة ☑ | رمضان كاست",
    podcastLink:
      "https://www.youtube.com/watch?v=3WHJS0-eBK0&list=PLSNyJuJvmgwHqVFGVcrIqE7wppkgeObcv&index=28&pp=iAQB",
    makerImg:
      "https://yt3.googleusercontent.com/NZD_4Y8BEeQMfH85CBOrYMQJ_4AN0sWVBCgJtqu-MotYnYeyp-W-Ps9uPheBO-d4iUMfPDP9AA=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@Way2allahCom",
    makerName: "Way2AllahCom",
    podcastTime: "1:35:38",
  },
  {
    id: 12,
    imgSrc: `https://i3.ytimg.com/vi/I8xlDbFWrAA/${imgSize}.jpg`,
    podcastTitle: "الاحتفال بالكريسماس وسبب اكتساب عادات غربية وعدم الفخر",
    podcastLink:
      "https://www.youtube.com/watch?v=I8xlDbFWrAA&list=PLSNyJuJvmgwHqVFGVcrIqE7wppkgeObcv&index=30&pp=iAQB",
    makerImg:
      "https://yt3.googleusercontent.com/6uJJSwekJeReenIzIrnzs4Vwe3PTi8_G5XBbHgHym7ycI44Xv5KkuAhUBu_pVw-KmNDQelOUeQ=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@waie",
    makerName: "وعي",
    podcastTime: "1:05:19",
  },
  {
    id: 13,
    imgSrc: `https://i3.ytimg.com/vi/sJU6tGvR9dU/${imgSize}.jpg`,
    podcastTitle: "قصة إلتزامه وتقديس المشاهير ونظرتنا الخاطئة عن الموت",
    podcastLink:
      "https://www.youtube.com/watch?v=sJU6tGvR9dU&list=PLSNyJuJvmgwHqVFGVcrIqE7wppkgeObcv&index=33&pp=iAQB",
    makerImg:
      "https://yt3.googleusercontent.com/3vSeeRgujIgDw6ygmg7TSNwtYGek5meOlUWkF67ozP_avCXeKg0pWzFFGb_1Xz6vEyn-8_LjC1c=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@mahmoudfawzyofficial",
    makerName: "Mahmoud Fawzy",
    podcastTime: "42:56",
  },
  {
    id: 14,
    imgSrc: `https://i3.ytimg.com/vi/yLyb_H7y-Ho/${imgSize}.jpg`,
    podcastTitle: "وعي ٤٦ | سلسلة الأخلاق | الصدق والكذب",
    podcastLink:
      "https://www.youtube.com/watch?v=yLyb_H7y-Ho&list=PLSNyJuJvmgwHqVFGVcrIqE7wppkgeObcv&index=38&pp=iAQB",
    makerImg:
      "https://yt3.googleusercontent.com/6uJJSwekJeReenIzIrnzs4Vwe3PTi8_G5XBbHgHym7ycI44Xv5KkuAhUBu_pVw-KmNDQelOUeQ=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@waie",
    makerName: "وعي",
    podcastTime: "1:51:04",
  },
  {
    id: 15,
    imgSrc: `https://i3.ytimg.com/vi/eEWbnT4CZYI/${imgSize}.jpg`,
    podcastTitle: "شريف على يحكى قصة هدايته لأول مره ونصائح هتغير حياتك",
    podcastLink:
      "https://www.youtube.com/watch?v=eEWbnT4CZYI&list=PLSNyJuJvmgwHqVFGVcrIqE7wppkgeObcv&index=39&pp=iAQB",
    makerImg:
      "https://yt3.googleusercontent.com/09h-TWdSI3H9qUl3PHv-Jhc5fAjtx9YXYNcnKKMFI5d63BJqhoA_eZK_iBZihqk7nDccWSbp=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@AhmedShahinOfficial",
    makerName: "Ahmed Shahin",
    podcastTime: "2:15:23",
  },
  {
    id: 16,
    imgSrc: `https://i3.ytimg.com/vi/zzWhkMWlIo0/${imgSize}.jpg`,
    podcastTitle: "سلسة الأخلاق | مقدمة عن أهمية الأخلاق والمعاملات في الإسلام",
    podcastLink:
      "https://www.youtube.com/watch?v=zzWhkMWlIo0&list=PLSNyJuJvmgwHqVFGVcrIqE7wppkgeObcv&index=40&pp=iAQB",
    makerImg:
      "https://yt3.googleusercontent.com/6uJJSwekJeReenIzIrnzs4Vwe3PTi8_G5XBbHgHym7ycI44Xv5KkuAhUBu_pVw-KmNDQelOUeQ=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@waie",
    makerName: "وعي",
    podcastTime: "1:03:18",
  },
  {
    id: 17,
    imgSrc: `https://i3.ytimg.com/vi/Eouhp_6xSrE/${imgSize}.jpg`,
    podcastTitle: "الشيطان والتزيين وماذا يقول القرءان في التعامل معه",
    podcastLink:
      "https://www.youtube.com/watch?v=Eouhp_6xSrE&list=PLSNyJuJvmgwHqVFGVcrIqE7wppkgeObcv&index=45&pp=iAQB",
    makerImg:
      "https://yt3.googleusercontent.com/6uJJSwekJeReenIzIrnzs4Vwe3PTi8_G5XBbHgHym7ycI44Xv5KkuAhUBu_pVw-KmNDQelOUeQ=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@waie",
    makerName: "وعي",
    podcastTime: "2:04:55",
  },
  {
    id: 18,
    imgSrc: `https://i3.ytimg.com/vi/CNEaMkrzn_g/${imgSize}.jpg`,
    podcastTitle: "أهمية النية، وروتين الرياضة في رمضان",
    podcastLink:
      "https://www.youtube.com/watch?v=CNEaMkrzn_g&list=PLSNyJuJvmgwHqVFGVcrIqE7wppkgeObcv&index=46&pp=iAQB",
    makerImg:
      "https://yt3.googleusercontent.com/3L-h8XQwYM-8dYTpt05XCmF3wGDnkQTzHtcWdWC469dglfF8G-FAAXBhEs0_mDg0NiCbMeYQ=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@HazemElSeddiq",
    makerName: "حازم الصديق",
    podcastTime: "1:46:16",
  },
  {
    id: 19,
    imgSrc: `https://i3.ytimg.com/vi/_DJtQcZ3VDs/${imgSize}.jpg`,
    podcastTitle: "عدم التنازل عن الحق لإرضاء الناس، واستغلال ما بقي من رمضان",
    podcastLink:
      "https://www.youtube.com/watch?v=_DJtQcZ3VDs&list=PLSNyJuJvmgwHqVFGVcrIqE7wppkgeObcv&index=47&pp=iAQB",
    makerImg:
      "https://yt3.googleusercontent.com/3L-h8XQwYM-8dYTpt05XCmF3wGDnkQTzHtcWdWC469dglfF8G-FAAXBhEs0_mDg0NiCbMeYQ=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@HazemElSeddiq",
    makerName: "حازم الصديق",
    podcastTime: "2:03:58",
  },
  {
    id: 20,
    imgSrc: `https://i3.ytimg.com/vi/nSDNA4YRS_8/${imgSize}.jpg`,
    podcastTitle: "وعي ٢٦ | ما هو القرآن؟",
    podcastLink:
      "https://www.youtube.com/watch?v=nSDNA4YRS_8&list=PLSNyJuJvmgwHqVFGVcrIqE7wppkgeObcv&index=49&pp=iAQB",
    makerImg:
      "https://yt3.googleusercontent.com/6uJJSwekJeReenIzIrnzs4Vwe3PTi8_G5XBbHgHym7ycI44Xv5KkuAhUBu_pVw-KmNDQelOUeQ=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@waie",
    makerName: "وعي",
    podcastTime: "1:46:48",
  },
  {
    id: 21,
    imgSrc: `http://i3.ytimg.com/vi/S9QMNG9Lt9I/${imgSize}.jpg`,
    podcastTitle:
      "تجارب شخصية مع الموسيقى وآثارها وأهمية القرآن في تطهير القلب",
    podcastLink:
      "https://www.youtube.com/watch?v=S9QMNG9Lt9I&list=PLSNyJuJvmgwHqVFGVcrIqE7wppkgeObcv&index=51&pp=iAQB",
    makerImg:
      "https://yt3.googleusercontent.com/6uJJSwekJeReenIzIrnzs4Vwe3PTi8_G5XBbHgHym7ycI44Xv5KkuAhUBu_pVw-KmNDQelOUeQ=s176-c-k-c0x00ffffff-no-rj",
    makerChannel: "https://www.youtube.com/@waie",
    makerName: "وعي",
    podcastTime: "1:23:32",
  },
];

const PodcastCards = () => {
  return (
    <>
      <SectionTitle id={"learn"} title="بودكاست تعليمية" />
      <div className="wrapper d-grid gap-20">
        {contentLearn.map(function (e) {
          return (
            <PodcastCard
              key={e.id}
              imgSrc={e.imgSrc}
              podcastTitle={e.podcastTitle}
              podcastLink={e.podcastLink}
              makerImg={e.makerImg}
              makerName={e.makerName}
              makerChannel={e.makerChannel}
              podcastTime={e.podcastTime}
            />
          );
        })}
      </div>
      <SectionTitle id={"improve"} title="بودكاست تنمية" />
      <div className="wrapper d-grid gap-20">
        {contentImprove.map(function (e) {
          return (
            <PodcastCard
              key={e.id}
              imgSrc={e.imgSrc}
              podcastTitle={e.podcastTitle}
              podcastLink={e.podcastLink}
              makerImg={e.makerImg}
              makerName={e.makerName}
              makerChannel={e.makerChannel}
              podcastTime={e.podcastTime}
            />
          );
        })}
      </div>
      <SectionTitle id={"islam"} title="بودكاست دينية" />
      <div className="wrapper d-grid gap-20">
        {contentRegion.map(function (e) {
          return (
            <PodcastCard
              key={e.id}
              imgSrc={e.imgSrc}
              podcastTitle={e.podcastTitle}
              podcastLink={e.podcastLink}
              makerImg={e.makerImg}
              makerName={e.makerName}
              makerChannel={e.makerChannel}
              podcastTime={e.podcastTime}
            />
          );
        })}
      </div>
    </>
  );
};

export default PodcastCards;
