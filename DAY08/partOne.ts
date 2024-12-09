const grid = (await Bun.file("./DAY08/map.txt").text()).split("\r\n").map(row => row.split(""));
let antennae: Map<string, [number, number][]> = new Map();
let antiPoints: Set<string> = new Set();

for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid[0].length; j++){
        if(grid[i][j] == '.') continue;
        antennae.set(grid[i][j], [...(antennae.get(grid[i][j]) || []), [j, i]]);
    }
}

for(let posns of antennae.values()){
    for(let i = 0; i < posns.length; i++){
        for(let j = i+1; j < posns.length; j++){
            const [x1, y1] = posns[i];
            const [x2, y2] = posns[j];

            for(let k = 0; k < grid.length; k++){
                for(let l = 0; l < grid.length; l++){
                    const d1 = Math.abs(l - x1) + Math.abs(k - y1);
                    const d2 = Math.abs(l - x2) + Math.abs(k - y2);
                    if((d1 == d2*2 || d2 == d1*2) && ((k - y1) * (x2 - x1) - (l - x1) * (y2 - y1) == 0)) antiPoints.add(`${l}, ${k}`);   
                }
            }
        }
    }
}

console.log(Array.from(antiPoints).length)