import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
export default function Tabs({ Tabs, onChange }) {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);
    function handleCahngeTab(getIndex) {
        setCurrentTabIndex(getIndex);
        onchange(getIndex);
    }
    return (_jsxs("div", { className: "flex flex-col justify-center items-center ", children: [_jsx("div", { className: "flex justify-between w-[400px] ", children: Tabs.length > 0 &&
                    Tabs.map((tab, index) => (_jsx("div", { className: `${index === currentTabIndex
                            ? "border border-black bg-blue-700"
                            : "text-black"} bg-blue-100 hover:bg-blue-200 px-10 py-3`, onClick: () => handleCahngeTab(index), children: tab.label }))) }), Tabs[currentTabIndex] && (_jsx("div", { className: "w-full mt-2  text-center font-bold", children: Tabs[currentTabIndex].content }))] }));
}
