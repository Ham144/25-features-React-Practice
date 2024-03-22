export const Menuitems = [
	{
		label: "Home",
		to: "/",
	},
	{
		label: "products",
		to: "/products",
		children: [
			{
				label: "clothes",
				to: "clothes",
			},
			{
				label: "furniture",
				to: "furniture",
			},
		],
	},
	{
		label: "settings",
		to: "/settings",
		children: [
			{
				label: "user settings",
				to: "userSettings",
				children: [
					{
						label: "profile",
						to: "profile",
					},
					{
						label: "security",
						to: "security",
					},
					{
						label: "data",
						to: "data",
						children: [
							{
								label: "delete account",
								to: "deleteAccount",
							},
							{
								label: "freeze account",
								to: "freezeAccount",
							},
						],
					},
				],
			},
			{
				label: "app settings",
				to: "appSettings",
			},
		],
	},
	{
		label: "log out",
		to: "/logOut",
	},
];
