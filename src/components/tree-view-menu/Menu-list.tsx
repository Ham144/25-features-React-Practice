import MenuItem from "./Menu-item";

interface MenuList {
	label: string;
	to: string;
	children?: MenuList[];
}

interface Props {
	menuList: MenuList[];
}
export default function MenuList({ menuList = [] }: Props) {
	return (
		<ul className="">
			{menuList && menuList.length
				? menuList.map((listItem) => <MenuItem item={listItem} />)
				: null}
		</ul>
	);
}
