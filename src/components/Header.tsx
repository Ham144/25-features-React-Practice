import { useContext, useEffect, useState } from "react";
import Tabs from "./tab-component/Tabs";
import { ScrollPercentageContexts } from "./ScrollPercentage";

const navigationlist = [
	{
		label: "tab 1",
		content: (
			<div className="fixed uppercase bottom-0 text-blue-400  text-center">
				just for an example
			</div>
		),
	},
	{
		label: "tab 2",
		content: (
			<div className="fixed uppercase bottom-0  text-yellow-400 text-center">
				just for an example
			</div>
		),
	},
	{
		label: "tab 3",
		content: (
			<div className="fixed uppercase bottom-0 text-red-400   text-center">
				just for an example
			</div>
		),
	},
];

export default function Header() {
	const [bgColored, setBgColored] = useState(true);
	//@ts-ignore
	const { scrollPercentage } = useContext(ScrollPercentageContexts);

	useEffect(() => {
		const handleScroll = () => {
			if (window.pageYOffset < 12) setBgColored(true);
			else setBgColored(false);
		};
		window.addEventListener("scroll", handleScroll);
	});

	return (
		<nav
			className={`header-container  text-center flex justify-between items-center sm:px-10 px-3 border-b-4 shadow-md w-full h-[90px] text-black  backdrop-blur-xm fixed transition-all text-2xl ${
				bgColored ? "bg-blue-50" : ""
			} hover:bg-white z-10 hover:text-blue-400`}
		>
			<div className="translate-x-6  sm:block hidden">logo</div>

			<div
				className={`${
					scrollPercentage > 5 ? "hidden" : ""
				} fixed sm:h-12 z-50 w-screen rounded-lg top-4 sm:translate-x-[400px]`}
			>
				{/* @ts-ignore */}
				<Tabs Tabs={navigationlist} onChange={null} />
			</div>
		</nav>
	);
}
