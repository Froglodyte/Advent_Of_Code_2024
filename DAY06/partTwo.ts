const input = await Bun.file("./DAY06/map.txt").text();
const map = input.split('\r\n').map(grid => grid.split(""));

let startPos = { x: 50, y: 45 };
let startDir = '^';
let loopCount = 0;

for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
        if (map[i][j] != '.') continue;

        map[i][j] = '#';
        let pos = { ...startPos }; 
        let dir = startDir;
        
        if (validLoop(map, pos, dir)) loopCount++;

        map[i][j] = '.';
    }
}

console.log(loopCount);

function validLoop(grid, pos, dir) {
    let visited = new Set(); 

    while (true) {
        let state = `${pos.x},${pos.y},${dir}`;

        if (visited.has(state)) {
            return true; 
        }
        visited.add(state);

        switch (dir) {
            case '^': {
                let newY = pos.y - 1;
                while (newY >= 0 && grid[newY][pos.x] != '#') newY--;
                if (newY < 0) return false;
                pos.y = newY + 1;
                dir = '>'; 
                break;
            }
            case '>': {
                let newX = pos.x + 1;
                while (newX < grid[0].length && grid[pos.y][newX] != '#') newX++;
                if (newX >= grid[0].length) return false;
                pos.x = newX - 1;
                dir = 'v';
                break;
            }
            case 'v': {
                let newY = pos.y + 1;
                while (newY < grid.length && grid[newY][pos.x] != '#') newY++;
                if (newY >= grid.length) return false;
                pos.y = newY - 1;
                dir = '<';
                break;
            }
            case '<': {
                let newX = pos.x - 1;
                while (newX >= 0 && grid[pos.y][newX] != '#') newX--;
                if (newX < 0) return false;
                pos.x = newX + 1; 
                dir = '^'; 
                break;
            }
        }
        if (pos.x == 4 && pos.y == 6 && dir == '^') return true; 
    }
}