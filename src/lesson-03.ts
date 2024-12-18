const randomInt = (min: number, max: number) => {
  console.log(Math.floor(Math.random() * (max - min + 1)) + min);
};

for (let i = 1; i <= 10; i++) {
  randomInt(2, 7);
}
