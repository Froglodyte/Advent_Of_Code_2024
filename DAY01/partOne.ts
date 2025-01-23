let col1: Array<number> = []
let col2: Array<number> = []
const input = (await Bun.file("./DAY01/input.txt").text()).split("\r\n").forEach(row => {
    let [l, r] = row.split("   ")
    col1.push(Number(l))
    col2.push(Number(r))
})

let sum = 0;

col1.sort()
col2.sort()

col1.forEach((item, index) => {
    sum += Math.abs(item - col2[index])
})

console.log(sum)