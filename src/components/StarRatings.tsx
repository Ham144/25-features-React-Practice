import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRatings({ noOfStar = 8 }) {
	const [clickedStar, setClickedStar] = useState(Number.NEGATIVE_INFINITY);
	const [hoveredStar, setHoveredStar] = useState(Number.NEGATIVE_INFINITY);

	const handleHoverStar = (index: number) => {
		setHoveredStar(index);
	};

	const handleClickStar = (index: number) => {
		setClickedStar(index);
	};

	const handleLeave = () => {
		setClickedStar(clickedStar);
	};

	return (
		<div className="container">
			<div
				className={`flex gap-x-3 justify-center items-center  text-slate-300 `}
			>
				{[...Array(noOfStar)].map((_, index) => (
					<FaStar
						className={`${
							
						} w-8 h-8`}
						onClick={() => handleClickStar(index)}
						onMouseEnter={() => handleHoverStar(index)}
						onMouseLeave={() => handleLeave}
						key={index}
					/>
				))}
			</div>
		</div>
	);
}
