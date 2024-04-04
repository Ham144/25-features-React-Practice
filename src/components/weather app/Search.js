import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Search({ search, setSearch, handleSearch }) {
    return (_jsxs("div", { className: "flex w-full gap-x-2 border-4 rounded-full ", children: [_jsx("input", { className: "flex border-none px-3 py-1 dark w-full", type: "text", value: search, onChange: (e) => setSearch(e.target.value), placeholder: "Search by city..", onKeyDown: (e) => (e.key === "Enter" ? handleSearch(search) : null) }), _jsx("button", { className: "bg-slate-300 border  dark px-4 py-1 hover:bg-slate-100  border-none", onClick: () => handleSearch(search), children: "Explore!" })] }));
}
