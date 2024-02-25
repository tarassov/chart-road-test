import { AllSeriesType, ShowMarkParams } from "@mui/x-charts";
import { MaxSpeed, Point, TransformedData } from "@/types";
import { SpeedColors } from "@/constants/colors";

export const getSpeedSeriesFactory = (
	data: Pick<TransformedData, "data">,
	points: Array<Point>,
	pointData?: Array<number>
) => {
	return (speed: MaxSpeed): AllSeriesType => {
		return {
			type: "line",
			data: data.data.map((x) => {
				if (x.maxSpeed !== speed) return null;
				const point = points.find(
					(p) => p.id === x.secondId || (x.isFirstPoint && p.id === x.firstId)
				);
				return point?.height || null;
			}),
			color: SpeedColors[speed],
			showMark: (params: ShowMarkParams) => {
				return pointData?.includes(params.position as any as number) || params.index === 1 || false;
			},
		};
	};
};
