import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";
export default function CustomModal(props) {
    const [show, setShow] = useState(true);
    const [feedback, setFeedback] = useState(-1);
    const handleConfirm = () => {
        setFeedback(1);
        props.customConfirm ? props.customConfirm() : null;
        setShow(false);
    };
    const handleCancel = () => {
        setFeedback(0);
        setShow(false);
    };
    const handleClose = () => {
        setShow(false);
    };
    switch (feedback) {
        case 1:
            console.log("You clicked confirm");
            break;
        case 0:
            console.log("You cliced cancel");
            break;
        default:
            break;
    }
    useEffect(() => {
        setShow(!show);
    }, [props.show === true]);
    return (_jsx("div", { className: `${show ? "" : "hidden"} w-[99%] h-screen fixed top-0  backdrop-blur-sm shadow-lg z-10 justify-center items-center `, children: _jsxs("div", { className: ` popup fixed mx-auto my-auto top-0 bottom-0 right-0 left-0 bg-blue-400 px-9 justify-between rounded-sm  h-[140px] w-[410px] `, children: [_jsx(GrClose, { onClick: handleClose, className: "flex translate-x-[345px]  text-red-500", size: 30 }), _jsx("h1", { children: props.label ? props.label : "Title of modal" }), _jsx("div", { className: "message", children: _jsx("p", { children: props.message ? props.message : "Something gone wrong" }) }), _jsxs("div", { className: "flex justify-center self-end py-9 gap-x-4", children: [_jsx("button", { className: "bg-blue-400 hover:font-bold", onClick: handleConfirm, children: props.confirm ? props.confirm : "OK" }), props.cancel ? (_jsx("button", { className: "  hover:font-bold", onClick: handleCancel, children: props.cancel })) : null] })] }) }));
}
