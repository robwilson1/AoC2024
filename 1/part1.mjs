const { getLists } = await import("./util.mjs");

const [left, right] = getLists({ test: false });

left.sort();
right.sort();

let sum = 0;
for (let i = 0; i < left.length; i++) {
	const lNum = left[i];
	const rNum = right[i];

	sum += Math.abs(lNum - rNum);
}

console.log("sum", sum);
