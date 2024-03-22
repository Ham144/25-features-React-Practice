import MenuList from "./Menu-list";

interface Menus {
	label: string;
	to: string;
	children?: Menus[];
}

interface Props {
	menus: Menus[];
}

export default function TreeViewMenu({ menus }: Props) {
	return (
		<div className="fixed left-0 h-screen z-20   bg-blue-300 w-[300px]   ">
			<MenuList menuList={menus} />
		</div>
	);
}
