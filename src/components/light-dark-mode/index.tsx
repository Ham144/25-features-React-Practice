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

	return (
		<div
			className="fixed bg-transparent items-center bottom-5 right-5  "
			data-theme={theme}
		>
			<p>Dark Mode</p>
			<FaSun size={50} onClick={handleChangeTheme}>
				Change Theme
			</FaSun>
		</div>
	);
}
