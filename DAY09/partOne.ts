const data = (await Bun.file("./DAY09/disk.txt").text()).split("").map(x => Number(x));

let disk: number[] = []
let id = 0, checkSum = 0;

for (let i = 0; i < data.length; i += 2) {
    disk.push(...Array(data[i]).fill(id++));
    disk.push(...Array(data[i + 1] || 0).fill(-1));
}

for (let i = disk.length - 1; i >= 0; i--) {
    let firstIndex = disk.indexOf(-1)
    if (disk[i] == -1 || firstIndex > i) continue;
    disk[firstIndex] = disk[i];
    disk[i] = -1;
}

for (let i = 0; i < disk.length; i++) if (disk[i] != -1) checkSum += i * Number(disk[i]);

console.log(checkSum);