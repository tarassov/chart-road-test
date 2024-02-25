import { arrayOfPoints, mockTrack } from "mock/mock-track";
import { getCommonDivisor } from "utils/get-common-divisor";
import { useCallback, useMemo } from "react";
import { CharBar, Track, TransformedData } from "@/types";

export const useData = () => {
	const fetchedData = mockTrack;
	const fetchedPoints = arrayOfPoints;
	const points = fetchedData.map((x) => x.firstId);

	const minStep = useMemo(() => {
		return getCommonDivisor(fetchedData.map((x) => x.distance));
	}, [fetchedData]);
	const maxHeight = useMemo(
		() => [...fetchedPoints].sort((a, b) => b.height - a.height)?.[0].height,
		[fetchedPoints]
	);
	const getDistanceForPoint = useCallback(
		(dataForCheck: Array<Track>, pointId?: number) => {
			const filtered = pointId ? dataForCheck.filter((x) => x.firstId <= pointId) : fetchedData;
			return filtered.reduce((acc, curr) => acc + curr.distance, 0);
		},
		[fetchedData]
	);

	const pointsData = useMemo(() => {
		let pointsWithTotalDistance: Array<number> = [];
		for (let p = 0; p < points.length; p++) {
			const distance = getDistanceForPoint(fetchedData, points[p]);
			pointsWithTotalDistance = [...pointsWithTotalDistance, distance];
		}
		return pointsWithTotalDistance;
	}, [fetchedData, getDistanceForPoint, points]);

	const transformedData = useMemo(() => {
		return fetchedData.reduce(
			(acc, curr) => {
				const countSteps = curr.distance / minStep;
				let distance = acc.runningDistance;
				let stepsToAdd: Array<CharBar> = [];

				for (let i = 0; i < countSteps; i++) {
					distance += minStep;
					stepsToAdd = [
						...stepsToAdd,
						{
							...curr,
							isFirstPoint: i === 0,
							isLastPoint: i === countSteps - 1,
							stepInTrack: i,
							step: distance.toString(),
							distance,
							value: maxHeight,
						},
					];
				}
				// console.log(curr.secondId, distance);
				return {
					runningDistance: distance,
					colors: { [distance]: curr.surface },
					data: [...acc.data, ...stepsToAdd],
				};
			},
			{
				runningDistance: 0,
				data: [
					{
						step: "0",
						distance: 0,
						firstId: 0,
						secondId: 1,
						value: maxHeight,
						isFirstPoint: false,
						isLastPoint: true,
					},
				] as Array<CharBar>,
			} as TransformedData
		);
	}, [fetchedData, maxHeight, minStep]);

	return { transformedData, pointsData, minStep, fetchedPoints };
};
