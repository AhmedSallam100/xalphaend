/* eslint-disable jsx-a11y/anchor-is-valid */
import Aside from "../components/Sidebar";
import Header from "../components/Header";
import ExtensionCards from "../components/ExtensionCards";
import Footer from "../components/Footer";
import ScrollUp from "../components/ScrollUp";
import MainTitle from "../components/MainTitle";
import Button from "../components/Button";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useGetappByNameQuery } from "../Redux/apps";

const Web = () => {
  const appQuery = "?populate=*";
  const {
    data: appData,
    error: appError,
    isLoading: appIsLoading,
  } = useGetappByNameQuery(appQuery);
  return (
    <>
      <div className="page d-flex">
        <Aside />
        <div className="content w-full">
          <Header />
          <MainTitle title="التطبيقات" />
          <div
            style={{
              paddingBottom: "60px",
            }}
          >
            <div className="wrapper path-wrap d-grid gap-20">
              {appData?.data.map((item) => {
                return (
                  <div className="box">
                    <div className="img-box channel-box-img">
                      <img
                        className="path-img"
                        src={`${process.env.REACT_APP_BASE_URL}${item.attributes.imgSrc.data.attributes.url}`}
                        alt="app"
                      />
                    </div>
                    <h2 className="path-h2 fs-24">{item.attributes.appName}</h2>
                    <Button href={item.attributes.href} />
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
};

export default Web;
