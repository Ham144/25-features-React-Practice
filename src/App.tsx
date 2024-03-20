import Home from "./pages/Home";
import Accordion from "./pages/Accordion";
import RandomColor from "./pages/RandomColor";
import { useEffect, useRef } from "react";
import StarRatings from "./components/StarRatings";

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
			<StarRatings />
			<div ref={ref} />
		</div>
	);
};

export default App;
