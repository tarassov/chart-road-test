import { Point, Track } from "@/types";
import { get, post } from "@/api/api-base";

export const pointsApi = {
	getAllPoints: async () => {
		const res = await get<Array<Point>>(`routePoint`);
		return res;
	},
	getAllTracks: async () => {
		const res = await get<Array<Track>>(`track`);
		return res;
	},
	generateNew: async () => {
		const res = await post<Array<Track>>(`track/seed`);
		return res;
	},
};
