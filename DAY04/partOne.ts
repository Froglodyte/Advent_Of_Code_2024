const grid = (await Bun.file("./DAY04/wordsearch.txt").text()).split("\r\n").map(row => row.split(""));
const word = "XMAS";
let count = 0;
const directions = [
    [-1, 0], [1, 0], [0, -1], [0, 1],
    [-1, -1], [-1, 1], [1, -1], [1, 1]
];

function isInBounds(posX: number, posY: number) {
    return posX >= 0 && posX < grid.length && posY >= 0 && posY < grid[0].length;
}

function search(posX: number, posY: number, letterIndex: number, dirX: number, dirY: number) {
    if (letterIndex == word.length) return true;
    if (!isInBounds(posX, posY) || grid[posX][posY] != word[letterIndex]) return false;
    return search(posX + dirX, posY + dirY, letterIndex + 1, dirX, dirY);
}

for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] != word[0]) continue;
        for (let [dX, dY] of directions) {
            if (search(i, j, 0, dX, dY)) count++;
        }
    }
}

console.log(count);