const { getLists } = await import("./util.mjs");

const [left, right] = getLists({ test: false });

const rightFreqMap = new Map();

for (const num of right) {
	rightFreqMap.set(num, (rightFreqMap.get(num) || 0) + 1);
}

let sum = 0;
for (const num of left) {
	sum += num * (rightFreqMap.get(num) || 0);
}

console.log(sum);
