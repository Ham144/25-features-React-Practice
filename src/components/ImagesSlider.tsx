import { useEffect, useState } from "react";
import { FcNext, FcPrevious } from "react-icons/fc";

interface Props {
	url: string;
	limit: number;
}

export default function ImagesSlider(props: Props) {
	const [images, setImages] = useState([]);
	const [currentSlide, setCurrentSlide] = useState(0);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const fetchingData = async () => {
		try {
			setIsLoading(true);
			const response = await fetch(`${props.url}?limit=${props.limit}`);
			const data = await response.json().then((quote) => quote.quotes);

			setImages(data);
			console.log(images);
		} catch (error) {
			setIsLoading(false);
			setError(String(error));
		}
	};

	useEffect(() => {
		fetchingData();
	}, [props.url]);

	// if (error) {
	// 	alert("Oops, we cought by police" + error);
	// }

	const next = () => {
		currentSlide === images.length - 1
			? setCurrentSlide(0)
			: setCurrentSlide(currentSlide + 1);
	};

	const previous = () => {
		currentSlide === 0
			? setCurrentSlide(images.length - 1)
			: setCurrentSlide(currentSlide - 1);
	};

	const handleMarble = (index: number) => {
		setCurrentSlide(index);
	};

	return (
		<div className="flex  items-center  gap-x-3 w-[99%] sm:w-[700px]">
			<FcPrevious
				className="hover:scale-105   hover:bg-blue-200 rounded-md "
				size={60}
				onClick={previous}
			/>
			{images.map((image, index) => (
				<div
					className={`${
						index !== currentSlide ? "hidden" : ""
					} flex flex-col justify-between w-full items-center  sm:h-auto gap-y-2 flex-wrap text-center border border-none  bg-transparent rounded-sm font-bold italic text-2xl  px-2 `}
				>
					<div className=" mx-auto space-y-4 w-full">
						<p className="bg-blue-100 text-black p-2 px-8 rounded-sm ">
							{index}
						</p>
						<div key={image.id}>{image.quote}</div>
						<p className="font-light">~{image.author}~</p>
						<div className=" marble grid grid-cols-10 text-black gap-y-2 w-full  ">
							{images.map((_, index) => (
								<button
									className={`${
										index === currentSlide
											? "bg-blue-300 border border-black"
											: ""
									} w-8 h-8  hover:bg-slate-400  cursor-pointer rounded-full bg-slate-300 transition-all  text-center     `}
									onClick={() => handleMarble(index)}
								>
									{index}
								</button>
							))}
						</div>
					</div>
				</div>
			))}
			<FcNext
				className="hover:scale-105 hover:bg-blue-200 rounded-md "
				size={60}
				onClick={next}
			/>
		</div>
	);
}
