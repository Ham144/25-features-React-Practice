import { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";

type Props = {
	label: string;
	message: string;
	confirm: string;
	cancel: string;
	show: boolean;
	customConfirm?: () => void;
};

export default function CustomModal(props: Props) {
	const [show, setShow] = useState(true);
	const [feedback, setFeedback] = useState(-1);

	const handleConfirm = () => {
		setFeedback(1);
		props.customConfirm ? props.customConfirm() : null;
		setShow(false);
	};

	const handleCancel = () => {
		setFeedback(0);
		setShow(false);
	};

	const handleClose = () => {
		setShow(false);
	};

	switch (feedback) {
		case 1:
			console.log("You clicked confirm");
			break;
		case 0:
			console.log("You cliced cancel");
			break;
		default:
			break;
	}

	useEffect(() => {
		setShow(!show);
	}, [props.show === true]);

	return (
		<div
			className={`${
				show ? "" : "hidden"
			} w-[99%] h-screen fixed top-0  backdrop-blur-sm shadow-lg z-10 justify-center items-center `}
		>
			<div
				className={` popup fixed mx-auto my-auto top-0 bottom-0 right-0 left-0 bg-blue-400 px-9 justify-between rounded-sm  h-[140px] w-[410px] `}
			>
				<GrClose
					onClick={handleClose}
					className="flex translate-x-[345px]  text-red-500"
					size={30}
				/>
				<h1>{props.label ? props.label : "Title of modal"}</h1>
				<div className="message">
					<p>{props.message ? props.message : "Something gone wrong"}</p>
				</div>
				<div className="flex justify-center self-end py-9 gap-x-4">
					<button
						className="bg-blue-400 hover:font-bold"
						onClick={handleConfirm}
					>
						{props.confirm ? props.confirm : "OK"}
					</button>
					{props.cancel ? (
						<button className="  hover:font-bold" onClick={handleCancel}>
							{props.cancel}
						</button>
					) : null}
				</div>
			</div>
		</div>
	);
}
