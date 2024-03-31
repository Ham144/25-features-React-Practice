import useFetch from "./useFetch";

export default function TestingCustomHooks() {
	const { processing, data, error } = useFetch(
		"https://dummyjson.com/products",
		{}
	);

	return (
		<div>
			<h2 className="text-4xl">Testing CustomHooks</h2>
			{!processing ? (
				<div>
					{data?.products.map((item) => (
						<li className="list-none hover:border border-b-1 p-2 hover:text-xl cursor-pointer">
							{item.id}
							{".   "}
							{item.title}
						</li>
					))}
				</div>
			) : (
				<div className="text-4xl underline">Fething Data...</div>
			)}
		</div>
	);
}
