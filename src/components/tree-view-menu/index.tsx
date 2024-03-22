import MenuList from "./Menu-list";

interface menu {
	label: string;
	to: string;
	children: menu[];
}

interface Props {
	menus: menu[];
}

export default function TreeViewMenu({ menus }: Props) {
	return (
		<div className="fixed left-0 h-screen z-20   bg-blue-300 w-[300px]   ">
			<MenuList menuList={menus} />
		</div>
	);
}
