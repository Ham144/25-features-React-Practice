import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import CustomModal from "../pop-up/CustomModal";
export default function TicTacToe() {
    const [square, setSquare] = useState(Array(9).fill(""));
    const [Xturn, setXturn] = useState(true);
    const [winner, setWinner] = useState("");
    const [counter, setCounter] = useState(0);
    const handleClick = (getindex) => {
        const [...Squares] = square;
        setCounter(counter + 1);
        if (Squares[getindex] !== "") {
            alert("illegal move");
            return;
        }
        else if (counter < square.length) {
            Squares[getindex] = Xturn ? "x" : "o";
            setXturn(!Xturn);
        }
        setSquare(Squares);
    };
    const Square = ({ getindex, value }) => {
        return (_jsx("div", { onClick: () => handleClick(getindex), className: "border flex items-center justify-center  border-white   bg-blue-300 font-bold text-8xl sm:w-[200px] sm:h-[200px] w-[100px] h-[100px] text-center cursor-pointer text-black hover:bg-slate-300 ", children: value }));
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
            if (square[pattern[0]] == square[pattern[1]] &&
                square[pattern[2]] == square[pattern[1]] &&
                square[pattern[0]] == square[pattern[2]] &&
                square[pattern[0]] !== "" &&
                square[pattern[1]] !== "" &&
                square[pattern[2]] !== "") {
                setWinner(Xturn ? "O won!!" : "X won!!");
            }
        });
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
    return (_jsxs("div", { className: "flex flex-col  justify-center items-center", children: [!winner ? (_jsxs("div", { className: "text-4xl font-bold text-center ", children: ["now is the ", Xturn ? "X" : "O", " turn"] })) : null, _jsxs("div", { className: "aspect-square ", children: [_jsxs("div", { className: "flex row ", children: [_jsx(Square, { getindex: 0, value: square[0] }), _jsx(Square, { getindex: 1, value: square[1] }), _jsx(Square, { getindex: 2, value: square[2] })] }), _jsxs("div", { className: "flex row", children: [_jsx(Square, { getindex: 3, value: square[3] }), _jsx(Square, { getindex: 4, value: square[4] }), _jsx(Square, { getindex: 5, value: square[5] })] }), _jsxs("div", { className: "flex row", children: [_jsx(Square, { getindex: 6, value: square[6] }), _jsx(Square, { getindex: 7, value: square[7] }), _jsx(Square, { getindex: 8, value: square[8] })] })] }), _jsx("button", { className: "bg-blue-400 border mx-auto rounded-sm px-6 py-1 drop-shadow-lg mt-3", onClick: () => handleReset(), children: "Reset" }), _jsx("div", { className: "fixed justify-center mx-auto w-[99%] items-center   ", children: _jsx("div", { className: "", children: _jsx(CustomModal, { customConfirm: () => handleReset(), label: "Won!!", message: `${winner === "O won!!" || winner === "X won!!"
                            ? winner
                            : "play again?"}`, confirm: "play Again", cancel: "cancel", show: winner ? true : false }) }) })] }));
}
