const grid = (await Bun.file("./DAY04/wordsearch.txt").text()).split("\r\n").map(row => row.split(""));
let count = 0;

for (let i = 1; i < grid.length-1; i++) {
    for (let j = 1; j < grid[0].length-1; j++) {
        if (grid[i][j] != 'A') continue;
        let [nw, ne, se, sw] = [grid[i-1][j-1], grid[i-1][j+1], grid[i+1][j+1], grid[i+1][j-1]]
        if (((nw == 'M' && se == 'S') || (nw == 'S' && se == 'M'))
        && ((ne == 'M' && sw == 'S') || (ne == 'S' && sw == 'M'))) {
            count++
        }
    }
}

console.log(count)