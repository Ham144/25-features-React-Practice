import { useEffect, useState } from "react";

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
			className={`header-container text-center flex justify-between items-center sm:px-10 px-3 border-b-4 shadow-md w-screen h-[90px]  backdrop-blur-xm fixed transition-all ${
				bgColored ? "bg-blue-50" : ""
			} hover:bg-white z-10`}
		>
			<div className="">logo</div>

			<div>navigation</div>
		</nav>
	);
}
