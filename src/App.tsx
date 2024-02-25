import React from "react";
import { Box } from "@mui/material";
import { ChartContainer } from "@/chart/chart-container";

const App = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				flexGrow: 1,
				padding: 1,
			}}
		>
			<ChartContainer />{" "}
		</Box>
	);
};

export default App;
