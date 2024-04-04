import { useEffect } from "react";
export default function OutsideClickUtil(ref, handler) {
    useEffect(() => {
        const clicked = (event) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener("mousedown", (e) => clicked(e));
        document.addEventListener("touchstart", (e) => clicked(e));
        return () => {
            document.removeEventListener("mousedown", clicked);
            document.removeEventListener("touchstart", clicked);
        };
    }, [ref]);
}
