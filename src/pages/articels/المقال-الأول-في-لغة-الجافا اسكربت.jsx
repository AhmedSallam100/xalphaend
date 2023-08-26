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
                <h3 className="my-h3-2 my-h3">
                  المقال الاول في لغة الجافا سكريبت
                </h3>
              </div>
            </div>
            <pre className="my-pre">
              {" "}
              بسم الله الرحمن الرحيم نبدا كدا علي خير ان شاء الله من اولها
              لاخرها ان شاء الله وكل حاجة هتكون js مجموعة مقالات هتمسك مشروحة
              بالتفصيل الممل ان شاء الله ——————————————————————— JS نبدا باول
              حاجة خالص اي هيا ال JS =&gt; JavaScript لغة برمجة عالية المستوي
              استخدامها الأساسي بيكون في صفحات الويب عشان تخليها تفاعلية زي js
              ال JS انك تدوس علي زر يحصل حاجة معينه مثلا اما تعمل ريفرش للصفحة
              يحصل حاجة معينه دا كلو
              <img
                className="in-img"
                src="https://ahmedsallam100.github.io/xravoxdash/img/usesjs.png"
                alt=""
              />
              وبردو الجافا سكربت داخه في مجالات كتير وهسبلك صورة ب استخدماتها زي
              1- Mobile Apps 2- Game Development 3- Web Server 4- Desktop Apps
              <img
                className="in-img"
                src="https://ahmedsallam100.github.io/xravoxdash/img/jserror.png"
                alt=""
              />
              EScma Script وكل سنه بيتم تطويرها واضافة ميزات عن طريق حاجة اسمها
              Mozilla ودلوقتي بيتم تطويرها من قبل شركة وهنكلم عنها في بوست منفصل
              بالتفصيل الممل ان شاء الله ——————————————————————— دلوقتي بعد ما
              عرفت الجافا اسكربت تتعلمها ازاي؟ اول حاجة لازم مكان تكتب عليه
              الكود عندك خيارات كتير 1- Visual Studio Code دا تطبيق ممتاز كدا
              لكتابة الكود بيوفرلك مميزات كتير لا تعد ولا تصحي 2- CodePen محرر
              اكواد اونلاين ——————————————————————— طيب دلوقتي بعد ما عرفت تكتب
              الكود فين لما اكتب الكود النتيجة هتظهر فين طب دا اي Console هتظهر
              في حاجة اسمها ال دا موجود في اي متصفح بيتعرض فيه كود الجافا اسكربت
              وبيظهر فيه الايرور ودا شكله ——————————————————————— وكدا كفايه
              النهادرة بقا ونكمل المقال الجاي Console بعد كدا اول حاجة لازم
              تعرفها هيا ازاي اصلا تطبع كلمة في ال console.log(”الكلمة اللي انتا
              عايز تطبعها”) =&gt; console.log(”Hello, World!”);
              console.log(”Hello, Console!”); طب ازاي بقا تطبع الكمة في الصفحة
              نفسها زي كدا document.write("Iam In Page No Console")
              <img
                src="https://ahmedsallam100.github.io/xravoxdash/img/printjs.png"
                alt=""
                className="in-img"
              />
              بس كدا يكون المقال خلص اتمني يكون عجبكم واستنوا المقال القادم
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
