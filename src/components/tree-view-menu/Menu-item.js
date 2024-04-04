import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import MenuList from "./Menu-list";
import { FaMinus, FaPlus } from "react-icons/fa";
export default function MenuItem({ item }) {
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});
    function handleToggleChilren(getCurrentLabel) {
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
        });
    }
    return (_jsx("li", { className: "  p-[20px] hover:bg-blue-50", children: _jsxs("div", { className: "flex flex-col", children: [_jsxs("div", { className: "flex justify-between w-[200px] ", children: [_jsx("p", { children: item.label }), item && item.children && item.children.length > 0 ? (_jsx("span", { className: "text-white cursor-pointer bg-blue-900 rounded-full p-1", onClick: () => handleToggleChilren(item.label), children: displayCurrentChildren[item.label] ? _jsx(FaMinus, {}) : _jsx(FaPlus, {}) })) : null] }), _jsx("div", { className: "bg-blue-50  cursor-pointer", children: item &&
                        item.children &&
                        item.children.length > 0 &&
                        displayCurrentChildren[item.label] ? (_jsx(MenuList, { menuList: item.children })) : null })] }) }));
}
