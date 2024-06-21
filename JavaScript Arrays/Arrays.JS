const cars = ["Audi","BMW","Mercedes","VolksWagen"];
console.log(`My fourth choice of a car is a ${cars[3]}`);
cars[3] = "Range Rover";
console.log(`My fourth choice of a car is a ${cars[3]}`);
console.table(cars);
console.log(typeof cars[2]);