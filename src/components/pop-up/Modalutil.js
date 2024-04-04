import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CustomModal from "./CustomModal";
import { useState } from "react";
export default function ModalUtil() {
    const [popUp, setPopUp] = useState(false);
    return (_jsxs("div", { className: "flex flex-col justify-center items-center", children: [_jsx("button", { className: "px-6 py-2 bg-blue-400 rounded-md hover:to-blue-100 active:scale-95", onClick: () => setPopUp(!popUp), children: "Testing Pop Up" }), _jsx(CustomModal, { label: "Alert!!", message: "Did you wash your balls today?", confirm: "Done", cancel: "Never", show: popUp })] }));
}
