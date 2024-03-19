import Home from "./pages/Home";
import Accordion from "./pages/Accordion";
import RandomColor from "./pages/RandomColor";
import { useEffect, useRef } from "react";

const App = () => {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		ref.current?.scrollIntoView({
			behavior: "smooth",
			block: "end",
		});
	}, []);

	return (
		<div className=" flex flex-col items-center justify-items-center  h-screen">
			<Home />
			<Accordion />
			<RandomColor />

			<div ref={ref} />
		</div>
	);
};

export default App;
