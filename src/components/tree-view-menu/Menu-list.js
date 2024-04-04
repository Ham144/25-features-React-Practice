import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import MenuItem from "./Menu-item";
export default function MenuList({ menuList = [] }) {
    return (_jsx("ul", { className: " text-black", children: _jsxs("div", { className: "translate-x-3 ", children: [" ", menuList && menuList.length
                    ? menuList.map((listItem) => _jsx(MenuItem, { item: listItem }))
                    : null] }) }));
}
