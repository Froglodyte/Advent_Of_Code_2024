const input = await Bun.file("./DAY06/map.txt").text();
const map = input.split('\r\n').map(grid => grid.split(""));

let pos = { x: 50, y: 45 };
let dir = '^';
let visited = new Set();

function pointSum() {
    while (true) {
        visited.add(`${pos.x},${pos.y}`);
        map[pos.y][pos.x] = '.';

        switch (dir) {
            case '^': {
                let newY = pos.y - 1;

                while (newY >= 0 && map[newY][pos.x] != '#') {
                    visited.add(`${pos.x},${newY}`);
                    newY--;
                }

                if (newY < 0) return visited.size;
                pos.y = newY + 1;
                dir = '>';
                break;
            }
            case '>': {
                let newX = pos.x + 1;

                while (newX < map[0].length && map[pos.y][newX] != '#') {
                    visited.add(`${newX},${pos.y}`);
                    newX++;
                }

                if (newX >= map[0].length) return visited.size;
                pos.x = newX - 1;
                dir = 'v';
                break;
            }
            case 'v': {
                let newY = pos.y + 1;

                while (newY < map.length && map[newY][pos.x] != '#') {
                    visited.add(`${pos.x},${newY}`);
                    newY++;
                }

                if (newY >= map.length) return visited.size;
                pos.y = newY - 1;
                dir = '<';
                break;
            }
            case '<': {
                let newX = pos.x - 1;

                while (newX >= 0 && map[pos.y][newX] != '#') {
                    visited.add(`${newX},${pos.y}`);
                    newX--;
                }

                if (newX < 0) return visited.size;
                pos.x = newX + 1;
                dir = '^';
                break;
            }
        }
        
        if (pos.x < 0 || pos.x >= map[0].length || pos.y < 0 || pos.y >= map.length) return visited.size;
    }
}

console.log(pointSum());