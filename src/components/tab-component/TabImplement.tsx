import Tabs from "./Tabs";

export default function TabImplement() {
	const navigation = [
		{
			label: "Tab 1",
			content: (
				<div className="bg-red-300 p-9">
					Hello World This text is from TAB 3
				</div>
			),
		},
		{
			label: "Tab 2",
			content: (
				<div className="bg-yellow-300 p-9">
					Hello World This text is from TAB 3
				</div>
			),
		},
		{
			label: "Tab 3",
			content: (
				<div className="bg-blue-300 p-9">
					Hello World This text is from TAB 3
				</div>
			),
		},
	];

	function handleOnChange(getValue) {
		console.log(getValue);
	}

	return (
		<div>
			<Tabs Tabs={navigation} onChange={handleOnChange} />
		</div>
	);
}
