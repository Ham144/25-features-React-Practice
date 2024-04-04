import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import useFetch from "./useFetch";
export default function TestingCustomHooks() {
    const { processing, data, error } = useFetch("https://dummyjson.com/products", {});
    return (_jsxs("div", { children: [_jsx("h2", { className: "text-4xl", children: "Testing CustomHooks" }), !processing ? (_jsx("div", { children: data?.products.map((item) => (_jsxs("li", { className: "list-none hover:border border-b-1 p-2 hover:text-xl cursor-pointer", children: [item.id, ".   ", item.title] }))) })) : (_jsx("div", { className: "text-4xl underline", children: "Fething Data..." }))] }));
}
