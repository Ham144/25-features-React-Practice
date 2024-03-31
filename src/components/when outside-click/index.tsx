import { useRef, useState } from "react";
import OutsideClickUtil from "./outsideClickutil";

export default function TestOutsideClick() {
	const [showTogglableComponet, setShowTogglableComponent] = useState(false);
	const ref = useRef();

	OutsideClickUtil(ref, () => setShowTogglableComponent(false));

	return (
		<div className="w-[500px] text-wrap mx-auto  ">
			<div className="border-4  px-4 py-1 text-center">
				{showTogglableComponet ? (
					<div ref={ref}>
						IF you click Outside of this text area, this text will be gone" IF
						you click Outside of this text area, this text will be gone" IF you
						click Outside of this text area, this text will be gone" IF you
						click Outside of this text area, this text will be gone" IF you
						click Outside of this text area, this text will be gone"
					</div>
				) : (
					<button onClick={() => setShowTogglableComponent(true)}>
						Show Component again
					</button>
				)}
			</div>
		</div>
	);
}
