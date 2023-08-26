/* eslint-disable jsx-a11y/anchor-is-valid */
import Aside from "../components/Sidebar";
import Header from "../components/Header";
import BookCards from "../components/BookCards";
import Footer from "../components/Footer";
import ScrollUp from "../components/ScrollUp";
import MainTitle from "../components/MainTitle";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Web = () => {
  return (
    <>
      <div className="page d-flex">
        <Aside />
        <div className="content w-full">
          <Header />
          <MainTitle title="الكتب" />
          <div
            style={{
              paddingBottom: "60px",
            }}
          >
            <BookCards />
          </div>
          <ScrollUp />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Web;
