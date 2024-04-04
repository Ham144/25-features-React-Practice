import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
export default function Autocomplete({ filteredUsers, onPick, onArrowHover }) {
    return (_jsx("ul", { className: "dark border border-white", children: filteredUsers.length
            ? filteredUsers.map((user, index) => (_jsxs("li", { className: `${index === onArrowHover
                    ? "font-extrabold dark  bg-blue-500 border"
                    : "bg-blue-300"}
                        dark hover:border border-white cursor-pointer`, onClick: (e) => onPick(e), children: [user.firstName, " ", user.lastName, " ", user.maidenName] })))
            : null }));
}
