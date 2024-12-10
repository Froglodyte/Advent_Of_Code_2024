const topo = (await Bun.file("./DAY10/map.txt").text()).split("\r\n").map((x) => x.split("").map((y) => Number(y)));
//console.log(topo)

let scoreSum = 0;

for (let i = 0; i < topo.length; i++) {
    for (let j = 0; j < topo[0].length; j++) {
        if (topo[i][j] != 0) continue;
        traverse(0, i, j, new Set());
    }
}

function traverse(n: number, x: number, y: number, visited: Set<string>) {
    if (topo[x][y] == 9 && !visited.has(`${x}${y}`)) {
        visited.add(`${x}${y}`)
        scoreSum++;
        return;
    }

    if (x + 1 < topo.length && topo[x + 1][y] == n + 1) traverse(n + 1, x + 1, y, visited);
    if (x - 1 >= 0 && topo[x - 1][y] == n + 1) traverse(n + 1, x - 1, y, visited);
    if (y + 1 < topo[0].length && topo[x][y + 1] == n + 1) traverse(n + 1, x, y + 1, visited);
    if (y - 1 >= 0 && topo[x][y - 1] == n + 1) traverse(n + 1, x, y - 1, visited);
    return;
}

console.log(scoreSum)