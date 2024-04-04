import { jsx as _jsx } from "react/jsx-runtime";
import { useRef, useState } from "react";
import OutsideClickUtil from "./outsideClickutil";
export default function TestOutsideClick() {
    const [showTogglableComponet, setShowTogglableComponent] = useState(false);
    const ref = useRef();
    OutsideClickUtil(ref, () => setShowTogglableComponent(false));
    return (_jsx("div", { className: "w-[500px] text-wrap mx-auto  ", children: _jsx("div", { className: "border-4  px-4 py-1 text-center", children: showTogglableComponet ? (_jsx("div", { ref: ref, children: "IF you click Outside of this text area, this text will be gone\" IF you click Outside of this text area, this text will be gone\" IF you click Outside of this text area, this text will be gone\" IF you click Outside of this text area, this text will be gone\" IF you click Outside of this text area, this text will be gone\"" })) : (_jsx("button", { onClick: () => setShowTogglableComponent(true), children: "Show Component again" })) }) }));
}
