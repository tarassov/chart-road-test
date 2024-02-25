export const getCommonDivisor = (args: Array<number>) => {
	let x = args[0];
	for (let i = 1; i < args.length; i++) {
		let y = args[i];
		while (x && y) {
			if (x > y) {
				x %= y;
			} else {
				y %= x;
			}
		}
		x += y;
	}
	return x;
};
