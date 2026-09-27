const marvelHeroes = ["Thor", "Ironman", "Hulk"];
const dcHeroes = ["Superman", "Batman", "Flash"];
// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes);
const newArray = marvelHeroes.concat(dcHeroes);
console.log(newArray);


const newHeroes = [...marvelHeroes, ...dcHeroes];
console.log(newHeroes);


const anotherArray = [ 1, 2, 3, [4, 5, 6], 7, [8, [9]] ];
const moreArray = anotherArray.flat(Infinity);
console.log(moreArray);


console.log(Array.isArray("Abeer"));
console.log(Array.from("Abeer"));
console.log(Array.from({name: "Abeer"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));


