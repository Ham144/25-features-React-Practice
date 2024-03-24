import { useEffect, useState } from "react";
import TabImplement from "./tab-component/TabImplement";
import Tabs from "./tab-component/Tabs";

const navigationlist = [
	{
		label: "tab 1",
		content: (
			<div className="fixed bottom-0 text-blue-400  text-center">
				just for an example
			</div>
		),
	},
	{
		label: "tab 2",
		content: (
			<div className="fixed bottom-0  text-yellow-400 text-center">
				just for an example
			</div>
		),
	},
	{
		label: "tab 3",
		content: (
			<div className="fixed bottom-0 text-red-400   text-center">
				just for an example
			</div>
		),
	},
];

export default function Header() {
	const [bgColored, setBgColored] = useState(true);

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

			<div className="absolute z-50 w-screen  ">
				<Tabs Tabs={navigationlist} onChange={null} />
			</div>
		</nav>
	);
}
