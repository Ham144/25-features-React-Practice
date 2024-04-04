import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Home from "./pages/Home";
import Accordion from "./pages/Accordion";
import RandomColor from "./pages/RandomColor";
import { useEffect, useRef, useState } from "react";
import StarRatings from "./components/StarRatings";
import ImagesSlider from "./components/ImagesSlider";
import Loadmore from "./components/Loadmore";
import QrCode from "./components/Qr-code";
import LightDarkMode from "./components/light-dark-mode";
import TabImplement from "./components/tab-component/TabImplement";
import ScrollPercentage from "./components/ScrollPercentage";
import ModalUtil from "./components/pop-up/Modalutil";
import GithubProfileFinder from "./components/GithubProfileFinder";
import SearchUser from "./components/AutoCompleteSearch/SearchUser";
import TicTacToe from "./components/tic-tac-toe";
import ShowFlagsDataGlobal from "./components/Feature-log/Context";
import ShowFlags from "./components/Feature-log";
import TestingCustomHooks from "./components/customHook";
import TestOutsideClick from "./components/when outside-click";
import UseWindowResizeTest from "./components/use layout effect/WindowResizeTest";
import Weather from "./components/weather app/Weather";
import Navbar2 from "./components/Navbar2";
import Gallery from "./pages/Gallery";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import PageNotFound from "./components/404";
const App = () => {
    const ref = useRef(null);
    const [theme, setTheme] = useState("dark");
    const handleTheme = (newTheme) => {
        setTheme(newTheme);
    };
    useEffect(() => {
        ref.current?.scrollIntoView({
            behavior: "smooth",
            block: "end",
        });
    }, []);
    return (_jsxs("div", { className: " flex gap-y-3 flex-col dark items-center justify-items-center  ", "data-theme": theme, children: [_jsxs(ScrollPercentage, { children: [_jsx(Home, {}), _jsx(Accordion, {}), _jsx(RandomColor, {}), _jsx(StarRatings, { noOfStar: 7 }), _jsx(ImagesSlider, { url: "https://dummyjson.com/quotes", limit: 50 }), _jsx(Loadmore, { url: "https://dummyjson.com/products" }), _jsx(QrCode, {}), _jsx(LightDarkMode, { onChanged: handleTheme })] }), _jsx(TabImplement, {}), _jsx(ModalUtil, {}), _jsx(GithubProfileFinder, {}), _jsx(SearchUser, {}), " ", _jsx(TicTacToe, {}), _jsx(ShowFlagsDataGlobal, { children: _jsx(ShowFlags, {}) }), _jsx(TestingCustomHooks, {}), _jsx(TestOutsideClick, {}), _jsx(UseWindowResizeTest, {}), _jsx(Weather, {}), _jsx(Navbar2, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/" }), _jsx(Route, { path: "/gallery", element: _jsx(Gallery, {}) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) }), _jsx(Route, { path: "*", element: _jsx(PageNotFound, {}) })] }), _jsx("div", { ref: ref })] }));
};
export default App;
