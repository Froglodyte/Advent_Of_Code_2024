let input = (await Bun.file("pages.txt").text()).split("\n").map(nums => nums.split(",").map(nums => Number(nums)))

let rules = (await Bun.file("rules.txt").text()).split("\n").map(nums => nums.split("|").map(nums => Number(nums)))

let sum = 0
let isValid = false

for(let i of input){
    for (let rule of rules){
        if(i.indexOf(rule[0]) < 0 || i.indexOf(rule[1]) < 0) continue
        if(i.indexOf(rule[0]) < i.indexOf(rule[1])) isValid = true
        else {
            isValid = false
            break;
        }
    }
    if(isValid) sum += i[(i.length)/2 - 0.5]
    isValid = false
}
console.log(sum)
