/* eslint-disable jsx-a11y/anchor-is-valid */
import Aside from "../components/Sidebar";
import Header from "../components/Header";
import WebCards from "../components/WebCards";
import Footer from "../components/Footer";
import ScrollUp from "../components/ScrollUp";
import MainTitle from "../components/MainTitle";

const Web = () => {
  return (
    <>
      <div className="page d-flex">
        <Aside />
        <div className="content w-full">
          <Header />
          <MainTitle title="المواقع" />
          <div
            style={{
              paddingBottom: "60px",
            }}
          >
            <WebCards />
          </div>
          <ScrollUp />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Web;
