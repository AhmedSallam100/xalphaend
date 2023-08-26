/* eslint-disable jsx-a11y/anchor-is-valid */
import Aside from "../components/Sidebar";
import Header from "../components/Header";
import ArticelsCards from "../components/ArticelCards";
import Footer from "../components/Footer";
import ScrollUp from "../components/ScrollUp";
import MainTitle from "../components/MainTitle";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useGetarticlesByNameQuery } from "../Redux/articles";

const Articles = () => {
  const { data, error, isLoading } = useGetarticlesByNameQuery("?populate=*");

  if (data) {
    return (
      <>
        <div className="page d-flex">
          <Aside />
          <div className="content w-full">
            <Header />
            <MainTitle title="المقالات" />
            <div
              style={{
                paddingBottom: "60px",
              }}
            >
              {/* <ArticelsCards /> */}
              <div className="wrapper d-grid gap-20">
                {data?.data.map((item) => {
                  return (
                    <div className="wb-1 bg-white rad-6 p-10">
                      <div className="box-img-article">
                        <img
                          src={`${process.env.REACT_APP_BASE_URL}${item.attributes.imgSrc.data.attributes.url}`} // ===============
                          className="wb-1-img wb-3 wb-4 wb-5 wb-7 wb-8 wb-12"
                          alt="articel"
                        />
                      </div>
                      <div>
                        <div className="inf">
                          <a
                            href={item.attributes.articelSrc}
                            className="my-h3 c-pointer"
                          >
                            {item.attributes.articelTitle}
                          </a>
                        </div>
                        <p
                          className="tx-art"
                          style={{
                            direction: "rtl",
                          }}
                        >
                          {item.attributes.articelDescripton}
                        </p>
                      </div>
                      <div className="tx-inf">
                        <div className="stlll">
                          <img
                            className="tx-img"
                            src={`http://localhost:1337${item.attributes.writerImg.data.attributes.url}`} // ===============
                            alt=""
                          />
                          <a
                            href={item.attributes.writerProfile}
                            className="mspn"
                          >
                            {item.attributes.writerName}
                          </a>
                        </div>
                        <span className="mspn">
                          {item.attributes.articelViews}
                          <i className="uil uil-eye"></i>
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <ScrollUp />
            <Footer />
          </div>
        </div>
      </>
    );
  }
};

export default Articles;
