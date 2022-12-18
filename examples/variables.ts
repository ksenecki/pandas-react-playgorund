const apples = 5;
const speed = 'fast';
const hasName = true;

const nothingMuch = null;

const now: Date = new Date();

const colors: string[] = ['red', 'green', 'blue'];
const myNumbers: number[] = [1, 2, 3];

// class Car {}
// const car: Car = new Car();

type tpoint = {
  x: number;
  y: number;
};
const point: tpoint = {
  x: 10,
  y: 20,
};

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

const json = '{"x": 10, "y":20}';
const coordinates: tpoint = JSON.parse(json);
console.log(coordinates);

const numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
