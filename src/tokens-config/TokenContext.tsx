// biome-ignore lint/style/useImportType: <explanation>
import React from "react";
import {
	createContext,
	useContext,
	type ReactNode,
	useEffect,
	useState,
} from "react";
import { loadTokens } from "./loadTokens";

interface TokenContextType {
	componentTokens: any;
}

const TokenContext = createContext<TokenContextType | undefined>(undefined);

export const TokenProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [componentTokens, setComponentTokens] = useState<any>(null);

	useEffect(() => {
		const fetchTokens = async () => {
			try {
				const { componentTokens } = await loadTokens();
				setComponentTokens(componentTokens);
			} catch (error) {
				console.error("Error loading tokens:", error);
			}
		};

		fetchTokens();
	}, []);

	if (!componentTokens) {
		return <div>Loading...</div>;
	}

	return (
		<TokenContext.Provider value={{ componentTokens }}>
			{children}
		</TokenContext.Provider>
	);
};

export const useTokens = () => {
	const context = useContext(TokenContext);
	if (context === undefined) {
		throw new Error("useTokens must be used within a TokenProvider");
	}
	return context;
};
