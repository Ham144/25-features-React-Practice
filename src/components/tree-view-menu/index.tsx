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
		<div className="fixed h-screen w-[300px] left-0 bg-blue-500 z-30  ">
			<MenuList menuList={menus} />
		</div>
	);
}
