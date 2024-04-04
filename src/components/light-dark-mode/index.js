import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaSun } from "react-icons/fa";
import useLocalStorage from "./UseLocalStorage";
import { useEffect } from "react";
export default function LightDarkMode({ onChanged }) {
    const [theme, setTheme] = useLocalStorage("theme", "light");
    const handleChangeTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
    useEffect(() => {
        onChanged(theme);
    }, [theme]);
    return (_jsxs("div", { className: "fixed bg-transparent items-center bottom-5 right-5  ", "data-theme": theme, children: [_jsx("p", { children: "Dark Mode" }), _jsx(FaSun, { size: 50, onClick: handleChangeTheme, children: "Change Theme" })] }));
}
