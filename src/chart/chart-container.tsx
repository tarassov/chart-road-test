import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { SimpleCharts } from "@/chart/bar-chart";
import { useData } from "@/chart/use-data";
import { getSpeedSeriesFactory } from "@/chart/helpers/get-speed-series";
import { ModalLoader } from "@/components/modal-loader";

export const ChartContainer = () => {
	const [, forceRerender] = useState({});
	const { transformedData, pointsData, minStep, fetchedPoints, generateNew, isLoading } = useData();

	useEffect(() => {
		let timeout: NodeJS.Timeout;
		const handleResize = () => {
			clearTimeout(timeout);

			timeout = setTimeout(() => {
				forceRerender({});
			}, 1000);
		};
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [forceRerender]);

	const seriesGetter = getSpeedSeriesFactory(transformedData, fetchedPoints, pointsData);

	return (
		<>
			<div>
				<Button onClick={generateNew}>Generate new</Button>
			</div>
			<Box
				sx={{
					display: "flex",
					flexGrow: 1,
				}}
			>
				{transformedData.data.length ? (
					<SimpleCharts
						transformedData={transformedData}
						seriesGetter={seriesGetter}
						points={fetchedPoints}
					/>
				) : null}
			</Box>

			<div>RunningDistance: {transformedData.runningDistance}</div>
			<div>Min step: {minStep}</div>
			<ModalLoader loading={isLoading} />
		</>
	);
};
