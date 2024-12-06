let pages = (await Bun.file("./DAY05/pages.txt").text()).split("\r\n").map(nums => nums.split(",").map(nums => Number(nums)))
let rules = (await Bun.file("./DAY05/rules.txt").text()).split("\r\n").map(nums => nums.split("|").map(nums => Number(nums)))
  
let wrongpages = [];

let sum = 0;

for (let i of pages) {
    for (let rule of rules) {
        if (i.indexOf(rule[0]) < 0 || i.indexOf(rule[1]) < 0) continue;
        if (i.indexOf(rule[0]) > i.indexOf(rule[1])) {
            wrongpages.push(i);
            break;
        }
    }
}

wrongpages.filter(function(elem, index, self) {
    return index === self.indexOf(elem);
})

function validChecker(){
    for (let i of wrongpages){
        for (let rule of rules) {
            if (i.indexOf(rule[0]) < 0 || i.indexOf(rule[1]) < 0) continue;
            if (i.indexOf(rule[0]) > i.indexOf(rule[1])){
                [i[i.indexOf(rule[0])], i[i.indexOf(rule[1])]] = [i[i.indexOf(rule[1])], i[i.indexOf(rule[0])]]
                return false
            }
        }
    }
    return true
}

while(!validChecker()) continue;
for(let i of wrongpages) sum += i[(i.length)/2 - 0.5]

console.log(sum);