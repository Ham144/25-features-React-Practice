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
	const ref = useRef<HTMLDivElement>(null);
	const [theme, setTheme] = useState("dark");

	const handleTheme = (newTheme: string) => {
		setTheme(newTheme);
	};

	useEffect(() => {
		ref.current?.scrollIntoView({
			behavior: "smooth",
			block: "end",
		});
	}, []);

	return (
		<div
			className=" flex gap-y-3 flex-col dark items-center justify-items-center  "
			data-theme={theme} //this is the key of dark theme here remember
		>
			<ScrollPercentage>
				<Home />
				<Accordion />
				<RandomColor />
				<StarRatings noOfStar={7} />
				<ImagesSlider url="https://dummyjson.com/quotes" limit={50} />
				<Loadmore url="https://dummyjson.com/products" />
				<QrCode />
				<LightDarkMode onChanged={handleTheme} />
			</ScrollPercentage>
			<TabImplement />
			<ModalUtil />
			<GithubProfileFinder />
			<SearchUser /> {/* //Search AutoCompleteSearch or recomendation */}
			<TicTacToe />
			<ShowFlagsDataGlobal>
				<ShowFlags />
			</ShowFlagsDataGlobal>
			<TestingCustomHooks />
			<TestOutsideClick />
			<UseWindowResizeTest />
			{/* <ToParticualrSection  /> */}
			<Weather />
			<Navbar2 />
			<Routes>
				<Route path="/" />
				<Route path="/gallery" element={<Gallery />} />
				<Route path="/about" element={<About />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
			<div ref={ref} />
		</div>
	);
};

export default App;
