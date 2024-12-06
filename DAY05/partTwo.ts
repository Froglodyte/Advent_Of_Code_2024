let pages = (await Bun.file("./DAY05/pages.txt").text()).split("\n").map(nums => nums.split(",").map(nums => Number(nums)))

let rules = (await Bun.file("./DAY05/rules.txt").text()).split("\n").map(nums => nums.split("|").map(nums => Number(nums)))

/*let pages = `75,47,61,53,29
97,61,53,29,13
75,29,13
75,97,47,61,53
61,13,29
97,13,75,29,47`
  .split("\n")
  .map((nums) => nums.split(",").map((nums) => Number(nums)));

let rules = `47|53
97|13
97|61
97|47
75|29
61|13
75|53
29|13
97|29
53|29
61|53
97|53
61|29
47|13
75|47
97|75
47|61
75|61
47|29
75|13
53|13`
  .split("\n")
  .map((nums) => nums.split("|").map((nums) => Number(nums)));*/
  
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