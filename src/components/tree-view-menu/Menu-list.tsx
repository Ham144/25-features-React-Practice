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
		<ul className="overflow-hidden texbo">
			<div className="translate-x-3">
				{" "}
				{menuList && menuList.length
					? menuList.map((listItem) => <MenuItem item={listItem} />)
					: null}
			</div>
		</ul>
	);
}
