const randomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let currentProposal: number;
let isFound = false;
let numberOfAttemps = 0;
let min = 0;
let max = 100;

const numberToGuess = randomInt(min, max);
console.log('number to guess is :', numberToGuess);

while (isFound === false) {
  numberOfAttemps++;
  currentProposal = randomInt(min, max);

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
