/* eslint-disable jsx-a11y/anchor-is-valid */
import Aside from "../components/Sidebar";
import Header from "../components/Header";
import WebCards from "../components/WebCards";
import Footer from "../components/Footer";
import ScrollUp from "../components/ScrollUp";
import MainTitle from "../components/MainTitle";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";
import { useGetaiWebByNameQuery } from "../Redux/aiWeb";
import { useGetdesignWebByNameQuery } from "../Redux/designWeb";
import { useGetcodersWebByNameQuery } from "../Redux/codersWeb";
import { useGetfontsWebByNameQuery } from "../Redux/fontsWeb";
import { useGetcolorsWebByNameQuery } from "../Redux/colorsWeb";
import { useGetvisualWebByNameQuery } from "../Redux/visualWeb";
// require("dotenv").config();

const Web = () => {
  console.log(process.env);
  const BASE_URL = process.env.BASE_URL;
  const aiWebQuery = "?populate=*";
  const designWebQuery = "?populate=*";
  const codersWebQuery = "?populate=*";
  const fontsWebQuery = "?populate=*";
  const colorsWebQuery = "?populate=*";
  const visualWebQuery = "?populate=*";

  const {
    data: aiWebData,
    error: aiWebError,
    isLoading: aiWebIsLoading,
  } = useGetaiWebByNameQuery(aiWebQuery);
  const {
    data: designWebData,
    error: designWebError,
    isLoading: designWebIsLoading,
  } = useGetdesignWebByNameQuery(designWebQuery);
  const {
    data: codersWebData,
    error: codersWebError,
    isLoading: codersWebIsLoading,
  } = useGetcodersWebByNameQuery(codersWebQuery);
  const {
    data: fontsWebData,
    error: fontsWebError,
    isLoading: fontsWebIsLoading,
  } = useGetfontsWebByNameQuery(fontsWebQuery);
  const {
    data: colorsWebData,
    error: colorsWebError,
    isLoading: colorsWebIsLoading,
  } = useGetcolorsWebByNameQuery(colorsWebQuery);
  const {
    data: visualWebData,
    error: visualWebError,
    isLoading: visualWebIsLoading,
  } = useGetvisualWebByNameQuery(visualWebQuery);

  if (aiWebData) {
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
              <SectionTitle id={"ai"} title="مواقع الذكاء الاصطناعي" />
              <div className="wrapper d-grid gap-20">
                {aiWebData?.data.map((item) => {
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
              <SectionTitle id={"design"} title="مواقع للمصممين" />
              <div className="wrapper d-grid gap-20">
                {designWebData?.data.map((item) => {
                  return (
                    <div className="wb-1 p-relative bg-white p-10 rad-10 ">
                      <img
                        src={`${process.env.REACT_APP_BASE_URL}${item.attributes.imgSrc.data.attributes.url}`}
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
              <SectionTitle id={"coders"} title="مواقع للمبرمجين" />
              <div className="wrapper d-grid gap-20">
                {codersWebData?.data.map((item) => {
                  return (
                    <div className="wb-1 p-relative bg-white p-10 rad-10 ">
                      <img
                        src={`${process.env.REACT_APP_BASE_URL}${item.attributes.imgSrc.data.attributes.url}`}
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
              <SectionTitle id={"fonts"} title="مواقع تحميل الخطوط" />
              <div className="wrapper d-grid gap-20">
                {fontsWebData?.data.map((item) => {
                  return (
                    <div className="wb-1 p-relative bg-white p-10 rad-10 ">
                      <img
                        src={`${process.env.REACT_APP_BASE_URL}${item.attributes.imgSrc.data.attributes.url}`}
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
              <SectionTitle id={"colors"} title="مواقع الالوان" />
              <div className="wrapper d-grid gap-20">
                {colorsWebData?.data.map((item) => {
                  return (
                    <div className="wb-1 p-relative bg-white p-10 rad-10 ">
                      <img
                        src={`${process.env.REACT_APP_BASE_URL}${item.attributes.imgSrc.data.attributes.url}`}
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
              <SectionTitle id={"visual"} title="مواقع التغذية البصرية" />
              <div className="wrapper d-grid gap-20">
                {visualWebData?.data.map((item) => {
                  return (
                    <div className="wb-1 p-relative bg-white p-10 rad-10 ">
                      <img
                        src={`${process.env.REACT_APP_BASE_URL}${item.attributes.imgSrc.data.attributes.url}`}
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
              {/* <WebCards /> */}
            </div>
            <ScrollUp />
            <Footer />
          </div>
        </div>
      </>
    );
  }
};

export default Web;
