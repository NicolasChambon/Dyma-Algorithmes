import { randomInt } from '../functions/randomInt.func.js';

let min = 1;
let max = 100;
let numberOfAttemps = 0;

const table = new Array(max - min + 1).fill(0).map((item, index) => index + 1);
const numberToGuess = randomInt(min, max);

console.log('number to guess : ', numberToGuess);

const binarySearch = (table: Array<number>, numberToGuess: number) => {
  let isFound = false;
  let currentProposal: number;

  while (isFound === false) {
    numberOfAttemps++;
    currentProposal = Math.floor((min + max) / 2);

    if (currentProposal === numberToGuess) {
      isFound = true;
      console.log(`trial #${numberOfAttemps}`);
      console.log(
        `current proposal '${currentProposal}' is equal to number to guess '${numberToGuess}'`,
      );
      console.log(`number found after ${numberOfAttemps} trial(s)`);
    } else {
      console.log(`trial #${numberOfAttemps}`);
      if (currentProposal > numberToGuess) {
        max = currentProposal - 1;
        console.log(
          `current proposal '${currentProposal}' is greater than number to guess '${numberToGuess}'`,
        );
      } else {
        min = currentProposal + 1;
        console.log(
          `current proposal '${currentProposal}' is less than number to guess '${numberToGuess}'`,
        );
      }
    }
  }
};

binarySearch(table, numberToGuess);
