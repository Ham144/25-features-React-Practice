import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useEffect, useState } from "react";
import ShowFlagsDataResponse from "./data";
export const FlagsContext = createContext(null);
export default function ShowFlagsDataGlobal({ children }) {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [enabledFlags, setEnableFlags] = useState({});
    const fecthingFlags = async () => {
        try {
            setLoading(true);
            const response = await ShowFlagsDataResponse();
            setEnableFlags(response);
            setLoading(false);
        }
        catch (error) {
            setLoading(false);
            console.log(error);
            throw new Error(error);
        }
    };
    useEffect(() => {
        fecthingFlags();
    }, []);
    return (_jsx("div", { className: "flex justify-center items-center", children: _jsx(FlagsContext.Provider, { value: { enabledFlags, loading }, children: children }) }));
}
