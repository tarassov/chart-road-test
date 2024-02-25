import { MaxSpeed, Surface } from "@/types";

export const TrackColors: Record<Surface, string> = {
	[Surface.SAND]: "#e5e466",
	[Surface.GROUND]: "#5fe15f",
	[Surface.ASPHALT]: "#a69fa4",
};
export const SpeedColors: Record<MaxSpeed, string> = {
	[MaxSpeed.SLOW]: "#1b2ce5",
	[MaxSpeed.NORMAL]: "#085908",
	[MaxSpeed.FAST]: "#880b1d",
};
