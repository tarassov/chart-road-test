// Список возможных типов поверхности
export enum Surface {
	SAND,
	ASPHALT,
	GROUND,
}
export enum MaxSpeed {
	FAST,
	NORMAL,
	SLOW,
}

// Контрольная точка. Позиция в маршруте определяется в массиве маршрута
export interface Point {
	// id
	id: number;
	// название
	name: string;
	// Высота точки
	height: number;
}

// Отрезок. Определяет характеристики участка маршрута между 2 соседними точками
export interface Track {
	// id первой точки
	firstId: number;
	// id второй точки
	secondId: number;
	// расстояние между точками
	distance: number;
	// тип поверхности на отрезке
	surface: Surface;
	// максимально допустимая скорость на отрезке
	maxSpeed: MaxSpeed;
}

// Отрезок. Определяет характеристики участка маршрута между 2 соседними точками
export interface CharBar extends Track {
	value: number;
	step: string;
	isFirstPoint: boolean;
	isLastPoint: boolean;
	stepInTrack: number;
}
export interface TransformedData {
	runningDistance: number;
	data: Array<CharBar>;
}
