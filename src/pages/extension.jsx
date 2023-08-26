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
import { useGetextensionByNameQuery } from "../Redux/extension";

const Web = () => {
  const extensionQuery = "?populate=*";
  const {
    data: extensionData,
    error: extensionError,
    isLoading: extensionIsLoading,
  } = useGetextensionByNameQuery(extensionQuery);
  return (
    <>
      <div className="page d-flex">
        <Aside />
        <div className="content w-full">
          <Header />
          <MainTitle title="الاضافات" />
          <div
            style={{
              paddingBottom: "60px",
            }}
          >
            <div className="wrapper d-grid gap-20">
              {extensionData?.data.map((item) => {
                return (
                  <div className="wb-1 p-relative bg-white p-10 rad-10 ">
                    <img
                      src={`${item.attributes.imgSrc.data.attributes.url}`}
                      className="blob-2 mt-5"
                      style={{ marginTop: "25px" }}
                      alt="HIo3Qee.md.png"
                      border="0"
                    />
                    <div className="text">
                      <p>{item.attributes.text1}</p>
                      <p>
                        <span className="mspn-f">{item.attributes.bold}</span>{" "}
                        {item.attributes.text2}
                      </p>
                      <p className="mt-0">{item.attributes.text3}</p>
                    </div>
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
