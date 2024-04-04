import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import usewindowResize from ".";
export default function UseWindowResizeTest() {
    const windowSize = usewindowResize();
    const { width, height } = windowSize;
    return (_jsxs("div", { className: " text-center", children: [_jsx("h2", { className: "text-4xl font-bold ", children: "Window Size" }), _jsxs("h2", { className: "text-3xl ", children: ["Width is : ", width] }), _jsxs("h2", { className: "text-3xl ", children: ["height is : ", height] })] }));
}
