export default function Autocomplete({ filteredUsers, onPick, onArrowHover }) {
	return (
		<ul className="dark border border-white">
			{filteredUsers.length
				? filteredUsers.map((user, index) => (
						<li
							className={`${
								index === onArrowHover
									? "font-extrabold dark  bg-blue-500 border"
									: "bg-blue-300"
							}
                        dark hover:border border-white cursor-pointer`}
							onClick={(e) => onPick(e)}
						>
							{user.firstName} {user.lastName} {user.maidenName}
						</li>
				  ))
				: null}
		</ul>
	);
}
