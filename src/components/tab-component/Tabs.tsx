import { useState } from "react";

export default function Tabs({ Tabs, onChange }) {
	const [currentTabIndex, setCurrentTabIndex] = useState(0);

	function handleCahngeTab(getIndex) {
		setCurrentTabIndex(getIndex);
		onchange(getIndex);
	}

	return (
		<div className="flex flex-col justify-center items-center ">
			<div className="flex justify-between w-[400px] ">
				{Tabs.length > 0 &&
					Tabs.map((tab, index) => (
						<div
							className={`${
								index === currentTabIndex
									? "border border-black bg-blue-700"
									: "text-black"
							} bg-blue-100 hover:bg-blue-200 px-10 py-3`}
							onClick={() => handleCahngeTab(index)}
						>
							{tab.label}
						</div>
					))}
			</div>
			{Tabs[currentTabIndex] && (
				<div className="w-full mt-2  text-center font-bold">
					{Tabs[currentTabIndex].content}
				</div>
			)}
		</div>
	);
}
