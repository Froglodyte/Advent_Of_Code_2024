const eqns = await Bun.file("./DAY07/equations.txt").text();
const lines = eqns.split("\r\n");

let solns: number[] = [];
let vals: number[][] = [];
let sum = 0;

for (let l of lines) {
    solns.push(Number(l.substring(0, l.indexOf(":"))));
    vals.push(l.substring(l.indexOf(":") + 2).split(" ").map(num => Number(num)));
}

for (let i = 0; i < solns.length; i++) {
    const target = solns[i];
    const numbers = vals[i];
    const combinations = combos(numbers, target);

    if (combinations.has(target)) {
        sum += target;
    }
}

function combos(nums: number[], maxVal: number): Set<number> {
    const operators = ["+", "*", "||"];
    const results: Set<number> = new Set();

    function helper(currentVal: number, index: number, currentExp: string): void {
        if (currentVal > maxVal) return;
        if (index === nums.length - 1) {
            results.add(currentVal);
            return;
        }

        const nextNum = nums[index + 1];
        for (const operator of operators) {
            if (operator === "+") {
                helper(currentVal + nextNum, index + 1, `${currentExp} + ${nextNum}`);
            } else if (operator === "*") {
                helper(currentVal * nextNum, index + 1, `${currentExp} * ${nextNum}`);
            } else if (operator === "||") {
                const concatenatedValue = parseInt(currentVal.toString() + nextNum.toString(), 10);
                if (concatenatedValue <= maxVal) {
                    helper(concatenatedValue, index + 1, `${currentExp} || ${nextNum}`);
                }
            }
        }
    }

    helper(nums[0], 0, nums[0].toString());
    return results;
}

console.log(sum);