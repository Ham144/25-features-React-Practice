import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useEffect, useState } from "react";
const ScrollPercentageContext = createContext(); //this one which is called context
const ScrollPercentage = ({ children }) => {
    //this one that is called provider
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const [isLoading, setIsloading] = useState(false);
    const [error, setError] = useState(null);
    const [products, setProducts] = useState([]);
    async function fetchingData() {
        try {
            setIsloading(true);
            const response = await fetch("https://dummyjson.com/products?limit=300");
            const data = await response.json();
            setIsloading(false);
            setProducts(data.products);
        }
        catch (error) {
            setError(error);
            setIsloading(false);
        }
    }
    function handleScrolled() {
        const scrolled = document.body.scrollTop || document.documentElement.scrollTop;
        const balancer = document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        setScrollPercentage((scrolled / balancer) * 100);
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScrolled);
        return () => {
            window.removeEventListener("scroll", () => { });
        };
    });
    useEffect(() => {
        fetchingData();
    }, []);
    if (isLoading) {
        _jsx("div", { children: "loading..." });
    }
    if (error) {
        _jsx("div", { children: "error" });
    }
    return (_jsxs(ScrollPercentageContext.Provider, { value: { scrollPercentage }, children: [children, _jsxs("div", { className: "flex flex-col justify-center items-center", children: [_jsx("h2", { className: "font-bold text-2xl", children: "Blue Bar Percentage upthere is part of ScrollPercentage components" }), _jsx("div", { className: " fixed top-0 h-2 z-30 w-screen bg-blue-50 ", children: _jsx("div", { style: { width: `${scrollPercentage}%` }, className: "bar  h-full bg-blue-500" }) }), products.map((product) => (_jsx("div", { className: "hover:font-bold cursor-pointer", children: product.title })))] })] }));
};
export const ScrollPercentageContexts = ScrollPercentageContext;
export default ScrollPercentage;
