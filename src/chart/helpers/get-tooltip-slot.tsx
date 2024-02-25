import { Paper, Typography } from "@mui/material";
import React from "react";
import { Point, TransformedData } from "@/types";
import { SpeedNames, SurfaceNames } from "@/constants/texts";

export const getTooltipSlot = (
	surfaceDict: Pick<TransformedData, "data">,
	arrayOfPoint: Array<Point> = []
) => {
	return function element(props: any) {
		const { itemData } = props;
		const item = surfaceDict.data[itemData.dataIndex === 1 ? 0 : itemData.dataIndex];
		const nextItem = surfaceDict.data[itemData.dataIndex === 1 ? 1 : itemData.dataIndex + 1];
		if (!item?.isLastPoint) return null;

		const point = arrayOfPoint.find((x) => x.id === item.secondId);

		return (
			<Paper
				sx={{
					padding: 1,
				}}
			>
				<Typography variant="h6"> {point?.name}</Typography>
				<Typography variant="subtitle2"> Пройдено: {item.distance} км</Typography>
				<Typography variant="subtitle2"> Высота: {point?.height} м</Typography>
				{item ? (
					<Typography variant="subtitle2"> Поверхность до: {SurfaceNames[item.surface]}</Typography>
				) : null}
				{nextItem && (
					<Typography variant="subtitle2">
						Поверхность после {SurfaceNames[nextItem.surface]}
					</Typography>
				)}
				{item ? (
					<Typography variant="subtitle2">
						Максимальная скорость до: {SpeedNames[item.maxSpeed]}
					</Typography>
				) : null}
				{nextItem && (
					<Typography variant="subtitle2">
						Максимальная скорость после: {SpeedNames[nextItem.maxSpeed]}
					</Typography>
				)}
			</Paper>
		);
	};
};
