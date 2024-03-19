import { useState } from "react";

const RandomColor = () => {
	const [typeOfColor, setTypeOfColor] = useState("rgb");
	const [hexColor, setHexColor] = useState("#fff");
	const [rgbColor, setRgbColor] = useState("rgb(14,213,210)");

	function random(length: number) {
		return Math.floor(Math.random() * length);
	}

	const randomizeColor = () => {
		if (typeOfColor === "hex") {
			const hexSingles = [
				"a",
				"b",
				"c",
				"d",
				"e",
				"f",
				1,
				2,
				3,
				4,
				5,
				6,
				7,
				8,
				9,
			];
			let hexColor = "#";
			for (let i = 0; i < 6; i++) {
				hexColor += hexSingles[random(hexSingles.length)];
			}
			return setHexColor(hexColor);
		} else if (typeOfColor === "rgb") {
			const r = random(256);
			const g = random(256);
			const b = random(256);
			const rgbColor = `rgb(${r},${g},${b})`;

			return setRgbColor(rgbColor);
		} else {
			alert("Your color input is NOT VALID");
		}
	};

	const handleRgbRange = (color: string) => {
		const rangeRgb = ["17", "8", "45"];
		if (color.at(0) === "r") {
			rangeRgb[0] = color.slice(1);
		} else if (color.at(0) === "g") {
			rangeRgb[1] = color.slice(1);
		} else if (color.at(0) === "b") {
			rangeRgb[2] = color.slice(1);
		}
		setRgbColor(`rgb(${rangeRgb})`);
	};

	return (
		<div
			style={{
				backgroundColor: `${typeOfColor === "hex" ? hexColor : rgbColor}`,
			}}
			className={` flex flex-col items-center justify-center  w-full text-center`}
		>
			<div className="flex">
				<button
					className={`${
						typeOfColor === "hex" && "bg-blue-700"
					} border  px-7 py-3 rounded-sm m-2`}
					onClick={() => setTypeOfColor("hex")}
				>
					Hex Color
				</button>
				<button
					className={`${
						typeOfColor === "rgb" && "bg-blue-700"
					} border  px-7 py-3 rounded-sm m-2`}
					onClick={() => setTypeOfColor("rgb")}
				>
					RGB Color
				</button>
			</div>
			<button
				className="border px-6 py-2 rounded-xl translate-y-[100px] hover:bg-slate-200"
				onClick={randomizeColor}
			>
				Randomize Color
			</button>
			{typeOfColor === "rgb" && (
				<div className="translate-y-[200px] w-10/12 ">
					RED
					<input
						className="w-full  accent-red-600"
						min={0}
						max={256}
						type="range"
						onChange={(e) => handleRgbRange("r" + e.target.value)}
					/>
					GREEN
					<input
						className="w-full  accent-green-600"
						min={0}
						max={256}
						type="range"
						onChange={(e) => handleRgbRange("g" + e.target.value)}
					/>
					BLUE
					<input
						className="w-full  accent-blue-600"
						min={0}
						max={256}
						type="range"
						onChange={(e) => handleRgbRange("b" + e.target.value)}
					/>
				</div>
			)}
			<div className="h-[600px] flex  items-center   text-blue-300 sm:text-9xl font-serif">
				{typeOfColor === "hex" ? (
					<input
						className="bg-inherit text-center focus:outline-none  border-0 caret-yellow-300 drop-shadow-xl"
						type="text"
						autoCorrect="false"
						value={hexColor}
						onChange={(e) => setHexColor(e.target.value)}
					/>
				) : (
					<input
						className="text-center  border-0 focus:outline-none bg-inherit  caret-yellow-300 drop-shadow-xl"
						type="text"
						autoCorrect="false"
						value={rgbColor}
						onChange={(e) => setRgbColor(e.target.value)}
					/>
				)}
			</div>
		</div>
	);
};

export default RandomColor;
