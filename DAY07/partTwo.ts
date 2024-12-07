let eqns = await Bun.file("./DAY07/equations.txt").text();
let lines = eqns.split("\r\n");

let solns = [];
let vals = [];
let sum = 0;

for (let l of lines) {
    solns.push(Number(l.substring(0, l.indexOf(":"))))
    vals.push(l.substring(l.indexOf(":") + 2, l.length).split(" ").map(num => Number(num)))
}

for (let i = 0; i < solns.length; i++) {
    for(let j of combos(vals[i])){
        if(j == solns[i]){
            sum += solns[i]
            break;
        } 
    }
}

function combos(numbers: number[]): number[] {
    const operators = ["+", "*", "||"];
    const results: number[] = [];
  
    function helper(currentValue: number, index: number, currentExpression: string): void {
        if (index == numbers.length - 1) {
            results.push(currentValue);
            return;
        }
  
        const nextNumber = numbers[index + 1];
  
        for (const operator of operators) {
            if (operator == '+') helper(currentValue + nextNumber, index + 1, `${currentExpression} + ${nextNumber}`);
            else if (operator == '*') helper(currentValue * nextNumber, index + 1, `${currentExpression} * ${nextNumber}`);
            else if (operator == '||') {
                const concatenatedValue = parseInt(currentValue.toString() + nextNumber.toString(), 10);
                helper(concatenatedValue, index + 1, `${currentExpression} || ${nextNumber}`);
            }
        }
    }
    helper(numbers[0], 0, numbers[0].toString());
  
    return results;
}

console.log(sum)
