"use strict";

console.log(4 + ' - object');

let incr  = 10,
decr = 10;

// ++incr;
// --decr;

console.log(incr++);
console.log(decr--);


console.log(5%2);

console.log(2*4 === 8);

const isCheck = true,
    isClose = false;

    console.log(isCheck || !isClose);

    for (let i = 2; i <= 16; i++) {
        if (i % 2 === 0) {
            continue;
        } else {
            console.log(i);
        }
    }

    const arrayOfNumbers = [];


for (let i=0;i<6;i++){
    arrayOfNumbers[i] = i+5;
}

    // Не трогаем
     for(let i=0;i<arrayOfNumbers.length;i++){
        console.log(arrayOfNumbers[i]);
     }