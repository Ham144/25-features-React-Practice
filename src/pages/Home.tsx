import Header from "../components/Header";

const Home = () => {
	return (
		<main className="flex flex-col mx-auto   ">
			<Header />
			<div className="grid p-2 grid-cols-2 mt-[100px] sm:px-40 py-9  mx-auto items-center justify-items-center font-extralight bg-gradient-to-r from-white to-slate-100">
				<img
					className=""
					src={"src/assets/people-white.jpg"}
					alt="people"
					width={200}
					height={200}
				/>
				<div className="sm:text-6xl text-2xl text-right hover:drop-shadow-xl">
					I create this Website for practice and save some of my feature code
					snippets that i mostly used
				</div>
			</div>
		</main>
	);
};

export default Home;
