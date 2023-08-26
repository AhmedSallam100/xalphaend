import Aside from "../../components/Sidebar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollUp from "../../components/ScrollUp";
import MainTitle from "../../components/MainTitle";
import Button from "../../components/Button";
import PathCards from "../../components/PathCards";
import { useEffect } from "react";
import PhpDeveloperCards from "../../components/PhpDeveloperCards";

const Phpdeveloper = () => {
  useEffect(() => {
    const originalWarn = console.warn.bind(console);
    console.warn = function () {};
  });
  return (
    <div className="page d-flex">
      <Aside />
      <div className="content w-full">
        <Header />
        <MainTitle title="المسارات التعليمية" />
        <div
          className="wrapper path-wrap d-grid gap-20"
          style={{
            paddingBottom: "60px",
          }}
        >
          <PhpDeveloperCards />
        </div>
        <ScrollUp />
        <Footer />
      </div>
    </div>
  );
};

export default Phpdeveloper;
