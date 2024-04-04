import { useEffect, useState } from "react";
import Autocomplete from "./Autocomplete";

export default function SearchUser() {
	const [users, setUsers] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [dropdown, setDropdown] = useState(false);
	const [arrowHover, setArrowHover] = useState(-1);
	const [searchParams, setSearchParams] = useState("");
	const [filteredUsers, setFilteredUsers] = useState([]);

	const fetchingData = async () => {
		try {
			setLoading(true);
			const response = await fetch("https://dummyjson.com/users"); //put all data to usersfirst
			const data = await response.json();
			if (data.users && data.users.length) {
				setLoading(false);
				setUsers(data.users);
			}
		} catch (error) {
			setLoading(false);
			setError(error);
		}
	};

	const handleChange = (e: string) => {
		setSearchParams(e);
		const query = e.toLowerCase();
		const filteredData =
			users && users.length && query.length > 1
				? users.filter(
						(item) =>
							item.firstName.toLowerCase().indexOf(query) > -1 ||
							item.lastName.toLowerCase().indexOf(query) > -1 ||
							item.maidenName.toLowerCase().indexOf(query) > -1 )
				: [];

		if (filteredData.length) {
			setLoading(false);
			setFilteredUsers(filteredData);
			setDropdown(true);
			setArrowHover(-1);
			console.log(filteredUsers);
		} else {
			setDropdown(false);
		}
	};

	useEffect(() => {
		fetchingData();
	}, []);

	if (error) {
		setLoading(false);
		console.log(error);
	}

	const handlePick = (e: string) => {
		//@ts-ignore
		const text = e?.target?.innerText;
		setSearchParams(text);
		setFilteredUsers([]);
		setDropdown(false);
		setArrowHover(-1);
	};

	const handleScroll = (e) => {
		if (e.key === "ArrowDown") {
			arrowHover < filteredUsers.length - 1
				? setArrowHover(arrowHover + 1)
				: setArrowHover(0);
		} else if (e.key === "ArrowUp") {
			arrowHover !== 0
				? setArrowHover(arrowHover - 1)
				: setArrowHover(filteredUsers.length - 1);
		} else if (e.key === "Enter") {
			setSearchParams(
				`${filteredUsers[arrowHover].firstName} ${filteredUsers[arrowHover].lastName} ${filteredUsers[arrowHover].maidenName}`
			);
			setArrowHover(-1);
			setDropdown(false);
		}
	};

	return loading ? (
		<h1>Getting users data</h1>
	) : (
		<div>
			<input
				className="border border-black text-black rounded  px-4 py-1 w-[400px]"
				type="text"
				value={searchParams}
				onChange={(e) => handleChange(e.target.value)}
				onKeyDown={(e) => handleScroll(e)}
			/>
			{dropdown ? (
				<Autocomplete
					onArrowHover={arrowHover}
					filteredUsers={filteredUsers}
					onPick={handlePick}
				/>
			) : null}
		</div>
	);
}
