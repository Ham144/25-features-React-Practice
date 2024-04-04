import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BiDownArrowCircle } from "react-icons/bi";
import { NavLink } from "react-router-dom";
export default function Navbar2() {
    return (_jsxs("nav", { className: "flex flex-col justify-center items-center", children: [_jsx("h2", { children: "Simple Navigation Example" }), _jsx("form", { children: _jsx("input", { type: "text", name: "search", placeholder: "Type here..", className: "bg-white border rounded-full w-[300px] text-black dark" }) }), _jsxs("ul", { className: "flex mt-3 ", children: [_jsx("li", { children: _jsx(NavLink, { to: "/", className: "px-4 py-1  border rounded-full hover:border-none hover:bg-slate-400 active:bg-red-300 ", children: "Home" }) }), _jsx("li", { children: _jsx(NavLink, { className: "px-4 py-1  border rounded-full hover:border-none hover:bg-slate-400 active:bg-red-300 ", to: "/gallery", children: "Gallery" }) }), _jsx("li", { children: _jsx(NavLink, { to: "/about", className: "px-4 py-1  border rounded-full hover:border-none hover:bg-slate-400 active:bg-red-300 ", children: "About" }) })] }), _jsxs("div", { className: "flex text-7xl", children: [_jsx("div", { className: "w-[70px] " }), _jsx(BiDownArrowCircle, {}), _jsx(BiDownArrowCircle, {})] })] }));
}