import { useEffect, useRef, useState } from "react";
import MenuList from "./Menu-list";
import { RxHamburgerMenu } from "react-icons/rx";

interface Menus {
	label: string;
	to: string;
	children?: Menus[];
}

interface Props {
	menus: Menus[];
}

export default function TreeViewMenu({ menus }: Props) {
	const [showMenu, setShowMenu] = useState(false);

	function useOutsideAlerter(ref: HTMLDivElement) {
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
	const wrapper = useRef(null);
	useOutsideAlerter(wrapper);
	return (
		<div className="fixed left-0  z-20" ref={wrapper}>
			<RxHamburgerMenu
				className={`my-6 left-15 top-15 mx-3 drop-shadow-xl`}
				size={40}
				onClick={() => setShowMenu(!showMenu)}
			/>
			<div
				className={` ${showMenu ? "" : "translate-x-[-400px]"}
			  h-screen z-20   bg-blue-300 w-[300px] transition-all rounded-t-lg `}
			>
				<MenuList menuList={menus} />
			</div>
		</div>
	);
}
