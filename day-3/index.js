const fs = require('fs');

let data = fs.readFileSync('./input.txt', 'utf8');
data = data.split("\n");

let backpacks = []
for(let i in data) {
    let items = data[i].split("");
    let half = Math.floor(items.length / 2);
    backpacks.push({
        firstHalf: items.slice(0, half),
        secondHalf: items.slice(half, items.length)
    });
}

// Generate the array of the alphabet letters and their index is the value of the letter (thanks stackoverflow)
let alpha = Array.from(Array(26)).map((e, i) => i + 65);
let alphabet = alpha.map((x) => String.fromCharCode(x).toLowerCase());
let alpha2 = Array.from(Array(26)).map((e, i) => i + 65);
let alphabet2 = alpha2.map((x) => String.fromCharCode(x));

for(let i in alphabet2) {
    alphabet.push(alphabet2[i]);
}

// Get the items in both backpack halves
let both = [];
for(let i in backpacks) {
    let first = backpacks[i].firstHalf;
    let second = backpacks[i].secondHalf;
    both.push(first.filter((x) => second.includes(x)));
}

// Using the alphabet, We get the value of the items in both halves
let value = 0;
for(let i in both) {
    value += alphabet.indexOf(both[i][0]) + 1;
}

console.log(`The value of items appearing in both compartments: ${value}`);

// Group every 3 backpacks together (3 elves in one group)
let groups = [];
for(let i in backpacks) {
    if(i % 3 === 0) groups.push([backpacks[i], backpacks[parseInt(i) + 1], backpacks[parseInt(i) + 2]]);
}
// remove any empty arrays from the groups array
groups = groups.filter((x) => x.length > 0);

value = 0;
for(let i in groups) {
    let mergedGroupBackpacks = []
    if(groups[i].length === 3) {
        for(let x in groups[i]) {
            mergedGroupBackpacks.push(`${groups[i][x].firstHalf.join("")}${groups[i][x].secondHalf.join("")}`);
        }
        let items = mergedGroupBackpacks[0].split("").filter((x) => mergedGroupBackpacks[1].split("").includes(x) && mergedGroupBackpacks[2].split("").includes(x));
        value += alphabet.indexOf(items[0]) + 1;
    }
}

console.log(`The value of items appearing in all 3 backpacks: ${value}`);