import { useState } from "react";
import useMatchMedia from "./hooks/useMatchMedia";
import "./App.css";
import React from "react";
import { Button, Icon, TestButton } from "./components";
import { TokenProvider } from "./tokens-config/TokenContext";

function App() {
	return (
		<TokenProvider>
			<div className="App">
				<Button.Primary>
					<Icon.Add />
					Label
				</Button.Primary>
				<TestButton label="test" />
			</div>
		</TokenProvider>
	);
}

export default App;
