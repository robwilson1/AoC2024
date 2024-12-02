const { input, testInput } = await import("./input.mjs");

export function getLists({ test } = { test: false }) {
	const left = [];
	const right = [];
	const list = test ? testInput : input;

	for (let i = 0; i < list.length; i++) {
		if (i === 0 || i % 2 === 0) {
			left.push(list[i]);
		} else {
			right.push(list[i]);
		}
	}

	return [left, right];
}
