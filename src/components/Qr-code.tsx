import { useState } from "react";
import QRCode from "react-qr-code";

export default function QrCode() {
	const [QrCode, setQrCode] = useState("");
	const [input, setInput] = useState("");

	function handleGenerateQR() {
		setQrCode(input);
	}

	return (
		<div className="flex flex-col items-center border border-blue-300 rounded-sm p-8">
			<h2>QR Code Generator</h2>
			<input
				className="border p-2 w-[200px] bg-slate-200"
				type="text"
				value={input}
				onChange={(e) => setInput(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						handleGenerateQR();
					}
				}}
			/>
			<button
				className="border p-5 my-3 rounded-sm hover:bg-slate-100"
				onClick={handleGenerateQR}
			>
				GENERATE NOW
			</button>
			<QRCode value={QrCode} />
		</div>
	);
}
