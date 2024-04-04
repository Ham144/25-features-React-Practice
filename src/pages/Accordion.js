import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import products from "../../public/data";
const Accordion = () => {
    const [selected, setSelected] = useState(Number);
    const [showMultiple, setShowMultiple] = useState(false);
    const [multiple, setMultiple] = useState([{}]);
    const handleSelected = (pro) => {
        setMultiple([]);
        if (pro === selected)
            return setSelected(0);
        setSelected(pro);
    };
    const handleMultiple = (pro) => {
        if (multiple.indexOf(pro) === -1) {
            return setMultiple([...multiple, pro]);
        }
        else {
            setMultiple(multiple.filter((mul) => mul !== pro));
        }
    };
    return (_jsxs("div", { className: "flex flex-col justify-center bg-transparent text-center", children: [_jsxs("button", { className: "flex justify-center items-center border dark hover:bg-blue-200 py-3 rounded-t-xl", onClick: () => setShowMultiple(!showMultiple), children: ["Show Multiple Accordion ", showMultiple ? "(Enabled)" : "(Disabled)"] }), products.map((pro) => (_jsxs("div", { className: "border bg-transparent hover:font-bold cursor-pointer px-8 py-2 text-left sm:w-[500px] ", onClick: showMultiple
                    ? () => handleMultiple(pro.id)
                    : () => handleSelected(pro.id), children: [pro.title, " ", pro.id === selected ? "-" : "+", _jsx("img", { className: showMultiple
                            ? multiple.indexOf(pro.id) !== -1
                                ? ""
                                : "hidden"
                            : selected === pro.id
                                ? ""
                                : "hidden", src: pro.thumbnail, alt: pro.title })] }, pro.id)))] }));
};
export default Accordion;
