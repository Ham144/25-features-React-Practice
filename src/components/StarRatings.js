import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
export default function StarRatings({ noOfStar = 8 }) {
    const [clickedStar, setClickedStar] = useState(Number.NEGATIVE_INFINITY);
    const [filledStar, setfilledStar] = useState(Number.NEGATIVE_INFINITY);
    const handleHoverStar = (index) => {
        setfilledStar(index);
    };
    const handleClickStar = (index) => {
        setClickedStar(index);
        setfilledStar(clickedStar);
    };
    const handleLeave = () => {
        setfilledStar(clickedStar);
    };
    return (_jsx("div", { className: "container", children: _jsx("div", { className: `flex gap-x-3 justify-center items-center  text-slate-300 `, onMouseLeave: handleLeave, children: [...Array(noOfStar)].map((_, index) => (_jsx(FaStar, { className: `${index <= filledStar ? "text-yellow-300" : ""} h-8 w-8 transition-colors hover:text-yellow-400 hover:scale-110`, onClick: () => handleClickStar(index), onMouseEnter: () => handleHoverStar(index) }, index))) }) }));
}
