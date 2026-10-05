// function addTwoNumbers(num1, num2)
// {
//     console.log(num1 + num2);    
// }
// const result = addTwoNumbers(3, 7);
// console.log("Result:", result);
// console.log(typeof result);


// function addMoreNumbers(number1, number2)
// {
// //   let result = number1 + number2;
//   console.log("Hello");
//   return number1 + number2;
// //    return result;
//    console.log("World");
// }
// const answer = addMoreNumbers(3, 7);
// console.log("Answer:", answer);
// console.log(typeof answer);

// function loginUserMessage(username = "No one has"){
//   if(username === undefined){
//   console.log("Please enter a username");
//   return;
//   }
//   return `${username} logged in`;
// }

// // loginUserMessage("Abeer")
// // console.log(loginUserMessage("Abeer"));
//    console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...val3){
  console.log(val1, val2,);
  console.log(typeof val1, typeof val2,);
  return val3;
}
console.log(calculateCartPrice(100, 50, 700, 800));

const user = {
  username: "Abeer",
  price: 199
}

function handleObject(anyObject){
  console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
  
}

// handleObject(user)

handleObject({
  username: "Hello",
  price: 877
})

const myNewArray = [100, 200, 300, 400]

function returnSecondValue(getArray) {
  return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([500, 600, 700, 800]));
