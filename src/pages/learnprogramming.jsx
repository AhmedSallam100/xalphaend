/* eslint-disable jsx-a11y/anchor-is-valid */
import Aside from "../components/Sidebar";
import Header from "../components/Header";
import ExtensionCards from "../components/ExtensionCards";
import Footer from "../components/Footer";
import ScrollUp from "../components/ScrollUp";
import MainTitle from "../components/MainTitle";
import Button from "../components/Button";
import searchLogo from "../assets/hostimg/search-logo.png";
import notes from "../assets/hostimg/notes.png";
import time from "../assets/hostimg/time.png";
import keyboard from "../assets/hostimg/keyboard.png";
import qa from "../assets/hostimg/qa.png";
import cPlusPlus from "../assets/hostimg/c++.png";
import road from "../assets/hostimg/road.png";
import group from "../assets/hostimg/group.png";
import happy from "../assets/hostimg/happy.png";
import { useEffect } from "react";

const LearnProgramming = () => {
  useEffect(() => {
    let pCardParent = document.querySelectorAll(".p-card-parent");
    let activeElement = null;

    pCardParent.forEach((element) => {
      element.addEventListener("click", () => {
        if (activeElement !== element) {
          removeShowMoreActive();
          element.querySelector(".p-card").classList.add("active");
          element.querySelector(".show-more").innerHTML = "عرض اقل";
          activeElement = element;
        } else {
          element.querySelector(".p-card").classList.remove("active");
          element.querySelector(".show-more").innerHTML = "عرض المزيد";
          activeElement = null;
        }
      });
    });

    let removeShowMoreActive = () => {
      pCardParent.forEach((element) => {
        element.querySelector(".p-card").classList.remove("active");
        element.querySelector(".show-more").innerHTML = "عرض المزيد";
      });
    };
  });
  return (
    <>
      <div className="page d-flex">
        <Aside />
        <div className="content w-full">
          <Header />
          <MainTitle title="تعلم البرمجة" />
          <div
            style={{
              paddingBottom: "60px",
            }}
          >
            <div
              className="wrapper d-grid gap-20"
              style={{
                direction: "rtl",
              }}
            >
              <div className="step">
                <img src={searchLogo} className="step-img" alt="searchLogo" />
                <div className="p-card-parent">
                  <p className="p-card">
                    🟣الخطوة الأولي وهي واحدة من أهم الخطوات وستكون صديقتك خلال
                    رحلتك التعليمية الطويلة ويجب ان تتقنها وتفهمها وهي البحث
                    وعلي الرغم من بساطة الجملة الا انها مهمة جدا وستتغير نظرتك
                    اليها بعد قراءة هذه المقالة
                    <a href="/articles/Always-Search">
                      دائما ابحث | Always Search
                    </a>
                  </p>
                  <span className="show-more">عرض المزيد</span>
                </div>
              </div>
              <div className="step">
                <img src={notes} className="step-img" alt="searchLogo" />
                <div className="p-card-parent">
                  <p className="p-card">
                    🟣الخطوة الثانية هي كيفية مذاكرة البرمجة بطريقة صحيحة
                    الطريقة : 🔸اول شئ هو سماع الكورس بسرعة وبدون تطبيق ولا عمل
                    اي شئ فقط تقوم بسماع المصطلحات 🔸 ثاني شئ بعد ما قمت بسماع
                    الكورس بسرعة سوف تقوم بمشاهدة الكورس مرة أخري وفي نفس الوقت
                    تقوم بالتطبيق بنفسك علي ما يفعله الشخص الذي يشرح 🔸 ثالث شئ
                    قم بقفل الفيديو وابدا بالتطبيق مع نفسك دون اي مساعدة واذا
                    احتجت مساعدة قم بالبحث كما ذكرنا في الخطوة الأولي واذا لم
                    تجد اي حل قم بمشاهدة الفيديو الخاص بهذا الجزء 🔸رابع شئ
                    اثناء مشاهدة الكورس ستجد أشياء كثيرة لن تفهمها او ستنساها
                    هنا ستقوم بتدوين الملاحظات لنفسك وهذه واحدة من أهم الطرق لكي
                    تقوم بتثبيت المعلومة 🔸وهذا برنامج جيد لتدوين الملاحظات
                    <a href="https://milanote.com/?referrer=rcDAm3xnRkgMsivRJe">
                      رابط الرنامج
                    </a>
                    🔸وهذا فيديو لشرح البرنامج
                    <a href="https://www.youtube.com/watch?v=It6FvvbNLcY">
                      رابط الفيديو
                    </a>
                    🔸وهذه الطريقة تعتبر من افضل الطرق حيث تقوم بتثبيت المعلومة
                    وتحقيق اقصي استفادة
                  </p>
                  <span className="show-more">عرض المزيد</span>
                </div>
              </div>
              <div className="step">
                <img src={time} className="step-img" alt="searchLogo" />
                <div className="p-card-parent">
                  <p className="p-card">
                    🟣الخطوة الثالثة هي تنظيم الوقت حتي تبدا بداية رائعة وموفقة
                    باذن الله لانك قد تكون ملزم ببعض الامور الخاصة بك لذلك يكون
                    الوقت محدد وليس مفتوح لذلك هذا ملف نوشن عن كيفية تنظيم الوقت
                    <a href="https://rsaco.notion.site/Time-Management-a4b0b85ec3d14744bab2fdfaf6f837f6">
                      رابط الملف
                    </a>
                  </p>
                  <span className="show-more">عرض المزيد</span>
                </div>
              </div>
              <div className="step">
                <img src={keyboard} className="step-img" alt="searchLogo" />
                <div className="p-card-parent">
                  <p className="p-card">
                    🟣الخطوة الرابعة وهي واحدة من اهم الخطوات وستسهل عليك وتوفر
                    الوقت وهي اختصارات الكيبورد وسوف تميزك عن غيرك وستجد الكثير
                    من مقدمي الكورسات علي يوتيوب وهذا فيديو يحتوي علي اهم
                    اختصارات الويندوز
                    <a href="https://www.youtube.com/watch?v=It9zNE6kNSM">
                      رابط الفيديو
                    </a>
                  </p>
                  <span className="show-more">عرض المزيد</span>
                </div>
              </div>
              <div className="step">
                <img src={qa} className="step-img" alt="searchLogo" />
                <div className="p-card-parent">
                  <p className="p-card">
                    🟣الخطوة الخامسة يجب ان تتعرف علي بعض الاشياء قبل ان تبدا في
                    عالم البرمجة وستكون اشياء نظرية مثل :
                    <ul>
                      <li>🔸ما هي الرمجة ولغة البرمجة والكود؟</li>
                      <li>🔸الفرق بين Text-Editor و IDE</li>
                      <li>🔸الإستضافة والسيرفرات</li>
                      <li>🔸الكمبيوتر المناسب لتعلم البرمجة</li>
                      <li>🔸ما معني المتغيرات؟</li>
                      <li>🔸ما معني Function?</li>
                      <li>🔸هل السن عائق في تعلم البرمجة ؟</li>
                      <li>🔸هل اللغة الانجليزية عائق في تعلم البرمجة ؟</li>
                    </ul>
                    <a href="https://www.youtube.com/playlist?list=PLDoPjvoNmBAx8xKvAXpb6f0Urj98Xo7zg">
                      اول سلسلة
                    </a>
                    <a href="https://www.youtube.com/playlist?list=PLDoPjvoNmBAyIlJLqTr_UyLzL3qVU60oP">
                      ثاني سلسلة
                    </a>
                  </p>
                  <span className="show-more">عرض المزيد</span>
                </div>
              </div>
              <div className="step">
                <img src={cPlusPlus} className="step-img" alt="searchLogo" />
                <div className="p-card-parent">
                  <p className="p-card">
                    🟣الخطوة السادسة ستقوم بتعلم لغة تسمي <bdi>C++</bdi> ولكن
                    لماذا هذه اللغة، لان لغة <bdi>C++</bdi> تعتبر واحدة من
                    اللغات التي تقدم للمبرمجين فهما عميقا للمفاهيم الاساسية في
                    البرمجة وبعد تعلمها ستجد سهولة في التنقل بين اللغات البرمجية
                    الاخري لما يوجد بها من مميزات عديدة وتمكنك من التحكم الدقيق
                    في الذاكرة وادارتها يدويا وهذا سيساعدك علي فهم كيفية عمل
                    البرامج علي مستوي منخفض وكيفية تجنب مشاكل تسريب الذاكرة
                    وغيرها من الاخطاء
                    <a href="https://www.youtube.com/watch?v=YZBSiTjXAjM">
                      ما ستدرسه بلغة <bdi>C++</bdi>
                    </a>
                    <a href="https://www.youtube.com/playlist?list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS">
                      رابط الكورس
                    </a>
                    <a href="https://www.youtube.com/watch?v=XDuWyYxksXU&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&pp=iAQB">
                      حل مسائل
                    </a>
                  </p>
                  <span className="show-more">عرض المزيد</span>
                </div>
              </div>
              <div className="step">
                <img src={road} className="step-img" alt="searchLogo" />
                <div className="p-card-parent">
                  <p className="p-card">
                    🟣 الخطوة السابعة بعد ان قطعت جزء من الرحلة الطويلة يجب عليك
                    الان الاختيار التخصص الذي تريد ان تستمر فيه وتتقنه لذلك قم
                    بالبحث عن مجالات البرمجة ومن هنا تستطيع ان تجد المسارات
                    الخاصة باغلب المجالات البرمجة
                    <a href="/pathes">المسارات التعليمية</a>
                  </p>
                  <span className="show-more">عرض المزيد</span>
                </div>
              </div>
              <div className="step">
                <img src={group} className="step-img" alt="searchLogo" />
                <div className="p-card-parent">
                  <p className="p-card">
                    🟣 بعد ان وصلت الي هذه المرحلة واصبحت مهتم حقا بالمجال قم
                    بالذهاب الي جروبات البرمجة علي مواقع التواصل الاجتماعي مثل
                    فيسبوك لكي تتشجع وتري كيف يعرض الاخرون اعمالهم وانت ايضا قم
                    بعمل ذلك لكي تطور مستواك وتتلقي الانتقادات لذلك قم بالبحث عن
                    كلمة برمجة في فيسبوك وقم بالانضمام الي المجموعات التي ستظهر
                    لك
                  </p>
                  <span className="show-more">عرض المزيد</span>
                </div>
              </div>
              <div className="step">
                <img src={happy} className="step-img" alt="searchLogo" />
                <div className="p-card-parent">
                  <p className="p-card">
                    🟣 وفي النهاية اول شئ يجب ان تعرفه في البرمجة او اي مجال هو
                    الاستمرارية والجهد وان شاء الله ربنا يكرمك وايضا انت لست
                    مطالب بفهم الكورس من اول مرة لان هناك بعض من الناس اذا
                    قابلتهم مشاكل او لم يفهموا الكورس من اول مرة يتركوا المجال
                    لذلك مع الوقت عند وصولك لمستوي جيد ومررت باشياء كثيرة ستجد
                    الامور سهلة وعند تعلم شئ جديد سيكون سهل عليك لذلك اهم شئ هو
                    الاستمرارية والجهد وايضا التطبيق العملي علي ما تعلمت حتي
                    تقوم بتثبيت المعلومة
                  </p>
                  <span className="show-more">عرض المزيد</span>
                </div>
              </div>
            </div>
          </div>
          <ScrollUp />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default LearnProgramming;
