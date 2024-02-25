import {
	axisClasses,
	markElementClasses,
	BarPlot,
	ChartsTooltip,
	ChartsXAxis,
	ChartsYAxis,
	ResponsiveChartContainer,
	AllSeriesType,
} from "@mui/x-charts";
import React, { FC } from "react";
import { LinePlot, MarkPlot } from "@mui/x-charts/LineChart";
import { Box } from "@mui/material";
import { MaxSpeed, Point, TransformedData } from "@/types";
import { getTooltipSlot } from "@/chart/helpers/get-tooltip-slot";
import { CustomPopper } from "@/chart/tooltip/custom-popper";
import { getBarElementSlot } from "@/chart/helpers/get-bar-element-slot";
import { CONTAINER_HEIGHT, HEIGHT } from "@/constants/size";

const chartSetting = {
	yAxis: [
		{
			label: "Height",
		},
	],
	height: HEIGHT,
	sx: {
		[`.${markElementClasses.root} `]: {
			"&:hover": {
				cursor: "pointer",
			},
		},
		[`.${axisClasses.directionX} `]: {
			[`.${axisClasses.tickLabel} `]: {
				transform: "rotate(90deg) translate(30px, -14px)",
			},
		},
		[`.${axisClasses.label} `]: {
			display: "none",
		},
		[`.${axisClasses.tick} `]: {
			display: "none",
		},
	},
};

export const SimpleCharts: FC<{
	transformedData?: TransformedData;
	points?: Array<Point>;
	seriesGetter: (speed: MaxSpeed) => AllSeriesType;
}> = ({ transformedData, seriesGetter, points }) => {
	if (!transformedData?.data?.length) return null;

	return (
		<Box sx={{ height: CONTAINER_HEIGHT, width: "100%", div: { height: CONTAINER_HEIGHT } }}>
			<ResponsiveChartContainer
				// @ts-ignore
				dataset={transformedData.data}
				xAxis={[
					// @ts-ignore
					{
						scaleType: "band",
						dataKey: "step",
						data: transformedData.data.map((x) => x.distance),
						// @ts-ignore
						barGapRatio: 0,
						categoryGapRatio: 0,
						valueFormatter: (value) => `${value} km`,
					},
				]}
				series={[
					{
						type: "bar",
						dataKey: "value",
					},
					{
						...seriesGetter(MaxSpeed.SLOW),
					},
					{
						...seriesGetter(MaxSpeed.NORMAL),
					},
					{
						...seriesGetter(MaxSpeed.FAST),
					},
				]}
				{...chartSetting}
			>
				<BarPlot slots={{ bar: getBarElementSlot(transformedData) }} />
				<LinePlot />
				<MarkPlot />
				<ChartsTooltip
					trigger="item"
					slots={{ itemContent: getTooltipSlot(transformedData, points), popper: CustomPopper }}
				/>
				<ChartsXAxis label="Distance" />
				<ChartsYAxis label="Height" />
			</ResponsiveChartContainer>
		</Box>
	);
};
