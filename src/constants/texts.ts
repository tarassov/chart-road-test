import { MaxSpeed, Surface } from "@/types";

export const SurfaceNames: Record<Surface, string> = {
	[Surface.SAND]: "Зыбучие пески",
	[Surface.GROUND]: "Травки и цветочки",
	[Surface.ASPHALT]: "Серый асфальт",
};
export const SpeedNames: Record<MaxSpeed, string> = {
	[MaxSpeed.SLOW]: "Черепаха",
	[MaxSpeed.NORMAL]: "Бодрая рысь",
	[MaxSpeed.FAST]: "Комета",
};
