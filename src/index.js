import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import Home from "./pages/home";
import Error from "./pages/error";
import Web from "./pages/web";
import Frontend from "./pages/pathes/frontend";
import PhpDeveloper from "./pages/pathes/phpdeveloper";
import NetDeveloper from "./pages/pathes/netdeveloper";
import NodeJSDeveloper from "./pages/pathes/nodejsdeveloper";
import FlutterDeveloper from "./pages/pathes/flutterdeveloper";
import Pathes from "./pages/pathes";
import Books from "./pages/books";
import { useEffect } from "react";
import Articles from "./pages/articles";
import HowToStartPG from "./pages/articels/كيف-تبدا-في-مجال-البرمجة";
import JS1 from "./pages/articels/المقال-الأول-في-لغة-الجافا اسكربت";
import ArrayMethod from "./pages/articels/Array-method-1";
import MusicStory from "./pages/articels/الاغاني-في-الاستوري";
import AlwaysSearch from "./pages/articels/Always-Search";
import ArrayMethod2 from "./pages/articels/Array-Method-2";
import CursourColor from "./pages/articels/كيفية-تغيير-ايقونة-الموقع-و-لون-المؤشر";
import CleanCode from "./pages/articels/ما-هو-الكلين-كود-ولماذا-هو-مهم";
import Design from "./pages/articels/ما-هو-الجرافيك-ديزاين";
import Extension from "./pages/extension";
import Channels from "./pages/channels";
import Podcasts from "./pages/podcasts";
import Apps from "./pages/apps";
import Contact from "./pages/contact";
import LearnProgramming from "./pages/learnprogramming";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/web",
    element: <Web />,
  },
  {
    path: "/pathes",
    element: <Pathes />,
  },
  {
    path: "/pathes/frontend",
    element: <Frontend />,
  },
  {
    path: "/pathes/phpdeveloper",
    element: <PhpDeveloper />,
  },
  {
    path: "/pathes/netdeveloper",
    element: <NetDeveloper />,
  },
  {
    path: "/pathes/flutterdeveloper",
    element: <FlutterDeveloper />,
  },
  {
    path: "/pathes/nodejsdeveloper",
    element: <NodeJSDeveloper />,
  },
  {
    path: "/books",
    element: <Books />,
  },
  {
    path: "/articles",
    element: <Articles />,
  },
  {
    path: "/articles/كيف-تبدا-في-مجال-البرمجة",
    element: <HowToStartPG />,
  },
  {
    path: "/articles/المقال-الأول-في-لغة-الجافا-اسكربت",
    element: <JS1 />,
  },
  {
    path: "/articles/الاغاني-في-الاستوري",
    element: <MusicStory />,
  },
  {
    path: "/articles/Always-Search",
    element: <AlwaysSearch />,
  },
  {
    path: "/articles/Array-methods-1",
    element: <ArrayMethod />,
  },
  {
    path: "/articles/Array-methods-2",
    element: <ArrayMethod2 />,
  },
  {
    path: "/articles/كيفية-تغيير-ايقونة-الموقع-و-لون-المؤشر",
    element: <CursourColor />,
  },
  {
    path: "/articles/ما-هو-الكلين-كود-ولماذا-هو-مهم",
    element: <CleanCode />,
  },
  {
    path: "/articles/ما-هو-الجرافيك-ديزاين",
    element: <Design />,
  },
  {
    path: "/extension",
    element: <Extension />,
  },
  {
    path: "/channels",
    element: <Channels />,
  },
  {
    path: "/podcasts",
    element: <Podcasts />,
  },
  {
    path: "/apps",
    element: <Apps />,
  },
  {
    path: "/learnprogramming",
    element: <LearnProgramming />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
