import { jsx as _jsx } from "react/jsx-runtime";
import Tabs from "./Tabs";
export default function TabImplement() {
    const navigation = [
        {
            label: "Tab 1",
            content: (_jsx("div", { className: "bg-red-300 p-9", children: "Hello World This text is from TAB 3" })),
        },
        {
            label: "Tab 2",
            content: (_jsx("div", { className: "bg-yellow-300 p-9", children: "Hello World This text is from TAB 3" })),
        },
        {
            label: "Tab 3",
            content: (_jsx("div", { className: "bg-blue-300 p-9", children: "Hello World This text is from TAB 3" })),
        },
    ];
    function handleOnChange(getValue) {
        console.log(getValue);
    }
    return (_jsx("div", { children: _jsx(Tabs, { Tabs: navigation, onChange: handleOnChange }) }));
}
