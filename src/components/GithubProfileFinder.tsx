import { useEffect, useState } from "react";
import User from "./User";

export default function GithubProfileFinder() {
	const [userName, setUserName] = useState("ham144");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [userData, setUserDAta] = useState(null);

	if (loading) {
		return <div>Searching Data..</div>;
	}

	if (error) {
		return <div>Something Gone Wrong {error} </div>;
	}
	const fetchData = async (userName: string) => {
		try {
			setLoading(true);
			const response = await fetch(
				`  https://api.github.com/users/${userName}`
			);
			const data = await response.json();
			setUserDAta(data);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			setError(error);
			console.log("error from catch", error);
		}
	};

	const handleEnter = () => {
		fetchData(userName);
		setUserName("");
	};
	return (
		<div>
			<div className="flex flex-col justify-center items-center inputName">
				<input
					className="rounded-lg text-black py-2 px-4 "
					type="text"
					placeholder="Search Username here"
					onChange={(e) => setUserName(e.target.value)}
					value={userName}
					onKeyDown={(e) => (e.key === "Enter" ? handleEnter() : null)}
				/>
				<input
					className="border dark px-5 py-1 mt-4"
					type="button"
					onClick={handleEnter}
					value="enter"
				/>
			</div>
			{userData ? <User userData={userData} /> : <div>Loading..</div>}
		</div>
	);
}
