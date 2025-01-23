let col1: Array<number> = []
let col2: Array<number> = []
const input = (await Bun.file("./DAY01/input.txt").text()).split("\r\n").forEach(row => {
    let [l, r] = row.split("   ")
    col1.push(Number(l))
    col2.push(Number(r))
})

let simScore = 0

const cache1: Map<number, number> = new Map();
const cache2: Map<number, number> = new Map();

for(let i = 0; i < col1.length; i++){
    let n1 = col1[i]
    let n2 = col2[i]
    cache1.set(n1, (cache1.get(n1) || 0) + 1)
    cache2.set(n2, (cache2.get(n2) || 0) + 1)
}
for(let id of cache1){
    simScore += id[0] * id[1] * (cache2.get(id[0]) || 0) 
}

console.log(simScore)