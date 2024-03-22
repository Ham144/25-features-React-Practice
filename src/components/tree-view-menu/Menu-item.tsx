import { useState } from "react";
import MenuList from "./Menu-list";
import { FaMinus, FaPlus } from "react-icons/fa";

interface Props {
	item: {
		label: string;
		to: string;
		children: [];
	};
}
export default function MenuItem({ item }: Props) {
	const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

	function handleToggleChilren(getCurrentLabel) {
		setDisplayCurrentChildren({
			...displayCurrentChildren,
			[getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
		});
	}

	console.log(displayCurrentChildren);

	return (
		<li>
			<div className="flex flex-col">
				<div className="flex justify-between w-[200px] ">
					<p>{item.label}</p>
					{item && item.children && item.children.length > 0 ? (
						<span
							className="cursor-pointer bg-blue-400 text-white rounded-full p-1"
							onClick={() => handleToggleChilren(item.label)}
						>
							{displayCurrentChildren[item.label] ? <FaMinus /> : <FaPlus />}
						</span>
					) : null}
				</div>

				<div className="bg-blue-50">
					{item &&
					item.children &&
					item.children.length > 0 &&
					displayCurrentChildren[item.label] ? (
						<MenuList menuList={item.children} />
					) : null}
				</div>
			</div>
		</li>
	);
}
