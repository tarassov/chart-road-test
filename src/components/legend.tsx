import { Box, Stack, Typography } from "@mui/material";
import { SpeedColors, TrackColors } from "@/constants/colors";
import { MaxSpeed, Surface } from "@/types";
import { SpeedNames, SurfaceNames } from "@/constants/texts";

export const Legend = () => {
	return (
		<Box sx={{ width: 350 }}>
			<Stack direction="row" gap={10}>
				<Box>
					<Typography variant="h6">Поверхности:</Typography>
					<Box sx={{ backgroundColor: TrackColors[Surface.ASPHALT], px: 2 }}>
						<Typography variant="subtitle2">{SurfaceNames[Surface.ASPHALT]}</Typography>
					</Box>
					<Box sx={{ backgroundColor: TrackColors[Surface.SAND], px: 2 }}>
						<Typography variant="subtitle2">{SurfaceNames[Surface.SAND]}</Typography>
					</Box>
					<Box sx={{ backgroundColor: TrackColors[Surface.GROUND], px: 2 }}>
						<Typography variant="subtitle2">{SurfaceNames[Surface.GROUND]}</Typography>
					</Box>
				</Box>
				<Box>
					<Typography variant="h6">Скорости:</Typography>
					<Box sx={{ backgroundColor: SpeedColors[MaxSpeed.FAST], px: 2 }}>
						<Typography variant="subtitle2" color="#FFF666">
							{SpeedNames[MaxSpeed.FAST]}
						</Typography>
					</Box>
					<Box sx={{ backgroundColor: SpeedColors[MaxSpeed.NORMAL], px: 2 }}>
						<Typography variant="subtitle2" color="#FFF666">
							{SpeedNames[MaxSpeed.NORMAL]}
						</Typography>
					</Box>
					<Box sx={{ backgroundColor: SpeedColors[MaxSpeed.SLOW], px: 2 }}>
						<Typography variant="subtitle2" color="#FFF666">
							{SpeedNames[MaxSpeed.SLOW]}
						</Typography>
					</Box>
				</Box>
			</Stack>
		</Box>
	);
};
