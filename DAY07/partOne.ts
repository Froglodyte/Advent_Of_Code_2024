let eqns = await Bun.file("./DAY07/equations.txt").text();
let lines = eqns.split("\r\n");

let solns = [];
let vals = [];
let sum = 0;

for(let l of lines){
    solns.push(Number(l.substring(0, l.indexOf(":"))))
    vals.push(l.substring(l.indexOf(":") + 2, l.length).split(" ").map(num => Number(num)))
}

for(let i = 0; i < solns.length; i++){
    for(let j of combos(vals[i], solns[i])){
        console.log(j)
        if(j == solns[i]){
            sum += solns[i]
            break;
        } 
    }
}

function combos(nums: number[], maxVal: number): number[] {
    const operators = ["+", "*", "||"];
    const results: number[] = [];
  
    function helper(currentVal: number, index: number, currentExp: string): void {
        if(currentVal > maxVal) return
        if (index == nums.length - 1) {
            results.push(currentVal);
            return;
        }
  
        const nextNum = nums[index + 1];
  
        for (const operator of operators) {
            if (operator == '+') helper(currentVal + nextNum, index + 1, `${currentExp} + ${nextNum}`);
            if (operator == '*') helper(currentVal * nextNum, index + 1, `${currentExp} * ${nextNum}`);
        }
    }
    helper(nums[0], 0, nums[0].toString());
  
    return results;
}

console.log(sum)