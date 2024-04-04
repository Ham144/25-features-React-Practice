import { BiDownArrowCircle } from "react-icons/bi";
import { NavLink } from "react-router-dom";

export default function Navbar2() {
	return (
		<nav className="flex flex-col justify-center items-center">
			<h2>Simple Navigation Example</h2>
			<form>
				<input
					type="text"
					name="search"
					placeholder="Type here.."
					className="bg-white border rounded-full w-[300px] text-black dark"
				/>
			</form>

			<ul className="flex mt-3 ">
				<li>
					<NavLink
						to={"/"}
						className="px-4 py-1  border rounded-full hover:border-none hover:bg-slate-400 active:bg-red-300 "
					>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						className="px-4 py-1  border rounded-full hover:border-none hover:bg-slate-400 active:bg-red-300 "
						to={"/gallery"}
					>
						Gallery
					</NavLink>
				</li>
				<li>
					<NavLink
						to={"/about"}
						className="px-4 py-1  border rounded-full hover:border-none hover:bg-slate-400 active:bg-red-300 "
					>
						About
					</NavLink>
				</li>
			</ul>
			<div className="flex text-7xl">
				<div className="w-[70px] "></div>
				<BiDownArrowCircle />
				<BiDownArrowCircle />
			</div>
		</nav>
	);
}
