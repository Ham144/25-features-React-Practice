import { useRef } from "react";

const ToParticualrSection = () => {
	const TargetRef = useRef(null);

	function handleGoto() {
		let target = TargetRef.current.getBoundingClientRect().top;

		window.scrollTo({
			top: target,
			behavior: "smooth",
		});
	}
	const metadata = [
		{
			label: "section #1",
			style: { backgroundColor: "blue", width: "400px", height: "400px" },
		},
		{
			label: "section #2",
			style: { backgroundColor: "white", width: "400px", height: "400px" },
		},
		{
			label: "section #3",
			style: { backgroundColor: "purple", width: "400px", height: "400px" },
		},
		{
			label: "section #4",
			style: { backgroundColor: "orange", width: "400px", height: "400px" },
		},
		{
			label: "section #5",
			style: { backgroundColor: "brown", width: "400px", height: "400px" },
		},
	];

	return (
		<div className="container text-black font-bold text-center flex flex-col justify-center items-center ">
			<div>
				<button className="border px-4 py-1 bg-slate-100" onClick={handleGoto}>
					Goto particular section
				</button>
			</div>
			{metadata.map((item, index) => (
				<div
					className="flex  items-center justify-center text-3xl border border-black"
					ref={index === 0 ? TargetRef : null}
					style={item.style}
				>
					{item.label}
				</div>
			))}
		</div>
	);
};

export default ToParticualrSection;
