import { useContext } from "react";
import { Menuitems } from "../../lib/data";
import Accordion from "../../pages/Accordion";
import RandomColor from "../../pages/RandomColor";
import TicTacToe from "../tic-tac-toe";
import TreeViewMenu from "../tree-view-menu";
import { FlagsContext } from "./Context";

export default function ShowFlags() {
	const { enabledFlags, loading } = useContext(FlagsContext);

	const componentsToRender = [
		{
			key: "showTreeViewMenu",
			component: (
				<div className="fixed  h-screen top-0 right-0 z-20 dark">
					<TreeViewMenu menus={Menuitems} />
				</div>
			),
		},
		{
			key: "showRandomGenerator",
			component: <RandomColor />,
		},
		{
			key: "showTicTacToe",
			component: <TicTacToe />,
		},
		{
			key: "showAccordion",
			component: <Accordion />,
		},
	];

	if (loading) {
		return (
			<div>
				<h1>Loading..</h1>
			</div>
		);
	}

	const checkEnabledFlags = (getKeyComponent): boolean => {
		if (enabledFlags[getKeyComponent]) return true;
		else false;
	};

	return (
		<div className="flex flex-col justify-center items-center dark border border-gray-300 rounded-r-md p-2">
			<h1 className="text-4xl">
				Feature Flags toggling from show flags data global
			</h1>
			{componentsToRender.map((componentItem) => (
				<div>
					{/* <div className="componentToggling">
						<button
							onClick={() => handleToggle(index)}
							className={`  
					   uppercase px-4  py-2  border-4 rounded-xl hover:bg-slate-300 `}
						>
							{componentItem.key}
						</button>
					</div> */}
					{checkEnabledFlags(componentItem.key) ? (
						componentItem.component
					) : (
						<div>{componentItem.key} is false so its being hidden</div>
					)}
				</div>
			))}
		</div>
	);
}
