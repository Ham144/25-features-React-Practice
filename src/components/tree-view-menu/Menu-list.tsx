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
		<ul className=" text-black">
			<div className="translate-x-3 ">
				{" "}
				{menuList && menuList.length
					? //@ts-ignore
					  menuList.map((listItem) => <MenuItem item={listItem} />)
					: null}
			</div>
		</ul>
	);
}
