import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import MenuList from "./Menu-list";
import { RxHamburgerMenu } from "react-icons/rx";
export default function TreeViewMenu({ menus }) {
    const [showMenu, setShowMenu] = useState(false);
    const [translatex, setTranslatex] = useState("");
    const wrapper = useRef(null);
    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setShowMenu(false);
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }
    useOutsideAlerter(wrapper); //for hiding when click outside
    useEffect(() => {
        setTranslatex(translatex === "-300px" ? "" : "-300px");
    }, [showMenu]);
    return (_jsxs("div", { className: "fixed border-none overflow-x-hidden   left-0  z-20", ref: wrapper, children: [_jsx(RxHamburgerMenu, { className: `my-6 left-15 top-15 mx-3 drop-shadow-xl`, size: 40, onClick: () => setShowMenu(!showMenu) }), _jsx("div", { className: ` 
			  translate-x-[${translatex}] ${!showMenu && "hidden"}  h-screen bg-blue-700 font-bold text-2xl w-[300px]   transition-all rounded-t-lg `, children: _jsx(MenuList, { menuList: menus }) })] }));
}
