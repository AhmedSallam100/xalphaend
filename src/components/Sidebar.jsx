/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import alphaLogo from "../assets/img/alpha-logo.png";

const Sidebar = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) window.open(location.hash, "_parent");
  }, [location.hash]);

  useEffect(() => {
    let ul = document.querySelectorAll("#ul > li");

    if (localStorage.getItem("show")) {
      let e = document.getElementById(`${localStorage.getItem("show")}`);
      if (e !== null) e.classList.add("show");
    }

    ul.forEach((ele) => {
      ele.onclick = function () {
        ul.forEach(
          (e) =>
            e.children[1] && e !== ele && e.children[1].classList.remove("show")
        );
        ele.children[1].classList.toggle("show");
        ele.children[1].classList.contains("show")
          ? localStorage.setItem("show", ele.children[1].id)
          : localStorage.setItem("show", "");
      };
    });
  }, []);
  return (
    <aside className={localStorage.getItem("openSidebar") && "aside-open"}>
      <div className="logo">
        <span className="menu-icon">
          <i
            className="uil uil-times close-aside"
            onClick={function () {
              document.querySelector("aside").classList.remove("aside-open");
              localStorage.removeItem("openSidebar");
            }}
          ></i>
        </span>
        <a href="/">
          <img src={alphaLogo} alt="Alfal End" />
        </a>
      </div>
      <ul className="side-menu" id="ul">
        <li className="nav-item active">
          <a href="/">
            <i className="uil uil-estate"></i>
            <span>الصفحة الرئيسية</span>
          </a>
        </li>
        <li className="nav-item">
          <button>
            <i className="uil uil-window"></i>
            <span> المواقع</span>
            <i className="uil uil-angle-right"></i>
          </button>
          <ul className="sub-menu" id="webSub">
            <li>
              <a href="/web#ai">مواقع الذكاء الاصطناعي</a>
            </li>
            <li>
              <a href="/web#design">مواقع للمصممين</a>
            </li>
            <li>
              <a href="/web#coders">مواقع للمبرمجين</a>
            </li>
            <li>
              <a href="/web#fonts">مواقع تحميل الخطوط</a>
            </li>
            <li>
              <a href="/web#colors">مواقع الالوان</a>
            </li>
            <li>
              <a href="/web#visual">مواقع تغذية بصرية</a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <button>
            <i className="uil uil-tachometer-fast"></i>
            <span> المسارات التعليمية</span>
            <i className="uil uil-angle-right"></i>
          </button>
          <ul className="sub-menu" id="pathSub">
            <li>
              <a href="/pathes/frontend">Front End Developer</a>
            </li>
            <li>
              <a href="/pathes/phpdeveloper">PHP Developer</a>
            </li>
            <li>
              <a href="/pathes/nodejsdeveloper">NodeJS Developer</a>
            </li>
            <li>
              <a href="/pathes/netdeveloper">.Net Developer</a>
            </li>
            <li>
              <a href="/pathes/flutterdeveloper">Flutter Developer</a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <button>
            <i className="uil uil-book-open"></i>
            <span>الكتب</span>
            <i className="uil uil-angle-right"></i>
          </button>
          <ul className="sub-menu" id="pathSub">
            <li>
              <a href="/books#book">الكتب</a>
            </li>
            <li>
              <a href="/books#summary">الملخصات</a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <button>
            <a href="/articles">
              <i className="uil uil-document-layout-right"></i>
              <span>المقالات</span>
            </a>
          </button>
        </li>
        <li className="nav-item">
          <button>
            <i className="uil uil-youtube"></i>
            <span> قنوات اليوتيوب</span>
            <i className="uil uil-angle-right"></i>
          </button>
          <ul className="sub-menu" id="channelSub">
            <li>
              <a href="/channels#coding">قنوات البرمجة</a>
            </li>
            <li>
              <a href="/channels#design">قنوات التصميم</a>
            </li>
            <li>
              <a href="/channels#books">قنوات الكتب</a>
            </li>
            <li>
              <a href="/channels#improve">قنوات الانتاجية</a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <button>
            <a href="/extension">
              <i className="uil uil-apps"></i>
              <span>الاضافات</span>
            </a>
          </button>
        </li>

        <li className="nav-item">
          <button>
            <i className="uil uil-microphone"></i>
            <span>البودكاست</span>
            <i className="uil uil-angle-right"></i>
          </button>
          <ul className="sub-menu" id="channelSub">
            <li>
              <a href="/podcasts#learn">بودكاست تعليمية</a>
            </li>
            <li>
              <a href="/podcasts#improve">بودكاست تنمية</a>
            </li>
            <li>
              <a href="/podcasts#islam">بودكاست دينية</a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <button>
            <a href="/apps">
              <i className="uil uil-apps"></i>
              <span>التطبيقات</span>
            </a>
          </button>
        </li>

        <li className="nav-item">
          <button style={{ color: "gold" }}>
            <a href="/learnprogramming">
              <i className="uil uil-brackets-curly"></i>
              <span>تعلم البرمجة</span>
            </a>
          </button>
        </li>
        <li className="nav-item">
          <button>
            <a href="/contact">
              <i className="uil uil-phone"></i>
              <span>تواصل معنا</span>
            </a>
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
