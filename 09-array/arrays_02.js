const marvelHeroes = ["Thor", "Ironman", "Hulk"];
const dcHeroes = ["Superman", "Batman", "Flash"];
// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes);
const newArray = marvelHeroes.concat(dcHeroes);
console.log(newArray);
const newHeroes = [...marvelHeroes, ...dcHeroes];
console.log(newHeroes);
