const levels = (await Bun.file("./DAY02/report.txt").text()).split("\r\n").map(row => row.split(" ").map(n => Number(n)))
let count = 0

//THIS CODE DOES NOT GIVE THE RIGHT OUTPUT!!
//I DONT REMEMBER HOW I GOT IT WORKIING WHEN I INITIALLY WROTE IT IN RUST, BUT ILL THUINK OF A FIX LATER!!!
function balls(level: Array<number>, depth: number): boolean {

    let dir = ((level[1] - level[0]) / Math.abs(level[1] - level[0])) || 0;

    for (let i = 1; i < level.length; i++) {
        let diff = level[i] - level[i - 1]

        if (dir == 0 || dir * diff < 1 || dir * diff > 3) {
            if (depth != 0) return false

            let newLvl1 = level.slice(0, i).concat(level.slice(i + 1))
            let newLvl2 = level.slice(0, i - 1).concat(level.slice(i))

            return balls(newLvl1, 1) || balls(newLvl2, 1)
        }
    }

    return true
}

for (let lvl of levels) {
  if (balls(lvl, 0)) count++
}

console.log(count)