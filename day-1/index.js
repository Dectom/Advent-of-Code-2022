const fs = require('fs');

const data = fs.readFileSync('./input.txt', 'utf8');
let results = data.split("\n");

let elves = []
let current = 0;
for(let i in results) {
    // Elf is finished
    if(results[i] === '') {
        elves.push(current);
        current=0;
        continue;
    }
    current+=parseInt(results[i]);
}

let biggest = {
    index: 0,
    value: 0,
}
for(let i in elves) {
    if(biggest.value < elves[i]) {
        biggest.index = i;
        biggest.value = elves[i]
    }
}

// Who's the largest and what number are they??
console.log(biggest);

let elvesSorted = elves.sort((a, b) => {
    return a-b;
}).reverse();

// Biggest 3 summed
let count = 3;
let totalCalories = 0;
for(let i = 0; i < count; i++) {
    totalCalories+=elvesSorted[i];
}

console.log('3 Largest Elves have a total of: ' + totalCalories);