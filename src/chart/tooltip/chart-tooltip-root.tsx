import { Popper, styled } from "@mui/material";

export const ChartTooltipRoot = styled(Popper, {
	name: "MuiChartsTooltip",
	slot: "Root",
	overridesResolver: (_, styles) => styles.root,
})(({ theme }) => ({
	pointerEvents: "none",
	zIndex: theme.zIndex.modal,
}));
