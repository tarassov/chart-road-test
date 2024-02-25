import { BarElement } from "@mui/x-charts";
import { useEffect, useState } from "react";
import { TransformedData } from "@/types";
import { TrackColors } from "@/constants/colors";
import { BAR_HEIGHT, BAR_Y } from "@/constants/size";

export const getBarElementSlot = (surfaceDict: Pick<TransformedData, "data">) => {
	return function Element(props: any) {
		const { ownerState, style } = props;
		const { surface } = surfaceDict?.data?.[ownerState?.dataIndex] || {};

		const [x, setX] = useState(
			style.x.animation.to ? style.x.animation.to - style.width.animation.to / 2 : 0
		);
		const fillColor = TrackColors[surface];

		useEffect(() => {
			setX(style.x.animation.to ? style.x.animation.to - style.width.animation.to / 2 : 0);
		}, [style.width.animation.to, style.x.animation.to]);

		if (ownerState.dataIndex === 0) {
			return <rect />;
		}
		return (
			<BarElement
				color={fillColor}
				dataIndex={ownerState.dataIndex}
				height={BAR_HEIGHT}
				id={ownerState?.dataIndex}
				x={x}
				width={style.width.animation.to}
				y={BAR_Y}
			/>
		);
	};
};
