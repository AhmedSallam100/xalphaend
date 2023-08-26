/* eslint-disable jsx-a11y/anchor-is-valid */
import Aside from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollUp from "../components/ScrollUp";
import MainTitle from "../components/MainTitle";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import PodcastCards from "../components/PodcastsCards";

const Articles = () => {
  return (
    <>
      <div className="page d-flex">
        <Aside />
        <div className="content w-full">
          <Header />
          <MainTitle title="البودكاست" />
          <div
            style={{
              paddingBottom: "60px",
            }}
          >
            <PodcastCards />
          </div>
          <ScrollUp />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Articles;
