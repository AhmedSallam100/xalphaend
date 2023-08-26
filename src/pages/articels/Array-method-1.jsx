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
                <h3 className="my-h3-2 my-h3">Array Method-1</h3>
              </div>
            </div>
            <pre class="my-pre">
              {" "}
              اهلا يا صديقي. هنتكلم النهارده عن ال Array Methodes ولو متعرفش ايه
              هي الArray وازاي بنعملها فا أنت لازم تشوف البوست الي فات الأول
              هتلاقي الينك في أول كومنت💙 متنساش تعمل لايك وتتابعني لو أستفدت💙
              نيجي بقا لل Methodes بتاعتنا 1-push ودي بتستخدم عشان تضيف عنصر
              جديد في الArray بس بتضيفه فالأخر مثال: ;const words = ["hello",
              "hi", "Like"] عندنا ال Array الي فوق دي عاوز اضيف عنصر اسمه Emy
              مثلا فالأخر من غير متدخل يدويا يبقى هعمل كده
              ;console.log(words.push("Emy")) كده اتضاف العنصر في اخر ال Array
              من غير متعدل عليها يدويا بالشكل ده. ;const words = ["hello", "hi",
              "Like", "Emy"] =========================================== 2-pop
              بتستخدم عشان تحذف اخر عنصر فالArray.
              =========================================== 3-unshift بتستخدم عشان
              تضيف عنصر في اول الArray
              =========================================== 4-shift بتستخدم عشان
              تحذف اول عنصر فالArray ===========================================
              كفايه لحد هنا عشان انت خلقك ضيق انا عارف😂 ولو عندك أسئله كلمني
              متنساش تعمل لايك عشان البوست يوصل لغيرك💙 البوست الجديد بكره بإذن
              الله.
              <a
                href="https://web.facebook.com/hashtag/%D8%AA%D8%B9%D9%84%D9%85_%D9%85%D9%86_%D8%A7%D8%AC%D9%84%D9%83"
                class="m-a"
              >
                #تعلم_من_اجلك
              </a>
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
