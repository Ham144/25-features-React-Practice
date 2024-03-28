import { useEffect, useState } from "react";
import CustomModal from "../pop-up/CustomModal";

export default function TicTacToe() {
	const [square, setSquare] = useState(Array(9).fill(""));
	const [Xturn, setXturn] = useState(true);
	const [winner, setWinner] = useState("");
	const [counter, setCounter] = useState(0);

	const handleClick = (getindex) => {
		const [...Squares] = square;
		if (Squares[getindex] !== "") {
			alert("illegal move");
			return;
		} else {
			Squares[getindex] = Xturn ? "x" : "o";
			setCounter(counter + 1);
			setXturn(!Xturn);
		}
		setSquare(Squares);
	};

	const Square = ({ getindex, value }) => {
		return (
			<div
				onClick={() => handleClick(getindex)}
				className="border flex items-center justify-center  border-white   bg-blue-300 font-bold text-8xl sm:w-[200px] sm:h-[200px] w-[100px] h-[100px] text-center cursor-pointer text-black hover:bg-slate-300 "
			>
				{value}
			</div>
		);
	};

	const winnerChecking = () => {
		const wonPattern = [
			[0, 1, 2],
			[0, 3, 6],
			[0, 4, 8],
			[1, 4, 7],
			[2, 5, 8],
			[2, 4, 6],
			[3, 4, 5],
			[6, 7, 8],
		];

		wonPattern.map((pattern) => {
			if (
				square[pattern[0]] == square[pattern[1]] &&
				square[pattern[2]] == square[pattern[1]] &&
				square[pattern[0]] == square[pattern[2]] &&
				square[pattern[0]] !== "" &&
				square[pattern[1]] !== "" &&
				square[pattern[2]] !== ""
			) {
				setWinner(Xturn ? "O won!!" : "X won!!");
			}
		});
		if (counter === square.length) {
			alert("square not remaining");
			handleReset();
			setCounter(0);
		}
	};

	if (winner !== "") {
		console.log(winner);
	}
	useEffect(() => {
		winnerChecking();
	}, [square]);

	const handleReset = () => {
		setSquare(Array(9).fill(""));
		setCounter(0);
		setWinner("");
	};

	return (
		<div className="flex flex-col justify-center items-center">
			{!winner ? (
				<div className="text-4xl font-bold text-center ">
					now is the {Xturn ? "X" : "O"} turn
				</div>
			) : null}
			<div className="aspect-square ">
				<div className="flex row ">
					<Square getindex={0} value={square[0]} />
					<Square getindex={1} value={square[1]} />
					<Square getindex={2} value={square[2]} />
				</div>
				<div className="flex row">
					<Square getindex={3} value={square[3]} />
					<Square getindex={4} value={square[4]} />
					<Square getindex={5} value={square[5]} />
				</div>
				<div className="flex row">
					<Square getindex={6} value={square[6]} />
					<Square getindex={7} value={square[7]} />
					<Square getindex={8} value={square[8]} />
				</div>
			</div>
			<div className="flex w-screen">
				<button
					className="bg-blue-400 border w-[200px] rounded-sm px-6 py-1 drop-shadow-lg mt-3"
					onClick={() => handleReset()}
				>
					Reset
				</button>
				<div className="fixed w-screen ">
					<CustomModal
						customConfirm={() => handleReset()}
						label="Won!!"
						message={`${winner}`}
						confirm="play Again"
						cancel="cancel"
						show={winner ? true : false}
					/>
				</div>
			</div>
		</div>
	);
}
