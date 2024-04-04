import { createContext, useEffect, useState } from "react";

const ScrollPercentageContext = createContext(null); //this one which is called context
const ScrollPercentage = ({ children }) => {
	//this one that is called provider
	const [scrollPercentage, setScrollPercentage] = useState(0);
	const [isLoading, setIsloading] = useState(false);
	const [error, setError] = useState<Error | unknown>(null);
	const [products, setProducts] = useState([]);

	async function fetchingData() {
		try {
			setIsloading(true);
			const response = await fetch("https://dummyjson.com/products?limit=300");
			const data = await response.json();

			setIsloading(false);
			setProducts(data.products);
		} catch (error: unknown) {
			setError(error);
			setIsloading(false);
		}
	}

	function handleScrolled() {
		const scrolled =
			document.body.scrollTop || document.documentElement.scrollTop;
		const balancer =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;
		setScrollPercentage((scrolled / balancer) * 100);
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScrolled);
		return () => {
			window.removeEventListener("scroll", () => {});
		};
	});

	useEffect(() => {
		fetchingData();
	}, []);

	if (isLoading) {
		<div>loading...</div>;
	}
	if (error) {
		<div>error</div>;
	}

	return (
		<ScrollPercentageContext.Provider value={{ scrollPercentage }}>
			{children}
			<div className="flex flex-col justify-center items-center">
				<h2 className="font-bold text-2xl">
					Blue Bar Percentage upthere is part of ScrollPercentage components
				</h2>
				<div className=" fixed top-0 h-2 z-30 w-screen bg-blue-50 ">
					<div
						style={{ width: `${scrollPercentage}%` }}
						className="bar  h-full bg-blue-500"
					></div>
				</div>

				{products.map((product) => (
					<div className="hover:font-bold cursor-pointer">{product.title}</div>
				))}
			</div>
		</ScrollPercentageContext.Provider>
	);
};

export const ScrollPercentageContexts = ScrollPercentageContext;
export default ScrollPercentage;
