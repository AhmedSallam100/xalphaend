/* eslint-disable jsx-a11y/anchor-is-valid */
import Aside from "../../components/Sidebar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollUp from "../../components/ScrollUp";
import MainTitle from "../../components/MainTitle";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Articles = () => {
  return (
    <>
      <div className="page d-flex">
        <Aside />
        <div className="content w-full">
          <Header />
          <MainTitle title="المقالات" />
          <div
            className="container-8"
            style={{
              paddingBottom: "60px",
            }}
          >
            <div className="wb-1 m-wb bg-white p-10 m-10">
              <div className="inf inf-2">
                <h3 className="my-h3-2 my-h3">كيف تبدا في مجال البرمجة؟</h3>
              </div>
            </div>
            <pre className="my-pre">
              بسم الله الرحمن الرحيم ناس كتير نفسها تتعلم برمجة فعشان كدا انا
              قررت اكتب المقال دا نبدا بأول حاجة لازم تعملها انت لازم طبعا تتأسس
              عشان تدخل اي مجال فاهم الدنيا ماشية ازاي عندك طرق كتييير عشان
              تتأسس منها 1-كورس <span className="mspn">CS50</span> كورس كويس جدا
              مقدم من جامعة هارفرد العالمية وهيفهمك اساسيات الكمبيوتر والبرمجة
              وهياسسك كويس وفي ناس عرب كتير شرحوه اشهرهم{" "}
              <a
                className="m-a"
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/watch?v=pSc6RGEBLAQ&amp;list=PLknwEmKsW8OvsdJ64v5YljHNtt100kN6w"
              >
                عبدالرحمن جمال
              </a>
              2-ممكن تتأسس بلغة اسمها <span className="mspn">c++</span> لغة
              عملاقة مش شرط تتعلمها كلها انت تاخد منها الاساسيات عشان تئهلك لما
              تدخل علي لغة برمجة تانية 3-لغة{" "}
              <span className="mspn">Python</span> من أجمل الللغات واسهلها وممكن
              تبدا بيها كتاسيس وسهلة في سلوكيات كتابة الكود طيب بعد ما انت
              اتاسست تعمل اي لازم تحدد المجال اللي هتدخله النهاردة هنكلم عن أول
              مجال وهو 1-الويب دا بينقسم لقسمين
              <span className="mspn">Front-End =&gt;</span> دا اللي بيصمم
              الواجهة الأمامية للموقع وكل حاجة بيتفاعل معاها المستخدم وبيتعلم
              تقنيات زي
              <span className="mspn">
                HTML | CSS | JS | BOOTSTRAP | REACT | GIT&amp;GITHUB |
                UNIT-TESTING | PUGJS | GULPJS | SASS | COMMAND LINE{" "}
              </span>
              <span className="mspn">Back-End =&gt;</span> دا اللي بيعمل كل حاجة
              العميل مش بيشوفها بتعامل مع السيرفر والبيانات وقواعد البيانات
              وارسال البيانات وعمليات تسجيل الدخول والخروج وبيتعلم تقنيات زي
              <span className="mspn">PHP MYSQL LARVEL</span>
              أو من جديد وتدخل في دوامة <span className="mspn">PHP</span> لو انت
              بقا فرونت اند وحابب تدخل باك اند بدل ما تتعلم وكل حرف فيها بيشير
              لحاجة <span className="mspn">Mern Stack</span> انت ممكن تدخل حاجة
              اسمها
              <span className="mspn">M =&gt; Mongo Db</span> دي قاعدة بيانات
              <span className="mspn">E =&gt; Express</span> فريم وورك للنود جي
              اس
              <span className="mspn">R =&gt; React JS</span> فريم وورك للغة ال
              <span className="mspn">N =&gt; Node JS</span> دا اللي بيشغل كود
              الجافا سكربت علي مستوي السرفر بعد منتا اتاسست واخترت علي سبيل
              المثال مجال الويب تتعلم منين قناة البشمهندس اسامة الزيرو كنز بمعني
              الكلمة هتلاقي عليها <span className="mspn">PHP</span> لو انتا ماشي
              في تراك الفرونت والباك بلغة معظم اللغات والتقنيات اللي ذكرناها فوق
              وهتلاقي عليها تطبيقات عملية علي اللي اتعلمته ونصائح وقصص في الحياة
              عموما مش في مجال البرمجة بس
              <span className="mspn">Mern</span> طيب لو انت هتمشي باك اند بال
              اول حاجة قناة البشمهندس عنده حلوه جدا هتفيدك في النود وعندك قناة
              اتعلم في ساعة عليها كورسات ومشاريع كتييير وبكدا اكون خلصت النهاردة
              يارب اكون قدرت افيدكم واستنوا المقال الجاي اللي هنتكلم فيه عن مجال
              الموبايل
            </pre>
          </div>
          <ScrollUp />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Articles;
