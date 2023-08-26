/* eslint-disable jsx-a11y/anchor-is-valid */
import Aside from "../components/Sidebar";
import Header from "../components/Header";
import HomeCards from "../components/HomeCards";
import Footer from "../components/Footer";
import ScrollUp from "../components/ScrollUp";
import MainTitle from "../components/MainTitle";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  setTimeout(() => {
    let myPage = document.querySelector(".page"),
      myLoad = document.querySelector(".loader-1");
    myPage.classList.remove("fb-11");
    myLoad.style.opacity = "0";
    myLoad.style.display = "none";
  }, 500);
  return (
    <>
      <div className="container-7">
        <section>
          <div className="loader loader-1">
            <div className="loader-outter"></div>
            <div className="loader-inner"></div>
          </div>
        </section>
      </div>
      <div className="page fb-11 d-flex">
        <Aside />
        <div className="content w-full">
          <Header />
          <MainTitle title="الصفحة الرئيسية" />
          <div
            className="wrapper d-grid gap-20"
            style={{
              paddingBottom: "60px",
            }}
          >
            <HomeCards />
          </div>
          <ScrollUp />
          {/* <a
          href="https://api.whatsapp.com/send?phone=201024289101&text=Hi!%20I%20want%20to%20increase%20my%20sales!"
          className="whats"
          id="whats"
          target="_blank" rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:svgjs="http://svgjs.com/svgjs"
            version="1.1"
            width="512"
            height="512"
            x="0"
            y="0"
            viewBox="0 0 511.997 511.997"
            style="enable-background: new 0 0 512 512"
            xml:space="preserve"
            className=""
          >
            <defs>
              <linearGradient
                xmlns="http://www.w3.org/2000/svg"
                id="SVGID_1_"
                gradientUnits="userSpaceOnUse"
                x1="255.999"
                x2="255.999"
                y1="511.997"
                y2="0"
              >
                <stop offset="0" stop-color="#00b59c" />
                <stop offset="1" stop-color="#9cffac" />
              </linearGradient>
              <linearGradient
                xmlns="http://www.w3.org/2000/svg"
                id="SVGID_2_"
                gradientUnits="userSpaceOnUse"
                x1="260.134"
                x2="260.134"
                y1="406.001"
                y2="99.927"
              >
                <stop offset="0" stop-color="#c3ffe8" />
                <stop offset=".9973" stop-color="#f0fff4" />
              </linearGradient>
            </defs>
            <g>
              <linearGradient
                xmlns="http://www.w3.org/2000/svg"
                id="SVGID_1_"
                gradientUnits="userSpaceOnUse"
                x1="255.999"
                x2="255.999"
                y1="511.997"
                y2="0"
              >
                <stop offset="0" stop-color="#00b59c" />
                <stop offset="1" stop-color="#9cffac" />
              </linearGradient>
              <linearGradient
                xmlns="http://www.w3.org/2000/svg"
                id="SVGID_2_"
                gradientUnits="userSpaceOnUse"
                x1="260.134"
                x2="260.134"
                y1="406.001"
                y2="99.927"
              >
                <stop offset="0" stop-color="#c3ffe8" />
                <stop offset=".9973" stop-color="#f0fff4" />
              </linearGradient>
              <g xmlns="http://www.w3.org/2000/svg" id="Whatsapp_1_">
                <g>
                  <g>
                    <path
                      d="m255.499 0c-140.61 0-255 115.39-255 256 0 41.865 10.327 83.203 29.897 119.897l-20.625 108.282c-.923 4.878.615 9.902 4.131 13.418s8.54 5.024 13.418 4.131l108.281-20.625c36.694 19.57 78.032 30.895 119.897 30.895 140.61 0 256-115.387 256-255.997s-115.389-256.001-255.999-256.001z"
                      fill='url("#SVGID_1_")'
                      data-original="url(#SVGID_1_)"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="m413.176 328.642c-2.344-14.458-11.191-26.499-24.287-33.047l-47.637-23.818c-5.786-2.915-12.773-1.787-17.314 2.813l-17.93 17.944c-7.573.527-28.477-.718-56.309-28.55-27.847-27.832-29.18-48.809-28.55-56.309l17.944-17.93c4.57-4.556 5.698-11.543 2.813-17.314l-23.818-47.637c-6.548-13.081-18.574-21.943-33.018-24.287-14.546-2.285-28.697 2.241-39.053 12.598l-26.309 26.309c-8.716 8.716-13.403 20.376-13.213 32.871.498 28.784 11.484 87.261 79.556 155.347 61.758 61.758 122.593 75.498 153.384 78.193 13.188 1.159 26.411-3.426 35.991-13.022l25.151-25.137c10.358-10.357 14.943-24.581 12.599-39.024z"
                      fill='url("#SVGID_2_")'
                      data-original="url(#SVGID_2_)"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </a>  */}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
