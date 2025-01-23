const mem = await Bun.file("./DAY03/mem.txt").text();
let matches = ((mem.match(/mul\((\d{1,3}),(\d{1,3})\)/g) || []).map(fn => fn.replace("mul", "").replace(",", "*"))).join().replaceAll(",", "+")
console.log(eval(matches))