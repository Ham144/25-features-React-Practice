import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { FcNext, FcPrevious } from "react-icons/fc";
export default function ImagesSlider(props) {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const fetchingData = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(`${props.url}?limit=${props.limit}`);
            const data = await response.json().then((quote) => quote.quotes);
            setImages(data);
        }
        catch (error) {
            setIsLoading(false);
            setError(String(error));
        }
    };
    useEffect(() => {
        fetchingData();
    }, [props.url]);
    // if (error) {
    // 	alert("Oops, we cought by police" + error);
    // }
    const next = () => {
        currentSlide === images.length - 1
            ? setCurrentSlide(0)
            : setCurrentSlide(currentSlide + 1);
    };
    const previous = () => {
        currentSlide === 0
            ? setCurrentSlide(images.length - 1)
            : setCurrentSlide(currentSlide - 1);
    };
    const handleMarble = (index) => {
        setCurrentSlide(index);
    };
    return (_jsxs("div", { className: "flex  items-center  gap-x-3 w-[99%] sm:w-[700px]", children: [_jsx(FcPrevious, { className: "hover:scale-105   hover:bg-blue-200 rounded-md ", size: 60, onClick: previous }), images.map((image, index) => (_jsx("div", { className: `${index !== currentSlide ? "hidden" : ""} flex flex-col justify-between w-full items-center  sm:h-auto gap-y-2 flex-wrap text-center border border-none  bg-transparent rounded-sm font-bold italic text-2xl  px-2 `, children: _jsxs("div", { className: " mx-auto space-y-4 w-full", children: [_jsx("p", { className: "bg-blue-100 text-black p-2 px-8 rounded-sm ", children: index }), _jsx("div", { children: image.quote }, image.id), _jsxs("p", { className: "font-light", children: ["~", image.author, "~"] }), _jsx("div", { className: " marble grid grid-cols-10 text-black gap-y-2 w-full  ", children: images.map((_, index) => (_jsx("button", { className: `${index === currentSlide
                                    ? "bg-blue-300 border border-black"
                                    : ""} w-8 h-8  hover:bg-slate-400  cursor-pointer rounded-full bg-slate-300 transition-all  text-center     `, onClick: () => handleMarble(index), children: index }))) })] }) }))), _jsx(FcNext, { className: "hover:scale-105 hover:bg-blue-200 rounded-md ", size: 60, onClick: next })] }));
}
