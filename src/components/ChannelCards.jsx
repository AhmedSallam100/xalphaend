import SectionTitle from "./SectionTitle";
import ChannelCard from "./ChannelCard";

let contentCode = [
  {
    id: 1,
    srcImg:
      "https://yt3.googleusercontent.com/-qCvx3y42iXp9cMNe5Yx3aoR2lL8TFxsrLShyBLuXOE4tY56kt_bPceyvPw95rpUqgKqI8zDBe4=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Elzero Web School",
    href: "https://www.youtube.com/@ElzeroWebSchool",
  },
  {
    id: 2,
    srcImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaQSk1FmsS4OkJF3najsO5SVAPxcqjfGJKQ3V5VS5g=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Abdelrahman Gamal",
    href: "https://www.youtube.com/@AbdelrahmanGamal",
  },
  {
    id: 3,
    srcImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaT10lSJSGHKsB-ohMh8cCvh_ij9zIPbVUAZ-9B8uw=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Codezilla",
    href: "https://www.youtube.com/@Codezilla",
  },
  {
    id: 4,
    srcImg:
      "https://yt3.googleusercontent.com/gvn2IhhzbJIcOmmtBueQ9546BtP-83CDT8fIf1mc8aULfNFj1WsNqJkEUps3gkWeFrCErwDe0A=s176-c-k-c0x00ffffff-no-rj",
    channelName: "codeZone",
    href: "https://www.youtube.com/@Codezilla",
  },
  {
    id: 5,
    srcImg:
      "https://yt3.googleusercontent.com/Na4La3E9dcrFyZx-AbaWuOIX27tUwOXXDVLi1YhtDaqDDZuBcJsDHfrPQc_GNmfnow9vg3MX=s176-c-k-c0x00ffffff-no-rj",
    channelName: "اتعلم في ساعة",
    href: "https://www.youtube.com/@elrayek",
  },
  {
    id: 6,
    srcImg:
      "https://yt3.googleusercontent.com/o1D4Ej6Sq2XVrXQaG_fT38JZjn0fisbAOght4qbQyKjKXYI_JwkwUBsp1zZSgHkXoh-MuzjN-0E=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Mahmoud Ahmed",
    href: "https://www.youtube.com/@MahmoudAhmed6",
  },
  {
    id: 7,
    srcImg:
      "https://yt3.googleusercontent.com/J2mcgyVndGZLWL6Nzh8NouHXvMri9nGd5wQq1yCzbnqGiXNuEOpv3uVaOz5ztqSj3OPWIWLrCj4=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Fatma Magdy",
    href: "https://www.youtube.com/@EngFatmaMagdy",
  },
  {
    id: 8,
    srcImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaSISpt3O-cO7BXV2HSjqj-1YTrwKoZWhoRVZFp7zQ=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Tarek Alabd",
    href: "https://www.youtube.com/@TarekAlabd",
  },
  {
    id: 9,
    srcImg:
      "https://yt3.googleusercontent.com/f-jh4NNRXAp6LrbmP5rfBL6_Yf9aJIgc8oRp6Pzzox_RBjYMGOnnYlHm1JylT6B_8RQASWv4Yg=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Shadow Coding",
    href: "https://www.youtube.com/@ShadowCoding1",
  },
  {
    id: 10,
    srcImg:
      "https://yt3.googleusercontent.com/o6r8CivPK55x9W42Tty4n7IWOGVW1WDpyFTgOD1_0KX7-Vl6gTULkxGvjS8KB2RIwJwuCU0A=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Dev Mohamed Elrafey",
    href: "https://www.youtube.com/@devmohamedelrafey",
  },
  {
    id: 11,
    srcImg:
      "https://yt3.googleusercontent.com/pwgWsLfM-aqH6wd1wvCiBF0wTkRAYzpaZ0pITW3FLsxstJ7AjWFXetl8jWoLYbOVdEu6hS8jUds=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Elzero Tube",
    href: "https://www.youtube.com/@ElzeroTube",
  },
  {
    id: 12,
    srcImg:
      "https://yt3.googleusercontent.com/EZ5OofHPE36ZV_dI0es2i1vxb8rGx1IvnTD7lmPKBtVwc5W-77wDcM8ncuWTaJewZdf0d6s-=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Mohamed Abusrea",
    href: "https://www.youtube.com/@MohamedAbusrea",
  },
  {
    id: 13,
    srcImg:
      "https://yt3.googleusercontent.com/bwVWeFQ-xuP733BpT3jhEKYEwIHxT6Eb5qKSBWecPsqTVBMHIO9CqIzOFUAkUBjeIaaLkgIS=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Dev Ali",
    href: "https://www.youtube.com/@dev-ali",
  },
  {
    id: 14,
    srcImg:
      "https://yt3.googleusercontent.com/Va1Pe3Yn9dQgQW14Q0QSR9IUxa0S2g-iAUeuOl2XlIjP2KvI5l6UQ8zit-BDqxdIwW_2Kojj=s176-c-k-c0x00ffffff-no-rj",
    channelName: "CodeCast",
    href: "https://www.youtube.com/@codezillacodecast",
  },
  {
    id: 15,
    srcImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaSVtatu6ueYAfbHo5WXBTAFLSuy7953HiBexwzRiA=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Omar Ahmed",
    href: "https://www.youtube.com/@OmarAhmedx14",
  },
  {
    id: 16,
    srcImg:
      "https://yt3.googleusercontent.com/zRMFqAdWQt3qVLH9H6-PJLSdPbaFIsf1irKKO-bcWTdIk7kR4JxO-ph3H3MMPnVwn9G1X5KizQ=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Php Anonymous",
    href: "https://www.youtube.com/@PhpAnonymous",
  },
  {
    id: 17,
    srcImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaRTGGueBQkMIAFN10i0lICpTysykb_ydRUE062un3g=s176-c-k-c0x00ffffff-no-rj",
    channelName: "محمد الشريف",
    href: "https://www.youtube.com/@bashmohandes",
  },
  {
    id: 18,
    srcImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaSfkBkbCoRiGerAjUi0O3fv_FADVuFjyrySIJg16w=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Nour Homsi",
    href: "https://www.youtube.com/@NourHomsi",
  },
  {
    id: 19,
    srcImg:
      "https://yt3.googleusercontent.com/OzIL6bJ4AJSrnzvw8Bz3QX3SLPScFPe5tBPGsIQWIuxnNKx4D08hxQF8S3rcTd2P72Q6N3kGRQ=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Metwally Labs",
    href: "https://www.youtube.com/@MetwallyLabs",
  },
  {
    id: 20,
    srcImg:
      "https://yt3.googleusercontent.com/gEKWMk23VUmywQAIKVyZr1ko9qBlfbkc7YXyN6mAiqsWdBFMSY-mulG8dcEqN6tu3x2LuL5yOw=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Passionate Coders",
    href: "https://www.youtube.com/@PassionateCoders",
  },
  {
    id: 21,
    srcImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaT5dCiZ3dyE9yCv5oqOZM2volJSypVo0KxGjcMc=s176-c-k-c0x00ffffff-no-rj",
    channelName: "أكاديمية حسوب",
    href: "https://www.youtube.com/@HsoubAcademy",
  },
  {
    id: 22,
    srcImg:
      "https://yt3.googleusercontent.com/nycRVsjueu0T_Vq2Rhx1R14PFoCkng7elzzrtqJcGH-SgeQ47-5OieHi5OTHTGCiyKnPmOSo=s176-c-k-c0x00ffffff-no-rj",
    channelName: "مدرسة التعلّم الذاتي - مساقات أونلاين",
    href: "https://www.youtube.com/@MasaqatOnline",
  },
  {
    id: 23,
    srcImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaSonnO7AaXGzdJJC-PEbiaMr75zrbyt9bxBX7MYpQ=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Al-Munthir Saffan",
    href: "https://www.youtube.com/@ALMunthirSaffan",
  },
  {
    id: 24,
    srcImg:
      "https://yt3.googleusercontent.com/4NIJjtDe6pbI_CID2R-ZF0UCHZvnhiS4Yu8TL-weIJpfcoOvCf94B-6h2XSjrnSWhdyFnIdB_Q=s176-c-k-c0x00ffffff-no-rj",
    channelName: "يلا اتعلم",
    href: "https://www.youtube.com/@AlghanemWebStudy",
  },
  {
    id: 25,
    srcImg:
      "https://yt3.googleusercontent.com/DwZP6OdE22vVzmaZeiSvSha_0K0jCR_OfVPa36RMI8Mb95IrwY1-JCEjrm8oldWsX62_7opFnQ=s176-c-k-c0x00ffffff-no-rj",
    channelName: "CodeRK",
    href: "https://www.youtube.com/@Rakwan",
  },
  {
    id: 26,
    srcImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaSBm2JbgmTTun7Umlf689LWG83OY0XUjRtTRWpS=s176-c-k-c0x00ffffff-no-rj",
    channelName: "anaHr",
    href: "https://www.youtube.com/@anaHr",
  },
  {
    id: 27,
    srcImg:
      "https://yt3.googleusercontent.com/3ovUHdQZJZqr5dSnpHb1xOTUnw15MP5eUGAtduB5ZpW5HcivvNy7VOVmnj-PgytecCYD9_fkng=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Programming Army",
    href: "https://www.youtube.com/@programmingarmy",
  },
  {
    id: 28,
    srcImg:
      "https://yt3.googleusercontent.com/DdRYw0GXkdg9oD43KQyyThneoAgJ9abA0_UsOhPhLQcMbNcajWPSnJ_ZBNChgyr97uzZFLpoWQ=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Mo Tahawy",
    href: "https://www.youtube.com/@MoTahawy",
  },
  {
    id: 29,
    srcImg:
      "https://yt3.googleusercontent.com/yLyHGiQwPJLRXoUfoX_C2IlierQdBXYymSsnN1wJOcs7XYagbeAXq8Ja6Khc4Brigs-H29U4TA=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Hassan Mansour",
    href: "https://www.youtube.com/@HassanMansour",
  },
  {
    id: 30,
    srcImg:
      "https://yt3.googleusercontent.com/tJ7GI1pjqsLTZjPzKI09IpqxQU_hc_UJ5BJ75_SacguPwP-1t1Rn0gi-9A5Ex_lOgxMf_nCYHQ=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Simple Arab Code",
    href: "https://www.youtube.com/@SimpleArabCode",
  },
  {
    id: 31,
    srcImg:
      "https://yt3.googleusercontent.com/vA_oygdd-yDyj239D8hM-QZns-mUzX1_nNmeoU30jEwPPuWA70xs7qDsfOczTsLgOV4afg_lSQ=s176-c-k-c0x00ffffff-no-rj",
    channelName: "اتعلم ببساطة",
    href: "https://www.youtube.com/@Learn_Simply",
  },
  {
    id: 32,
    srcImg:
      "https://yt3.googleusercontent.com/57CP2C8YLfs4WVdA3qMjjtYoXGXH0SMlh9zCY9v4u-mNu67P3J6_n144kp02VMCHE7hZZc8icw=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Ali Shahin",
    href: "https://www.youtube.com/@AliShahin",
  },
  {
    id: 33,
    srcImg:
      "https://yt3.googleusercontent.com/JBUt9VotQBzZ7pxUOA8YD17HoOt4WLrIsd4BfhRB6nEcE65HNjqUhs60rGLl3wcyXPrdnLrUcks=s176-c-k-c0x00ffffff-no-rj",
    channelName: "HOW TO CODE !",
    href: "https://www.youtube.com/@howtocode5556",
  },
  {
    id: 34,
    srcImg:
      "https://yt3.googleusercontent.com/CGX-ywVmDjCnjIK_JV-yak7oE6MGbYW0X_Mj3ADS2lmA2TpuZi3UID6hlAdwOnlsaQoucOvSYUA=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Wael abo hamza",
    href: "https://www.youtube.com/@WaelabohamzaFlutter",
  },
  {
    id: 35,
    srcImg:
      "https://yt3.googleusercontent.com/gUZ6Jqst_1SoJSDJ6D6AybUizbdc0XC9YBEqHC5ug5VQbjfXELpW4PYYvewyivV43SEJ0s0LlDI=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Ghareeb Elshaikh",
    href: "https://www.youtube.com/@GhareebElshaikh",
  },
  {
    id: 36,
    srcImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaRuABfdOBVEoa5Tvwc2kMghDgwGmvRUu6vJvynx=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Big Data",
    href: "https://www.youtube.com/@bigdata4756",
  },
  {
    id: 37,
    srcImg:
      "https://yt3.googleusercontent.com/nj-D7gws4YqN2zzHpuKvKs6Yr7FhP_r5-IKwonYIjyLChI5kGmFsy5mCSeCO5Jg2TyYYyVa5LCE=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Alaa & Yehya Academy",
    href: "https://www.youtube.com/@AlaaAndYehyaAcademy",
  },
  {
    id: 38,
    srcImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaRDL6AHEdLLZkdZkzNJS3AGdCxFyfVp7vb9-4EZYg=s176-c-k-c0x00ffffff-no-rj",
    channelName: "BarmajaOnline",
    href: "https://www.youtube.com/@barmajaonline",
  },
  {
    id: 39,
    srcImg:
      "https://yt3.googleusercontent.com/NiMV8ZGK1KG7G2aO07EgOjfUzfCwoFPCD7aZT-V9fZnpRNYfxJYuV3JY9kCKCyDjmn2o81J5_Y8=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Arabic Hacker",
    href: "https://www.youtube.com/@arabic_hacker",
  },
  {
    id: 40,
    srcImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaTm9SG-dvztCaCfazYXzLjbgyegNmzwzi1SrX7M4A=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Ag Coding",
    href: "https://www.youtube.com/@AbdoELAzizGamal",
  },
  {
    id: 41,
    srcImg:
      "https://yt3.googleusercontent.com/QyFLjS7lF_aYvl0rDkl9I-5ygjpAzOIcxP00GV2SVSS7dGhVBWXZHlX98cpbpxo4aMdrfZZZuQ=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Mohab Mohammed",
    href: "https://www.youtube.com/@FUNCTO",
  },
  {
    id: 42,
    srcImg:
      "https://yt3.googleusercontent.com/eKo3mM3P1iblBZSYZcWR4UWnplBVnI-qRTwCr9Tu8DyqhyvFxhlMheNr6RWjRdHRkqp-PvRgCVk=s176-c-k-c0x00ffffff-no-rj",
    channelName: "mo-co",
    href: "https://www.youtube.com/channel/UCpq3uTt_2hfPIwsd5cZg8ow",
  },
  {
    id: 43,
    srcImg:
      "https://yt3.googleusercontent.com/auaZH-Im3_KvXEYWUGD1TImqAVLyhnogqZvaajSdOYMlpJ8v7LUtiB3yNiQylesVXc2gBjyFWw=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Mohamed Elkashef",
    href: "https://www.youtube.com/@Mohamed.Elkashef",
  },
  {
    id: 44,
    srcImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaSkAFbrYDi-_-ad2Ug3KN5P3O6clWgVWgves7WRUA=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Unique Coderz Academy",
    href: "https://www.youtube.com/@UniqueCoderzAcademy",
  },
  {
    id: 45,
    srcImg:
      "https://yt3.googleusercontent.com/CcNL42Cs4UGD5FeiYRhO5B5QdhVry0T6eoKHqAgvF2azVxQWEiJvhYFt0cbbKPIE5-6I-mzljKQ=s176-c-k-c0x00ffffff-no-rj",
    channelName: "software joe",
    href: "https://www.youtube.com/@softwarej0e",
  },
  {
    id: 46,
    srcImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaQdO2V4rj1EiM0vDoHsM2SFnCdxI9lPcO9NNHY8=s176-c-k-c0x00ffffff-no-rj",
    channelName: "أكاديمية ترميز",
    href: "https://www.youtube.com/@tarmeez",
  },
];
let contentArt = [
  {
    id: 1,
    srcImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaSmLhxZ9NT1MSM5E9d6WlFXcZPdZYKGalBjlpC4=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Nour Design",
    href: "https://www.youtube.com/@NourDesign",
  },
  {
    id: 2,
    srcImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaQTH2YMj_XAIl83lEXD5Lpqg6ZoqPCuv-cPzLAiSA=s176-c-k-c0x00ffffff-no-rj",
    channelName: "G. SALEM DESIGNS",
    href: "https://www.youtube.com/@GSALEMDESIGNS",
  },
  {
    id: 3,
    srcImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaQz9J5Dx0RhY3ZQlIobyTNwB69rgA7eRV75ZRcxGg=s176-c-k-c0x00ffffff-no-rj",
    channelName: "mostafa makram TV",
    href: "https://www.youtube.com/@mostafamakram",
  },
  {
    id: 4,
    srcImg:
      "https://yt3.googleusercontent.com/jF1cimGFK423NzNXcpXicGkUSUcQkE6IXBsEpxyh3CeH4QAjIkEtIQ2m4F35jr4XQ1wQ-1tV=s176-c-k-c0x00ffffff-no-rj",
    channelName: "sadeer yassin",
    href: "https://www.youtube.com/@sadeer",
  },
  {
    id: 5,
    srcImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaRKhzMTgJS5S5F7cLqsGR11zJVlSdin-YZIrLA=s176-c-k-c0x00ffffff-no-rj",
    channelName: "الرسوم المتحركة الإبداعية",
    href: "https://www.youtube.com/@user-vq8io6lh5h",
  },
  {
    id: 6,
    srcImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaQkFL7C7wfSQxq7AqH2eOx75XDfX7wpexQcmW3f8A=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Ahmed Saeed",
    href: "https://www.youtube.com/@AhmedSaeedtuts",
  },
  {
    id: 7,
    srcImg:
      "https://yt3.googleusercontent.com/yucdFRiiV7JASJ_OZJZErsZGXkVb2oqhQyH7dNm1BZJh_exP4E3YqL8YFr1y291LPPOL7lqecQ=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Ahmad Sekmani",
    href: "https://www.youtube.com/@AhmadMSekmani",
  },
  {
    id: 8,
    srcImg:
      "https://yt3.googleusercontent.com/7B6G-WfBbB9d_J8eydEYpMUTjHPG-8cD472wpax4AIvrS1UnYg2UTYl9H1wzNJGS3UmtCkjzSQ=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Filmmaker Amro",
    href: "https://www.youtube.com/@FilmmakerAmro",
  },
  {
    id: 9,
    srcImg:
      "https://yt3.googleusercontent.com/sqHWVbY8DgKCuazNIyG0m1rRnqn_h2Bq1MI5f-NPI6Z7v6HwNqLbYbBT2If-qKP-itdPETV2=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Yousif TUT",
    href: "https://www.youtube.com/@YousifPhotoshopTutorials",
  },
  {
    id: 10,
    srcImg:
      "https://yt3.googleusercontent.com/_tHcHQa5LKloQoMnSmGw9xpg5gjLbYB-jh9B69G4e-hO3ZBYY_6Mshf11BDEI5e3QQZhjndOT1Y=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Amr Atallah",
    href: "https://www.youtube.com/@amr13330",
  },
  {
    id: 11,
    srcImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaQs9mu36L6l3ORY6u9WXbdOhfxNK-t0XDLso2DOMw=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Salah Nassar",
    href: "https://www.youtube.com/@snassar",
  },
  {
    id: 12,
    srcImg:
      "https://yt3.googleusercontent.com/TuP40BFgbnpTeXlQEYNEi93k1OM2E9H2D3rhqRfzDjXINnnX6dnRxW4fkx8fEjRR6UOZcgaM4Q=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Ahmed Khaled",
    href: "https://www.youtube.com/@AhmedKhaledd",
  },
];
let contentBooks = [
  {
    id: 1,
    srcImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaQ4_QJtvQxe-O-MiY90AFcLOhCag7qnTqG8Hy4Lxg=s176-c-k-c0x00ffffff-no-rj",
    channelName: "ReadTube",
    href: "https://www.youtube.com/@Jeelyaqraa",
  },
  {
    id: 2,
    srcImg:
      "https://yt3.googleusercontent.com/pCXyltgWSWyRFKiVCflp9j9mFOaz76NHLI_EnIMCGcJmVG6jABZ8v4QFwbIMI_7QVZxpHEzc=s176-c-k-c0x00ffffff-no-rj",
    channelName: "دودة كتب | ندى الشبراوي",
    href: "https://www.youtube.com/@dodetkotob",
  },
  {
    id: 3,
    srcImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaRgUaQ0Ditocr5M57i8nb3BvTX7e0n7FW53nos5pw=s176-c-k-c0x00ffffff-no-rj",
    channelName: "BOOK-PLANET",
    href: "https://www.youtube.com/@book-planet",
  },
  {
    id: 4,
    srcImg:
      "https://yt3.googleusercontent.com/0nVIvMHifhza_AdoC0QWr_IycAgHj-xlNwUiaqvAXycTd_ZDaRRV_pgmPqYwgTGwxeRjnmtUsQ=s176-c-k-c0x00ffffff-no-rj",
    channelName: "أخضر",
    href: "https://www.youtube.com/@a5drcom",
  },
  {
    id: 5,
    srcImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaRQqiTf1yDDHN114RiI-akUIO2qTNm4joU9kVyz=s176-c-k-c0x00ffffff-no-rj",
    channelName: "بتاع الكتب",
    href: "https://www.youtube.com/@Shadybooks",
  },
  {
    id: 6,
    srcImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaT16eE6ZjIP0eAqr4q5aanGEzjKsCw1u23jaH_qUw=s176-c-k-c0x00ffffff-no-rj",
    channelName: "books summary",
    href: "https://www.youtube.com/@bookssummary-4583",
  },
  {
    id: 7,
    srcImg:
      "https://yt3.googleusercontent.com/YNzJ9-pykkoSfK1YwsMiD8UOyv1mL3-IXWpDLaKkQvOKE9WDFhLuqY4shcsumA1poIb3-n3Fkw=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Dupamicaffeine",
    href: "https://www.youtube.com/@Dupamicaffeine",
  },
  {
    id: 8,
    srcImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaQzKjmHoyqax2KnPdAAA-EJi9bG0J7j6kyMNoLD=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Alrawi Books",
    href: "https://www.youtube.com/@alrawibooks1056",
  },
  {
    id: 9,
    srcImg:
      "https://yt3.googleusercontent.com/dpOo6pN--d7_ZzeBphRRgIbo7g5c04WtQMfOz6iVlE1YrptJkzBRsdleUjd6GGmsjdZkhuyh6g=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Audiobook",
    href: "https://www.youtube.com/@audiobookbelaraby",
  },
  {
    id: 10,
    srcImg:
      "https://yt3.googleusercontent.com/TCsv1d3h5kNiycohexujeJQSOdDrhhEFmmWhIcyrYnDwtev4q83u1W0ZlrzTNwtOXU1euUUvyUI=s176-c-k-c0x00ffffff-no-rj",
    channelName: "سلفني كتاب",
    href: "https://www.youtube.com/@salfniketab",
  },
  {
    id: 11,
    srcImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaQX9hm_FtCYJ2gutDq299DALN5Yq_qWRHPXcP3y_Q=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Ali Muhammad Ali",
    href: "https://www.youtube.com/@AliMuhammadAli",
  },
  {
    id: 12,
    srcImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaS6ITnqU5jpF3MuTIiJmtfFqCtAIhud5WdXRO5w=s176-c-k-c0x00ffffff-no-rj",
    channelName: "خير جليس",
    href: "https://www.youtube.com/@KhairJaleesBook",
  },
  {
    id: 13,
    srcImg:
      "https://yt3.googleusercontent.com/DU8oXwVSlySXUiujqvw4mfVgZTVXo1OPNhts2VxDOajud6Mw-UDEYXCNdVRNu3o1ji7fnroY3g=s176-c-k-c0x00ffffff-no-rj",
    channelName: "مكتبة روايات صوتية",
    href: "https://www.youtube.com/@l.ibrary",
  },
  {
    id: 14,
    srcImg:
      "https://yt3.googleusercontent.com/pwgWsLfM-aqH6wd1wvCiBF0wTkRAYzpaZ0pITW3FLsxstJ7AjWFXetl8jWoLYbOVdEu6hS8jUds=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Elzero Tube",
    href: "https://www.youtube.com/@ElzeroTube",
  },
];
let contentProd = [
  {
    id: 1,
    srcImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaTB9XtbM37u9jey7AFl8Lrbu4pPIdlYraSp0l5y0g=s176-c-k-c0x00ffffff-no-rj",
    channelName: "دروس أونلاين",
    href: "https://www.youtube.com/@DroosOnline4u",
  },
  {
    id: 2,
    srcImg:
      "https://yt3.googleusercontent.com/uaS-e1C_lLZ0yBQC24m1M3pg_cZaxYG3eb8ju-W7LgX-fwguIPao6jwLP718BiKsJKOl3r_DBQ=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Daily Sabry",
    href: "https://www.youtube.com/@DailySabry/shorts",
  },
  {
    id: 3,
    srcImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaQ8-LFJGGdwDebKXwUxVMGHBaO7eW5DNKiFigkH=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Agenda",
    href: "https://www.youtube.com/@IngyAgenda",
  },
  {
    id: 4,
    srcImg:
      "https://yt3.googleusercontent.com/RNjeFJ_AlvfCZwwEUaZIRFiLdPXRUbWSWavmQ-mlwi8D7XAFpX1EXGg5GgIkwM8fTFPFArb0=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Tiago Forte",
    href: "https://www.youtube.com/@TiagoForte",
  },
  {
    id: 5,
    srcImg:
      "https://yt3.googleusercontent.com/UHTERNyWgEuwPIRrhL-BjiVXrjZrNmxVPcaq5WxYZ4HuzCoypGU1HHWnCbchScOW0DPgdiu3=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Ma AlHadaf",
    href: "https://www.youtube.com/@maalhadaf",
  },
  {
    id: 6,
    srcImg:
      "https://yt3.googleusercontent.com/3IpdTckB3ase9vicuacOz7cILDQmdgJCn5j1ryGKRc6zWnTWz-KnQGLrLyKZZTnDVHA-qsJxLcs=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Aya Abassi",
    href: "https://www.youtube.com/@itsahumanthing1",
  },
  {
    id: 7,
    srcImg:
      "https://yt3.googleusercontent.com/YNzJ9-pykkoSfK1YwsMiD8UOyv1mL3-IXWpDLaKkQvOKE9WDFhLuqY4shcsumA1poIb3-n3Fkw=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Dupamicaffeine",
    href: "https://www.youtube.com/@Dupamicaffeine",
  },
  {
    id: 8,
    srcImg:
      "https://yt3.googleusercontent.com/ytc/AOPolaQX9hm_FtCYJ2gutDq299DALN5Yq_qWRHPXcP3y_Q=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Ali Muhammad Ali",
    href: "https://www.youtube.com/@AliMuhammadAli",
  },
  {
    id: 9,
    srcImg:
      "https://yt3.googleusercontent.com/gWeMZYJUzGkWyQhsQ4hDFDalZ1lxFf7M0HN_SpDU0GtMwusrolG20ZsHXZLmnuRn-eo1uxRg0Q=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Esra's Med",
    href: "https://www.youtube.com/@EsrasMed",
  },
  {
    id: 10,
    srcImg:
      "https://yt3.googleusercontent.com/YgQOkJCPyO7KhJbBcbOjeRGH59ZolgUxLRmF1f5WqvRvXMvYwE39IZetwEDKXxdEpnjEp896ums=s176-c-k-c0x00ffffff-no-rj",
    channelName: "عبدالله العلاوي",
    href: "https://www.youtube.com/@Abdullah_yw",
  },
  {
    id: 11,
    srcImg:
      "https://yt3.googleusercontent.com/pwgWsLfM-aqH6wd1wvCiBF0wTkRAYzpaZ0pITW3FLsxstJ7AjWFXetl8jWoLYbOVdEu6hS8jUds=s176-c-k-c0x00ffffff-no-rj",
    channelName: "Elzero Tube",
    href: "https://www.youtube.com/@ElzeroTube",
  },
];

const ChannelsCards = () => {
  return (
    <>
      <SectionTitle id={"coding"} title="قنوات البرمجة" />
      <div className="wrapper path-wrap d-grid gap-20">
        {contentCode.map(function (e) {
          return (
            <ChannelCard
              key={e.id}
              srcImg={e.srcImg}
              channelName={e.channelName}
              href={e.href}
            />
          );
        })}
      </div>
      <SectionTitle id={"design"} title="قنوات التصميم" />
      <div className="wrapper path-wrap d-grid gap-20">
        {contentArt.map(function (e) {
          return (
            <ChannelCard
              key={e.id}
              srcImg={e.srcImg}
              channelName={e.channelName}
              href={e.href}
            />
          );
        })}
      </div>
      <SectionTitle id={"books"} title="قنوات الكتب" />
      <div className="wrapper path-wrap d-grid gap-20">
        {contentBooks.map(function (e) {
          return (
            <ChannelCard
              key={e.id}
              srcImg={e.srcImg}
              channelName={e.channelName}
              href={e.href}
            />
          );
        })}
      </div>
      <SectionTitle id={"improve"} title="قنوات الانتاجية" />
      <div className="wrapper path-wrap d-grid gap-20">
        {contentProd.map(function (e) {
          return (
            <ChannelCard
              key={e.id}
              srcImg={e.srcImg}
              channelName={e.channelName}
              href={e.href}
            />
          );
        })}
      </div>
    </>
  );
};

export default ChannelsCards;
