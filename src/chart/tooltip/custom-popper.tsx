import { PopperProps } from "@mui/material";
import React from "react";
import { ChartTooltipRoot } from "@/chart/tooltip/chart-tooltip-root";

export const CustomPopper = (props: PopperProps) => {
	return <ChartTooltipRoot {...props} />;
};
