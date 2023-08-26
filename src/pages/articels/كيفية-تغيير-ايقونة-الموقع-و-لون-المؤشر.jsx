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
                <h3 className="my-h3-2 my-h3">كيفية تغيير ايقونة الموقع</h3>
              </div>
            </div>
            <pre class="my-pre">
              {" "}
              السلام عليكم ورحمة الله وبركاته /رد السلام ثلاثون حسنه. .. عاوز
              تغير الايقونه بتاعت الموقع بتاعك ومش عارف ازاي كل ما عليك انك
              هتضيف السطر{`<!--"..."=link rel="icon"herf=-->`}
              جوا التاك <span class="mspn">Head</span> بس كدا
              <a
                href="https://web.facebook.com/hashtag/%D9%85%D8%B9%D9%84%D9%88%D9%85%D9%87_%D8%A8%D8%B1%D9%85%D8%AC%D9%8A%D9%87"
                rel="noreferrer"
                target="_blank"
                class="m-a"
                style={{
                  display: "block",
                }}
              >
                #معلومه_برمجيه
              </a>
              <img
                src="https://ahmedsallam100.github.io/xravoxdash/img/btgp.jpg"
                alt="img"
                style={{
                  width: "350px",
                  borderRadius: "12px",
                }}
              />
            </pre>
            <div className="wb-1 m-wb bg-white p-10 m-10">
              <div className="inf inf-2">
                <h3 className="my-h3-2 my-h3">كيفية تغيير لون المؤشر</h3>
              </div>
            </div>
            <pre class="my-pre">
              {" "}
              عاوز تغير لون المؤشر في الادخال ومش عارف ازاي كل ما عليك انك
              هتستخدم <span class="mspn">caret_color</span> وبعدها اللون المناسب
              او اللون اللي يعجبك 💜
              <a
                href="https://web.facebook.com/hashtag/%D9%85%D8%B9%D9%84%D9%88%D9%85%D9%87_%D8%A8%D8%B1%D9%85%D8%AC%D9%8A%D9%87"
                rel="noreferrer"
                target="_blank"
                class="m-a"
                style={{
                  display: "block",
                }}
              >
                #معلومه_برمجيه
              </a>
              <img
                src="https://ahmedsallam100.github.io/xravoxdash/img/btgp-2.jpg"
                alt="img"
                style={{
                  width: "350px",
                  borderRadius: "12px",
                }}
              />
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
