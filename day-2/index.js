const fs = require('fs');

let data = fs.readFileSync('./input.txt', 'utf8');
data = data.split("\n");

let rounds = []
for(let i in data) {
    let item = data[i].split(" ");
    rounds.push({
        opponent: item[0],
        response: item[1],
    });
}

/**
 * A|X = Rock
 * B|Y = Paper
 * C|Z = Scissors
 */
let totalScore = 0;
let actualRounds = []
for(let i in rounds) {
    score=0;
    if(rounds[i].response === 'X') score+=1;
    if(rounds[i].response === 'Y') score+=2;
    if(rounds[i].response === 'Z') score+=3;

    // Draw Rock vs Rock
    if(rounds[i].opponent === 'A' && rounds[i].response === 'X') score+=3;
    // Win Rock vs Paper
    if(rounds[i].opponent === 'A' && rounds[i].response === 'Y') score+=6;
    // Loss Rock vs Scissors
    if(rounds[i].opponent === 'A' && rounds[i].response === 'Z') score+=0;

    // Loss Paper vs Rock
    if(rounds[i].opponent === 'B' && rounds[i].response === 'X') score+=0;
    // Draw Paper vs Paper
    if(rounds[i].opponent === 'B' && rounds[i].response === 'Y') score+=3;
    // Win Paper vs Scissors
    if(rounds[i].opponent === 'B' && rounds[i].response === 'Z') score+=6;

    // Win Scissors vs Rock
    if(rounds[i].opponent === 'C' && rounds[i].response === 'X') score+=6;
    // Loss Scissors vs Paper
    if(rounds[i].opponent === 'C' && rounds[i].response === 'Y') score+=0;
    // Draw Scissors vs Scissors
    if(rounds[i].opponent === 'C' && rounds[i].response === 'Z') score+=3;

    // Running Total
    totalScore+=score;
    // Track each round
    actualRounds.push({score, round: rounds[i]});
}

console.log(`Total Score: ${totalScore}`);

/**
 * Part 2
 * A|X = Rock
 * B|Y = Paper
 * C|Z = Scissors
 * 
 * X = Loss
 * Y = Draw
 * Z = Win
 */
 totalScore = 0;
 actualRounds = []
 for(let i in rounds) {
     score=0;
     if(rounds[i].response === 'X') score+=0;
     if(rounds[i].response === 'Y') score+=3;
     if(rounds[i].response === 'Z') score+=6;
 
     // Force a Loss Rock vs Scissors
     if(rounds[i].opponent === 'A' && rounds[i].response === 'X') score+=3;
     // Force a Draw Rock vs Rock
     if(rounds[i].opponent === 'A' && rounds[i].response === 'Y') score+=1;
     // Force a Win Rock vs Paper
     if(rounds[i].opponent === 'A' && rounds[i].response === 'Z') score+=2;
 
     // Force a Loss Paper vs Rock
     if(rounds[i].opponent === 'B' && rounds[i].response === 'X') score+=1;
     // Force a Draw Paper vs Paper
     if(rounds[i].opponent === 'B' && rounds[i].response === 'Y') score+=2;
     // Force a Win Paper vs Scissors
     if(rounds[i].opponent === 'B' && rounds[i].response === 'Z') score+=3;
 
     // Force a Loss Scissors vs Paper
     if(rounds[i].opponent === 'C' && rounds[i].response === 'X') score+=2;
     // Force a Draw Scissors vs Scissors
     if(rounds[i].opponent === 'C' && rounds[i].response === 'Y') score+=3;
     // Force a Win Scissors vs Rock
     if(rounds[i].opponent === 'C' && rounds[i].response === 'Z') score+=1;
 
     // Running Total
     totalScore+=score;
     // Track each round
     actualRounds.push({score, round: rounds[i]});
 }
 
 console.log(`Total Score new Strat: ${totalScore}`);