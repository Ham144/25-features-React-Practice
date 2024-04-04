import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=317a4df7d88c3e40bcec48696a0ee27c`);
            if (!response) {
                return _jsx("div", { children: "Error beceause city name not found" });
            }
            const data = await response.json();
            try {
                setWhethearData(data);
                console.log(weatherData);
            }
            catch (error) {
                console.log("error occured while asigning data to weatherData", error);
            }
        }
        catch (error) {
            setLoading(false);
            console.log(error);
            setError(error);
        }
    };
    useEffect(() => {
        fetchingData();
    }, []);
    function handleSearch(params) {
        setSearch(params);
        fetchingData();
    }
    if (error) {
        console.log(error);
        setLoading(false);
        return _jsx("div", { children: "Error Occured" });
    }
    return (_jsxs("div", { className: "flex flex-col border px-7 py-2 rounded-xl w-[80%] justify-center items-center dark bg-violet-50", children: [_jsx(Search, { search: search, setSearch: setSearch, handleSearch: handleSearch }), loading ? (_jsxs("div", { className: "flex items-center flex-col gap-y-4", children: [_jsxs("div", { className: "grid grid-cols-2 gap-x-9 weather-data items-center", children: [_jsxs("h2", { className: "uppercase text-4xl", children: [weatherData?.name, ", ", weatherData?.sys?.country] }), _jsxs("div", { children: [_jsx("h2", { className: "text-3xl", children: weatherData?.weather[0]?.main }), _jsx("p", { className: "", children: weatherData?.weather[0]?.description })] })] }), _jsxs("div", { className: "flex items-center gap-x-3", children: [_jsxs("div", { className: "flex flex-col items-center", children: [_jsx("p", { className: "border-b-2", children: "Temprature" }), weatherData?.main?.temp] }), _jsxs("div", { className: "flex flex-col items-center", children: [_jsx("p", { className: "border-b-2", children: "Maximum" }), weatherData?.main?.temp_max] }), _jsxs("div", { className: "flex flex-col items-center", children: [_jsx("p", { className: "border-b-2", children: "Minimum" }), weatherData?.main?.temp_min] }), _jsxs("div", { className: "flex flex-col items-center", children: [_jsx("p", { className: "border-b-2", children: "Feels Like" }), weatherData?.main?.feels_like] }), _jsxs("div", { className: "flex flex-col items-center", children: [_jsx("p", { className: "border-b-2", children: "Humidity" }), weatherData?.main?.humidity] })] })] })) : (_jsx("div", { children: "Calling Angel" }))] }));
}
