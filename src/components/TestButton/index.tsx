// biome-ignore lint/style/useImportType: <explanation>
import React from "react";
import { useTokens } from "../../tokens-config/TokenContext";

interface TestButtonProps {
	label: string;
}

export const TestButton: React.FC<TestButtonProps> = ({ label }) => {
	const { componentTokens } = useTokens();

	console.log(componentTokens);

	const BG = { Initial: componentTokens.ButtonPrimary.BG.Initial };

	if (!componentTokens) {
		return <p>no component tokens</p>;
	}

	return (
		<button type="button" style={{ backgroundColor: BG.Initial }}>
			{label}
		</button>
	);
};
