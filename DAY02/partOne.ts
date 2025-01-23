const levels = (await Bun.file("./DAY02/report.txt").text()).split("\r\n").map(row => row.split(" ").map(n => Number(n)))
let count = 0

for(let level of levels){
    let dir = ((level[1] - level[0])/(Math.abs(level[1] - level[0]))) || 0;
    let isValid = true

    for(let i = 1; i < level.length; i++){
        let diff = level[i] - level[i-1]
        if(dir == 0 || dir * diff < 1 || dir * diff > 3){
            isValid = false
            break;
        }
    }
    
    if(isValid) count++
}

console.log(count)