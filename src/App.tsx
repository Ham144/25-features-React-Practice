import Home from "./pages/Home";
import Accordion from "./pages/Accordion";
import RandomColor from "./pages/RandomColor";
import { useEffect, useRef } from "react";
import StarRatings from "./components/StarRatings";
import ImagesSlider from "./components/ImagesSlider";
import Loadmore from "./components/Loadmore";
import TreeViewMenu from "./components/tree-view-menu";
import { Menuitems } from "./lib/data";
import QrCode from "./components/Qr-code";
import LightDarkMode from "./components/light-dark-mode";

const App = () => {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		ref.current?.scrollIntoView({
			behavior: "smooth",
			block: "end",
		});
	}, []);

	return (
		<div className=" flex gap-y-3 flex-col items-center justify-items-center  h-screen">
			<Home />
			<Accordion />
			<RandomColor />
			<StarRatings noOfStar={7} />
			<ImagesSlider url="https://dummyjson.com/quotes" limit={50} />
			<Loadmore url="https://dummyjson.com/products" />
			<TreeViewMenu menus={Menuitems} />
			<QrCode />
			<LightDarkMode />
			<div ref={ref} />
		</div>
	);
};

export default App;
