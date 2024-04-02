import usewindowResize from ".";

export default function UseWindowResizeTest() {
	const windowSize = usewindowResize();
	const { width, height } = windowSize;

	return (
		<div className=" text-center">
			<h2 className="text-4xl font-bold ">Window Size</h2>
			<h2 className="text-3xl ">Width is : {width}</h2>
			<h2 className="text-3xl ">height is : {height}</h2>
		</div>
	);
}
