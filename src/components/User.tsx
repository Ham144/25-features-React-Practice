export default function User({ userData }) {
	const { avatar_url, bio, html_url, id, location, name, public_repos } =
		userData;

	return (
		<div className="flex border border-green-300 px-20 py-3 my-3 flex-wrap rounded-e-xl text-green-400 sm:justify-center">
			<div className="image flex flex-col  justify-center gap-3">
				<img
					className="w-[300px] aspect-square bg-contain border shadow-lg rounded-sm hover:blur-sm"
					src={avatar_url}
					alt={name}
				/>
				<h1 className="text-3xl text-green-400">{name}</h1>
			</div>

			<div className="flex flex-col justify-start gap-y-3">
				<h2 className="font-bold">Detail : </h2>
				<p>Bio : {bio ? bio : "--"}</p>
				<p>Public Repo : {public_repos}</p>
				<p>Id: {id}</p>
				<p>Country : {location}</p>
				<a
					className=" sm:absolute  sm:translate-y-[200px] no-underline dark border p-3 text-black drop-shadow-xl text-wrap w-[200px] text-2xl hover:font-extrabold scale-105 "
					href={html_url}
				>
					Visit For more info here..
				</a>
			</div>
		</div>
	);
}
