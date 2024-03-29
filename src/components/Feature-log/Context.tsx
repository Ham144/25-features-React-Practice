import { createContext } from "react";

export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagsGlobalState({ children }) {
	return (
		<FeatureFlagsContext.Provider value={{}}>
			{children}
		</FeatureFlagsContext.Provider>
	);
}
