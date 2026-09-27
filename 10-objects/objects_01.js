const mySym = Symbol("Key1")
const user = {
    name: "Abeer",
    "full name": "Abeer Dhoke",
    age: 18,
    [mySym]: "myKey1"
}

// console.log(user.name);
// console.log(user["full name"]);
// console.log(user[mySym]);

// user.name = "Kabeer";
// Object.freeze(user);
// user.name = "Hello"
// console.log(user);

user.greeting = function()
{
  console.log("Hello bro");
  
}
console.log(user.greeting);


user.greetingTwo = function()
{
  console.log(`Hello bro, ${this.name}`);
  
}
console.log(user.greeting());
console.log(user.greetingTwo());





