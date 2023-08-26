import WebCard from "./WebCard";

let contentExtension = [
  {
    id: 1,
    imgSrc:
      "https://lh3.googleusercontent.com/Ha_EGIePt_To3ErkPwaLigbdQbiTaJpWneU7Z3iNFspWfRoEEPH4tp61DC_nyXqrAaDfpdXdVg0lfKq_0d9PnnqiDpw=w128-h128-e365-rj-sc0x00ffffff",
    text1: "هذه الاضافة رائعة فكرتها بكل بساطة تخبرك ب اللغات والتقنيات",
    bold: "المستخدمة لعمل الموقع الذي تتواجد فيه",
    text2: "",
    text3: "ستحتاجها باذن الله",
    href: "https://chrome.google.com/webstore/detail/wappalyzer-technology-pro/gppongmhjkpfnbhagpmjfkannfbllamg",
  },
  {
    id: 2,
    imgSrc:
      "https://lh3.googleusercontent.com/5U3_lXs59F4J3hhQYM3nxdHJzos4L4b-5mvPzpCxqPpMME7K_GEzidHhZER2ogQnKk1UDoYJtKOndAjMWoJ3hPqgXzE=w128-h128-e365-rj-sc0x00ffffff",
    text1: "هذه الاضافة عبارة عن ساعة دولية يمكنك من خلالها",
    bold: "معرفة الساعة الحالية في اي دولة",
    text2: "",
    text3: "ستحتاجها باذن الله",
    href: "https://chrome.google.com/webstore/detail/foxclocks/obcbigljfpgappaaofailjjoabiikckk",
  },
  {
    id: 3,
    imgSrc:
      "https://lh3.googleusercontent.com/dxnnhpmh0AsWudCrYLj6ItcxU6tb63SFxjgbeckmKn9v8RNshBIx_0Uc0JxTuSJv-PNSss7WpUAt0pQfLDdyNxf3oQ=w128-h128-e365-rj-sc0x00ffffff",
    text1: "هذه الاضافة ستساعدك اذا كنت تبحث عن كود او خطا في",
    bold: "الكود ستظهر لك في محرك البحث اكواد وحلول عديدة",
    text2: "",
    text3: "ستحتاجها باذن الله",
    href: "https://chrome.google.com/webstore/detail/grepper/amaaokahonnfjjemodnpmeenfpnnbkco",
  },
  {
    id: 4,
    imgSrc:
      "https://lh3.googleusercontent.com/ciKJaBj0mX0Gjw4Ju1yF2ab2j22Su_NRpL4V5myVxeV8FMYtFCz5fUC6C_HX8tuyiLAvnnNsvzrAJN36VyZ5zfPy2g=w128-h128-e365-rj-sc0x00ffffff",
    text1: "هذه الاضافة ستساعدك اذا كنت تريد توليد كلمات عشوائية",
    bold: "لكي تستخدمها في موقعك مثل (Lorem)",
    text2: "",
    text3: "ستحتاجها باذن الله",
    href: "https://chrome.google.com/webstore/detail/lorem-ipsum-generator-usi/ogkidppcbldhebgplkdmepodkbfanndi",
  },
  {
    id: 5,
    imgSrc:
      "https://lh3.googleusercontent.com/ZzWGiT5YRGYjeltQ5vkZmsLAQ7Qj4eQnltDmE34KyUnGKNofHRqPF_cy19i2rc58sajKbamz-9rX2BZ2zXgPUm0e2g=w128-h128-e365-rj-sc0x00ffffff",
    text1: "هذه الاضافة تقدم لك مجموعة من المميزات مثل ابطال كود ال",
    bold: "CSS JS Cookies Imgs وأشياء اخري",
    text2: "",
    text3: "ستحتاجها باذن الله",
    href: "https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm/related",
  },
  {
    id: 6,
    imgSrc:
      "https://lh3.googleusercontent.com/d2gR2YR3wbsWuT6N3EB5xxQJToS0P8QkCnSJ81X4SLlg7R8bGL6PB-s-o28mL3uwUolMvWLbsSemivQPzZXvADNLZhM=w128-h128-e365-rj-sc0x00ffffff",
    text1: "هذه الاضافة تقوم بفحص الموقع الخاص بك مثل",
    bold: "Responsive Seo Accessibilty وأشياء اخري",
    text2: "",
    text3: "ستحتاجها باذن الله",
    href: "https://chrome.google.com/webstore/detail/web-developer-checklist/iahamcpedabephpcgkeikbclmaljebjp/related",
  },
  {
    id: 7,
    imgSrc:
      "https://lh3.googleusercontent.com/BTVak6xDw2jqwKlTa7HMNRI89FyVYqrIW7iNAgvUhbcL4SqXWQJsoF-FOclRmmlKBosfZojhGmSZVDNSg1CrZdqN5bw=w128-h128-e365-rj-sc0x00ffffff",
    text1: "اضافة اكثر من رائعة حيث تعتبر بمثابة",
    bold: "محرر اكواد مجاني وسريع ايضا",
    text2: "",
    text3: "ستحتاجها باذن الله",
    href: "https://chrome.google.com/webstore/detail/web-maker/lkfkkhfhhdkiemehlpkgjeojomhpccnh/related",
  },
  {
    id: 8,
    imgSrc:
      "https://lh3.googleusercontent.com/TnYy9kaL1ZwLjFEBGv-fZAK8yqCsdDXo7kSpfFhhu_mVxzjIqOPiYJZTRxYDEFI8zo4P_w0RPV805RzxynUlvttE6g=w128-h128-e365-rj-sc0x00ffffff",
    text1: "هذه الاضافة تقوم بتحديد مقاس اي صورة",
    bold: "في اي موقع تريده عن طريق تحديد الصورة المطلوبة",
    text2: "",
    text3: "ستحتاجها باذن الله",
    href: "https://chrome.google.com/webstore/detail/page-ruler/jcbmcnpepaddcedmjdcmhbekjhbfnlff",
  },
  {
    id: 9,
    imgSrc:
      "https://lh3.googleusercontent.com/fZymwAu-W0PUkSoMJAG3PCNWy8b-y-sFGPRJWa39LJQ3sheKoCF-eUFKztHG-lqbIafCPX8RW0bPq3b6vW2_17vyOw=w128-h128-e365-rj-sc0x00ffffff",
    text1: "هذه الاضافة تقوم باظهار لك التريندات التي تقوم بتحديدها",
    bold: "عن طريق مشاريع ال جت هب",
    text2: "",
    text3: "ستحتاجها باذن الله",
    href: "https://chrome.google.com/webstore/detail/githunt/khpcnaokfebphakjgdgpinmglconplhp",
  },
  {
    id: 10,
    imgSrc:
      "https://lh3.googleusercontent.com/N6Af1HwxgGiTF6gcV23NjWg-w1fsGHD7jfAR2rqftSVvl5ZN08QDkETSXzHKQB88R97AZN1tPtu1B2CLis7mynSAng=w128-h128-e365-rj-sc0x00ffffff",
    text1: "هذه الاضافة تمكنك من عرض موقعك علي اكثر من شاشة",
    bold: "للتاكد من ان الموقع متجاوب مع جميع الشاشات",
    text2: "",
    text3: "ستحتاجها باذن الله",
    href: "https://chrome.google.com/webstore/detail/responsive-viewer/inmopeiepgfljkpkidclfgbgbmfcennb",
  },
  {
    id: 11,
    imgSrc:
      "https://formulahendry.gallerycdn.vsassets.io/extensions/formulahendry/auto-close-tag/0.5.14/1644313109985/Microsoft.VisualStudio.Services.Icons.Default",
    text1: "هذه الاضافة اكثر من رائعة تقوم بغلق التاج التي تكتبه",
    bold: "تلقائيا دون اي تدخل منك",
    text2: "",
    text3: "خاصة ب (Visual Studio Code)",
    href: "https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag",
  },
  {
    id: 12,
    imgSrc:
      "https://midnightsyntax.gallerycdn.vsassets.io/extensions/midnightsyntax/vscode-wrap-console-log/1.7.2/1550608627422/Microsoft.VisualStudio.Services.Icons.Default",
    text1: "هذه الاضافة اكثر من رائعة تقوم بعرض النتائج التي تظهر",
    bold: "في الكونسل داخل برنامج ال VS Code نفسه",
    text2: "",
    text3: "خاصة ب (Visual Studio Code)",
    href: "https://marketplace.visualstudio.com/items?itemName=midnightsyntax.vscode-wrap-console-log",
  },
  {
    id: 13,
    imgSrc:
      "https://adpyke.gallerycdn.vsassets.io/extensions/adpyke/codesnap/1.3.4/1625238962906/Microsoft.VisualStudio.Services.Icons.Default",
    text1: "هذه الاضافة اكثر من رائعة تقوم بعرض الكود الخاص بك",
    bold: "علي هيئة صورة بشكل منسق وجذاب لمشاركته مع الاخرين",
    text2: "",
    text3: "خاصة ب (Visual Studio Code)",
    href: "https://marketplace.visualstudio.com/items?itemName=adpyke.codesnap",
  },
];

const WebCards = () => {
  return (
    <>
      <div className="wrapper d-grid gap-20">
        {contentExtension.map(function (e) {
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
