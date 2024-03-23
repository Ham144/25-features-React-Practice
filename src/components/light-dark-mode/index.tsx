import { FaSun } from "react-icons/fa";
import useLocalStorage from "./UseLocalStorage";

export default function LightDarkMode() {
	const [theme, setTheme] = useLocalStorage("theme", "light");

	const handleChangeTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		<div
			className="fixed dark items-center bottom-5 right-5 "
			data-theme={theme}
		>
			<p>Dark Mode</p>
			<FaSun size={50} onClick={handleChangeTheme}>
				Change Theme
			</FaSun>
		</div>
	);
}
