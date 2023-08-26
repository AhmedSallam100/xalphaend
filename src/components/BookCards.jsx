import SectionTitle from "./SectionTitle";
import BookCard from "./BookCard";
import bookHtmlCss from "../assets/Books/the-complete-reference-html-css-fifth-edition.pdf";
import bookCss from "../assets/Books/CSS Pocket Reference Visual Presentation for the Web.pdf";
import bookEloquentJS from "../assets/Books/eloquent_javascript.pdf";
import bookMasterJS from "../assets/Books/Mastering JavaScript Functional Programming (2020)-40149.pdf";
import bookCodeComplete from "../assets/Books/code-complete-2nd-edition-v413hav.pdf";
import bookCleanCode from "../assets/Books/clean code.pdf";
import bookReact from "../assets/Books/Learning React.pdf";
import bookPHPSql from "../assets/Books/Learning PHP, MySQL & JavaScript_ with jQuery, CSS & HTML5 (4th ed.) [Nixon 2014-12-14].pdf";
import bookPython from "../assets/Books/head_first_python.pdf";

let bookUrl = "https://ahmedsallam100.github.io/xravoxdash/img/";

let contentBooks = [
  {
    id: 1,
    imgSrc: `${bookUrl}html-b.jpg`,
    text1: "من الكتب الجميلة لتعلم لغة HTML & CSS وتوجد به صور لجعل",
    bold: "",
    text2: "التعلم ممتع ومن عيوبه انه قديم لا يحتوي علي التصميم المتجاوب",
    href: bookHtmlCss,
    download: "the-complete-reference-html-css-fifth-edition",
    objectFit: "contain",
  },
  {
    id: 2,
    imgSrc: `${bookUrl}css-b.jpg`,
    text1: "هذا الكتاب اكثر من رائع لمن يريد تعلم ال CSS",
    bold: "يحتوي علي الكثير من المعلومات والصور التي ستساعدك",
    text2: "",
    href: bookCss,
    download: "CSS Pocket Reference Visual Presentation for the Web",
    objectFit: "contain",
  },
  {
    id: 3,
    imgSrc: `${bookUrl}js-b.jpg`,
    text1: "من الكتب الجميلة لتعلم لغة JS وتوجد به صور لجعل",
    bold: "العملية ممتعة قم بقرائته لتغوص في عالم ال JS",
    text2: "",
    href: bookEloquentJS,
    download: "eloquent_javascript",
    objectFit: "contain",
  },
  {
    id: 4,
    imgSrc: `${bookUrl}js-b-2.jpg`,
    text1: "كتاب عظيم في ال JS ولكن اذا كنت مبتدا في اللغة",
    bold: "لا تقلق الكتاب جديد ويحتوي علي معايير ال ES6",
    text2: "",
    href: bookMasterJS,
    download: "Mastering JavaScript Functional Programming (2020)-40149",
    objectFit: "contain",
  },
  {
    id: 5,
    imgSrc: `${bookUrl}cc-b.jpg`,
    text1: "كتاب جميل اذا كنت تريد معرفة بنية الكود من أول تسمية المتغيرات",
    bold: "الي العمل في فريق وادارته",
    text2: "",
    href: bookCodeComplete,
    download: "code-complete-2nd-edition-v413hav",
    objectFit: "contain",
  },
  {
    id: 6,
    imgSrc: `${bookUrl}clean-code.jpg`,
    text1: "من أعظم الكتاب والذي لا يوجد عليه خلاف اذا كنت تريد معرفة كيفية",
    bold: "كتابة كود نظيف ومرتب وليس سئ",
    text2: "",
    href: bookCleanCode,
    download: "clean code",
    objectFit: "contain",
  },
  {
    id: 7,
    imgSrc: `${bookUrl}Learning%20React.jpeg`,
    text1: "هذا الكتاب اكثر من رائع لمن يريد تعلم ال React",
    bold: "يحتوي علي الكثير من المعلومات والصور التي ستساعدك",
    text2: "",
    href: bookReact,
    download: "Learning React",
    objectFit: "contain",
  },
  {
    id: 8,
    imgSrc: `${bookUrl}php-b.jpg`,
    text1: "هذا الكتاب اكثر من رائع لمن يريد تعلم ال PHP, MySql",
    bold: "",
    text2: "يحتوي علي الكثير من المعلومات والصور التي ستساعدك",
    href: bookPHPSql,
    download:
      "Learning PHP, MySQL & JavaScript_ with jQuery, CSS & HTML5 (4th ed)",
    objectFit: "contain",
  },
  {
    id: 9,
    imgSrc: `https://www.interviewbit.com/blog/wp-content/uploads/2022/01/Head-First-Python.jpg`,
    text1: "هذا الكتاب اكثر من رائع لمن يريد تعلم ال Python",
    bold: "",
    text2: "يحتوي علي الكثير من المعلومات والصور التي ستساعدك",
    href: bookPython,
    download: "head_first_python",
    objectFit: "contain",
  },
];
let contentSummary = [
  {
    id: 1,
    imgSrc:
      "https://photos.smugmug.com/photos/i-rp5rw9J/0/90540b1c/S/i-rp5rw9J-S.png",
    text1: "ملخص اكثر من رائع والافضل للغة ال HTML",
    bold: "",
    text2: (
      <a
        style={{
          color: "gold",
        }}
        href="https://web.facebook.com/DevAmr74"
        target="_blank"
        rel="noreferrer"
      >
        خاص بالبشمهندس عمرو
      </a>
    ),
    text3: "ستحتاجه باذن الله",
    href: "https://drive.google.com/file/d/1jZHtkrATnK2pfneIEGDVjuTBpsEbhx43/view?usp=sharing",
    download: false,
    objectFit: "contain",
  },
  {
    id: 2,
    imgSrc:
      "https://photos.smugmug.com/photos/i-3JtzB2J/0/578a7bca/S/i-3JtzB2J-S.png",
    text1: "ملخص اكثر من رائع والافضل للغة ال CSS",
    bold: "",
    text2: (
      <a
        style={{
          color: "gold",
        }}
        href="https://web.facebook.com/DevAmr74"
        target="_blank"
        rel="noreferrer"
      >
        خاص بالبشمهندس عمرو
      </a>
    ),
    text3: "ستحتاجه باذن الله",
    href: "https://drive.google.com/file/d/13SkGINBa0UlPJAUtMXnjiBzHpojYg1Oe/view?usp=drive_link",
    download: false,
    objectFit: "contain",
  },
  {
    id: 3,
    imgSrc:
      "https://photos.smugmug.com/photos/i-3JtzB2J/0/578a7bca/S/i-3JtzB2J-S.png",
    text1: "ملخص عن كيفية عمل لغة ال CSS خلف الكواليس",
    bold: "",
    text2: (
      <a
        style={{
          color: "gold",
        }}
        href="https://web.facebook.com/DevAmr74"
        target="_blank"
        rel="noreferrer"
      >
        خاص بالبشمهندس عمرو
      </a>
    ),
    text3: "ستحتاجه باذن الله",
    href: "https://drive.google.com/file/d/1KS4ntE5r9LAVmQ4GM1NsZmmL65Mh_2IJ/view?usp=drive_link",
    download: false,
    objectFit: "contain",
  },
  {
    id: 4,
    imgSrc:
      "https://photos.smugmug.com/photos/i-KSzNKfQ/0/0e3f5051/S/i-KSzNKfQ-S.png",
    text1: "ملخص اكثر من رائع والافضل للغة ال JS",
    bold: "الجزء الاول",
    text2: (
      <a
        style={{
          color: "gold",
        }}
        href="https://web.facebook.com/DevAmr74"
        target="_blank"
        rel="noreferrer"
      >
        خاص بالبشمهندس عمرو
      </a>
    ),
    text3: "ستحتاجه باذن الله",
    href: "https://drive.google.com/file/d/1ITbhM-SGH-7ZRbgV7fwxp3uTjVF5t6LE/view?usp=drive_link",
    download: false,
    objectFit: "contain",
  },
  {
    id: 5,
    imgSrc:
      "https://photos.smugmug.com/photos/i-KSzNKfQ/0/0e3f5051/S/i-KSzNKfQ-S.png",
    text1: "ملخص اكثر من رائع والافضل للغة ال JS",
    bold: "الجزء الثاني",
    text2: (
      <a
        style={{
          color: "gold",
        }}
        href="https://web.facebook.com/DevAmr74"
        target="_blank"
        rel="noreferrer"
      >
        خاص بالبشمهندس عمرو
      </a>
    ),
    text3: "ستحتاجه باذن الله",
    href: "https://drive.google.com/file/d/1w9V2fzIftHI2msGGk5KQSHXGTesr5Qd_/view?usp=drive_link",
    download: false,
    objectFit: "contain",
  },
  {
    id: 6,
    imgSrc:
      "https://photos.smugmug.com/photos/i-2fVjp2H/0/5ebc8061/S/i-2fVjp2H-S.png",
    text1: "ملخص اكثر من رائع والافضل للغة ال SASS",
    bold: "",
    text2: (
      <a
        style={{
          color: "gold",
        }}
        href="https://web.facebook.com/DevAmr74"
        target="_blank"
        rel="noreferrer"
      >
        خاص بالبشمهندس عمرو
      </a>
    ),
    text3: "ستحتاجه باذن الله",
    href: "https://drive.google.com/file/d/1zKqTpp3DcTbeevJOnm0d0hURtFJBzop1/view?usp=drive_link",
    download: false,
    objectFit: "contain",
  },
  {
    id: 7,
    imgSrc:
      "https://raw.githubusercontent.com/AhmedSallam100/alphaend-img/main/php-sum.png",
    text1: "ملخص اكثر من رائع والافضل للغة ال PHP",
    bold: "",
    text2: (
      <a
        style={{
          color: "gold",
        }}
        href="https://web.facebook.com/sayed.chelsea.7"
        target="_blank"
        rel="noreferrer"
      >
        خاص بالبشمهندس تشيلسي
      </a>
    ),
    text3: "ستحتاجه باذن الله",
    href: "https://drive.google.com/file/d/14rJ4eRGEOkEMbfGzk1sjX9rwo30iEEc1/view",
    download: false,
    objectFit: "contain",
  },
  {
    id: 8,
    imgSrc:
      "https://raw.githubusercontent.com/AhmedSallam100/alphaend-img/main/c%2B%2B-sum.png",
    text1: "ملخص رائع لكورس الزيرو الخاص ب ++c",
    bold: "",
    text2: (
      <a
        style={{
          color: "gold",
        }}
        href="https://web.facebook.com/fadyalamir77/?_rdc=1&_rdr"
        target="_blank"
        rel="noreferrer"
      >
        خاص بالبشمهندس فادي
      </a>
    ),
    text3: "ستحتاجه باذن الله",
    href: "https://www.docdroid.net/PNCPSOI/cpp-pdf",
    download: false,
    objectFit: "contain",
  },
];

const WebCards = () => {
  return (
    <>
      <SectionTitle id={"book"} title="الكتب" />
      <div className="wrapper d-grid gap-20">
        {contentBooks.map(function (e) {
          return (
            <BookCard
              key={e.id}
              imgSrc={e.imgSrc}
              text1={e.text1}
              bold={e.bold}
              text2={e.text2}
              href={e.href}
              download={e.download}
              objectFit={e.objectFit}
            />
          );
        })}
      </div>
      <SectionTitle id={"summary"} title="الملخصات" />
      <div className="wrapper d-grid gap-20">
        {contentSummary.map(function (e) {
          return (
            <BookCard
              key={e.id}
              imgSrc={e.imgSrc}
              text1={e.text1}
              bold={e.bold}
              text2={e.text2}
              text3={e.text3}
              href={e.href}
              download={e.download}
              objectFit={e.objectFit}
            />
          );
        })}
      </div>
    </>
  );
};

export default WebCards;
