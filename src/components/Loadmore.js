import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
export default function Loadmore(props) {
    const [images, setImages] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [count, setCount] = useState(0);
    const [isDisabledButton, setisDisbledButton] = useState(false);
    const fetchingData = async () => {
        try {
            setisLoading(true);
            const response = await fetch(`${props.url}?limit=20&skip=${count === 0 ? 0 : count * 20}`);
            const data = await response.json();
            // console.log(data.products);
            setImages([...images, ...data.products]);
            setisLoading(false);
        }
        catch (error) {
            setisLoading(false);
            console.log("from catch" + error);
        }
    };
    useEffect(() => {
        fetchingData();
    }, [count]);
    function handleLoadMore() {
        setisDisbledButton(count > 4 ? true : false);
        setCount(count + 1);
    }
    if (isLoading) {
        return _jsx("div", { children: "Image data loading..." });
    }
    return (_jsxs("div", { className: "flex flex-col dark justify-center gap-y-7 ", children: [_jsx("div", { className: "grid sm:grid-cols-5 grid-cols-2 gap-8  justify-items-center  rounded-lg  mx-auto sm:mt-10", children: images &&
                    images.length &&
                    images.map((image) => (_jsxs("div", { children: [_jsxs("p", { style: {
                                    backgroundColor: `rgb(200, 20, ${255 - image.price / 10})`,
                                }, className: "flex justify-center    font-bold text-wrap h-[50px] align-middle text-center items-center rounded-t-md  w-[200px] flex-grow text-white", children: ["$", image.price] }), _jsx("img", { className: "object-cover  aspect-square hover:scale-150 transition-all border hover:rounded-lg hover:border-none hover:object-contain  z-40 hover:z-40 w-[200px]  ", src: image.thumbnail, alt: image.title }, image.id), _jsx("div", { className: " flex justify-center  bg-blue-500  font-bold text-wrap h-[50px] align-middle text-center items-center rounded-b-md  w-[200px] flex-grow", children: image.title })] }))) }), _jsx("button", { className: `${isDisabledButton ? "hidden" : ""} bg-blue-500 w-[80%] rounded-xl border  mx-auto  px-6 py-2 hover:scale-105`, onClick: handleLoadMore, disabled: isDisabledButton ? false : false, children: !isDisabledButton && "Load More" }), isDisabledButton && (_jsx("p", { className: "text-center font-bold", children: "no more products, make the filter less specific to get more products" }))] }));
}
