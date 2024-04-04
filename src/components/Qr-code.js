import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import QRCode from "react-qr-code";
export default function QrCode() {
    const [QrCode, setQrCode] = useState("");
    const [input, setInput] = useState("");
    function handleGenerateQR() {
        setQrCode(input);
    }
    return (_jsxs("div", { className: "flex flex-col items-center border border-blue-300 rounded-sm p-8", children: [_jsx("h2", { children: "QR Code Generator" }), _jsx("input", { className: "border p-2 w-[200px] text-black bg-slate-200", type: "text", value: input, onChange: (e) => setInput(e.target.value), onKeyDown: (e) => {
                    if (e.key === "Enter") {
                        handleGenerateQR();
                    }
                } }), _jsx("button", { className: "border p-5 my-3 rounded-sm hover:text-black hover:bg-slate-100", onClick: handleGenerateQR, children: "GENERATE NOW" }), _jsx(QRCode, { value: QrCode })] }));
}
