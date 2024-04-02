import { useEffect, useState } from "react";
import Search from "./Search";

export default function Weather() {
	const [search, setSearch] = useState("jakarta");
	const [loading, setLoading] = useState(false);
	const [weatherData, setWhethearData] = useState(null);
	const [error, setError] = useState(null);

	const fetchingData = async () => {
		try {
			setLoading(true);
			const response = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=317a4df7d88c3e40bcec48696a0ee27c`
			);

			if (!response) {
				return <div>Error beceause city name not found</div>;
			}
			const data = await response.json();

			try {
				setWhethearData(data);
				console.log(weatherData);
			} catch (error) {
				console.log("error occured while asigning data to weatherData", error);
			}
		} catch (error) {
			setLoading(false);
			console.log(error);
			setError(error);
		}
	};

	useEffect(() => {
		fetchingData();
	}, []);

	function handleSearch(params: string) {
		setSearch(params);
		fetchingData();
	}

	if (error) {
		console.log(error);
		setLoading(false);
		return <div>Error Occured</div>;
	}

	return (
		<div className="flex flex-col border px-7 py-2 rounded-xl w-[80%] justify-center items-center dark bg-violet-50">
			<Search
				search={search}
				setSearch={setSearch}
				handleSearch={handleSearch}
			/>

			{loading ? (
				<div className="flex items-center flex-col gap-y-4">
					<div className="grid grid-cols-2 gap-x-9 weather-data items-center">
						<h2 className="uppercase text-4xl">
							{weatherData?.name}, {weatherData?.sys?.country}
						</h2>
						<div>
							<h2 className="text-3xl">{weatherData?.weather[0]?.main}</h2>
							<p className="">{weatherData?.weather[0]?.description}</p>
						</div>
					</div>
					<div className="flex items-center gap-x-3">
						<div className="flex flex-col items-center">
							<p className="border-b-2">Temprature</p>
							{weatherData?.main?.temp}
						</div>
						<div className="flex flex-col items-center">
							<p className="border-b-2">Maximum</p>
							{weatherData?.main?.temp_max}
						</div>
						<div className="flex flex-col items-center">
							<p className="border-b-2">Minimum</p>
							{weatherData?.main?.temp_min}
						</div>
						<div className="flex flex-col items-center">
							<p className="border-b-2">Feels Like</p>
							{weatherData?.main?.feels_like}
						</div>
						<div className="flex flex-col items-center">
							<p className="border-b-2">Humidity</p>
							{weatherData?.main?.humidity}
						</div>
					</div>
				</div>
			) : (
				<div>Calling Angel</div>
			)}
		</div>
	);
}
