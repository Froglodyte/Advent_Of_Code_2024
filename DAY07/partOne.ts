const eqns = await Bun.file("./DAY07/equations.txt").text();
const lines = eqns.split("\r\n");

let solns: number[] = [];
let vals: number[][] = [];
let sum = 0;

for (let l of lines) {
    const [target, numbers] = l.split(": ");
    solns.push(Number(target));
    vals.push(numbers.split(" ").map(num => Number(num)));
}

for (let i = 0; i < solns.length; i++) {
    const target = solns[i];
    const numbers = vals[i];
    const combinations = combos(numbers, target);

    if (combinations.includes(target)) {
        sum += target;
    }
}

function combos(nums: number[], maxVal: number): number[] {
    const operators = ["+", "*"];
    const results: Set<number> = new Set();

    function helper(currentVal: number, index: number): void {
        if (currentVal > maxVal) return;
        if (index == nums.length - 1) {
            results.add(currentVal);
            return;
        }

        const nextNum = nums[index + 1];
        for (const operator of operators) {
            if (operator == "+") helper(currentVal + nextNum, index + 1);
            if (operator == "*") helper(currentVal * nextNum, index + 1);
        }
    }

    helper(nums[0], 0);
    return Array.from(results);
}

console.log(sum);