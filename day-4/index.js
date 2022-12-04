const fs = require('fs');

let data = fs.readFileSync('./input.txt', 'utf8');
data = data.split("\n");

let groups = [];
for(let i in data) {
    groups.push(data[i].split(','));
}

console.log(groups);

let count = 0;
let count2 = 0;
for(let i in groups) {
    let group = groups[i];
    let pair1 = group[0].split("-");
    let pair2 = group[1].split("-");
    let elf1 = [];
    let elf2 = [];
    for(let x = parseInt(pair1[0]); x < parseInt(pair1[1]) + 1; x++) {
        elf1.push(x);
    }
    for(let x = parseInt(pair2[0]); x < parseInt(pair2[1]) + 1; x++) {
        elf2.push(x);
    }
    if(elf1.every((x) => elf2.includes(x)) || elf2.every((x) => elf1.includes(x))) count++;
    if(elf1.some((x) => elf2.includes(x))) count2++;
}

console.log(`Count of all elves that do the exact same work as the other: ${count}`);

console.log(`Count of all elves that overlap at all: ${count2}`);

